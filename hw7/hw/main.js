// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// function User (id, userName, userSurname, email, phone) {
//     this.id = id,
//     this.name = userName,
//     this.userSurname = userSurname,
//     this.email = email,
//     this.phone = phone;
// }
// new User()
//
// const array = [
//     new User (1, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (3, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (4, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (5, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (7, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (8, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (2, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (5, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (6, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
//     new User (4, 'Taras', 'Kvas', "kvastarko13@gmail.com", 380683120611),
// ];
// console.log(array)


//
// let filter = array.filter (str => str.id %2 === 0)
// console.log (filter)

// let sort = array.sort ((a,b)=> a.id - b.id)
// console.log(sort);

// class Client  {
//     constructor(id,name,surname,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, 'taras', 'kvas', +380683120611, ["phone"]),
//     new Client(2, 'maryan', 'khymych', +380683120611, ["phone,phone,phone"]),
//     new Client(3, 'roma', 'sytkiv', +380683120611, ["phone,phone,phone,phone"]),
//     new Client(4, 'artur', 'babiy', +380683120611, ["phone,phone"]),
// ]
//
// let sort = clients.sort((a,b)=> a.order.length - b.order.length)
// console.log (sort);

