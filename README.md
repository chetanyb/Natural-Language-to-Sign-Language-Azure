# Natural Language to Sign Language Conversion

## Overview

This innovative project aims to bridge communication gaps by converting natural language input into sign language. Utilizing advanced JavaScript libraries, it intelligently identifies key terms in user input and translates them into sign language, making communication more inclusive for the deaf and hard-of-hearing community.

## Features

- **Key Term Identification**: Leverages JavaScript libraries to extract meaningful terms from natural language.
- **Sign Language Conversion**: Translates identified terms into sign language.
- **Interactive Interface**: User-friendly frontend for easy interaction.
- **Robust Backend**: Efficient and scalable backend architecture.

## Prerequisites

To get started, ensure you have the following prerequisites installed and configured:

- **WLASL Dataset**: A comprehensive dataset for word-level American Sign Language.
- **Redis**: An in-memory data structure store, used as a database, cache, and message broker.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Installation and Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/chetanyb/Natural-Language-to-Sign-Language-Azure.git
cd Natural-Language-to-Sign-Language-Azure
```

### 2. Frontend Setup

Navigate to the frontend directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

### 3. Backend Setup

Return to the project root, then set up the backend:

```bash
cd ../backend
npm install
```

## Running the Application

To run the application, you'll need to start both the frontend and backend services:

- **Frontend**:
  Open a terminal window in the frontend directory and execute:
  ```bash
  npm run dev
  ```
  This will start the frontend service, typically accessible via `http://localhost:3000`.

- **Backend**:
  In a separate terminal window in the backend directory, run:
  ```bash
  npm run backend
  ```
  This initiates the backend service.

## Contributing

Contributions to enhance and expand this project are highly welcome. Whether it's feature improvements, bug fixes, or documentation, your input is valuable. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.