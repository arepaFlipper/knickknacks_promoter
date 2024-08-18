import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the vendor to update
vendor_ID = 1

# Define the payload with the changes you want to make
update_data = {
    "name": "Updated vendor Name",
}

# Send the PATCH request to update the vendor
response = requests.patch(f"{BASE_URL}/vendor/{vendor_ID}", json=update_data)

# Check if the request was successful
if response.status_code == 200:
    print("vendor updated successfully!")
    print("Updated vendor Data:", response.json())
else:
    print(f"Failed to update vendor. Status code: {response.status_code}")
    print("Response:", response.json())

