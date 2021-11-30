// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// function car (model,producer, year, maxspeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log (`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function () {
//         console.log (`Марка - ${this.model}, Виробник - ${this.producer}, Рік - ${this.year}, Двигун - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//
// }
// let addCar = new car('Mazda', 'Chine', 2017, 240, 2.5)
// console.log(addCar)
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(20);
// addCar.drive();
// addCar.changeYear(2020)
// addCar.info();
// console.log(addCar)

// class Car  {
//     constructor (model,producer, year, maxspeed,engine) {
//         this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log (`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function () {
//         console.log (`Марка - ${this.model}, Виробник - ${this.producer}, Рік - ${this.year}, Двигун - ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//
// }
//
// }

// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// function popelyshka (name, year, footSize) {
//     this.name = name;
//     this.year = year;
//     this.footSize = footSize;
// }
// const array =  [
//     new popelyshka('Tanya', 22, 38),
//     new popelyshka('Masha', 18, 36),
//     new popelyshka('Anya', 26, 39),
//     new popelyshka('Tanya', 20, 38),
//     new popelyshka('Tanya', 21, 39),
//     new popelyshka('Nastya', 23, 37),
//     new popelyshka('Nastya', 24, 38.5),
//     new popelyshka('Anya', 22, 39),
//     new popelyshka('Tanya', 21, 36),
//     new popelyshka('Tanya', 19, 37),
//
// ]
// console.log(array)
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class prince {
//     constructor(name,year, foot) {
//         this.name = name;
//         this.year = year
//         this.foot = foot
//     }
// }
// let Prince =  new prince ('Taras', 28, 39);
//
// let find = popelyshka.find (str=>str.footSize === Prince.foot);
// console.log(find);


