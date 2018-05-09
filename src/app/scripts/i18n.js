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
    this.initButtonsBehaviour();
  }

  getBrowserLanguage() {
    if (navigator.languages != undefined)
      return navigator.languages[0];
    else
      return navigator.language;
  }

  setLanguage(chosenLanguage) {
    if (chosenLanguage === "pl") {
      this.hoverPl();
    } else {
      this.hoverEn();
    }

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

  hoverPl() {
    $('.i18n-button-en').removeClass('hovered');
    $('.i18n-button-pl').addClass('hovered');
  }

  hoverEn() {
    $('.i18n-button-pl').removeClass('hovered');
    $('.i18n-button-en').addClass('hovered');
  }

  initButtonsBehaviour() {
    $('.i18n-button-pl').click(() => {
      this.setLanguage("pl");
      this.hoverPl();
    });
    $('.i18n-button-en').click(() => {
      this.setLanguage("en");
      this.hoverEn();
    });
  }

}

export { I18n as default }
