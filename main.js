const { app, BrowserWindow } = require("electron");


function createWindow(){
    const mainWindow;
    mainWindow = new BrowserWindow({
        width: 800 ,
        height: 600
    });

    mainWindow.loadFile(__dirname + '/scr/index.html')

}