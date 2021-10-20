var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var data = [], tempData = [];
var phoneno = /^\d{10}$/;
var Obj_User, Temp_array = [], User_data = [];
function Sign_UP() {
    if (document.getElementById('Full_Name').value.length != 0 && document.getElementById('User_name').value.length != 0 && document.getElementById('Email_A').value.length != 0 && document.getElementById('Mobile_no').value.length != 0 && document.getElementById('Password').value.length != 0) {
        if (document.getElementById('Email_A').value.match(mailformat)) {
            if (document.getElementById('Mobile_no').value.match(phoneno)) {
                Obj_User = {
                    Name: document.getElementById('Full_Name').value,
                    UserName: document.getElementById('User_name').value,
                    Email: document.getElementById('Email_A').value,
                    Mobile: document.getElementById('Mobile_no').value,
                    Password: document.getElementById('Password').value,
                    data: []
                }
                if ('UserData' in localStorage) {
                    data = JSON.parse(localStorage.getItem('UserData'));
                    data.forEach(element => {
                        if (element.UserName != document.getElementById('User_name').value) {
                            data.push(Obj_User);
                            localStorage.setItem('UserData', JSON.stringify(data));
                            alert("Sign UP Sucess");
                            window.open('/login.html');
                            location.reload();
                        } else {
                            alert('User_name Alredy Found Use Diffrent Username')
                        }
                    });
                } else {
                    Temp_array.push(Obj_User);
                    localStorage.setItem('UserData', JSON.stringify(Temp_array));
                    alert("Sign UP Sucess");
                            location.reload();
                }
            } else {
                alert('You have entered an invalid Mobile Number')
            }
        }
        else {
            alert("You have entered an invalid email Address");
        }
    } else {
        alert('Do not enter empty field')
    }
}
function LogInCheck(){
    if('UserData' in localStorage){
      window.open('/login.html');
      location.reload();
    }else{
        alert('No users found in Insta Data');
    }
}