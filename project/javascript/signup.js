document.querySelector('.btn').addEventListener('click',function(){
 let username=document.querySelector('.user').value;
 let useremail=document.querySelector('.email').value;
 let userpass=document.querySelector('.pass').value;


 if(username && useremail && userpass){
  
    let userdetails={name:username,email:useremail,pass:userpass};

    localStorage.setItem("userdetails",JSON.stringify(userdetails));
    
    window.location.href="loginsuccsess.html";
   

 }else{
  
   alert("please fill all the details");
   
 }

}

)