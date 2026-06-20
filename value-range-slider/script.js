let value=document.querySelector('#value');

let range=document.querySelector('#range');

range.oninput=function(){
    value.innerText=range.value;
}