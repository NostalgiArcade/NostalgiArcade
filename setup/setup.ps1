# To run this in PowerShell, go to the setup directory in the terminal and do this command: powershell -File "setup.ps1"

# Move back to the root of the project
Set-Location ..

# Move to API Directory
Set-Location API

# Create a .env file template
@"
DB_USERNAME=
DB_PASSWORD="
"@ | Set-Content -Path .env

# Run npm install inside of API
npm install

# Move back to the root of the project
Set-Location ..

# Run npm install in the root of the project for the React App
npm install

Write-Host "Setup Completed!"

