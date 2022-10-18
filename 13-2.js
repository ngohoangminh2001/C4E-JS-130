window.onload = () => {
    document.getElementById('button').onclick = () => { 
        var li = document.createElement('li');
        li.innerHTML = document.getElementById('input').value;
        document.getElementById('ul').appendChild(li);
    }
}