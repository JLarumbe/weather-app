# Weather WebApp
This project is a simple web application that displays the weather based on the city the user inputs. It utilizes Node.js with Express for the backend and HTML, CSS, JavaScript, and Reactjs for the frontend. The `OpenWeatherMap API` is used via [Rapid API](https://rapidapi.com/worldapi/api/open-weather13/) to fetch weather data.

# Features
- Weather Display: Users can input a city name, and the web application will retrieve and display the current weather information for that city.
- Dynamic Updates: The weather information is dynamically updated whenever the user enters a new city name.
- Responsive Design: The web application is designed to be responsive and accessible across various devices and screen sizes.

# Technologies Used
## Backend
- Node.js: JavaScript runtime environment for server-side development.
- Express: Web framework for building the RESTful API and handling routes.
- Axios: Promise-based HTTP client for making requests to external APIs.
- Nodemon: Development dependency for automatically restarting the server during development.
- Dotenv: Dependency for loading environment variables from a .env file.
## Frontend
- HTML: Markup language for structuring the web pages.
- CSS: Stylesheet language for styling the HTML elements.
- JavaScript: Programming language for implementing interactive features.
- React.js: JavaScript library for building user interfaces.
- BootStrap: Front-end development framework for the creation of responsive websites.

# Getting Started
1. Clone the Repository: Clone this repository to your local machine using `git clone`.

2. Install Dependencies:
```terminal
cd backend
npm install
```

```terminal
cd frontend
npm install
```

3. Set Environment Variables:
Create a .env file in the backend directory and provide your OpenWeatherMap API key. For example:
```makefile
PORT=4000

API_KEY='[KEY]'

API_HOST='[HOST]'
```
4. Start the Development Servers:
```terminal
cd backend
npm run dev
```
```terminal
cd frontend
npm start
```

5. View the WebApp:
Open your web browser and navigate to http://localhost:3000 to view the Weather WebApp.

# Screenshots
Displays weather infornation in Fahrenheit 
<img width="958" alt="farneheit" src="https://github.com/JLarumbe/weather-app/assets/29000793/1bc66130-a9de-4714-85ab-15bb090cee07">

Displays weather infornation in Celsius
<img width="959" alt="celsius" src="https://github.com/JLarumbe/weather-app/assets/29000793/42b77271-b8a3-46c7-9c95-7f2ce74525bb">


