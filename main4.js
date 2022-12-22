// use of Async and Await

const animals = [{name:"dog",age:2},{name:"cat",age:3}]

// method for display animal arraylist
const setAnimalToWeb=()=>{
    setTimeout(()=>{
        let row ="";
        animals.forEach((animal)=>{
            row = row + `<p>Animal is ${animal.name} and, he is ${animal.age} years old </p>`
        })
        document.body.innerHTML = row;
    },1000)

}

//method for add new animal object to arraylist
const addNewAnimal=(animalObj)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            animals.push(animalObj);
            const error = false;
            if(!error){
                resolve();
            }else {
                reject("Something went wrong");
            }
        },3000)
    })
}

async function initialize(){
    await addNewAnimal({name:"snake",age:15})
    setAnimalToWeb()
}

initialize();
