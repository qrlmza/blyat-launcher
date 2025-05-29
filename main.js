const { app, BrowserWindow } = require("electron/main");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1150,
        height: 700,
        title: "BlyatLauncher V1",
        autoHideMenuBar: true,
        resizable: false,
        icon: path.join(__dirname, "src", "assets", "images", "logo.png"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile(path.join(__dirname, "src", "index.html"));
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});