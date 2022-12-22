// use of callback

const animals = [{name:"dog",age:2},{name:"cat",age:3}]

// method for display animal arraylist
const setAnimalToWeb=()=>{
    setTimeout(()=>{
        let row ="";
        animals.forEach((animal)=>{
            row = row + `<p>Animal is ${animal.name} and, he is ${animal.age} years old </p>`
        })
        document.body.innerHTML = row;
    },3000)

}

//method for add new animal object to arraylist
const addNewAnimal=(animalObj, callback)=>{
   setTimeout(()=>{
       animals.push(animalObj);
       console.log("done")
       callback();
   },1000)
}

// call method
addNewAnimal({name:"Snake",age :15},setAnimalToWeb())