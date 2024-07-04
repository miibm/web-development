function windowchangesize() {
    
    let width_value = window.innerWidth;
    let height_value = window.innerHeight;
    
    document.getElementById("width").innerHTML = width_value;
    document.getElementById("height").innerHTML = height_value;
}

function screenchangesize() {
    
    let width_value = screen.width;
    let height_value = screen.height;
    let pixel = screen.colorDepth;
    let color = screen.pixelDepth;
    
    document.getElementById("width").innerHTML = width_value;
    document.getElementById("height").innerHTML = height_value;
    document.getElementById("pixel").innerHTML = pixel;
    document.getElementById("color").innerHTML = color;
}

var tab;
function open_window(){
    tab = window.open("https://chatgpt.com/","_blank","width=500px,height=500px");
}

function close_window(){
    tab.close();
}

function conform_box() {
    if(confirm("do you want to go google ")){
        window.open("https://www.google.com/")
    }
    else{
        window.open("https://openai.com/index/chatgpt/")
    }
}

function prompt_box() {
    let name = prompt("Enter your name : ","");
    document.write(name);
}

function time_clock() {
    let span = document.getElementById("time");
    let date = new Date();
    let format = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    let format2 =   (date.getHours()<10?"0"+date.getHours():date.getHours())
                    +" : "+
                    (date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())
                    +" : "+
                    (date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds())
                    +" "+
                    (date.getHours()<=12?"PM":"AM");
    span.innerHTML = format2;
}
