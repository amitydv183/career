from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

# Initialize the Flask application
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests (for React frontend or other clients)

# Load the trained Random Forest model and label encoder
model = pickle.load(open('career_rf.pkl', 'rb'))
label_encoder = pickle.load(open('label_encoder_rf.pkl', 'rb'))

@app.route('/')
def home():
    return "Career Advisor API is up and running!"

# API endpoint for predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the request (JSON format)
        input_data = request.json  # A dictionary of user inputs for skills
        print(f"Input received: {input_data}")

        # Convert input data to a NumPy array
        input_features = np.array(list(input_data.values())).reshape(1, -1)
        print(f"Processed input features: {input_features}")

        # Make a prediction using the model
        predicted_class_index = model.predict(input_features)[0]  # Predicted class (index)
        predicted_probabilities = model.predict_proba(input_features)[0]  # Probabilities for all classes

        # Decode the predicted class index into the role name
        predicted_role = label_encoder.inverse_transform([predicted_class_index])[0]

        # Prepare the response
        response = {
            'status': 'success',
            'predicted_role': predicted_role,
            'probabilities': predicted_probabilities.tolist()  # Convert NumPy array to list
        }
        return jsonify(response)
    except Exception as e:
        # Handle errors gracefully
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    # Run the Flask application
    app.run(debug=True)
