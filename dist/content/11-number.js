// Unit 11 · number — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["number"] = [
  "Singular and Plural: Adding -s and -es",
  "Nouns Ending in -y",
  "Nouns Ending in -f or -fe",
  "Nouns Ending in -o",
  "Irregular and Special Plurals"
];

window.lessonData["number"] = [
  {
    definition: "Number is the form of a noun that shows whether it is singular (one object) or plural (more than one). The general rule is to add -s to the singular. If the noun ends in s, x, sh or ch, add -es instead.",
    pattern: "Singular: one object (book, chair)\nPlural: more than one (books, chairs)\nGeneral rule: + s - book - books, chair - chairs, pen - pens, table - tables\nEnds in s, x, sh, ch: + es - bench - benches, box - boxes, brush - brushes, coach - coaches, gas - gases, glass - glasses, tax - taxes",
    examples: [
      ["I have one book and two pens.","regular plural: + s"],
      ["There are three chairs and one table.","chairs, table"],
      ["The company bought new benches for the office.","bench - benches"],
      ["Please put the boxes on the table.","box - boxes"],
      ["We pay taxes every year.","tax - taxes"],
      ["She has two glasses of water.","glass - glasses"]
    ],
    wrong: "I have two box and three glass on my desk.",
    right: "I have two boxes and three glasses on my desk.",
    challenge: "Write 4 sentences about items in your office. Use at least two plurals ending in -s and two ending in -es.",
    quiz: [
      {"q":"Plural of booth:","a":["booths","boothes","booth","boothies"],"c":0,"x":"booth ends in th, so just add -s."},
      {"q":"Plural of fox:","a":["foxs","foxes","foxies","foxen"],"c":1,"x":"Words ending in x take -es."},
      {"q":"Plural of problem:","a":["problems","problemes","problemies","problem"],"c":0,"x":"Regular plural: + s."},
      {"q":"Plural of table:","a":["tablees","tables","tabless","tabloes"],"c":1,"x":"Regular plural: + s."},
      {"q":"Plural of tax:","a":["taxs","taxes","taxies","taxen"],"c":1,"x":"Ends in x, so + es."},
      {"q":"Plural of value:","a":["values","valuees","valuies","valves"],"c":0,"x":"Regular plural: + s."},
      {"q":"Plural of glass:","a":["glasses","glasss","glassies","glassen"],"c":0,"x":"Ends in s, so + es."},
      {"q":"Plural of brush:","a":["brushs","brushes","brushies","brushen"],"c":1,"x":"Ends in sh, so + es."},
      {"q":"Plural of coach:","a":["coachs","coachies","coaches","coachen"],"c":2,"x":"Ends in ch, so + es."},
      {"q":"A noun that denotes more than one object is in the ___ number.","a":["plural","singular","neuter","common"],"c":0,"x":"That is the definition of plural."}
    ],
    guide: {
      summary: "Number menunjukkan apakah kata benda itu tunggal (satu) atau jamak (lebih dari satu). Aturan umumnya tambahkan -s, dan jika kata berakhir s, x, sh, ch tambahkan -es.",
      pattern: "Dengarkan bunyinya: akhiran yang berdesis (s, x, sh, ch) butuh -es agar mudah diucapkan (box - boxes). Selain itu cukup -s (book - books).",
      vocab: [
        ["singular","tunggal"],
        ["plural","jamak"],
        ["bench","bangku panjang"],
        ["tax","pajak"]
      ],
      translations: [
        "Saya punya satu buku dan dua pulpen.",
        "Ada tiga kursi dan satu meja.",
        "Perusahaan itu membeli bangku-bangku baru untuk kantor.",
        "Tolong letakkan kotak-kotak itu di atas meja.",
        "Kami membayar pajak setiap tahun.",
        "Dia punya dua gelas air."
      ],
      challenge: "Tulis 4 kalimat tentang benda di kantormu, minimal dua jamak berakhiran -s dan dua berakhiran -es."
    }
  },
  {
    definition: "If a noun ends in y after a consonant, change the y to i and add -es (country - countries). If the final y comes after a vowel (ay, ey, oy), just add -s (boy - boys, key - keys).",
    pattern: "Consonant + y: y to ies - country - countries, cry - cries, duty - duties, fly - flies, hobby - hobbies, lady - ladies\nVowel + y (ay, ey, oy): + s - boy - boys, donkey - donkeys, joy - joys, key - keys, toy - toys, tray - trays",
    examples: [
      ["Our company works in many countries.","country - countries"],
      ["Doctors have many duties.","duty - duties"],
      ["Her hobbies are reading and running.","hobby - hobbies"],
      ["The ladies are waiting outside.","lady - ladies"],
      ["The boys are playing with their toys.","boy - boys, toy - toys"],
      ["I left my keys on the trays.","key - keys, tray - trays"]
    ],
    wrong: "The ladys and the boies arrived at the countrys.",
    right: "The ladies and the boys arrived at the countries.",
    challenge: "Write 4 sentences about work using plurals of nouns ending in y (company, city, delivery, key). Check which ones follow consonant + y.",
    quiz: [
      {"q":"Plural of army:","a":["armys","armies","armyes","armis"],"c":1,"x":"consonant + y: change y to ies."},
      {"q":"Plural of key:","a":["keys","kies","keyes","keies"],"c":0,"x":"vowel + y: just add s."},
      {"q":"Plural of toy:","a":["toies","toyes","toys","toyies"],"c":2,"x":"vowel + y: just add s."},
      {"q":"Plural of country:","a":["countrys","countries","countryes","countrees"],"c":1,"x":"consonant + y: ies."},
      {"q":"Plural of donkey:","a":["donkies","donkeys","donkeyes","donkeis"],"c":1,"x":"ey: just add s."},
      {"q":"Plural of lady:","a":["ladys","ladyes","ladies","ladis"],"c":2,"x":"consonant + y: ies."},
      {"q":"Plural of duty:","a":["duties","dutys","dutyes","dutis"],"c":0,"x":"consonant + y: ies."},
      {"q":"Plural of hobby:","a":["hobbys","hobbyes","hobbies","hobbis"],"c":2,"x":"consonant + y: ies."},
      {"q":"Which ending rule is right for a noun ending in a consonant + y?","a":["change y to ies","add s","add es","change y to ves"],"c":0,"x":"e.g. cry - cries."},
      {"q":"Plural of boy:","a":["boies","boyes","boys","boyies"],"c":2,"x":"oy: just add s."}
    ],
    guide: {
      summary: "Jika kata benda berakhir huruf mati + y, ubah y menjadi ies. Jika berakhir huruf hidup + y (ay, ey, oy), cukup tambah s.",
      pattern: "Lihat huruf sebelum y. Huruf mati (country) = ies. Huruf hidup (boy, key, toy) = s saja.",
      vocab: [
        ["country","negara"],
        ["duty","tugas"],
        ["hobby","hobi"],
        ["tray","baki / nampan"]
      ],
      translations: [
        "Perusahaan kami beroperasi di banyak negara.",
        "Dokter memiliki banyak tugas.",
        "Hobinya adalah membaca dan berlari.",
        "Para wanita itu menunggu di luar.",
        "Anak-anak lelaki itu bermain dengan mainan mereka.",
        "Saya meninggalkan kunci-kunci saya di atas nampan."
      ],
      challenge: "Tulis 4 kalimat tentang pekerjaan dengan jamak dari kata berakhiran y (company, city, delivery, key). Periksa mana yang mengikuti aturan huruf mati + y."
    }
  },
  {
    definition: "Most nouns ending in f or fe change to ves in the plural (knife - knives, leaf - leaves, life - lives, wife - wives). Some nouns ending in f or fe simply add s instead (chief - chiefs, cliff - cliffs, roof - roofs, safe - safes).",
    pattern: "f / fe to ves: knife - knives, leaf - leaves, life - lives, loaf - loaves, thief - thieves, wife - wives\nJust add s (f): chief - chiefs, cliff - cliffs, dwarf - dwarfs, hoof - hoofs, proof - proofs, roof - roofs\nJust add s (fe): fife - fifes, safe - safes, strife - strifes",
    examples: [
      ["She bought three knives for the kitchen.","knife - knives"],
      ["The leaves turn yellow in autumn.","leaf - leaves"],
      ["Both thieves were arrested.","thief - thieves"],
      ["The wives of the managers joined the dinner.","wife - wives"],
      ["The chiefs of the departments met today.","chief - chiefs (just + s)"],
      ["The office has two safes.","safe - safes (just + s)"]
    ],
    wrong: "The thiefs stole two loafs of bread.",
    right: "The thieves stole two loaves of bread.",
    challenge: "Write 4 sentences about a business scenario using plurals like lives, knives, chiefs, roofs. Be careful with which ones take ves and which take s.",
    quiz: [
      {"q":"Plural of chief:","a":["chiefs","chieves","chiefes","chievs"],"c":0,"x":"chief just adds s."},
      {"q":"Plural of life:","a":["lifes","lives","lifves","livees"],"c":1,"x":"life - lives."},
      {"q":"Plural of thief:","a":["thiefs","thieves","thiefes","thievs"],"c":1,"x":"thief - thieves."},
      {"q":"Plural of knife:","a":["knifes","knives","knifves","knifees"],"c":1,"x":"knife - knives."},
      {"q":"Plural of leaf:","a":["leafs","leaves","leafes","leavs"],"c":1,"x":"leaf - leaves."},
      {"q":"Plural of wife:","a":["wives","wifes","wifves","wifees"],"c":0,"x":"wife - wives."},
      {"q":"Plural of roof (as taught in the book):","a":["rooves","roofs","roofes","roofves"],"c":1,"x":"roof is one of the f nouns that only add s."},
      {"q":"Plural of cliff:","a":["clifves","cliffes","cliffs","clives"],"c":2,"x":"cliff just adds s."},
      {"q":"Plural of safe:","a":["saves","safes","safves","safees"],"c":1,"x":"safe just adds s."},
      {"q":"Plural of loaf:","a":["loafs","loaves","loafes","loavs"],"c":1,"x":"loaf - loaves."}
    ],
    guide: {
      summary: "Kata benda berakhir f atau fe biasanya berubah menjadi ves (knife - knives). Tetapi beberapa hanya ditambah s (chief - chiefs, roof - roofs).",
      pattern: "Hafalkan yang umum: life, wife, knife, leaf, loaf, thief = ves. Yang cukup ditambah s: chief, cliff, roof, safe, proof.",
      vocab: [
        ["knife","pisau"],
        ["thief","pencuri"],
        ["roof","atap"],
        ["chief","kepala"]
      ],
      translations: [
        "Dia membeli tiga pisau untuk dapur.",
        "Daun-daun berubah kuning di musim gugur.",
        "Kedua pencuri itu ditangkap.",
        "Para istri manajer ikut makan malam.",
        "Para kepala departemen bertemu hari ini.",
        "Kantor itu punya dua brankas."
      ],
      challenge: "Tulis 4 kalimat bisnis dengan jamak seperti lives, knives, chiefs, roofs. Hati-hati mana yang ves dan mana yang hanya s."
    }
  },
  {
    definition: "A noun ending in o after a consonant usually takes -es (hero - heroes, potato - potatoes, tomato - tomatoes), while a noun ending in o after a vowel just adds -s (radio - radios, studio - studios, bamboo - bamboos).",
    pattern: "Consonant + o: + es - buffalo - buffaloes, hero - heroes, mango - mangoes, potato - potatoes, tomato - tomatoes, volcano - volcanoes\nVowel + o: + s - bamboo - bamboos, folio - folios, igloo - igloos, radio - radios, studio - studios, tattoo - tattoos\nNote: tornado - tornados / tornadoes (both seen)",
    examples: [
      ["The heroes of the story were brave.","hero - heroes"],
      ["We bought potatoes and tomatoes.","potato - potatoes, tomato - tomatoes"],
      ["There are many volcanoes in Indonesia.","volcano - volcanoes"],
      ["The radios are on the shelf.","radio - radios"],
      ["Our company owns two studios.","studio - studios"],
      ["He has two tattoos.","tattoo - tattoos"]
    ],
    wrong: "The farmer sold potatos and tomatos at the market.",
    right: "The farmer sold potatoes and tomatoes at the market.",
    challenge: "Write 4 sentences about a market or a media company using words like potatoes, heroes, radios, studios. Check each plural.",
    quiz: [
      {"q":"Plural of potato:","a":["potatos","potatoes","potatoies","potatoz"],"c":1,"x":"consonant + o: es."},
      {"q":"Plural of hero:","a":["heroes","heros","heroies","heroz"],"c":0,"x":"consonant + o: es."},
      {"q":"Plural of tomato:","a":["tomatos","tomatoies","tomatoes","tomatoz"],"c":2,"x":"consonant + o: es."},
      {"q":"Plural of radio:","a":["radioes","radios","radioies","radioz"],"c":1,"x":"vowel + o: s."},
      {"q":"Plural of studio:","a":["studios","studioes","studioies","studioz"],"c":0,"x":"vowel + o: s."},
      {"q":"Plural of bamboo:","a":["bambooes","bamboois","bamboos","bamboz"],"c":2,"x":"vowel + o: s."},
      {"q":"Plural of igloo:","a":["iglooes","igloos","igloois","igloz"],"c":1,"x":"vowel + o: s."},
      {"q":"Plural of tattoo:","a":["tattooes","tattooz","tattoos","tattoois"],"c":2,"x":"vowel + o: s."},
      {"q":"If a noun ends in o after a consonant, the plural is usually formed by adding:","a":["es","s","ies","ves"],"c":0,"x":"e.g. hero - heroes."},
      {"q":"If a noun ends in o after a vowel, the plural is formed by adding:","a":["s","es","ies","en"],"c":0,"x":"e.g. radio - radios."}
    ],
    guide: {
      summary: "Kata benda berakhir huruf mati + o biasanya ditambah es (hero - heroes). Jika huruf hidup + o, cukup ditambah s (radio - radios).",
      pattern: "Lihat huruf sebelum o. Huruf mati = es (potato, tomato, hero). Huruf hidup = s (radio, studio, bamboo).",
      vocab: [
        ["hero","pahlawan"],
        ["volcano","gunung berapi"],
        ["studio","studio"],
        ["tattoo","tato"]
      ],
      translations: [
        "Para pahlawan dalam cerita itu pemberani.",
        "Kami membeli kentang dan tomat.",
        "Ada banyak gunung berapi di Indonesia.",
        "Radio-radio itu ada di rak.",
        "Perusahaan kami memiliki dua studio.",
        "Dia punya dua tato."
      ],
      challenge: "Tulis 4 kalimat tentang pasar atau perusahaan media dengan kata seperti potatoes, heroes, radios, studios. Periksa tiap bentuk jamaknya."
    }
  },
  {
    definition: "Some nouns have irregular plurals: they change inside the word (man - men, tooth - teeth, goose - geese, mouse - mice, louse - lice, foot - feet, woman - women, dormouse - dormice), add -en/-ren (child - children, ox - oxen), or keep the same form (deer, sheep, furniture). A few nouns exist only in the plural (scissors, spectacles, thanks, goods, arms, means, nuptials, pincers, tidings). Words from Latin often change their ending (analysis - analyses, crisis - crises, locus - loci).",
    pattern: "Inside change: man - men, woman - women, foot - feet, tooth - teeth, goose - geese, mouse - mice, louse - lice, dormouse - dormice\n+ en / ren: child - children, ox - oxen\nSame form: deer - deer, sheep - sheep, furniture - furniture\nPlural only: scissors, spectacles, thanks, goods, arms, means, pincers, nuptials, tidings\nLatin: analysis - analyses, crisis - crises, locus - loci\nNote: news and furniture are treated as singular uncountable nouns in modern English",
    examples: [
      ["The men and women attended the workshop.","man - men, woman - women"],
      ["Brush your teeth twice a day.","tooth - teeth"],
      ["Three children are playing outside.","child - children"],
      ["The farmer has four oxen.","ox - oxen"],
      ["There are many sheep in the field.","sheep - sheep (same form)"],
      ["Where are my scissors?","scissors has no singular"],
      ["The analyses show a clear trend.","analysis - analyses"]
    ],
    wrong: "The childs and the womans took their toothes to the dentist.",
    right: "The children and the women took their teeth to the dentist. (Better: went to the dentist for check-ups.)",
    challenge: "Write 4 sentences about work using irregular plurals (people, women, men, children, crises, analyses). Include one sentence with scissors or spectacles.",
    quiz: [
      {"q":"Plural of analysis:","a":["analysises","analyses","analysis","analysi"],"c":1,"x":"Latin-based: analysis - analyses."},
      {"q":"Plural of crisis:","a":["crisises","crises","crisi","crisis"],"c":1,"x":"crisis - crises."},
      {"q":"Plural of locus:","a":["loci","locuses","locs","locuss"],"c":0,"x":"locus - loci."},
      {"q":"Plural of louse:","a":["louses","lice","lices","lousen"],"c":1,"x":"louse - lice."},
      {"q":"Plural of ox:","a":["oxes","oxen","oxs","oxens"],"c":1,"x":"ox - oxen."},
      {"q":"Plural of tooth:","a":["tooths","teeth","teeths","toothes"],"c":1,"x":"tooth - teeth."},
      {"q":"Plural of woman:","a":["womans","womens","women","womanes"],"c":2,"x":"woman - women."},
      {"q":"Plural of mouse:","a":["mouses","mice","meese","mices"],"c":1,"x":"mouse - mice."},
      {"q":"Plural of sheep:","a":["sheeps","sheep","sheepes","sheepen"],"c":1,"x":"sheep has the same form in plural."},
      {"q":"Plural of man:","a":["mans","menn","men","manes"],"c":2,"x":"man - men."},
      {"q":"Plural of child:","a":["childs","childes","children","childen"],"c":2,"x":"child - children."},
      {"q":"Which noun normally has no singular form?","a":["scissors","table","book","pen"],"c":0,"x":"scissors is used only in the plural."}
    ],
    guide: {
      summary: "Beberapa kata benda punya bentuk jamak tidak beraturan: berubah di tengah (man - men), ditambah -en (child - children), atau tidak berubah (sheep). Ada juga yang hanya berbentuk jamak (scissors).",
      pattern: "Hafalkan sebagai daftar kecil: man/men, woman/women, tooth/teeth, foot/feet, mouse/mice, child/children, ox/oxen, sheep/sheep. Kata dari Latin: analysis/analyses, crisis/crises.",
      vocab: [
        ["tooth / teeth","gigi"],
        ["sheep","domba"],
        ["scissors","gunting"],
        ["crisis","krisis"]
      ],
      translations: [
        "Para pria dan wanita menghadiri lokakarya itu.",
        "Sikat gigimu dua kali sehari.",
        "Tiga anak sedang bermain di luar.",
        "Petani itu punya empat ekor lembu.",
        "Ada banyak domba di ladang.",
        "Di mana gunting saya?",
        "Hasil analisis itu menunjukkan tren yang jelas."
      ],
      challenge: "Tulis 4 kalimat tentang pekerjaan dengan jamak tak beraturan (people, women, men, children, crises, analyses). Sertakan satu kalimat dengan scissors atau spectacles."
    }
  }
];
