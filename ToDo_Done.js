// es5 -> function, var, for   es6 -> arror func ()=>, let,const, for in, for of
var a=5;
var a="hi";
console.log(a);
let b=10;
console.log(b);
const pi = 3.14; // togtmol too, uurchlugduhgui
// func
function hello(){}
const hi = ()=>{}

const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const ol = document.getElementsByTagName('ol')[0];
// addEventListener -> click, scroll ......

addBtn.addEventListener('click', ()=>{
    // alert();
    if(input.value==""){
        alert("Cannot be empty");
    }else{
        // 1. li tag vvsgene
        var li = document.createElement('li');
        // 2. li dotroo bichsen vgee gargaj irne
        li.innerText = input.value;
        // 3. li tag-aa ol tag dotor oruulna
        ol.append(li);
        // 4. create button /delete, check/
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.className="del";
        li.append(deleteBtn);
        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = '<i class="bi bi-check-all"></i>';
        li.append(checkBtn);
        input.value="";
        saveData();
    }
});

ol.addEventListener('click', (e)=>{
    console.log(e.target);
    let liEl = (e.target).parentElement.parentElement;
    if(e.target.className=="bi bi-trash"){
        // remove(); tag ustgana
        liEl.remove();
    }else if(e.target.className=="bi bi-check-all"){
        //toggle 
        liEl.classList.toggle('checked'); 
        saveData();
    }
});

function saveData(){
    localStorage.setItem('todo', ol.innerHTML);
}
function getData(){
    let getTodo = localStorage.getItem('todo');
    ol.innerHTML=getTodo;
}
getData();
// localStorage -> setItem()- hadgalah, getItem()-avah 
localStorage.setItem('name', "Dulguun");
let get = localStorage.getItem("name ");
console.log(get);
