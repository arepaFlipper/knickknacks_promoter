import requests

# Base URL of your NestJS app
BASE_URL = 'http://localhost:3000'  # Replace with your actual base URL

# Endpoint to create a new user
create_user_url = f'{BASE_URL}/user'  # Replace with the correct endpoint if different

# User data payload
user_data = {
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "$trongPassword",
    # Add other required fields here
}

# Headers (optional, depending on your API requirements)
headers = {
    'Content-Type': 'application/json',
    # Add Authorization or other headers if required
}

# Make the POST request to create a user
response = requests.post(create_user_url, json=user_data, headers=headers)

# Check the response status and output the result
if response.status_code == 201:
    print('User created successfully')
    print('Response:', response.json())
elif response.status_code == 400:
    print('Bad request - likely validation errors')
    print('Response:', response.json())
else:
    print(f'Failed to create user. Status code: {response.status_code}')
    print('Response:', response.text)

