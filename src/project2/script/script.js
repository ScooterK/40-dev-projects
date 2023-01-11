class House{
    constructor(color, rooms){
        this.color = color; 
        this.room = rooms; 
    }
    getFurniture(){
        return 'sofa'; 
    }


}



const houseObject = new House('red', 5);

let submitBtn = document.getElementById("submit"); 

submitBtn.onclick = message;

function message(){
    console.log(houseObject.color);
    console.log(houseObject.room);

    console.log(houseObject.getFurniture())
}