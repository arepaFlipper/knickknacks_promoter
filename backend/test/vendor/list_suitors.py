import requests

# API base URL (change this if your server runs on a different host/port)
BASE_URL = "http://localhost:3000"

# The ID of the vendor
VENDOR_ID = 1

# Send the GET request to retrieve the interested users
response = requests.get(f"{BASE_URL}/vendor/{VENDOR_ID}/interested-users")

# Check if the request was successful
if response.status_code == 200:
    interested_users = response.json()
    
    if len(interested_users) > 0:
        print(f"Users interested in products of Vendor {VENDOR_ID}:")
        for user in interested_users:
            print(f"- User ID: {user['id']}, Username: {user['username']}, Email: {user['email']}")
    else:
        print(f"No users found interested in products of Vendor {VENDOR_ID}.")
else:
    print(f"Failed to retrieve interested users. Status code: {response.status_code}")
    print("Response:", response.json())
