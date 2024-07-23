function setName(){
    var name=document.getElementById('name').value;
    if(name==""){
        document.getElementById('error').style="display:block"
    }else{
        document.cookie="username="+name;
        window.location.href = window.location.href.replace("/index.html","")+"/html/questions.html";
    }
}