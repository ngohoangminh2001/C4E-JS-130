// const users = [{
//     "id": 1,
//     "first_name": "Lorilee",
//     "last_name": "Adame",
//     "email": "ladame0@guardian.co.uk",
//     "password": "12345678"
// }, {
//     "id": 2,
//     "first_name": "Gannon",
//     "last_name": "Manwell",
//     "email": "gmanwell1@naver.com",
//     "password": "12345678"
// }, {
//     "id": 3,
//     "first_name": "Christiana",
//     "last_name": "Dowtry",
//     "email": "cdowtry2@mapy.cz",
//     "password": "12345678"
// }, {
//     "id": 4,
//     "first_name": "Warden",
//     "last_name": "Ansteys",
//     "email": "wansteys3@yahoo.com",
//     "password": "12345678"
// }];
// function findUser(id) {
//     var found = users.find(user => user.id == id);
//     return found ?? null;
// }
// function filterUsers(gender, age) {
//     var found = users.filter(user => user.gender == gender && user.age > age);
//     return found;
// }
// function searchUsers(keyword) {
//     var found = users.filter(user => user.last_name.toLowerCase().includes(keyword.toLowerCase()) || user.first_name.toLowerCase().includes(keyword.toLowerCase()));
//     return found.length;
// }

const link = document.getElementById('my-link');
console.log(link.innerHTML);
link.innerHTML = "Instagram";
console.log('href = ', link.getAttribute('href'));
link.setAttribute('href', 'https://www.instagram.com/');
link.setAttribute('class', 'the-link');
console.log('class = ', link.getAttribute('class'));
link.removeAttribute('class');
console.log('class = ', link.getAttribute('class'));
link.style.color = 'green';
link.style.textDecoration = 'underline';
link.remove();

const listItems = document.getElementsByClassName('list-item');
for (var item of listItems) {
    console.log(item.innerHTML);
    item.innerHTML = 'Nguyen Ngoc Huyen';
}

console.log(document.getElementsByTagName('li'));

var newLink = document.createElement('a');
newLink.setAttribute('id', 'facebook');
newLink.setAttribute('href', 'https://www.facebook.com/');
newLink.innerHTML = 'Facebook';
document.body.appendChild(newLink);

function notify() { alert('Van Van Ba Cham') };

document.getElementById('nguyen-ngoc-huyen').onclick = () => {
    console.log('Nguyen Ngoc Huyen');
}
document.getElementById('nguyen-ngoc-huyen').onclick = () => {
    console.log('Van Van Ba Cham');
}

document.getElementById('van-van-ba-cham').addEventListener('click', () => { console.log('Nguyen Ngoc Huyen') });
document.getElementById('van-van-ba-cham').addEventListener('click', () => { console.log('Van Van Ba Cham') });