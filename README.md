# knickknacks promoter

This repository contains the backend for the knickknacks product Image Promotion App, built with [NestJS](https://nestjs.com/). The backend handles image uploads, assigns AI-generated coordinates, and manages interactions between products, vendors, users, and pictures.

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [TODO](#todo)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14.x or later)
- NestJS CLI (`npm install -g @nestjs/cli`)
- PostgreSQL

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/arepaFlipper/knickknacks_promoter.git
cd knickknakcs_promoter
npm install
```

## Environment Variables

Create a `.env` file in the root of your project and add the following:

```plaintext
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=promo_db
```

## Database Setup

Make sure you have a PostgreSQL database set up and configured in your `.env` file. The application uses TypeORM, which will automatically synchronize your database schema based on the entities defined in the code.

## Running the Application

To start the application in development mode, run:

```bash
npm run start:dev
```

The API will be accessible at `http://localhost:3000`.

## Testing

We follow a Test-Driven Development (TDD) approach. To run the tests:

```bash
npm run test
```

For e2e testing:

```bash
npm run test:e2e
```

## Deployment

To deploy the application, follow these steps:

1. Set up your AWS environment (EC2, Elastic Beanstalk, etc.).
2. Ensure your environment variables are correctly configured in the AWS environment.
3. Deploy the application using your preferred deployment method.

## TODO

The following list outlines the features to be developed, following a TDD approach:

1. **User Authentication**
   - [ ] Write tests for user registration.
   - [ ] Implement user registration.
   - [ ] Write tests for user login.
   - [ ] Implement user login.
   - [ ] Write tests for user authentication middleware.
   - [ ] Implement user authentication middleware.

2. **Vendor Management**
   - [ ] Write tests for vendor creation.
   - [ ] Implement vendor creation.
   - [ ] Write tests for associating vendors with users.
   - [ ] Implement association of vendors with users.
   - [ ] Write tests for updating vendor information.
   - [ ] Implement vendor update functionality.

3. **Product Management**
   - [ ] Write tests for product creation.
   - [ ] Implement product creation.
   - [ ] Write tests for associating products with vendors and pictures.
   - [ ] Implement association of products with vendors and pictures.
   - [ ] Write tests for updating product information.
   - [ ] Implement product update functionality.

4. **Picture Upload and AI Coordinates Assignment**
   - [ ] Write tests for picture upload endpoint.
   - [ ] Implement picture upload endpoint.
   - [ ] Write tests for AI coordinates assignment.
   - [ ] Implement AI coordinates assignment.

5. **Product Search and Filtering**
   - [ ] Write tests for product search by name.
   - [ ] Implement product search by name.
   - [ ] Write tests for product filtering by vendor.
   - [ ] Implement product filtering by vendor.
   - [ ] Write tests for filtering products by AI coordinates.
   - [ ] Implement filtering products by AI coordinates.

6. **User Interface and Interaction**
   - [ ] Write tests for retrieving products and associated pictures.
   - [ ] Implement retrieval of products and associated pictures.
   - [ ] Write tests for hovering over image to display product details.
   - [ ] Implement hovering over image to display product details.

7. **Logging and Monitoring**
   - [ ] Write tests for logging user activities.
   - [ ] Implement logging of user activities.
   - [ ] Write tests for monitoring application performance.
   - [ ] Implement monitoring for application performance.

8. **Security Enhancements**
   - [ ] Write tests for role-based access control (RBAC).
   - [ ] Implement role-based access control.
   - [ ] Write tests for securing image upload with file validation.
   - [ ] Implement file validation for image uploads.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md) and ensure all tests are passing before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
