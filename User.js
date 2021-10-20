var flaglogin, UserData = [], DataStack = [];
function LogOut() {
    flaglogin = JSON.stringify(localStorage.getItem('flag'));
    flaglogin = 0;
    localStorage.setItem('flag', JSON.stringify(flaglogin));
    window.close();
}
function AddComment() {
    if ('UserAccountData' in localStorage) {
        UserData = JSON.parse(localStorage.getItem('UserAccountData'));
        if ('UserData' in localStorage) {
            DataStack = JSON.parse(localStorage.getItem('UserData'));
            DataStack.forEach((e) => {
                UserData.forEach((x) => {
                    if (x.UserName == e.UserName) {
                        e.data.push(document.getElementById('comment').value);
                        location.reload();
                    }
                })
            })
            localStorage.setItem('UserData', JSON.stringify(DataStack))
        } else {
            alert('Comment Cannot be add');
        }
    }

}
function CommentsShow(){
    if('UserAccountData' in localStorage){
        UserData = JSON.parse(localStorage.getItem('UserAccountData'));
        if ('UserData' in localStorage) {
            DataStack = JSON.parse(localStorage.getItem('UserData'));
            DataStack.forEach((e) => {
                UserData.forEach((x) => {
                    if (x.UserName == e.UserName) {
                        for(let i=0;i<e.data.length;i++){
                            document.getElementById('CommentsShow').innerHTML+= `<p>${e.data[i]}  <button type="submit" onclick="DeleteComment(${i})">Delete</button>
                            <button type="submit" onclick="EditComment(${i})">Edit</button></p>`;
                        }
                    }
                })
            })
            localStorage.setItem('UserData', JSON.stringify(DataStack))
        }
    }
}
function DeleteComment(index){
    
}
CommentsShow();
