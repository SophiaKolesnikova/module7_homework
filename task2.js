const userInfo ={
  name: 'Sam',
  age: 12
}
function getProp(str, obj){
  return str in obj;
}

const result = getProp('name', userInfo) 
console.log(result);