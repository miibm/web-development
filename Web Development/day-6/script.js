
// data types

// var number = 10;
// console.log(number);
// const constant = 10;
// console.log(constant);
// var word = "hellow";
// console.log(word);
// console.log(typeof(number));
// console.log(typeof(constant));
// console.log(typeof(number));


// let example

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// console.log(i);

// type conversion
// var a = 9;
// console.log(a);
// console.log(typeof(a));
// console.log(a.toString());


// array

// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array);

// let object = {
//     name:'ram',
//     college:'al-ameen',
//     location:'erode'
// };

// console.log(object);
// console.log(typeof(array));
// console.log(typeof(object));
// console.log(array[2]);
// console.log(object.name);

// data types

// var number = 90;
// var string = "hello";
// var bool = true;
// var undefined;
// var array = [1,2,3,4,5];
// var object = {a:1,b:2};

// console.log("value of number = "+number);
// console.log("value of string = "+string);
// console.log("value of bool = "+bool);
// console.log("value of undefined = "+undefined);
// console.log("value of array = "+array);
// console.log("value of object = "+object);

// console.log("\n");

// console.log("type of number = "+typeof(number));
// console.log("type of string = "+typeof(string));
// console.log("type of bool = "+typeof(bool));
// console.log("type of undefined = "+typeof(undefined));
// console.log("type of array = "+typeof(array));
// console.log("type of object = "+typeof(object));


// date functions 

// var date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getHours());
// console.log(date.getTimezoneOffset());
// console.log(date.getDay());
// console.log(date.getMinutes());
// console.log(date.getUTCDate());
// console.log(date.getUTCDate());

// console.log("date.getDate();            = "+date.getDate()+"\n\n");
// console.log("date.getDay();             = "+date.getDay()+"\n\n");
// console.log("date.getFullYear();        = "+date.getFullYear()+"\n\n");
// console.log("date.getHours();           = "+date.getHours()+"\n\n");
// console.log("date.getMilliseconds();    = "+date.getMilliseconds()+"\n\n");
// console.log("date.getMinutes();         = "+date.getMinutes()+"\n\n");
// console.log("date.getMonth();           = "+date.getMonth()+"\n\n");
// console.log("date.getSeconds();         = "+date.getSeconds()+"\n\n");
// console.log("date.getTime();            = "+date.getTime()+"\n\n");
// console.log("date.getTimezoneOffset();  = "+date.getTimezoneOffset()+"\n\n");
// console.log("date.getUTCDate();         = "+date.getUTCDate()+"\n\n");
// console.log("date.getUTCDay();          = "+date.getUTCDay()+"\n\n");
// console.log("date.getUTCFullYear();     = "+date.getUTCFullYear()+"\n\n");
// console.log("date.getUTCHours();        = "+date.getUTCHours()+"\n\n");
// console.log("date.getUTCMilliseconds(); = "+date.getUTCMilliseconds()+"\n\n");
// console.log("date.getUTCMinutes();      = "+date.getUTCMinutes()+"\n\n");
// console.log("date.getUTCMonth();        = "+date.getUTCMonth()+"\n\n");
// console.log("date.getUTCSeconds();      = "+date.getUTCSeconds()+"\n\n");
// console.log("date.getYear();            = "+date.getYear()+"\n\n");
// console.log("date.toDateString();       = "+date.toDateString()+"\n\n");
// console.log("date.toUTCString();        = "+date.toUTCString()+"\n\n");
// console.log("date.toISOString();        = "+date.toISOString()+"\n\n");
// console.log("date.toJSON();             = "+date.toJSON()+"\n\n");
// console.log("date.toLocaleDateString(); = "+date.toLocaleDateString()+"\n\n");
// console.log("date.toLocaleString();     = "+date.toLocaleString()+"\n\n");
// console.log("date.toLocaleTimeString(); = "+date.toLocaleTimeString()+"\n\n");
// console.log("date.toString();           = "+date.toString()+"\n\n");
// console.log("date.toTimeString();       = "+date.toTimeString()+"\n\n");
// console.log("date.toUTCString();        = "+date.toUTCString()+"\n\n");
// console.log("date.valueOf();            = "+date.valueOf()+"\n\n");


// arithemetic operations
// a = 1;
// b = 2
// console.log("a+b = "+(a+b));

// c = 4
// d = '4';
// console.log(" c==d  = "+(c==d));
// console.log(" c===d = "+(c===d));

// // concatenation
// console.log(c+d);

// // type Coercion 
// console.log(Number(d)+c);

// math function

// console.log(Math.PI);
// console.log(Math.log(10));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));

// console.log(Math.floor(6.5));
// console.log(Math.floor(6.9));

// console.log(Math.ceil(6.2));
// console.log(Math.ceil(6.9));

// console.log(Math.sqrt(225));

// console.log(Math.pow(2,3));

// console.log(Math.abs(-2));

// console.log(Math.max(1,2,3,4,5,6,7,8,9));
// console.log(Math.min(1,2,3,4,5,6,7,8,9));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*50));


//  random game
// function rotate(){
//     let dice1 = document.getElementById('dice1').value = Math.ceil(Math.random()*6);
//     let dice2 = document.getElementById('dice2').value = Math.ceil(Math.random()*6);
//     // dice1.value = Math.ceil(Math.random()*7)
//     // dice2.value = Math.ceil(Math.random()*7)

// }

// rock paper scissor game
function r() {
    var ele = document.getElementById('p1').classList;
    // ele.classList.add("hello");
    // console.log(ele);
    ele.add("fa-hand-rock")
    console.log(ele);
}
function rock() {
    var array = ["fa-hand-rock","fa-hand-paper","fa-hand-scissors"];
    var value1 = Math.floor(Math.random()*3);
    var value2 = Math.floor(Math.random()*3);

    var p1 = document.getElementById('p1').classList;
    var p2 = document.getElementById('p2').classList;

    p1.add(array[value1]);
    p2.add(array[value2]);

    // p1.className += ("\""+array[value1]+"\"");
    // p2.className += ("\""+array[value2]+"\"");
    // p1.className += ("fa-hand-rock");
    console.log(array[value1]);
    console.log(array[value2]);
    console.log(p1);
}

// rock()

// String

// var name1 = 'Al';
// var name2 = 'Ameen';
// var name3 = '   Ameen   ';
// console.log(name1+name2);
// console.log(name1.concat(" "+name2));
// console.log(name1.length);
// console.log(name1.indexOf('l'));
// console.log(name1.charAt(1));
// console.log(name2.substring(0,3));
// console.log(name2.slice(0,3));
// console.log(name2.replace('en','een'));
// console.log(name2.includes('en'));
// console.log(name3);
// console.log(name3.trim());


// arrow function

// let details = [
//     {
//         name:'ram',
//         age:20,
//         city:'erode'
//     },
//     {
//         name:'ramu',
//         age:21,
//         city:'chennai'
//     },
//     {
//         name:'rama',
//         age:22,
//         city:'salem'
//     },
// ]

// let numarry = [10,20,30,40,50];

// numarry.forEach(
//     (value)=>{
//         console.log(value);
//     }
// );

// let eligiblitystatus = details.map(
//     (value)=>({
//         mapname:value.name,
//         mapage:value.age,
//         mapcity:value.city,
//         mapstatus : value.age>=18?"eligible":"not eligible"
//     })
// );

// console.log(details);
// console.log(eligiblitystatus);
// console.table(eligiblitystatus);


// splice function
// let namearr = [10,20,30,40,50];
// console.log(namearr);
// let splicearr = namearr.splice(0,3);
// console.log(namearr);
// console.log(splicearr);

// let arr1 = [1,2,3,4,5];
// let arr2 = [11,12,13,14,15];

// // array concat
// let arr3 = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// string sort
// var strarr = ['km','ib','da','ka','sk'];
// console.log(strarr);
// let sort = strarr.sort();
// console.log(sort);

// time function program
function time() {
    let date = new Date();
    value = (date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds());

    let id = document.getElementById('time').innerText = value;
}

setInterval(time,1000)









