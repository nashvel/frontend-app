<img align="right" alt="Coding" width="400" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZhMjRxNnIxbXpnZDcyMnF5YnhvNHNqdW4xdGZzN3I5eGU5bm5iaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/53CSAPCGzFCrS/giphy.gif" />

# Frontend App

## Project Setup

### 1. Move Your `node_modules` Folder
Make sure your `node_modules` directory is placed inside the `frontend-app` folder. If it's outside, move it inside to match the expected project structure.

### 2. Project Structure
Ensure your project follows this structure:

```
frontend-app/
├── node_modules/   # move your node_modules here, so that it will appear
├── public/        
│   ├── index.html  
│   └── favicon.ico
├── src/            
│   ├── components/ 
│   ├── pages/      
│   ├── styles/     
│   ├── App.tsx    
│   ├── main.tsx  
│   └── ...other files
├── .gitignore     
├── package.json  
├── README.md     
└── tsconfig.json  
```

### 3. Install Dependencies
If you haven't installed dependencies yet, run:
```bash
npm install 
```

### 4. Start the Development Server
Run the following command to start the development server:
```bash
npm run dev
```

