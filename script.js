let active = false;

function toggle() {
    let toggle = document.querySelector('.toggle');
    let on = document.getElementById("on");
    
    active = !active
    if (active) {
        toggle.classList.add('active');
        text.innerHTML = 'N';
    } else {
        toggle.classList.remove('active');
        off.innerHTML = 'FF';
    }
}