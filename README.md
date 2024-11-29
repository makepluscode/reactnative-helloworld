# React Native Desktop Hello World Widget

A draggable Hello World desktop widget with a transparent background.

## Features

- Frameless transparent window
- Draggable to move
- Always on top
- Dimensions: 200x80 pixels
- Rounded corners with a dark background

## Getting Started

### Requirements

1. Windows OS
2. Node.js LTS version
3. npm (comes with Node.js)

### Installing Node.js

1. Run Windows PowerShell as Administrator.
2. Install Node.js LTS:
```powershell
winget install OpenJS.NodeJS.LTS
```
3. Open a new PowerShell window and verify the installation:
```powershell
node --version
npm --version
```

### Running the Project

1. Clone the project:
```bash
git clone https://github.com/makepluscode/reactnative-helloworld.git
cd ReactHello
```

2. Install dependencies:
```bash
npm install
```

3. Start in development mode:
```bash
npm start
```

### Building the Executable

1. Open PowerShell as Administrator.
2. Navigate to the project directory.
3. Build the project:
```powershell
npm run build
```
4. Run the `ReactHello.exe` file from the `dist\win-unpacked` folder.

## Troubleshooting

### Common Issues
- **`npm` command not recognized:** Restart PowerShell/CMD.
- **Build failure:** Retry with administrator privileges.
- **Widget not visible:** Check the process in Task Manager.

### Resolving Package Installation Issues
```bash
# Remove node_modules
rd /s /q node_modules
# Remove package-lock.json
del package-lock.json
# Reinstall dependencies
npm install
```

## Tech Stack
- React 18
- Electron
- Webpack
- Babel

## License
MIT License

## Author
makepluscode@gmail.com

## Support
If you encounter issues, please create a GitHub issue.
