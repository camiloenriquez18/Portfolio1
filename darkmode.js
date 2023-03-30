const toggleSwitch = document.querySelector('#modeSwitch');

function switchTheme(event) {
if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}    
}

if (toggleSwitch) {
toggleSwitch.addEventListener('change', switchTheme, false);
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
document.documentElement.setAttribute('data-theme', currentTheme);
if (toggleSwitch) {
    toggleSwitch.checked = true;
}
} else if (currentTheme === 'light') {
document.documentElement.setAttribute('data-theme', currentTheme);
}