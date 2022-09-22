class Car {
    constructor(bodyStyle){
        this.bodyStyle = bodyStyle;
    }
}

class CarBrand extends Car{
    constructor(bodyStyle, brand){
    super(bodyStyle);
    this.brand = brand;
    }  
    discount(){
        if(this.brand === 'Toyota'){
            return `На все автомобили марки ${this.brand} cкидка 10%`
        }
        return `К сожалению скидки на ${this.brand} нет `
    }  
}

class ModelCarBrand extends CarBrand{
    constructor(bodyStyle, brand, model){
        super(bodyStyle, brand);
        this.model = model;
    }
}

class MarkaCarBrand extends ModelCarBrand{
    constructor(bodyStyle, brand, model, marka, color, price, topSpeed){
        super(bodyStyle, brand, model);
        this.marka = marka;
        this.color = color;
        this.price = price;
        this.topSpeed = topSpeed;
    }
    maxSpeed(){
        return `Максимальная скорость ${this.marka} - ${this.topSpeed}км в час`
    }
}

let ToyotaCamry40 = new MarkaCarBrand('Sedan', 'Toyota', 'Camry', 'Camry40', 'black', 8000, 240 )
console.log(ToyotaCamry40)
console.log(ToyotaCamry40.maxSpeed())
console.log(ToyotaCamry40.discount())

let ToyotaLandCruiser = new MarkaCarBrand('Crossover', 'Toyota', 'Land Cruiser', 'Land Cruiser 200', 'white', 20000, 220)
console.log(ToyotaLandCruiser)
console.log(ToyotaLandCruiser.maxSpeed())
console.log(ToyotaCamry40.discount())

let VolkswagenPassat = new MarkaCarBrand('Sedan', 'Volkswagen', 'Volkswagen Passat', 'Volkswagen Passat B7', 'blue', 7000, 230)
console.log(VolkswagenPassat)
console.log(VolkswagenPassat.maxSpeed())
console.log(VolkswagenPassat.discount())






































/* //1 вариант
let car = {
    drive : 'drive',
    brake : 'brake',
    bodyStyle : 'sedan'
}
console.log(car)

let carBrand = {
    transmission : 'automatic',
    fuel : 'patrol',
    __proto__: car
}
console.log(carBrand)

let Lamborghini = {
    doors : 'LamboDoors',
    topSpeed : 325,
    engine : 'V10',
    __proto__: carBrand
}

console.log(Lamborghini)
console.log(Lamborghini.drive)
console.log(Lamborghini.transmission)


//2 вариант
let car2 = {
    drive : 'drive',
    brake : 'brake',
    bodyStyle : 'sedan'
}

let carBrand2 = {
    transmission : 'automatic',
    fuel : 'patrol',
}

let Lamborghini2 = {
    doors : 'LamboDoors',
    topSpeed : 325,
    engine : 'V10',
}

Object.setPrototypeOf(Lamborghini2,carBrand2)
Object.setPrototypeOf(carBrand2,car2)

console.log(Lamborghini2)
console.log(Lamborghini2.bodyStyle)
console.log(Lamborghini2.fuel) */



  
