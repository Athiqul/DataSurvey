//Password field password show and hidden manipulation and also icon changing
var passhide=document.querySelector('.passhide');
let pass=document.getElementById("password");
let eye=document.getElementById("eye");
pass.addEventListener("click",e=>{
    if(pass.value=="password")
    {
        pass.value='';
    }

})
passhide.addEventListener("click",e=>{
    if(pass.type==="password")
    {
        pass.type="text";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
    else{
        pass.type="password";
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        
    }
})
//defult login pass
let user="admin";
let password="12345";
let login=document.getElementById("login");
let username=document.getElementById("username");

login.addEventListener("click",()=>{
    if(username.value === user && pass.value == password)
    {
     login.href="formdata.html";   
    }
    else{
        login.attributes.href="#";
        alert("invalid login attempt");
    }
})
//alert msg show
const alert=(msg)=>{
  let div=document.createElement("div");
  div.className='alert alert-danger mt-4';
  div.appendChild(document.createTextNode(msg));
  let loginpart=document.querySelector('.login-part');
  let form=document.querySelector('form');
  loginpart.insertBefore(div,form);

  //Remove alert msg after 2 sec
  setTimeout(e=>{
      document.querySelector('.alert').remove();
  },1500);
}
