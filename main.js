const { app, BrowserWindow, Menu, Tray } = require("electron");

app.setAppUserModelId('com.electron-teste.app-anotacoes');
app.setLoginItemSettings({
    openAsHidden: true
});

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800 ,
        height: 600
    });

    mainWindow.loadFile(__dirname + '/src/index.html');
    mainWindow.on('exited', function () {
        mainWindow = null;
    });

    mainWindow.setMenu(null);

    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Mostrar", click: function(){
                mainWindow.show();
            }  
        },
        {
            label: "Fechar", click: function(){
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    const tray = new Tray(__dirname + '/img/tray.png');
    tray.setContextMenu(contextMenu);


    mainWindow.on('close',function(e){
        if(!app.isQuiting){
            e.preventDefault();
            mainWindow.hide();
        }
    })

}
app.on('ready', createWindow );