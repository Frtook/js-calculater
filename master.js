let arr=[]
let isdot = true
function print_input(){
  if(arr.length == 0){
    document.getElementById('input').value='0'
  }
  else{
  document.getElementById('input').value=arr.join('')
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
  document.getElementById('input').value='0'
  let counter = arr.length
  while (counter !=0){
    arr.pop()
    counter-=1
  }
}
function equ(){
  document.getElementById('input').value =eval(arr.join(''))
  for(let i =0 ; i<arr.length;i++){
    arr.pop()
  }
}
function del(){
  arr.pop()
  print_input()
}
function dot(){
  if(isdot){
    arr.push('.')
    isdot = false
    print_input()
  }
}