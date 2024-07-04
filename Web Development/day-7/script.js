function change() {

    // sample dom element 

    // var text = 'now i am changed';
    // // var p = document.getElementById('para').innerText = text;
    // let p = document.getElementById('para');
    // console.log(p.innerText);
    // p.innerText = "hellow";

    // array of elements using dom 

    // method -1
    // let id = document.getElementsByClassName('paraclass');
    // for(let x of id){
        //     x.innerHTML = "new para";
        // }
        

    // method -2
    // let id = document.getElementsByClassName('paraclass');
    // for(let i=0;i<id.length;i++){
    //     id[i].innerHTML = "new para";
    // }

    // getelementbytagname

    // let id = document.getElementsByTagName('p');
    // for(let i=0;i<id.length;i++){
    //         id[i].innerHTML = "new para";
    //     }
    // console.log(id);


    // query selector all
    // let id = document.querySelectorAll('.paraclass');
    // for(let i=0;i<id.length;i++){
    //         id[i].innerHTML = "new para";
    //     }

    // query selector all

    // let id = document.querySelectorAll('.paraclass:nth-child(odd)');
    // for(let i=0;i<id.length;i++){
    //         id[i].innerHTML = "odd para";
    // }
    // let id2 = document.querySelectorAll('.paraclass:nth-child(even)');
    // for(let i=0;i<id2.length;i++){
    //         id[i].innerHTML = "even para";
    // }

    // odd and even elements 

    // let id = document.querySelectorAll('.paraclass');
    // for(let i=0;i<id.length;i++){
    //     if(i%2 == 0){
    //         id[i].innerHTML = "odd para";
    //     }
    //     else{
    //         id[i].innerHTML = "even para";
    //     }
    // }

    // create a element name
    // let parent  = document.createElement('p');
    // let text = document.createTextNode("hello i am new one ");
    // parent.appendChild(text);
    // let master = document.getElementsByTagName('body');
    // master[0].appendChild(parent);
    

    // css using dom js
    // let para = document.getElementsByTagName("p");
    // para[0].style.color = "red";
    // para[0].style.backgroundColor="yellow";
    // para[0].style.padding = "10px";

    
    // dark mode 
    // let body = document.getElementsByTagName('body');
    // if(body[0].style.backgroundColor == "white"){
    //     body[0].style.backgroundColor = "black";
    //     body[0].style.color = "white";
    // }
    // else{
    //     body[0].style.backgroundColor = "white";
    //     body[0].style.color = "black";
    // }

    // update id
    // let id = document.getElementById("newpara").id = "newparaid";

    let id = document.getElementById("newpara").style.visibility = "hidden";
    
}

function validate(){
    // sample validation

    // let name = document.forms['form']['username'].value;
    // let email = document.forms['form']['email'].value;
    // let password = document.forms['form']['password'].value;
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // if((name&&email&&password) == ""){
    //     alert("fields shouldnot be empty");
    //     return false;
    // }
    // else{
    //     return true;
    // }

    // password validation
    // let name = document.forms['form']['username'].value;
    // let email = document.forms['form']['email'].value;
    // let password = document.forms['form']['password'].value;
    // let pass = 'abc'
    // if(password === pass){
    //     alert("invalid password");
    //     return false;
    // }
    // else{
    //     return true;
    // }
    
    // local storage
    var name = document.forms['form']['username'].value;
    var email = document.forms['form']['email'].value;
    var password = document.forms['form']['password'].value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);

    console.log(localStorage.getItem('name'));
    return false;
    
}




