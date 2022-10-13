const signUpBtn = document.querySelector('.btn-sign-up'),
      loginBtn = document.querySelector('.btn-login'),
      title = document.querySelector('.title'),
      list = document.querySelector('#list');

let users = [];

const clearStorage = () => {
  let choice = confirm('Очистить localStorage?');
  if (choice) {
    localStorage.clear();
  }
};

clearStorage();

for (const value of Object.values(localStorage )) {
  let item = JSON.parse(value);
  users.push(item);
}

console.log(users);

users.forEach(item => {
  let li = document.createElement('li');
  li.textContent = `Имя: ${item.name}, фамилия: ${item.surname}, зарегистрирован: ${item.regDate}`;
  li.setAttribute('style', `list-style-type: disc`);
  document.body.append(li);
});

signUpBtn.addEventListener('click', event => {
  let fullName = prompt('Введите свое имя и фамилию:', ''),
      login = prompt('Введите логин:', ''),
      password = prompt('Введите пароль:', ''),
      name = fullName.split(' ')[0],
      surname = fullName.split(' ')[1],
      date = new Date(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();
  
  const ruMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентярбря', 'Октября', 'Ноября', 'Декабря'];

  const regDate = `${day} ${ruMonths[month]} ${year} г., ${hours}:${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;

  let user = {
    name: name,
    surname: surname,
    login: login,
    password: password,
    regDate: regDate,
  };

  users.push(user);

  console.log(users);

  let li = document.createElement('li');
  li.textContent = `Имя: ${users[users.length - 1].name}, фамилия: ${users[users.length - 1].surname}, зарегистрирован: ${users[users.length - 1].regDate}`;
  li.setAttribute('style', `list-style-type: disc`);
  document.body.append(li);

  users.forEach((item, index) => {
    let itemJSON = JSON.stringify(item);
    localStorage.setItem(index, itemJSON);
  })
});


// console.log(localStorage.length);