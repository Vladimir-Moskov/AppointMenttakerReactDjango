import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "MAIN_HEADER_CHANGE_LANGUAGE": 'FR',
      "MAIN_HEADER_LOGIN": 'Login',
      "MAIN_HEADER_LOGOUT": 'Logout',
      "MAIN_HEADER_SIGNIN": 'SignIn',
      "MAIN_HEADER_HOME": 'Home',

      "LOGIN_TITLE": "Login",
      "LOGIN_USER_NAME_LABEL": "User Name",
      "LOGIN_USER_NAME_PLACE_HOLDER": "Enter user name...",
      "LOGIN_PASSWORD_LABEL": "Password",
      "LOGIN_PASSWORD_PLACE_HOLDER": "Enter password...",
      "LOGIN_REMEMBER_ME_LABEL": "Remember me",
      "LOGIN_LOGIN_BUTTON_LABEL": "Log in",

      "REGISTER_TITLE": "Register",
      "REGISTER_SIGNUP_BUTTON_LABEL": "Sign up",
      "REGISTER_CONFIRM_PASSWORD_LABEL": "Confirm password",
      "REGISTER_CONFIRM_PASSWORD_PLACE_HOLDER": "Enter password again...",
      "REGISTER_USER_EMAIL_LABEL": "User Email",
      "REGISTER_USER_EMAIL_PLACE_HOLDER": "Enter user email...",
      "REGISTER_USER_EMAIL_EXAMPLE": "firstname.lastname@example.com",

      "MAIN_FOOTER_ABOUT_TITLE": "About",
     
      "ABOUT_AUTHOR_LABEL": "Author",
      "ABOUT_START_DATE_LABEL": "Start Date",
      "ABOUT_PROJECT_SUMMARY_LABEL": "Project Summary",
      "ABOUT_PROJECT_SUMMARY_TEXT": "Small application for appointment/meeting making.",
      "ABOUT_TECH_STACK_LABEL": "Tech stack",
      "ABOUT_PROJECT_WIKI_LABEL": "Project Wiki",
      "ABOUT_PROJECT_REPO_LABEL": "Project repositoty",
    }
  },
  fr: {
    translation: {
       "MAIN_HEADER_CHANGE_LANGUAGE": 'EN',
       "MAIN_HEADER_LOGIN": 'Connexion',
       "MAIN_HEADER_LOGOUT": 'Déconnexion',
       "MAIN_HEADER_SIGNIN": 'Se connecter',
       "MAIN_HEADER_HOME": 'Accueil',

       "LOGIN_TITLE": "Entrer",
       "LOGIN_USER_NAME_LABEL": "Nom d'utilisateur",
       "LOGIN_USER_NAME_PLACE_HOLDER": "Entrez le nom d'utilisateur ...",
       "LOGIN_PASSWORD_LABEL": "Mot de passe",
       "LOGIN_PASSWORD_PLACE_HOLDER": "Entrez le mot de passe ...",
       "LOGIN_REMEMBER_ME_LABEL": "Se souvenir de moi",
       "LOGIN_LOGIN_BUTTON_LABEL": "Se connecter",

       "REGISTER_TITLE": "S'inscrire",
       "REGISTER_SIGNUP_BUTTON_LABEL": "S'inscrire",
       "REGISTER_CONFIRM_PASSWORD_LABEL": "Confirmer le mot de passe",
       "REGISTER_CONFIRM_PASSWORD_PLACE_HOLDER": "Entrez à nouveau le mot de passe ...",
       "REGISTER_USER_EMAIL_LABEL": "Email de l'utilisateur",
       "REGISTER_USER_EMAIL_PLACE_HOLDER": "Saisissez l'adresse e-mail de l'utilisateur ...",
       "REGISTER_USER_EMAIL_EXAMPLE": "prénom.nom@exemple.com",

       "MAIN_FOOTER_ABOUT_TITLE": "Quelque",

       "ABOUT_AUTHOR_LABEL": "Auteur",
       "ABOUT_START_DATE_LABEL": "Date de début",
       "ABOUT_PROJECT_SUMMARY_LABEL": "Résumé du projet",
       "ABOUT_PROJECT_SUMMARY_TEXT": "Petite application pour prise de rendez-vous / réunion.",
       "ABOUT_TECH_STACK_LABEL": "Pile technique",
       "ABOUT_PROJECT_WIKI_LABEL": "Project Wiki",
       "ABOUT_PROJECT_REPO_LABEL": "Référentiel de projet",

    }
  }
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;