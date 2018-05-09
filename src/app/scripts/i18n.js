import i18nJSON from '../i18n.json';

class I18n {
  constructor() {
    this.Language = Object.freeze({
      PL: "pl",
      EN: "en",
    });
  }

  init() {
    let chosenLanguage = this.Language.EN;
    let browserLanguage = this.getBrowserLanguage();
    if (browserLanguage === this.Language.PL) {
      chosenLanguage = this.Language.PL;
    }
    this.setLanguage(chosenLanguage);
    this.buttonsBehaviour();
  }

  getBrowserLanguage() {
    if (navigator.languages != undefined)
      return navigator.languages[0];
    else
      return navigator.language;
  }

  buttonsBehaviour() {
    $('.i18n-button-pl').click(() => {
      this.setLanguage("pl");
      $(this).addClass('active');
    });
    $('.i18n-button-en').click(() => {
      this.setLanguage("en");
      $(this).addClass('active');
    });
  }

  setLanguage(chosenLanguage) {
    $.getJSON(i18nJSON, (jsonObj) => {
      let i18n = jsonObj[chosenLanguage];

      for (let key in i18n) {
        let value = i18n[key];
        // contact form
        if (key === "i18nContact1") {
          $("input[name='phone']").attr('placeholder', value);
        } else if (key == "i18nContact2") {
          $("textarea[name='contents']").attr('placeholder', value);
        } else {
          $('.' + key).text(value);
        }
      }
    });
  }
}

export { I18n as default }
