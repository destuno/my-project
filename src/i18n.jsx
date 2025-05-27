import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  "en": {
    "translation": {
      "home": "Home",
      "Comments": "Comments",
      "News": "News",
      "Contact": "Contact",
      "promo1_title": "The Best for You",
      "promo1_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu euismod, tincidunt justo sit amet, porttitor urna.",
      "promo2_title": "Discover Possibilities",
      "promo2_description": "Curabitur rhoncus, arcu non vulputate lacinia, justo nisl laoreet erat, nec pharetra elit nisi et elit.",
      "promo3_title": "Quality and Style",
      "promo3_description": "Aliquam erat volutpat. Cras sodales tellus vitae purus congue, ut tincidunt est lobortis.",
      "promo4_title": "Stay in Trend",
      "promo4_description": "Vestibulum vel velit at nisl gravida eleifend. Aenean commodo faucibus ligula, vel ultricies ligula tincidunt eget."
    }
  },
  "ru": {
    "translation": {
      "home": "Главная",
      "Comments": "Комментарии",
      "News": "Новости",
      "Contact": "Контакты",
      "promo1_title": "Лучшее для вас",
      "promo1_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu euismod, tincidunt justo sit amet, porttitor urna. Quisque ac mi ut odio egestas aliquam. Suspendisse potenti. Integer et laoreet lacus.",
      "promo2_title": "Открой возможности",
      "promo2_description": "Curabitur rhoncus, arcu non vulputate lacinia, justo nisl laoreet erat, nec pharetra elit nisi et elit. Duis eget sapien vel dolor vehicula tempor. Nullam auctor est nec turpis posuere.",
      "promo3_title": "Качество и стиль",
      "promo3_description": "Aliquam erat volutpat. Cras sodales tellus vitae purus congue, ut tincidunt est lobortis. Morbi feugiat, augue vitae suscipit fringilla, magna nisl sollicitudin dolor, vel porta metus nisi ac nunc.",
      "promo4_title": "Будь в тренде",
      "promo4_description": "Vestibulum vel velit at nisl gravida eleifend. Aenean commodo faucibus ligula, vel ultricies ligula tincidunt eget. Suspendisse id libero non est viverra porttitor. Nulla vitae lectus id augue commodo."
    }
  },
  "zh": {
    "translation": {
      "home": "首页",
      "Comments": "评论",
      "News": "新闻",
      "Contact": "联系我们",
      "promo1_title": "为您提供最好",
      "promo1_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu euismod, tincidunt justo sit amet, porttitor urna.",
      "promo2_title": "发现可能性",
      "promo2_description": "Curabitur rhoncus, arcu non vulputate lacinia, justo nisl laoreet erat, nec pharetra elit nisi et elit.",
      "promo3_title": "品质与风格",
      "promo3_description": "Aliquam erat volutpat. Cras sodales tellus vitae purus congue, ut tincidunt est lobortis.",
      "promo4_title": "紧跟潮流",
      "promo4_description": "Vestibulum vel velit at nisl gravida eleifend. Aenean commodo faucibus ligula, vel ultricies ligula tincidunt eget."
    }
  },
  "uz": {
    "translation": {
      "home": "Bosh sahifa",
      "Comments": "Fikrlar",
      "News": "Yangiliklar",
      "Contact": "Aloqa",
      "promo1_title": "Siz uchun eng yaxshisi",
      "promo1_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec arcu euismod, tincidunt justo sit amet, porttitor urna.",
      "promo2_title": "Imkoniyatlarni kashf eting",
      "promo2_description": "Curabitur rhoncus, arcu non vulputate lacinia, justo nisl laoreet erat, nec pharetra elit nisi et elit.",
      "promo3_title": "Sifat va uslub",
      "promo3_description": "Aliquam erat volutpat. Cras sodales tellus vitae purus congue, ut tincidunt est lobortis.",
      "promo4_title": "Trendda bo'ling",
      "promo4_description": "Vestibulum vel velit at nisl gravida eleifend. Aenean commodo faucibus ligula, vel ultricies ligula tincidunt eget."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;