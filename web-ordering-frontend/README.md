# Frontend Microservice

## Overview

This is the frontend microservice of the application built using React. It interacts with the backend service to fetch and display products, and provides a search functionality to filter products.

## Technologies Used

- React
- Axios
- PropTypes
- Webpack (for module federation)

## Setup

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd frontend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3001` to view the application.

### Testing

1. Run unit tests:

    ```bash
    npm test
    ```

### API Endpoints

- **Product List Endpoint**: You can test the integration with the backend API by ensuring that the frontend fetches products from the backend. This endpoint is hardcoded in the `ProductService.js` file as `http://localhost:8080/api/products`.

### Troubleshooting

- **CORS Errors**: Ensure that the backend is configured to accept requests from your frontend development server.

## Contributing

Please feel free to open issues or submit pull requests to contribute to this project.


