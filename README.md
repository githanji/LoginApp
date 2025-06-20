# React Native Login Screen UI

        This project is a simple React Native Login Screen built using Expo. It demonstrates UI design, form validation, and local user authentication using a `.json` file.

---

##  Features

        - App logo and welcome message
        - Email and password input fields
        - Show/Hide password toggle
        - Inline red error messages for validation
        - Local user authentication (JSON based)
        - Responsive layout
        - Navigation setup using `@react-navigation/native`

---

##  Tech Stack

        - React Native (via Expo)
        - React Native Vector Icons
        - Navigation: `@react-navigation/native`
        - Local data: `users.json`

---

##  File Structure

        MyLoginApp/
        │
        ├── App.js
        ├── README.md
        ├── assets/
        │ └── logo.png
        ├── components/
        │ ├── LoginScreen.js
        │ └── WelcomeScreen.js
        ├── data/
        │ └── users.json
        └── package.json



---

##  How to Run

1. **Install dependencies:**

        ```bash
        npm install

2.  npx expo start





Dummy Credentials

[
  { "email": "test@example.com", "password": "123456" },
  { "email": "admin@example.com", "password": "admin123" }
]
