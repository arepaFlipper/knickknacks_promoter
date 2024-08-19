import requests

# Assuming the vendor ID is known, replace with actual vendor ID
vendor_id = 1

idx = 4
# Set up the URL and the user data
url = "http://localhost:3000/user"
user_data = {
    "username": f"Sampleuser{idx}",
    "email": f"user{idx}@sample.com",
    "password": "$trongPassword",
}

# Make the POST request to create the user
response = requests.post(url, json=user_data)

# Print the response
if response.status_code == 201:
    print("user created successfully:", response.json())
else:
    print("Failed to create user:", response.status_code, response.text)
