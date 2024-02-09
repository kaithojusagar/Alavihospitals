
document.querySelector("#btn").addEventListener('click',function(){
    let username=document.querySelector("#text").value;
    let pass=document.querySelector("#pass").value;
    if(username && pass){

        let localStoragedetails=localStorage.getItem("userdetails")

       if(localStoragedetails){

           localStoragedetails=JSON.parse(localStoragedetails);

           if(username==localStoragedetails.email && pass==localStoragedetails.pass){
            swal({
                 title: "success!",
                 text: "You got logged in!",
                 icon: "success",
                 
                 });

           }else{
            alert("please enter valid password and email")
           }
           
   
       }
   
    }else{
       alert("please fill all the details");
    }
   
   
   
   
   }
   
      
      
   )
   
   
   
   