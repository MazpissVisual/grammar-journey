// Unit 02 · nouns — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["nouns"] = ["Proper Noun","Common Noun","Material Noun","Collective Noun","Abstract Noun","Possessive Noun"];

window.lessonData["nouns"] = [
  {
    definition: "A noun is a word that names a person, animal, object, place, situation, quality or idea. There are six kinds: proper, common, material, collective, abstract and possessive. A proper noun names one particular person, place or thing (a person, a country, a city, a day, a month, a language, a religion...) and always begins with a capital letter.",
    pattern: "Proper noun = specific name + CAPITAL letter\nPerson: Zainab, George Adams\nPlace/country: Jakarta, Indonesia, Uhud, Bali\nTime: Monday, April\nOther: Spanish (language), Islam (religion), Asia (continent), Bengawan Solo (river)",
    examples: [
      ["Zainab listens to the radio.","Zainab = name of a person"],
      ["Jakarta is the capital of Indonesia.","Jakarta = city, Indonesia = country"],
      ["Hamzah r.a. was martyred in Uhud.","Uhud = name of a place"],
      ["I met George Adams yesterday.","George Adams = name of a person"],
      ["He lives in Chicago.","Chicago = name of a city"],
      ["Our team will visit Bali in April.","Bali = place, April = month"]
    ],
    wrong: "i work in jakarta every monday.",
    right: "I work in Jakarta every Monday.",
    challenge: "Write 3 sentences about your career using proper nouns: your company name, the city where you work, and the day of an important meeting.",
    quiz: [
      {"q":"\"I was born in April.\" April stands for the name of a ...","a":["day","month","country","language"],"c":1,"x":"April is one of the months of the year."},
      {"q":"\"Today is Monday.\" Monday stands for the name of a ...","a":["month","river","day","person"],"c":2,"x":"Monday is a day of the week."},
      {"q":"\"He lives in Chicago.\" Chicago is the name of a ...","a":["country","city","continent","language"],"c":1,"x":"Chicago is a city."},
      {"q":"\"I speak Spanish.\" Spanish is the name of a ...","a":["language","country","month","river"],"c":0,"x":"Spanish is a language."},
      {"q":"\"Islam, Buddhism, Christianity and Hinduism are major religions.\" These are names of ...","a":["languages","cities","religions","days"],"c":2,"x":"They are the names of religions."},
      {"q":"\"The Bengawan Solo flows north.\" Bengawan Solo is the name of a ...","a":["river","city","month","continent"],"c":0,"x":"Bengawan Solo is a river."},
      {"q":"\"They are from Mexico.\" Mexico is the name of a ...","a":["city","language","country","day"],"c":2,"x":"Mexico is a country."},
      {"q":"\"Tibet is in Asia.\" Asia is the name of a ...","a":["country","continent","river","person"],"c":1,"x":"Asia is a continent."},
      {"q":"\"In holiday the students visit Bali.\" Bali is the name of a ...","a":["month","language","religion","place (island)"],"c":3,"x":"Bali is a place, an island."}
    ],
    guide: {
      summary: "Proper noun adalah nama khusus untuk orang, tempat, negara, hari, bulan, bahasa, agama, dan sebagainya. Selalu diawali huruf kapital.",
      pattern: "Tanya diri sendiri: apakah kata ini nama spesifik satu hal tertentu? Kalau ya, tulis dengan huruf besar di depan (Monday, Jakarta, Spanish).",
      vocab: [
        ["capital letter","huruf kapital"],
        ["country","negara"],
        ["continent","benua"],
        ["religion","agama"]
      ],
      translations: [
        "Zainab mendengarkan radio.",
        "Jakarta adalah ibu kota Indonesia.",
        "Hamzah r.a. gugur sebagai syahid di Uhud.",
        "Saya bertemu George Adams kemarin.",
        "Dia tinggal di Chicago.",
        "Tim kami akan mengunjungi Bali pada bulan April."
      ],
      challenge: "Tulis 3 kalimat tentang kariermu dengan proper noun: nama perusahaan, kota tempat kerja, dan hari rapat penting. Ingat huruf kapital."
    }
  },
  {
    definition: "A common noun names things in general, not one particular item. It can be used for any and every member of the same kind (book, man, country). It does not point to a specific one such as al-Qur'an, Budi or Indonesia.",
    pattern: "Common noun = general name, no capital letter (unless it starts a sentence)\nbook, man, country, teacher, zoo, car, animal\nSpecific -> proper: country -> Indonesia; man -> Budi",
    examples: [
      ["Take your book, please!","book = any book"],
      ["I met a man yesterday.","man = any man"],
      ["Everyone has to love his country.","country = any country"],
      ["I see animals in the zoo.","animals, zoo = general names"],
      ["Every teacher loves his students.","teacher, students = common nouns"],
      ["Don't drive your car in a hurry.","car = any car"]
    ],
    wrong: "Please bring the Laptop to the Meeting.",
    right: "Please bring the laptop to the meeting.",
    challenge: "Write 3 sentences describing your office using only common nouns (for example desk, manager, computer, report).",
    quiz: [
      {"q":"Everyone has to respect his ____.","a":["parents","Ahmad","Indonesia","April"],"c":0,"x":"\"parents\" is a common noun; the others are proper nouns."},
      {"q":"I see ____ in the zoo.","a":["Zainab","animals","Monday","Asia"],"c":1,"x":"\"animals\" is a general name that fits the zoo."},
      {"q":"Through the ____ we can hear the news.","a":["Chicago","Tuesday","radio","Islam"],"c":2,"x":"\"radio\" is a common noun; we hear news through a radio."},
      {"q":"Don't drive your ____ in a hurry.","a":["Bali","Spanish","Hendy","car"],"c":3,"x":"\"car\" is the only common noun that can be driven."},
      {"q":"The wild animals live in the ____.","a":["forest","Mexico","Friday","Ali"],"c":0,"x":"\"forest\" is a common noun for where wild animals live."},
      {"q":"Read your ____, otherwise you will fail in your examination.","a":["Jakarta","lessons","Bali","August"],"c":1,"x":"\"lessons\" is a common noun that makes sense with studying."},
      {"q":"Which word is a common noun?","a":["Jakarta","Ali","city","Monday"],"c":2,"x":"\"city\" is general. The others name specific things."},
      {"q":"Which word is NOT a common noun?","a":["teacher","country","book","Indonesia"],"c":3,"x":"Indonesia is the name of one particular country, so it is a proper noun."}
    ],
    guide: {
      summary: "Common noun adalah nama umum untuk benda, orang, atau tempat apa saja dalam satu jenis, bukan yang spesifik.",
      pattern: "Kalau kata itu bisa dipakai untuk banyak hal sejenis (book, man, country) dan tidak butuh huruf kapital, itu common noun.",
      vocab: [
        ["book","buku"],
        ["country","negara"],
        ["teacher","guru"],
        ["zoo","kebun binatang"]
      ],
      translations: [
        "Tolong ambil bukumu!",
        "Kemarin saya bertemu seorang pria.",
        "Setiap orang harus mencintai negaranya.",
        "Saya melihat hewan-hewan di kebun binatang.",
        "Setiap guru menyayangi murid-muridnya.",
        "Jangan mengemudikan mobilmu terburu-buru."
      ],
      challenge: "Tulis 3 kalimat tentang kantormu hanya dengan common noun (misalnya desk, manager, computer, report)."
    }
  },
  {
    definition: "A material noun names the matter or substance that things are made of, such as metals, fabrics and natural substances.",
    pattern: "Material noun = what something is made of\nmetals: gold, silver, iron, steel, copper, brass, tin, nickel\nothers: salt, cotton, water, marble, wood, stone, sand, lime\nUseful phrase: made of + material",
    examples: [
      ["Salt is necessary to live.","salt = substance"],
      ["This ring is made of gold.","gold = material of the ring"],
      ["That lady is dressed in cotton.","cotton = fabric"],
      ["The fish lives in water.","water = substance"],
      ["That temple was built of marble.","marble = building material"],
      ["The table is made of wood.","wood = material of the table"]
    ],
    wrong: "This table is made from a woods.",
    right: "This table is made of wood.",
    challenge: "Write 3 sentences about products your company makes or uses, naming the material (for example: Our desks are made of steel).",
    quiz: [
      {"q":"This ring is made of ____.","a":["Ali","gold","army","kindness"],"c":1,"x":"\"gold\" is a material noun."},
      {"q":"Which word is a material noun?","a":["salt","team","Bali","happiness"],"c":0,"x":"Salt is a substance."},
      {"q":"That temple was built of ____.","a":["crowd","Monday","marble","bravery"],"c":2,"x":"Marble is a building material."},
      {"q":"The table is made of ____.","a":["herd","Asia","freedom","wood"],"c":3,"x":"Wood is a material."},
      {"q":"Which word is NOT a material noun?","a":["iron","copper","silver","herd"],"c":3,"x":"\"herd\" is a collective noun; the others are metals."},
      {"q":"A bridge is often made of ____.","a":["steel","committee","Asia","pleasure"],"c":0,"x":"Steel is a material used in building."},
      {"q":"That lady is dressed in ____.","a":["wisdom","cotton","Monday","audience"],"c":1,"x":"Cotton is a fabric."},
      {"q":"Which metal is made by mixing copper and zinc?","a":["tin","nickel","brass","silver"],"c":2,"x":"Brass is an alloy of copper and zinc."}
    ],
    guide: {
      summary: "Material noun adalah nama bahan atau zat pembentuk sesuatu, misalnya gold, wood, cotton, steel.",
      pattern: "Gunakan pola: something + is made of + bahan. Contoh: The table is made of wood.",
      vocab: [
        ["gold","emas"],
        ["wood","kayu"],
        ["steel","baja"],
        ["iron","besi"]
      ],
      translations: [
        "Garam diperlukan untuk hidup.",
        "Cincin ini terbuat dari emas.",
        "Wanita itu berpakaian katun.",
        "Ikan hidup di air.",
        "Kuil itu dibangun dari marmer.",
        "Meja itu terbuat dari kayu."
      ],
      challenge: "Tulis 3 kalimat tentang produk perusahaanmu dengan menyebut bahannya (contoh: Our desks are made of steel)."
    }
  },
  {
    definition: "A collective noun names a group or collection of persons or things taken together as one whole. For example, a congregation is many people worshipping together, an army is all the soldiers at once, and a navy is the sea force.",
    pattern: "Collective noun = group seen as one\ncongregation, army, navy, crowd, class, audience, committee, crew, gang, public\na shoal of fish, a herd of cattle, a pile of planks\ncrockery, cutlery, furniture, luggage, stationery, hosiery, upholstery, staff, mob",
    examples: [
      ["I see a large congregation at the mosque.","congregation = many worshippers"],
      ["The army made the ceremony.","army = all the soldiers"],
      ["The crew of the national airline look smart in their new uniform.","crew = group of staff"],
      ["The audience applauded heartily at the end of the show.","audience = group of listeners"],
      ["We saw a shoal of trout swimming downstream.","shoal = group of fish"],
      ["A herd of cattle are grazing in the field.","herd = group of cattle"]
    ],
    wrong: "A herd of fish swam under the boat.",
    right: "A shoal of fish swam under the boat.",
    challenge: "Write 3 sentences about your workplace using collective nouns such as staff, committee, team or crew.",
    quiz: [
      {"q":"The ____ of national airline look smart in their new uniform.","a":["crew","shoal","herd","pile"],"c":0,"x":"A crew is the group of staff of an airline."},
      {"q":"The ____ applauded heartily at the end of the show.","a":["pile","shoal","audience","herd"],"c":2,"x":"An audience watches a show."},
      {"q":"The ____ makes many decisions at its monthly meeting.","a":["shoal","committee","herd","pile"],"c":1,"x":"A committee holds meetings and makes decisions."},
      {"q":"This ____ of planks needs to be cleared away by noon.","a":["committee","audience","pile","class"],"c":2,"x":"Planks are stacked in a pile."},
      {"q":"We saw a ____ of trout swimming downstream.","a":["pile","herd","class","shoal"],"c":3,"x":"A group of fish is a shoal."},
      {"q":"The ____ has just had a Geography lesson.","a":["class","herd","shoal","pile"],"c":0,"x":"A class is a group of students."},
      {"q":"A ____ of cattle are grazing in the field.","a":["shoal","herd","pile","audience"],"c":1,"x":"A group of cattle is a herd."},
      {"q":"The ____ of the thieves were rounded up by the police.","a":["herd","shoal","pile","gang"],"c":3,"x":"A group of criminals is a gang."},
      {"q":"Knives, forks and spoons are collectively called ____.","a":["cutlery","luggage","hosiery","furniture"],"c":0,"x":"Cutlery is the collective noun for knives, forks and spoons."},
      {"q":"Trunks and suitcases taken on a journey are called ____.","a":["stationery","luggage","crockery","staff"],"c":1,"x":"Luggage means bags taken on a journey."},
      {"q":"Stockings and socks are called ____.","a":["upholstery","cutlery","hosiery","mob"],"c":2,"x":"Hosiery is the collective noun for socks and stockings."},
      {"q":"Writing instruments and materials are called ____.","a":["furniture","crockery","congregation","stationery"],"c":3,"x":"Stationery means pens, paper and similar items."}
    ],
    guide: {
      summary: "Collective noun adalah kata untuk sekelompok orang atau benda yang dianggap satu kesatuan, misalnya class, crew, herd, furniture.",
      pattern: "Bayangkan satu kelompok utuh. Ada pasangan tetap: a herd of cattle, a shoal of fish, a pile of planks. Hafalkan sebagai paket.",
      vocab: [
        ["audience","penonton"],
        ["committee","panitia"],
        ["crew","awak"],
        ["luggage","bagasi"]
      ],
      translations: [
        "Saya melihat jemaah yang besar di masjid.",
        "Pasukan itu menyelenggarakan upacara.",
        "Awak maskapai nasional tampak rapi dalam seragam barunya.",
        "Penonton bertepuk tangan meriah di akhir pertunjukan.",
        "Kami melihat sekawanan ikan trout berenang ke hilir.",
        "Sekawanan sapi sedang merumput di ladang."
      ],
      challenge: "Tulis 3 kalimat tentang tempat kerjamu dengan collective noun seperti staff, committee, team, atau crew."
    }
  },
  {
    definition: "An abstract noun names a quality, a state or an action, something you cannot touch. It can be formed from verbs (advise - advice), from common nouns (friend - friendship), from adjectives (honest - honesty), or it can have the same form as the verb (love, hope, help).",
    pattern: "Verb -> noun: advise-advice, believe-belief, choose-choice, free-freedom, judge-judgment, please-pleasure, think-thought, serve-service\nNoun -> noun: friend-friendship, brother-brotherhood, child-childhood, hero-heroism, thief-theft\nAdjective -> noun: brave-bravery, honest-honesty, high-height, hot-heat, wise-wisdom, proud-pride, poor-poverty, true-truth\nSame form: love, hope, fear, help, regret, walk",
    examples: [
      ["The teacher will be happy with your kindness.","kindness = quality"],
      ["We have good pleasure today.","pleasure = state"],
      ["Islam is my choice.","choice = action/decision"],
      ["I believe in the prisoner's innocence.","innocence from innocent"],
      ["The taxi driver was praised for his honesty.","honesty from honest"],
      ["King Solomon was known for his wisdom.","wisdom from wise"]
    ],
    wrong: "He was praised for his honest.",
    right: "He was praised for his honesty.",
    challenge: "Write 3 sentences about the qualities of a good employee, using abstract nouns like honesty, responsibility and patience.",
    quiz: [
      {"q":"I believe in the prisoner's ____ (innocent).","a":["innocently","innocence","innocents","innocenter"],"c":1,"x":"innocent -> innocence."},
      {"q":"The taxi driver was praised for his ____ (honest) in returning the wallet.","a":["honestly","honest","honesty","honestness"],"c":2,"x":"honest -> honesty."},
      {"q":"Muhammad spent his ____ (child) in Mecca.","a":["childhood","childly","childs","children"],"c":0,"x":"child -> childhood."},
      {"q":"The man displayed his ____ (strong) by lifting the weight with one hand.","a":["strongly","stronger","strongness","strength"],"c":3,"x":"strong -> strength."},
      {"q":"King Solomon was noted for his ____ (wise).","a":["wisdom","wisely","wiser","wiseness"],"c":0,"x":"wise -> wisdom."},
      {"q":"His ____ (proud) led to his fall.","a":["proudly","pride","prouding","proudity"],"c":1,"x":"proud -> pride."},
      {"q":"What is the abstract noun of \"cruel\"?","a":["cruelness","cruelly","cruelty","cruelment"],"c":2,"x":"cruel -> cruelty."},
      {"q":"What is the abstract noun of \"grateful\"?","a":["grateness","gratitude","gratefully","gratify"],"c":1,"x":"grateful -> gratitude."},
      {"q":"What is the abstract noun of \"poor\"?","a":["poorly","poorness","pooring","poverty"],"c":3,"x":"poor -> poverty (see the table in the book)."},
      {"q":"What is the abstract noun of the verb \"free\"?","a":["freedom","freely","freeness","freeing"],"c":0,"x":"free -> freedom."},
      {"q":"What is the abstract noun of the verb \"succeed\"?","a":["succeeding","success","succeedance","succeeder"],"c":1,"x":"succeed -> success."},
      {"q":"What is the abstract noun of the verb \"advise\"?","a":["advisely","advisement","advice","advising"],"c":2,"x":"advise -> advice."}
    ],
    guide: {
      summary: "Abstract noun adalah kata benda untuk sifat, keadaan, atau tindakan yang tidak bisa disentuh, misalnya kindness, pleasure, choice. Bisa dibentuk dari verba, noun, adjektiva, atau berbentuk sama dengan verba.",
      pattern: "Akhiran yang sering muncul: -ness, -ty, -ship, -hood, -dom, -th, -ce. Hafalkan pasangan penting: wise-wisdom, honest-honesty, proud-pride.",
      vocab: [
        ["kindness","kebaikan"],
        ["honesty","kejujuran"],
        ["wisdom","kebijaksanaan"],
        ["freedom","kebebasan"]
      ],
      translations: [
        "Guru akan senang dengan kebaikanmu.",
        "Kita merasa senang hari ini.",
        "Islam adalah pilihanku.",
        "Saya percaya pada ketidakbersalahan narapidana itu.",
        "Sopir taksi itu dipuji karena kejujurannya.",
        "Raja Sulaiman dikenal karena kebijaksanaannya."
      ],
      challenge: "Tulis 3 kalimat tentang sifat karyawan yang baik memakai abstract noun seperti honesty, responsibility, patience."
    }
  },
  {
    definition: "A possessive noun shows ownership or that something belongs to or is part of someone. For a singular noun, add an apostrophe + s ('s). For a plural noun ending in s, add only an apostrophe after the s. For a plural noun that does not end in s, add 's.",
    pattern: "Singular: noun + 's -> Ali's house, Student's book\nPlural ending in -s: noun + ' -> drivers', pilots', teams'\nIrregular plural: noun + 's -> children's, men's, women's",
    examples: [
      ["This is Ali's house.","singular: Ali + 's"],
      ["Hendy's car is outside.","singular: Hendy + 's"],
      ["The student's book is on the desk.","one student: student's"],
      ["The drivers' room is down the hall.","plural with s: drivers'"],
      ["They sell children's toys in this store.","irregular plural: children's"],
      ["The men's room is just down the hall.","irregular plural: men's"]
    ],
    wrong: "That is my friends car.",
    right: "That is my friend's car.",
    challenge: "Write 3 sentences about your team using possessive nouns (for example: our manager's report, the clients' needs).",
    quiz: [
      {"q":"She buys her clothes in ____ best shop.","a":["New Yorks","New York's","New Yorks'","New York"],"c":1,"x":"New York is singular, so add 's."},
      {"q":"The ____ room is just down the hall.","a":["mens'","mens","men's","mans'"],"c":2,"x":"\"men\" is a plural without s, so add 's."},
      {"q":"They sell ____ dresses on this floor.","a":["ladies'","ladies's","ladys","ladie's"],"c":0,"x":"\"ladies\" is a plural ending in s, so add only an apostrophe."},
      {"q":"The ____ toys are all broken (one child).","a":["childs","childs'","children's","child's"],"c":3,"x":"One child: child + 's."},
      {"q":"They sell ____ toys in this store.","a":["childrens","children's","childrens'","childs'"],"c":1,"x":"\"children\" is an irregular plural, so add 's."},
      {"q":"There is a lot of competition between ____ two sisters.","a":["Bobs","Bobs'","Bob's","Bobs's"],"c":2,"x":"Bob is singular, so Bob's."},
      {"q":"____ secretary is Mexican.","a":["Dr. Smith's","Dr. Smiths","Dr. Smiths'","Dr. Smith"],"c":0,"x":"Dr. Smith + 's."},
      {"q":"____ birthday is February 12.","a":["Lincolns","Lincolns'","Lincoln","Lincoln's"],"c":3,"x":"Lincoln + 's."},
      {"q":"What is the possessive form of \"drivers\" (plural)?","a":["drivers's","drivers'","driver's","drivers"],"c":1,"x":"Plural ending in s: add only an apostrophe."},
      {"q":"What is the possessive form of \"women\"?","a":["womens'","womens","women's","woman's'"],"c":2,"x":"\"women\" does not end in s, so add 's."}
    ],
    guide: {
      summary: "Possessive noun menunjukkan kepemilikan. Tunggal: tambah 's. Jamak berakhiran s: tambah ' saja. Jamak tak beraturan (children, men, women): tambah 's.",
      pattern: "Langkah mudah: lihat apakah kata sudah berakhiran s karena jamak. Kalau ya, cukup tanda petik (drivers'). Kalau tidak, tambah 's (Ali's, children's).",
      vocab: [
        ["ownership","kepemilikan"],
        ["apostrophe","tanda apostrof"],
        ["plural","jamak"],
        ["singular","tunggal"]
      ],
      translations: [
        "Ini rumah Ali.",
        "Mobil Hendy ada di luar.",
        "Buku siswa itu ada di meja.",
        "Ruang para sopir ada di ujung lorong.",
        "Mereka menjual mainan anak-anak di toko ini.",
        "Toilet pria ada di ujung lorong."
      ],
      challenge: "Tulis 3 kalimat tentang timmu dengan possessive noun (contoh: our manager's report, the clients' needs)."
    }
  }
];
