import i18nJSON from '../i18n.json';

class I18n {
  constructor() {
    this.Lang = Object.freeze({
      PL: "pl",
      EN: "en",
    });
  }

  init() {
    let chosenLang = this.Lang.EN;

    $.getJSON(i18nJSON, function (jsonObj) {
      let i18n = jsonObj[chosenLang];

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
