let arr=[]
let isdot = true
function print_input(){
  if(arr.length == 0){
    document.getElementById('input').value='0'
  }
  else{
  document.getElementById('input').value=arr.join('')
  console.log(arr);
  }
}
function number(num){
  arr.push(num)
  print_input()
}
function opration(op){
if(arr[arr.length-1] == '+' || arr[arr.length-1] == '-' || arr[arr.length-1] == '*' || arr[arr.length-1] == '/' || arr[arr.length-1] == '%' ){
  arr[arr.length-1]=op
  print_input()
}
else{
  isdot=true
  arr.push(op)
  print_input()
}

}
function c(){
  isdot=true
  document.getElementById('input').value='0'
  arr=[]
}
function equ(){
  if(arr.length>0){
    x=eval(arr.join(''))
    document.getElementById('input').value =x
   arr=[]
   if(String(x).length>1){
    for(let i = 0; i<String(x).length ;i++){
      arr.push(String(x)[i])
    }
   }
   else{
    arr.push(String(x))
   }
  }

  console.log(x);
}
function del(){
  if(arr.pop()=="."){
    isdot=true
  }
  print_input()
}
function dot(){
  if(isdot){
    arr.push('.')
    isdot = false
    print_input()
  }
}