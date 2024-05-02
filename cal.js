let result =document.getElementById("result");
function display(num){
   result.value += num;
}

function cal(){
    try{
      result.value =  eval(result.value);
   }
    catch(err)
 {
       alert("Invalid")
    }
}
function cl(){
   result.value = "";
}
function del(){
   result.value = result.value.slice(0,-1);
}
