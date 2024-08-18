import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the user to update
user_ID = 2

# Define the payload with the changes you want to make

# Send the PATCH request to update the user
response = requests.delete(f"{BASE_URL}/user/{user_ID}")

# Check if the request was successful
if response.status_code == 200:
    print("user deleted successfully!")
    print("deleted user Data:", response)
else:
    print(f"Failed to delete user. Status code: {response.status_code}")
    print("Response:", response.json())

