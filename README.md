# AI Script Generator

## Overview
The AI Script Generator is a web application that allows users to generate scripts using AI. The application is built with Django for the backend and vanilla JavaScript for the frontend.

## Key Features
- User input processing and script generation using AI.
- File upload and text extraction.
- REST API for script generation.
- Responsive frontend design.

## Setup and Installation

### Prerequisites
- Python 3.x
- Node.js and npm (for frontend dependencies)
- Virtual environment (optional but recommended)

### Backend Setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/ai_script_generator.git
    cd ai_script_generator/backend
    ```

2. **Create and activate a virtual environment:**
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `backend/ai_script_generator` directory with the following content:
    ```env
    SECRET_KEY=your-secret-key
    X_API_KEY=your_x_ai_api_key_here
    ```

5. **Run database migrations:**
    ```sh
    python manage.py migrate
    ```

6. **Start the Django development server:**
    ```sh
    python manage.py runserver
    ```

### Frontend Setup
1. **Navigate to the frontend directory:**
    ```sh
    cd ../frontend
    ```

2. **Install frontend dependencies:**
    ```sh
    npm install
    ```

3. **Start the frontend development server:**
    ```sh
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:8000` to access the application.
- Enter your prompt in the input area and press Enter to generate a script.
- Optionally, upload a file to include its content in the prompt.

## Limitations
- The AI script generation relies on an external API, which may have rate limits or downtime.
- File text extraction is a placeholder and may need to be implemented using OCR or other text extraction methods.

## Bonus Features
- Quick action buttons for common tasks.
- Notification system for new features and updates.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.