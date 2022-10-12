const signUpBtn = document.querySelector('.btn-sign-up'),
      loginBtn = document.querySelector('.btn-login'),
      title = document.querySelector('.title'),
      list = document.querySelector('#list');

let users = [];

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

  const regDate = `${day} ${ruMonths[month]} ${year} г., ${hours}:${minutes}:${seconds}`;

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
  document.body.append(li);

})