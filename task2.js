const obj ={
    name: 'Sam',
    age: 12
  }
  function getProp(str, object){
    if(obj.hasOwnProperty('name')){
      console.log(true)
    }else{
      console.log(false)
    }
  }
  getProp('name', obj)