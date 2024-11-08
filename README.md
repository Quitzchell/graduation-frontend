# Graduation Project - Frontend Prototype

This project is a frontend component of a full-stack prototype designed to compare various Content Management Systems (CMS) with the **AllesOnline** CMS. The prototype simulates a fictitious blog site about Napoleon, enabling the evaluation of essential CMS functions like content management, object management, and user management.

The project is structured to allow easy integration with different CMS backends via API requests, supporting a controlled testing environment with consistent dummy data. This setup will help assess the feasibility and efficiency of migrating to alternative CMS solutions.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the frontend**:
   ```bash
   make
   ```

## Run Cypress

1. **Run CMS backend project**:
   Initialize one of the CMS backend project and ensure seeder has run.
2. **Run Cypress**
   ```bash
   make cypress
   ```

## License
Licensed under the MIT License.
