const userIvanov = {
  name: 'Ivan',
  surname: 'Ivanov',
  age: 32
}
for(let key in userIvanov){
if(userIvanov.hasOwnProperty(key, userIvanov[key])){
  console.log(key, userIvanov[key]);
}
}
