# Natural Language to Sign Language Conversion

This project is focused on converting natural language input into sign language. It utilizes a JavaScript library to identify key terms in user input.

## Prerequisites

Before starting, ensure you have the following installed and configured:
- WLASL dataset
- Redis
- PostgreSQL

## Installation

Follow these steps to set up the project:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/chetanyb/Natural-Language-to-Sign-Language-Azure.git
   cd Natural-Language-to-Sign-Language-Azure
   ```

2. **Set Up the Frontend**
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. **Set Up the Backend**
   Return to the project root, then navigate to the backend directory and install dependencies:
   ```bash
   cd ../backend
   npm install
   ```

4. **Running the Application**
   Open two terminal windows for the frontend and backend directories. In each, run the following commands:
   
   - In the frontend directory:
     ```bash
     npm run dev
     ```
   - In the backend directory:
     ```bash
     npm run backend
     ```

The application should now be operational, with the frontend and backend running on their respective ports.
