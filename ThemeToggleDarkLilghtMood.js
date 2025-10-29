const theme= localStorage.getItem('theme');
if(theme ==="light"){
    document.body.style.backgroundColor= "white";
    document.body.style.color = "black";
}
else{
    document.body.style.backgroundColor= "black";
    document.body.style.color = "white";
}

function toggleTheme(){
    const current = localStorage.getItem('theme');
    if(current ==="dark"){
        localStorage.setItem('theme', 'light');
        document.body.style.backgroundColor= "white";
        document.body.style.color = "black";

    }
    else if(current ===""){
        localStorage.setItem('theme', 'light');
        document.body.style.backgroundColor= "white";
        document.body.style.color = "black";
    }
    else{
        localStorage.setItem('theme', 'dark');
        document.body.style.backgroundColor= "black";
        document.body.style.color = "white";
    }
}
