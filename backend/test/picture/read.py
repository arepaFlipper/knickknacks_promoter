import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the picture to update
Picture_ID = 1

# Define the payload with the changes you want to make

# Send the PATCH request to update the picture
response = requests.get(f"{BASE_URL}/picture/{Picture_ID}")

# Check if the request was successful
if response.status_code == 200:
    print("Picture retrieved successfully!")
    print("Picture Data:", response.json())
else:
    print(f"Failed to delete picture. Status code: {response.status_code}")
    print("Response:", response.json())

