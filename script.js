const signUpBtn = document.querySelector('.btn-sign-up'),
      loginBtn = document.querySelector('.btn-login'),
      title = document.querySelector('.title'),
      list = document.querySelector('#list'),
      ruMonths = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентярбря', 'Октября', 'Ноября', 'Декабря'];

let users = [];

const clearStorage = () => {
  let choice = confirm('Очистить localStorage?');
  if (choice) {
    localStorage.clear();
  }
};

clearStorage();

console.log(users);

for (const value of Object.values(localStorage )) {
  let item = JSON.parse(value);
  users.push(item);
}
render();
console.log(list.children);

function render() {
  if (list.children.length !== 0) list.innerHTML = '';
  users.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `Имя: ${item.name}, фамилия: ${item.surname}, зарегистрирован: ${item.regDate}`;
    li.setAttribute('style', `list-style-type: disc`);
    list.append(li);
    
    let btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.classList.add('format');
    li.append(btnDelete);
  });
}


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
      
      
      const regDate = `${day} ${ruMonths[month]} ${year} г., ${hours}:${minutes}:${(seconds < 10) ? '0' + seconds : seconds}`;
      
      let user = {
        name: name,
        surname: surname,
        login: login,
        password: password,
        regDate: regDate,
      };
      
      users.push(user);
      
      render();
      console.log(users);
      
      users.forEach((item, index) => {
        let itemJSON = JSON.stringify(item);
        localStorage.setItem(index, itemJSON);
      })
    });
    
const btnDelete = document.querySelectorAll('.format');

btnDelete.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(item.parentNode);
    item.parentNode.remove();
    // users.splice(1, index);
    // render();
  })
})

loginBtn.addEventListener('click', () => {
  let inputLogin = prompt('Введите логин:', '');
  let inputPassword = prompt('Введите пароль:', '');

  let user = users.find(item => ( item.login === inputLogin ) || (item.password === inputPassword));

  title.textContent = user.name;
});