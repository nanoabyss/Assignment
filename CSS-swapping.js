function toggleCSS() {
    let theme = document.getElementsByTagName('link')[0]; //Fetch the link by its ID
    if (theme.getAttribute('href') == 'stylesheet.css') {
        theme.setAttribute('href', 'Alternative-CSS.css');
    } else {
        theme.setAttribute('href', 'stylesheet.css');
    }
    console.log("FUCK")
}
