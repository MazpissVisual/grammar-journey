// Wadah konten per lesson; diisi oleh content/*.js (harus dimuat sebelum file konten).
window.lessonTitles = {};
window.lessonData = {};

// Metadata modul (urutan & judul unit). Isi lesson ada di content/*.js.
// Daftar lesson tiap modul (module.lessons) diisi dari window.lessonTitles saat app.js dimuat.
const modules = [
  {
    "id": "parts-of-speech",
    "number": 1,
    "icon": "Aa",
    "title": "Parts of Speech",
    "pages": "1–5",
    "description": "Meet the eight building blocks of English sentences.",
    "lessons": []
  },
  {
    "id": "nouns",
    "number": 2,
    "icon": "N",
    "title": "Nouns",
    "pages": "6–15",
    "description": "Name people, places, things, groups, materials, and ideas.",
    "lessons": []
  },
  {
    "id": "pronouns",
    "number": 3,
    "icon": "We",
    "title": "Pronouns",
    "pages": "16–28",
    "description": "Replace nouns naturally and make your communication flow.",
    "lessons": []
  },
  {
    "id": "verbs",
    "number": 4,
    "icon": "Do",
    "title": "Verbs",
    "pages": "29–32",
    "description": "Express actions, states, and the relationship inside a sentence.",
    "lessons": []
  },
  {
    "id": "adjectives",
    "number": 5,
    "icon": "Adj",
    "title": "Adjectives",
    "pages": "33–44",
    "description": "Add precise detail and compare people, objects, and ideas.",
    "lessons": []
  },
  {
    "id": "adverbs",
    "number": 6,
    "icon": "-ly",
    "title": "Adverbs",
    "pages": "45–48",
    "description": "Explain how, when, where, how often, and to what degree.",
    "lessons": []
  },
  {
    "id": "prepositions",
    "number": 7,
    "icon": "in",
    "title": "Prepositions",
    "pages": "49–51",
    "description": "Show relationships of time, place, direction, and manner.",
    "lessons": []
  },
  {
    "id": "conjunctions",
    "number": 8,
    "icon": "&",
    "title": "Conjunctions",
    "pages": "52–55",
    "description": "Connect words, ideas, reasons, contrasts, and conditions.",
    "lessons": []
  },
  {
    "id": "countable",
    "number": 9,
    "icon": "1+",
    "title": "Countable & Uncountable",
    "pages": "56–59",
    "description": "Choose articles and quantity words with confidence.",
    "lessons": []
  },
  {
    "id": "gender",
    "number": 10,
    "icon": "Mx",
    "title": "Gender in Nouns",
    "pages": "60–64",
    "description": "Understand traditional categories and use modern, inclusive English.",
    "lessons": []
  },
  {
    "id": "number",
    "number": 11,
    "icon": "-s",
    "title": "Singular & Plural",
    "pages": "65–68",
    "description": "Form regular and irregular plurals accurately.",
    "lessons": []
  }
];
