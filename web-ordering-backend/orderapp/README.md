# Backend Microservice

## Overview

This is the backend microservice of the application built using Java and Spring Boot. It provides a REST API to fetch product data, which the frontend service consumes.

## Technologies Used

- Java 8
- Spring Boot
- Spring Web
- Jackson (for JSON processing)
- H2 Database (or any other database you configure)

## Setup

### Prerequisites

- Java 8 or later
- Maven (for building and running the application)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd backend
    ```

3. Build the application:

    ```bash
    mvn clean install
    ```

### Running the Application

1. Start the backend server:

    ```bash
    mvn spring-boot:run
    ```

2. The application will be available at `http://localhost:8080`.

### API Endpoints

- **GET /api/products**: Fetches a list of products. Test this endpoint individually by navigating to `http://localhost:8080/api/products` in your browser or using tools like Postman or cURL.

### Testing

1. Run unit tests:

    ```bash
    mvn test
    ```

### Configuration

- **Application Properties**: The application configuration is located in `src/main/resources/application.properties`. Ensure that any required configurations (such as database connections) are set here.

### Troubleshooting

- **CORS Issues**: Ensure that the CORS configuration allows requests from the frontend's domain.

## Contributing

Feel free to report issues or contribute by submitting pull requests.


