var btnContact = document.querySelector('.sys-btn-contact');

btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.sys-contact-info');
    boxContact.classList.toggle('sys-is-open');
    this.classList.toggle('sys-change-icon');
});