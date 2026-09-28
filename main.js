const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{
  const w=new BrowserWindow({width:1100,height:750,autoHideMenuBar:true});
  w.loadURL('https://telegram-web-art4k1-edition.netlify.app/');
});
app.on('window-all-closed',()=>app.quit());
