/*
* Input Filters
* author: dbosle
* version: 1.0
*/

/**
 * (e.which >= 65 && e.which <= 90) // -> Alphabetical characters
 * (e.which > 47 && e.which < 58)   // -> Numbers
 * (e.which > 95 && e.which < 106)  // -> Numpad Numbers
 * (e.ctrlKey && e.which == 67)     // -> CTRL + C
 * (e.ctrlKey && e.which == 88)     // -> CTRL + X
 * (e.ctrlKey && e.which == 86)     // -> CTRL + V
 * e.which == 8   // -> Backstpace
 * e.which == 9   // -> Tab 
 * e.which == 13  // -> Enter
 * e.which == 16  // -> Shift
 * e.which == 20  // -> CapsLock
 * e.which == 32  // -> Space
 * e.which == 35  // -> End
 * e.which == 36  // -> Home
 * e.which == 37  // -> Arrow Left
 * e.which == 39  // -> Arrow Right
 * e.which == 46  // -> Delete
 * e.which == 116 // -> F5
 * e.which == 220 // -> Ç
 * e.which == 219 // -> Ğ
 * e.which == 59  // -> Ş
 * e.which == 221  // -> Ü
 * e.which == 191  // -> Ö
 * 
 * 
 * Default Requireds:
 * 
    (e.ctrlKey && e.which == 67) ||
    (e.ctrlKey && e.which == 88) ||
    e.which == 8   || 
    e.which == 9   ||
    e.which == 13  ||
    e.which == 16  ||
    e.which == 20  ||   
    e.which == 32  ||  
    (e.which >= 35 && e.which <= 37) ||
    e.which == 39  ||
    e.which == 46  ||
    e.which == 116 ||
 */


/**
 * Setter function for onlyAlphaInput()
 * 
 * @param {string} elementID the element id 
 */
function setOnlyAlphaInput(elementID) {
    document.getElementById(elementID).onkeydown = onlyAlphaInput;
}


/**
 * Setter function for onlyAlphaNumInput()
 * 
 * @param {string} elementID the element id 
 */
function setOnlyAlphaNumInput(elementID) {
    document.getElementById(elementID).onkeydown = onlyAlphaNumInput;
}


/**
 * Setter function for onlyNumberInput()
 * 
 * @param {string} elementID the element id 
 */
function setOnlyNumberInput(elementID) {
    document.getElementById(elementID).onkeydown = onlyNumberInput;
}


function onlyNumberInput(e) {

    return (
        (e.ctrlKey && e.which == 67) ||
        (e.ctrlKey && e.which == 88) ||
        e.which == 8  ||
        e.which == 9  ||
        e.which == 13 ||
        e.which == 16 ||
        e.which == 20 ||
        e.which == 32 ||
        (e.which >= 35 && e.which <= 37) ||
        e.which == 39  ||
        e.which == 46  ||
        e.which == 116 ||
        (e.which > 47 && e.which < 58) ||
        (e.which > 95 && e.which < 106)
    );

}


function onlyAlphaInput(e) {

    return (
        (e.which >= 65 && e.which <= 90) ||
        (e.ctrlKey && e.which == 67) ||
        (e.ctrlKey && e.which == 88) ||
        e.which == 8  ||
        e.which == 9  ||
        e.which == 13 ||
        e.which == 16 ||
        e.which == 20 ||
        e.which == 32 ||
        (e.which >= 35 && e.which <= 37) ||
        e.which == 39  ||
        e.which == 46  ||
        e.which == 116 ||
        e.which == 59  ||
        e.which == 220 ||
        e.which == 219 ||
        e.which == 221 ||
        e.which == 191
    );

}



function onlyAlphaNumInput(e) {

    return (
        (e.which >= 65 && e.which <= 90) ||
        (e.which > 47 && e.which < 58)   ||
        (e.which > 95 && e.which < 106)  ||
        (e.ctrlKey && e.which == 67) ||
        (e.ctrlKey && e.which == 88) ||
        e.which == 8  ||
        e.which == 9  ||
        e.which == 13 ||
        e.which == 16 ||
        e.which == 20 ||
        e.which == 32 ||
        (e.which >= 35 && e.which <= 37) ||
        e.which == 39  ||
        e.which == 46  ||
        e.which == 116 ||
        e.which == 59  ||
        e.which == 220 ||
        e.which == 219 ||
        e.which == 221 ||
        e.which == 191
    );

}
