let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    let delBtn= document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText="done";
    ul.appendChild(item); 
    item.appendChild(delBtn);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
