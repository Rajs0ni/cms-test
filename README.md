# CMS TEST

## Project Intro
The repo contains three directories.
1. Frontend - This directory is responsible for handling frontend/end-user page requests. This is more or like website. It'll run on port - 8095
2. Panel - This directory is responsible for handling backend/cms CRUD operations. This is more or like admin/cms panel. It'll run on port - 8093
3. Laravel API - This directory is responsible for frontend and backend APIs. It'll run on port - 8091.

All the ports and starting commands are written in the start.sh bash file in case if there is need to edit them

## Project setup
Step 1. Clone the project from Github/Gitlab.

Step 2. Set up MySQL database with the name - "cms_test" and set db username/password in laravel-api .env.local file  (Default username - root | Default password - password)

Step 3. That's it, run the bash script - start.sh by following command:-

For Linux/Ubuntu - 
```
bash start.sh
```

For Mac - 
```
zsh start.sh
```
