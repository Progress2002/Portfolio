import { contactEmailField, contactForm, contactUsernameField, contactMessageField } from "./variables.js";

export const DATA_STORAGE = () => {
  contactForm.addEventListener("input", () => {
    const username = contactUsernameField.value;
    const email = contactEmailField.value;
    const message = contactMessageField.value;

    localStorage.setItem(
      "contact-form",
      JSON.stringify({ username, email, message })
    );
  });

  window.addEventListener("load", () => {
    const isDataExist = JSON.parse(localStorage.getItem("contact-form"));

    if (!isDataExist) return;

    contactUsernameField.value = isDataExist.username;
    contactEmailField.value = isDataExist.email;
    contactMessageField.value = isDataExist.message;
  });
};
