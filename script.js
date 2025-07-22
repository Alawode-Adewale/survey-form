const translations = {
  en: {
    title: "Survey Form",
    description: "Please complete this survey to help us improve.",
    nameLabel: "Name:",
    emailLabel: "Email:",
    ageLabel: "Age (optional):",
    dropdownLabel: "What best describes your role?",
    dropdownOptions: ["Select your role", "Student", "Developer"],
    recommendLabel: "Would you recommend freeCodeCamp?",
    topicsLabel: "Which topics are helpful? (Check all that apply)",
    commentsLabel: "Additional Comments:",
    submit: "Submit"
  },
  es: {
    title: "Formulario de Encuesta",
    description: "Por favor complete esta encuesta para ayudarnos a mejorar.",
    nameLabel: "Nombre:",
    emailLabel: "Correo electrónico:",
    ageLabel: "Edad (opcional):",
    dropdownLabel: "¿Qué mejor describe tu rol?",
    dropdownOptions: ["Selecciona tu rol", "Estudiante", "Desarrollador"],
    recommendLabel: "¿Recomendarías freeCodeCamp?",
    topicsLabel: "¿Qué temas son útiles? (Marca todos los que correspondan)",
    commentsLabel: "Comentarios adicionales:",
    submit: "Enviar"
  },
  fr: {
    title: "Formulaire de Sondage",
    description: "Veuillez remplir ce sondage pour nous aider à nous améliorer.",
    nameLabel: "Nom:",
    emailLabel: "E-mail:",
    ageLabel: "Âge (optionnel):",
    dropdownLabel: "Quel est votre rôle principal ?",
    dropdownOptions: ["Sélectionnez votre rôle", "Étudiant", "Développeur"],
    recommendLabel: "Recommanderiez-vous freeCodeCamp ?",
    topicsLabel: "Quels sujets sont utiles ? (Cochez tout ce qui s'applique)",
    commentsLabel: "Commentaires supplémentaires:",
    submit: "Soumettre"
  },
  ar: {
    title: "نموذج الاستبيان",
    description: "يرجى إكمال هذا الاستبيان لمساعدتنا على التحسين.",
    nameLabel: "الاسم:",
    emailLabel: "البريد الإلكتروني:",
    ageLabel: "العمر (اختياري):",
    dropdownLabel: "ما هو الوصف الأنسب لدورك؟",
    dropdownOptions: ["اختر دورك", "طالب", "مطور"],
    recommendLabel: "هل توصي بـ freeCodeCamp؟",
    topicsLabel: "ما هي المواضيع المفيدة؟ (حدد كل ما ينطبق)",
    commentsLabel: "تعليقات إضافية:",
    submit: "إرسال"
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("description").innerText = t.description;
  document.getElementById("name-label").innerText = t.nameLabel;
  document.getElementById("email-label").innerText = t.emailLabel;
  document.getElementById("number-label").innerText = t.ageLabel;
  document.getElementById("dropdown-label").innerText = t.dropdownLabel;
  document.getElementById("recommend-label").innerText = t.recommendLabel;
  document.getElementById("topics-label").innerText = t.topicsLabel;
  document.getElementById("comments-label").innerText = t.commentsLabel;
  document.getElementById("submit").innerText = t.submit;

  const dropdown = document.getElementById("dropdown");
  dropdown.options[0].text = t.dropdownOptions[0];
  dropdown.options[1].text = t.dropdownOptions[1];
  dropdown.options[2].text = t.dropdownOptions[2];
});
