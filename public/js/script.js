const drk = document.querySelector("#light-dark-mode");

function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode); // Toggle the dark mode state
    drk.classList.toggle("bx-sun", !wasDarkmode); // Change icon
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode); // Add/remove dark mode class
    updateIconColor(!wasDarkmode); // Adjust icon color
}

function onload() {
    const isDarkmode = localStorage.getItem('darkmode') === 'true';
    drk.classList.toggle("bx-sun", isDarkmode); // Set icon state
    document.body.classList.toggle('dark-mode', isDarkmode); // Ensure body class matches mode
    updateIconColor(isDarkmode); // Adjust icon color
}

function updateIconColor(isDarkmode) {
    drk.style.color = isDarkmode ? "white" : "black"; // Icon is white in dark mode and black in light mode
}

// Attach event listener
drk.addEventListener("click", darkmode);

// Call onload to set the initial state
onload();
