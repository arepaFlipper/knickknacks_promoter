# Guide to Using the API Interaction Scripts
This guide will walk you through the process of using the provided Python scripts to interact with the API, populate the database, and retrieve the list of interested users (suitors) for two vendors.

## Prerequisites
Python 3.x installed
requests library installed (pip install requests)

## Step 1: Create Vendors

1. Open the `./backend/test/vendor/create.py` script.
2. Update the vendor_data dictionary with the desired vendor information.
3. Run the script to create the first vendor.
4. Repeat steps 2-3 to create the second vendor, modifying the vendor_data as needed.

## Step 2: Create Products

1. Open the `./backend/test/product/create.py` script.
2. Update the vendor_id variable with the ID of the first vendor created in Step 1.
3. Update the product_data dictionary with the desired product information.
4. Run the script to create a product for the first vendor.
5. Repeat steps 2-4 to create additional products for the first vendor, modifying the product_data as needed.
6. Update the vendor_id variable with the ID of the second vendor created in Step 1.
7. Repeat steps 3-5 to create products for the second vendor.

## Step 3: Create Users

1. Open the `./backend/test/user/create.py` script.
2. Update the user_data dictionary with the desired user information.
3. Run the script to create a user.
4. Repeat steps 2-3 to create additional users, modifying the user_data as needed.

## Step 4: Create Pictures

1. Open the `./backend/test/picture/create.py` script.
2. Update the product_id variable with the ID of a product created in Step 2.
3. Update the picture_data dictionary with the desired picture information.
4. Run the script to create a picture associated with the specified product.
5. Repeat steps 2-4 to create additional pictures for different products, modifying the product_id and picture_data as needed.

## Step 5: Record Purchase Intentions

1. Open the `./backend/test/picture/purchase_intention.py` script.
2. Update the picture_data dictionary with the desired user ID and picture ID.
3. Run the script to record a purchase intention for the specified user and picture.
4. Repeat steps 2-3 to record purchase intentions for different users and pictures, modifying the picture_data as needed.

## Step 6: Retrieve List of Suitors

1. Open the `./backend/test/vendor/list_suitors.py` script.
2. Update the VENDOR_ID variable with the ID of the first vendor.
3. Run the script to retrieve the list of users interested in the products of the first vendor.
4. Update the VENDOR_ID variable with the ID of the second vendor.
5. Run the script to retrieve the list of users interested in the products of the second vendor.

## Additional Scripts
The following scripts are also provided for additional functionality:

- `./backend/test/picture/read.py`: Retrieve a specific picture by ID.
- `./backend/test/picture/update.py`: Update a specific picture by ID.
- `./backend/test/picture/delete.py`: Delete a specific picture by ID.
- `./backend/test/product/read.py`: Retrieve a specific product by ID.
- `./backend/test/product/update.py`: Update a specific product by ID.
- `./backend/test/product/delete.py`: Delete a specific product by ID.
- `./backend/test/user/read.py`: Retrieve a specific user by ID.
- `./backend/test/user/update.py`: Update a specific user by ID.
- `./backend/test/user/delete.py`: Delete a specific user by ID.
- `./backend/test/vendor/read.py`: Retrieve a specific vendor by ID.
- `./backend/test/vendor/update.py`: Update a specific vendor by ID.
- `./backend/test/vendor/delete.py`: Delete a specific
