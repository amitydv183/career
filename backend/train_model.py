import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Load the dataset
career = pd.read_csv('../dataset/career.csv')

# Replace non-numeric values with numeric equivalents
career.replace({
    'Not Interested': 1,
    'Poor': 2,
    'Beginner': 3,
    'Average': 4,
    'Intermediate': 5,
    'Excellent': 6,
    'Professional': 6
}, inplace=True)

# Encode the roles using LabelEncoder
label_encoder = LabelEncoder()
career['Role'] = label_encoder.fit_transform(career['Role'])

# Check for missing values and handle them
career.fillna(0, inplace=True)

# Split the dataset into features (X) and labels (y)
X = career.iloc[:, :-1].values  # All columns except the last one
y = career.iloc[:, -1].values   # The last column (Role)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create and train the Random Forest Classifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)  # You can adjust n_estimators
rf.fit(X_train, y_train)

# Evaluate the model
accuracy = rf.score(X_test, y_test)
print(f"Random Forest Model Accuracy: {accuracy * 100:.2f}%")

# Save the trained model and label encoder
pickle.dump(rf, open('career_rf.pkl', 'wb'))
pickle.dump(label_encoder, open('label_encoder_rf.pkl', 'wb'))
print("Random Forest model and label encoder saved successfully.")
