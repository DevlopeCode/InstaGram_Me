var UserData = [],DataHolder=[],flaglogin=0;
function ChekLoger(){
    if('falg' in localStorage){
        flaglogin=JSON.parse(localStorage.getItem('falg'));
    }
    if(flaglogin==0){
        FetchUser();
    }else{
        alert('A user Alredy Log IN');
    }
}
function FetchUser() {
    if ('UserData' in localStorage) {
        UserData = JSON.parse(localStorage.getItem('UserData'));
        for (let i = 0; i < UserData.length; i++) {
            if (UserData[i].UserName == document.getElementById('UserName').value) {
                if (UserData[i].Password == document.getElementById('Password').value) {
                    document.getElementById('msg').innerHTML = ' ';
                    document.getElementById('msg').innerHTML = 'Welcome to InstaGram';
                    DataHolder.push(UserData[i]);
                    localStorage.setItem('UserAccountData',JSON.stringify(DataHolder));
                    flaglogin++;
                    localStorage.setItem('falg',JSON.stringify(flaglogin));
                    window.open('/User.html');
                    break;
                } else {
                    document.getElementById('msg').innerHTML = ' ';
                    document.getElementById('msg').innerHTML = ' Password NOt Match With UserName '
                    break;
                }
            } else {
                document.getElementById('msg').innerHTML = ' ';
                document.getElementById('msg').innerHTML = ' User not Found '
            }
        }
    } else {
        alert('first Create Account');
    }

}