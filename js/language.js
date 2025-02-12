var language;

// Gets the current language
function getLanguage() {
  (localStorage.getItem('language') == null) ? setLanguage('en'): false;
  $.ajax({
    url: '/language/' + localStorage.getItem('language') + '.json',
    dataType: 'json',
    async: false,
    dataType: 'json',
    success: function (lang) {
      language = lang
    }
  });
}
// Changes the language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  changeLang();
}

// Help function to change the language
function changeLang() {
  getLanguage();
  $('.body').text(language.body);
  $('.rim').text(language.rim);
  $('.leather').text(language.leather);
  $('.details').text(language.details);
  $('.green').text(language.green);
  $('.blueLang').text(language.blue);
  $('.yellowLang').text(language.yellow);
  $('.red').text(language.red);
  $('.black').text(language.black);
  $('.grey').text(language.grey);
  $('.white').text(language.white);
  $('.language').text(language.language);
  $('.english').text(language.english);
  $('.swedish').text(language.swedish);
  $('.modal-welcome').text(language.modalWelcome)
  $('.modal-text').text(language.modalText)
}
