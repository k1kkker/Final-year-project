function changeFontSize(step) {
    var currentSize = parseInt(document.body.style.fontSize) || 16;
    var newSize = currentSize + step;
    document.body.style.fontSize = newSize + 'px'
}
function changeFontColor(color) {
    document.body.style.color = color;
}