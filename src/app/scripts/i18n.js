import i18nJSON from '../i18n.json';

class I18n {
  constructor() {
    this.Language = Object.freeze({
      PL: "pl",
      PL_2: "pl-PL",
      EN: "en",
    });
  }

  init() {
    let chosenLanguage = this.Language.EN;
    let browserLanguage = this.getBrowserLanguage();
    if (browserLanguage === this.Language.PL || browserLanguage === this.Language.PL_2) {
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
      for (let obj in jsonObj) {
        let fieldName = obj;
        let fieldValue = jsonObj[obj][chosenLanguage];

        if (fieldName === "i18nContact1") {
          $("input[name='phone']").attr('placeholder', fieldValue);
        } else if (fieldName == "i18nContact2") {
          $("textarea[name='contents']").attr('placeholder', fieldValue);
        } else {
          $('.' + fieldName).text(fieldValue);
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
