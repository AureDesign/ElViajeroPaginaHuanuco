var acc = document.getElementsByClassName('cardTitle');
var i;
var len = acc.length;
for(i = 0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var cardContenido = this.nextElementSibling;
        if(cardContenido.style.maxHeight) {
            cardContenido.style.maxHeight = null;
        } else {
            cardContenido.style.maxHeight = cardContenido.scrollHeight + 'px'
        }
    })
}