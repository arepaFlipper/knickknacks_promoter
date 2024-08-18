import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the user to update
user_ID = 1

# Define the payload with the changes you want to make
update_data = {
    "username": "Sampleuser",
    "password": "$trongPassword"
}

# Send the PATCH request to update the user
response = requests.patch(f"{BASE_URL}/user/{user_ID}", json=update_data)

# Check if the request was successful
if response.status_code == 200:
    print("user updated successfully!")
    print("Updated user Data:", response.json())
else:
    print(f"Failed to update user. Status code: {response.status_code}")
    print("Response:", response.json())

