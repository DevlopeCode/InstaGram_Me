var flaglogin ;
function LogOut(){
    flaglogin = JSON.stringify(localStorage.getItem('falg'));
    flaglogin = 0;
    localStorage.setItem('falg',JSON.stringify(flaglogin));
    window.close();
}
