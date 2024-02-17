const inputBox = document.getElementsByClassName('inputBox')[0];
const itemList = document.getElementsByClassName("itemList")[0];


inputBox.addEventListener('change', runFunc);

let pID = 1;
function runFunc (event) {
    const inputValue = event.target.value;
    const subContainer = document.createElement("div");
    subContainer.classList.add("subC");
    const imgCon = document.createElement('div');
    imgCon.classList.add('imgCon');
    //function to delete the job done list
    imgCon.addEventListener('click',(event)=> {         
        subContainer.remove();                            
    })

    const trashIcon = document.createElement('img');
    trashIcon.src ='pic1.jpg';
    trashIcon.classList.add('icon');
    imgCon.append(trashIcon);
    
        
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('pDiv');
    // function to strite through on and off
    parentDiv.addEventListener('click', () => {
        const exist = parentDiv.classList.contains("purchased");
        if (exist) {
            parentDiv.classList.remove("purchased")
        }else {
            parentDiv.classList.add("purchased");
        }
    });
    const spanList = document.createElement('span');
    spanList.id = pID;
    spanList.classList.add('spanInput');
    const inputProduct = pID.toString() + ". "+ inputValue;
    // const trashIcon = document.getElementsByClassName('icon')
    
    spanList.append(inputProduct);
    parentDiv.append(spanList);
    subContainer.append(parentDiv,imgCon);
    itemList.append(subContainer);
    // parentDiv.append(spanList,subContainer);
    // itemList.append(parentDiv);
    inputBox.value = "";
    pID += 1;
}



// const inputBox = document.getElementsByClassName('inputBox')[0];
// const olBox = document.getElementsByClassName('ol')[0];

// const myFunc = (event) => {
//     const inputValue = event.target.value;
//     const liValue = document.createElement('li');
//     liValue.classList.add('lg');
//     olBox.append(liValue);
//     liValue.append(inputValue);
//     inputBox.value = "";


// }

// inputBox.addEventListener('change', myFunc);

// function myFunc(event){
//     const inputValue = event.target.value;
//     const liValue = document.createElement('li');
//     liValue.classList.add('lg');
//     olBox.append(liValue);
//     liValue.append(inputValue);
//     inputBox.value = "";
// } 



// const inputBox = document.getElementsByTagName("input")[0];
// inputBox.classList.add("inputBox");

// const orderList = document.getElementsByClassName("orderList")[0];




// inputBox.addEventListener('change', myFunc);

// function myFunc(para) {
//     const listItem = document.createElement('li');
//     listItem.classList.add("listGp")
//     orderList.append(listItem);
//     const inputItem = para.target.value;
//     listItem.append(inputItem);
//     inputBox.value = "";
// }


// const inputList = document.getElementsByClassName('inputField')[0];
// const orderList = document.getElementsByClassName('orderList')[0];


// const changeFunc = (para) => {
//     const inputValue = para.target.value;
//     const listItem = document.createElement("li");
//     listItem.classList.add('addGpList');
//     listItem.append(inputValue);
//     orderList.append(listItem);
//     inputList.value = "";
// };

// inputList.addEventListener('change', changeFunc);


// funcN();
// // funName();       ***will show error

// function funcN() {
//     console.log('call and use func b4 or Aft');
// }

// let funName = () => {
//     console.log ("hi hi below");
// }

// funName();


// funcN();






// const cust = [
//     {name:'c1', email: 'cone@email.com', gender: 'female' },
//     {name:'c2', email: 'ctwo@email.com', gender: 'male' },
//     {name:'c3', email: 'cthree@email.com', gender: 'female' },
//     {name:'c4', email: 'cfour@email.com', gender: 'male' },
//     {name:'c5', email: 'cfive@email.com', gender: 'male' }
// ];

// const custcopy = [...cust];
// console.log(custcopy);



// const c1 = {name:'c1', email: 'cone@email.com', gender: 'female' };
// const c2 = {name:'c2', email: 'ctwo@email.com', gender: 'male' };
// const c3 = {name:'c3', email: 'cthree@email.com', gender: 'female' };
// const c4 = {name:'c4', email: 'cfour@email.com', gender: 'male' };
// const c5 = {name:'c5', email: 'cfive@email.com', gender: 'male' };

// // const fs = require("fs");
// // fs.writeFileSync("node.txt","this file is created by node js.");

// // fs.appendFileSync("node.txt", "this is append file.")

// // const extend = require('./extend.js');

// // console.log(extend);

// // console.log(extend.data.sumNumber(9,10));

// // console.log(extend.data.Circumference(10));

// // console.log(extend.data.areaOfRectangle(9,10));

// // let sumNumber = extend.data.sumNumber(9,10);
// // let Circumference =extend.data.Circumference(10);
// // let areaOfRectangle = extend.data.areaOfRectangle(9,10);

// // console.log(extend);
// // console.log(rectangle);

// // const file = require('fs');

// // file.appendFileSync("data.txt", sumNumber);
// // file.appendFileSync("data.txt", Circumference);
// // file.appendFileSync("data.txt", areaOfRectangle);

// // const validator = require("validator")

// // console.log("checking email........");
// // console.log(validator.isEmail("aa@mail.com"));
// // console.log(validator.isEmail("aa@gmail"));
// // console.log(validator.isURL("www.gmail.com"));

// // const chalk=require("chalk")
// // console.log(chalk.blue("hello"));

// // const log = console.log;
// // log(chalk.blue("hi")+"hehe"+chalk.yellow("!!"));

// // console.log("pls enter data...");

// // let data=process.argv;
// // console.log(data);


// // const city = ['ygn', 'mdy','bago'];

// // city.slice(0,2);



// // call back function

// // const filterfunc = (eparameter) => {
// //     return eparameter.gender === "male";
// // };
// // cust.filter(filterfunc);


// // cust.filter((epara) => epara.name === 'c2');

// // cust.filter(epara =>epara.email === 'cone@email.com');

// // const mapfunc = (Element) =>{
// //     return "yangon";
// // }
// //  cust.map(mapfunc);

// // document.getElementById('demo').innerHTML= cust;





// // const points = [40, 100, 1, 5, 25, 10];
// // document.getElementById("demo1").innerHTML = points;  

// // points.sort(function(a, b){return a - b});
// // document.getElementById("demo2").innerHTML = points;



// // Object.values(cust);


// const bdElement = document.getElementsByTagName('body')[0];

// // console.log('bd element here', bdElement);

// const pDiv = document.createElement('div');
// pDiv.classList.add('parent')

// const divOne = document.createElement('div');
// const divOneT = document.createTextNode('divOneText');
// divOne.appendChild(divOneT);
// divOne.classList.add('divOne');

// const divTwo = document.createElement('div');
// const divTwoT = document.createTextNode("divTwoText");
// divTwo.appendChild(divTwoT);
// divTwo.classList.add('divTwo');


// // console.log(divOne)



// bdElement.appendChild(pDiv);
// console.log(bdElement);

// const div3 = document.createElement('div');
// div3.append("div3 Text!");

// pDiv.append(divOne,divTwo,div3);
// console.log(div3);

// const p = document.createElement('p');
// p.append("this is paragraph text!! ");
// pDiv.append(p);

// p.append(' this is new paragraph!');

// const spanT = document.createElement('span');
// spanT.append('this is span text!   ');

// pDiv.append(spanT);

// const styleTestDiv = document.getElementsByClassName('styleTest')[0];

// console.log("styleTestDiv's width" , getComputedStyle(styleTestDiv).width);
// console.log("styleTest's height", getComputedStyle(styleTestDiv).height);
// console.log("styleTest's bgColor", getComputedStyle(styleTestDiv).backgroundColor);

// console.log("get style info", getComputedStyle(styleTestDiv).height);

// const h1Element = document.createElement('h1');
// h1Element.append("H1 Header Text!");
// bdElement.append(h1Element);
// console.log(h1Element);

// const readDivElement = document.getElementsByClassName('parent')[0];
// console.log("reading content text:", readDivElement.textContent);


// const readDivOne = document.getElementsByClassName("divOne")[0];
// console.log('reading divone text:', readDivOne.textContent);


// readDivOne.textContent = "updated to DivOne New Text";
// console.log("read updated text:", readDivOne.textContent);

// const myButton = document.getElementById('myButton');


// const changePicFunc = () => {
//     console.log("picture change");
// }

// myButton.onclick = changePicFunc;

// myButton.addEventListener('click', changePicFunc);






// console.log({c1, c2,c3,c4,c5});
// console.log('%c MY CUSTOMER','color:orange','font-weight: bolder');
// console.table({c1, c2,c3,c4,c5});


// console.time('looper')

// let i=0;
// while(i<1000000) {i++}

// console.timeEnd('looper')


// const sumAsync = async() => {

//     const first = await random();
//     const second = await random();
//     const third = await random();
    
//     console.log('Result ${first+second+third}');

// }

// const orders = [500,30,99,15,223];

// let total = 0;
// const withTax = [];
// const highValue = [];
// for (i =0 ; i < orders.length; i++) {
//     total += orders[i];

//     // withTax.push(orders[i] * 1.1);

// // if (orders[i] > 100) {
// //     highValue.push(orders[i])
// //     }
    
// }
// console.log(total);
// // console.log(withTax);
// // console.log(highValue);


// const total1 = orders.reduce((acc, cur)=> acc + cur);
// console.log(total1);

// // const withTax1 = orders.map (v => v * 1.1);
// // console.log(withTax1);

// // const highValue1 = orders.filter( v => v > 100);
// // console.log(highValue1);


// const picArray = ["pic2.jpg", "pic3.jpg", "pic4.jpg" ];

// const myButton = document.getElementById("myButton");
// const pic = document.getElementsByClassName("pic")[0];
// const htmlPic = pic.src; //*** to see the picture put in html page if not, htmlPic sliding too fast to see*/

// let counter = 0;
// const changePicFunc = () => {
//     if (counter === 3) {
//         pic.src = htmlPic;  //*** to see the picture put in html page if not, htmlPic sliding too fast to see*/
//         counter = 0;
//         return; //*** to see the picture put in html page if not, htmlPic sliding too fast to see*/
//     }
//     pic.src = picArray[counter];
//     counter += 1;
//     console.log("counter num is =" , counter);

//     }


// // myButton.onclick = changePicFunc;

// myButton.addEventListener('click', changePicFunc);




