# To run this file on Mac or Linux go to the setup directory in the terminal and do: source setup.sh, if it doen't work, try: chmod +x setup.sh, then ./setup.sh

#!/bin/bash

# Move back to the root of the project
cd ..

# Move to API Directory
cd API

# Create a .env file template
echo "DB_USERNAME=
DB_PASSWORD=" > .env

# Run npm install inside of API
npm install

# Move back to the root of the project
cd ..

# Run npm install in the root of the project for the React App
npm install

echo "Setup Completed!"

