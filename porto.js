

document.addEventListener('scroll', function (evt) {
    let verlineElm = document.getElementById('vertical-line');
    //let headerElm = document.querySelector('h1');

    if(window.scrollY > 120) {
        // hide scroll line
        verlineElm.style.visibility = "hidden";
        //headerElm.style.visibility = "hidden";
    } else {
        // show scroll line
        verlineElm.style.visibility = "visible";
        //headerElm.style.visibility = "visible";
    }
});