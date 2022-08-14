function display(num) {
    result.value+=num
    console.log(result.value);
    
}
function clearAll(){
    result.value=""
}

function output(){
    result.value=eval(result.value)
}
 function remove(){
    result.value=(result.value).slice(0,-1) 
}