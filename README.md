# 🤟 Natural Language to Sign Language Conversion

## 🌟 Overview

This innovative project 🚀 aims to bridge communication gaps by converting natural language input into sign language. Utilizing advanced JavaScript libraries, it intelligently identifies key terms in user input and translates them into sign language, making communication more inclusive for the deaf and hard-of-hearing community.

## ✨ Features

- **🔍 Key Term Identification**: Leverages JavaScript libraries to extract meaningful terms from natural language.
- **👐 Sign Language Conversion**: Translates identified terms into sign language.
- **💻 Interactive Interface**: User-friendly frontend for easy interaction.
- **🔧 Robust Backend**: Efficient and scalable backend architecture.

## 📋 Prerequisites

To get started, ensure you have the following prerequisites installed and configured:

- **📚 WLASL Dataset**: A comprehensive dataset for word-level American Sign Language. [View on Kaggle](https://www.kaggle.com/datasets/risangbaskoro/wlasl-processed)
- **🔥 Redis**: An in-memory data structure store, used as a database, cache, and message broker.
- **💾 PostgreSQL**: A powerful, open-source object-relational database system.

## 🛠 Installation and Setup

### 1️⃣ Clone the Repository

Start by cloning the repository to your local machine:

```
git clone https://github.com/chetanyb/Natural-Language-to-Sign-Language-Azure.git
cd Natural-Language-to-Sign-Language-Azure
```

### 2️⃣ Frontend Setup

Navigate to the frontend directory and install the necessary dependencies:

```
cd frontend
npm install
```

### 3️⃣ Backend Setup

Return to the project root, then set up the backend:

```
cd ../backend
npm install
```

### 4️⃣ Generate and Configure Database

- **Download and Extract WLASL Dataset**: First, download the WLASL dataset from the provided [Kaggle link](https://www.kaggle.com/datasets/risangbaskoro/wlasl-processed). After downloading, extract the dataset to a known directory.
- **Place the `generateCSV.sh` Script**: Move the `generateCSV.sh` script into the WLASL folder within the extracted directory. Use the following command:
  ```
  mv generateCSV.sh path/to/extracted/WLASL/
  ```
- **Run the Script to Generate CSV**: Inside the WLASL folder, execute the `generateCSV.sh` script to generate the necessary CSV file:
  ```
  cd path/to/extracted/WLASL/
  ./generateCSV.sh
  ```
  This will create a CSV file that will be used for feeding data into the database.
- **Configure PostgreSQL Database**: Import the generated CSV file into your PostgreSQL database.
- **Database Connection Configuration**: Utilize the `.env` file and `sequelize.js` for setting up the connection to your PostgreSQL database table. Ensure that the database connection details match your PostgreSQL configuration.
## 🚀 Running the Application

To run the application, you'll need to start both the frontend and backend services:

- **🌐 Frontend**:
  Open a terminal window in the frontend directory and execute:
  ```
  npm run dev
  ```
  This will start the frontend service, accessible via http://localhost:5173.

- **⚙️ Backend**:
  In a separate terminal window in the backend directory, run:
  ```
  npm run backend
  ```
  This initiates the backend service.

## Contributing

Contributions to enhance and expand this project are highly welcome. Whether it's feature improvements, bug fixes, or documentation, your input is valuable. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.