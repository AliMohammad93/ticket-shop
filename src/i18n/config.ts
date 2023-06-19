import i18n from "i18next";
import {initReactI18next} from "react-i18next";
const resources = {
    de: {
        translation: require('./locales/de/translations.json')
    },
    en:{
        translation: require('./locales/en/translations.json')
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "de",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});
export default i18n;
