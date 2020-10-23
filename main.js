const { app, BrowserWindow } = require("electron");


function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800 ,
        height: 600
    });

    mainWindow.loadURL(__dirname + "./src/index.html")
    mainWindow.on('exit', function(){
        mainWindow = null;
    })

}
app.on('ready', createWindow );