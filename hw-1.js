// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
}
user.mood = 'happy';
console.log(user);

user.hobby ='javascript';
console.log(user); 

user.premium = false;
console.log(user);

const keys = Object.keys(user);

for ( key of keys) {
  console.log('Value :', user[key]);
}