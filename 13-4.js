window.onload = () => {
    document.getElementById("register").onclick = () => {
        var required = true;

        if (document.getElementById("name").value == '') {
            document.getElementById("invalid-name").innerHTML = 'Please enter your full name.';
            required = false;
        }
        else document.getElementById("invalid-name").innerHTML = '';

        if (document.getElementById("email").value == '') {
            document.getElementById("invalid-email").innerHTML = 'Please enter your email.';
            required = false;
        }
        else if (!document.getElementById("email").value.includes('@') || !document.getElementById("email").value.includes('.')) {
            document.getElementById("invalid-email").innerHTML = 'Your email is invalid.';
            required = false;
        }
        else document.getElementById("invalid-email").innerHTML = '';

        if (document.getElementById("password").value == '') {
            document.getElementById("invalid-password").innerHTML = 'Please enter your password.';
            required = false;
        }
        else if (document.getElementById("password").value.length < 6) {
            document.getElementById("invalid-password").innerHTML = 'Your password must contain at least 6 characters.';
            required = false;
        }
        else document.getElementById("invalid-password").innerHTML = '';
        
        if (required) alert("Đăng kí thành công!");
        else alert("Bạn chưa nhập đầy đủ thông tin hoặc thông tin không hợp lệ.");
    }
}