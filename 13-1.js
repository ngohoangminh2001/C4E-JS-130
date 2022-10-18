document.getElementById('url').onchange = () => document.getElementById('image').setAttribute('src', document.getElementById('url').value);
document.getElementById('width').onchange = () => document.getElementById('image').setAttribute('width', document.getElementById('width').value);
document.getElementById('height').onchange = () => document.getElementById('image').setAttribute('height', document.getElementById('height').value);
document.getElementById('border-radius').onchange = () => document.getElementById('image').style.borderRadius = document.getElementById('border-radius').value;
document.getElementById('alternatives').onchange = () => document.getElementById('image').setAttribute('alt', document.getElementById('alternatives').value);