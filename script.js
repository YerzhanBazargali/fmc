document.addEventListener('DOMContentLoaded', function() {
    var lang = localStorage.getItem('lang') ;
    document.getElementsByTagName('html')[0].setAttribute('lang', lang ? lang : 'kk');
    console.log(localStorage.getItem('lang'));
    langUpdate();
});
