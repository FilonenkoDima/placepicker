# Documentation for **PlacePicker**

#### Overview

**PlacePicker** is a full-stack application built with Angular for the frontend and Node.js for the backend. It enables users to manage and view places, featuring modular design for frontend components and a backend server for data handling.

---

## Demo

![](demo.gif)

## Project Structure

The repository is divided into two main parts: **frontend** and **backend**.

#### Backend

- **`backend/app.js`**: The main entry point for the server.
- **`backend/data/`**: Contains sample data or JSON files.
- **`backend/images/`**: Stores images related to places.
- **`backend/package.json` & `package-lock.json`**: Manage backend dependencies.
- **`backend/node_modules/`**: Directory for backend npm packages.

#### Frontend

- **src/app/**: Main directory for Angular components and services.
  - **places/**:
    - `available-places/`: Manages available places.
    - `places-container/`: Contains UI components for grouping places.
    - `user-places/`: Manages user-specific places.
    - `places.component.ts`: Main component for displaying and managing places.
    - `places.model.ts`: Defines the data model for places.
    - `places.service.ts`: Handles business logic and data fetching for places.
  - **shared/modal/**:
    - `modal.component.*`: Reusable modal component for error handling and user prompts.
    - `error.service.ts`: Handles application-wide error management.
- **src/styles.css**: Global styles for the application.
- **src/app.component.\***: Root component managing overall layout.

---

## Key Features

1. **Frontend**:

   - Modular design with separate components for places and shared utilities.
   - Error handling with a reusable modal component.
   - Organized service and model files for data handling.

2. **Backend**:
   - Node.js server with npm packages for easy setup.
   - Handles data storage and retrieval for the application.
   - Supports serving images and other assets.

---

## How to Run the Project

#### Backend

1. Navigate to the **`backend/`** directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000/`.

#### Frontend

1. Navigate to the **root project directory** and install dependencies:

   ```bash
   npm install
   ```

2. Start the Angular development server:
   ```bash
   ng serve
   ```
   The frontend will be accessible at `http://localhost:4200/`.

---

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js
- **Styling**: CSS
- **Data Handling**: JSON files (sample data)
- **Version Control**: GitHub

---

### Contribution Guidelines

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Submit a pull request for review.
