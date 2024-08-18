import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the vendor to update
vendor_ID = 3

# Define the payload with the changes you want to make

# Send the PATCH request to update the vendor
response = requests.delete(f"{BASE_URL}/vendor/{vendor_ID}")

# Check if the request was successful
if response.status_code == 200:
    print("vendor deleted successfully!")
    print("deleted vendor Data:", response)
else:
    print(f"Failed to delete vendor. Status code: {response.status_code}")
    print("Response:", response.json())

