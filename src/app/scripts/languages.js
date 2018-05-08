import i18nJSON from '../i18n.json';

class I18n {
  constructor() {
    this.Lang = Object.freeze({
      PL: "pl",
      EN: "en",
    });
  }

  init() {
    let choosenLang = this.Lang.EN;

    $.getJSON(i18nJSON, function (jsonObj) {
      let i18n = jsonObj[choosenLang];

      for (let key in i18n) {
        let value = i18n[key];
        // console.log(key + ': ' + value);
        $('.' + key).text(value);
      }
    });
  }
}

export { I18n as default }
