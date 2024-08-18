import requests


# Set up the URL and the user data
url = "http://localhost:3000/user"

# Make the POST request to create the user
response = requests.get(url)

# Print the response
if response.status_code == 200:
    print("List of users:\n", response.json())
else:
    print("Failed to create user:", response.status_code, response.text)
