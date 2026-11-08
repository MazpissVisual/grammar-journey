// Unit 01 · parts-of-speech — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["parts-of-speech"] = [
  "Noun and Pronoun",
  "Verb, Adjective and Adverb",
  "Preposition, Conjunction and Interjection",
  "Identify the Part of Speech",
  "One Word, Many Roles"
];

window.lessonData["parts-of-speech"] = [
  {
    definition: "English words are grouped into eight parts of speech based on their meaning and function. A noun names a person, animal, object, place, situation, quality or idea. A pronoun is a word that takes the place of a noun.",
    pattern: "8 parts of speech:\nNoun, Pronoun, Verb, Adjective,\nAdverb, Preposition, Conjunction, Interjection\n\nNoun = name (book, Jakarta, kindness)\nPronoun = replaces a noun (he, herself, this, what, nobody)",
    examples: [
      ["Take your book, please!","book = noun (object)"],
      ["Jakarta is the capital of Indonesia.","Jakarta = noun (place)"],
      ["The teacher will be happy with your kindness.","kindness = noun (quality)"],
      ["My belief in Allah saves me.","belief = noun (idea)"],
      ["Tony says that he has finished the work.","he = pronoun replacing Tony"],
      ["Suciyati weighs herself every day.","herself = pronoun"],
      ["These shoes are mine.","mine = pronoun"]
    ],
    wrong: "Nobody did nothing.",
    right: "Nobody did anything.",
    challenge: "Write 3 sentences about your job: each must contain one noun for a person, one for a place and one pronoun that replaces a noun.",
    quiz: [
      {"q":"Which word is a noun in: \"Take your book, please!\"?","a":["Take","your","book","please"],"c":2,"x":"Book names an object, so it is a noun."},
      {"q":"Which word is a pronoun in: \"Tony says that he has finished the work.\"?","a":["Tony","says","he","work"],"c":2,"x":"He replaces the noun Tony."},
      {"q":"In \"Suciyati weighs herself every day\", herself is a ...","a":["pronoun","noun","verb","adverb"],"c":0,"x":"Herself stands in place of the noun Suciyati."},
      {"q":"Which word is a noun naming a quality in: \"The teacher will be happy with your kindness.\"?","a":["happy","will","kindness","with"],"c":2,"x":"Kindness is the name of a quality, so it is a noun."},
      {"q":"In \"These shoes are mine\", what is the word mine?","a":["noun","pronoun","preposition","adjective"],"c":1,"x":"Mine replaces the noun phrase 'my shoes'."}
    ],
    guide: {
      summary: "Bahasa Inggris punya 8 jenis kata (parts of speech). Noun adalah kata benda (nama orang, hewan, benda, tempat, sifat, ide). Pronoun adalah kata ganti yang menggantikan noun.",
      pattern: "Tanya: kata ini NAMA sesuatu? Kalau ya, itu noun. Kata ini MENGGANTIKAN noun supaya tidak diulang? Itu pronoun.",
      vocab: [
        ["noun","kata benda"],
        ["pronoun","kata ganti"],
        ["kindness","kebaikan"],
        ["belief","keyakinan"]
      ],
      translations: [
        "Ambil bukumu, tolong!",
        "Jakarta adalah ibu kota Indonesia.",
        "Guru akan senang dengan kebaikanmu.",
        "Keyakinanku kepada Allah menyelamatkanku.",
        "Tony bilang dia sudah menyelesaikan pekerjaan itu.",
        "Suciyati menimbang berat badannya sendiri setiap hari.",
        "Sepatu ini milikku."
      ],
      challenge: "Tulis 3 kalimat tentang pekerjaanmu. Tiap kalimat memuat noun orang, noun tempat, dan satu pronoun yang menggantikan noun."
    }
  },
  {
    definition: "A verb tells of an action or a state of being and the time it happens. An adjective describes a noun or pronoun. An adverb describes a verb, an adjective, or another adverb.",
    pattern: "Verb: studies, walking, appear, looked, is, had\nAdjective: diligent boy, two pens, some books, these students, every pupil, our room\nAdverb: runs quickly (verb), very large (adjective), extremely fast (adverb)",
    examples: [
      ["Alfian studies Grammar.","studies = verb (action)"],
      ["They looked tired.","looked = verb (state)"],
      ["Harun is a diligent boy.","diligent = adjective describing boy"],
      ["Rahman has two pens.","two = adjective of number"],
      ["Ali runs quickly.","quickly = adverb modifying runs"],
      ["This room is very large.","very = adverb modifying large"],
      ["They talk extremely fast.","extremely = adverb modifying fast"],
      ["That driver drives more slowly.","more = adverb modifying slowly"]
    ],
    wrong: "He speaks English good.",
    right: "He speaks English well.",
    challenge: "Write 3 sentences about a work task. Use one verb, one adjective describing a noun, and one adverb describing a verb. Label each.",
    quiz: [
      {"q":"What part of speech is \"studies\" in \"Alfian studies Grammar\"?","a":["noun","verb","adjective","adverb"],"c":1,"x":"It tells what Alfian does, so it is a verb."},
      {"q":"What part of speech is \"diligent\" in \"Harun is a diligent boy\"?","a":["adverb","verb","noun","adjective"],"c":3,"x":"It describes the noun boy."},
      {"q":"What part of speech is \"quickly\" in \"Ali runs quickly\"?","a":["adjective","adverb","noun","pronoun"],"c":1,"x":"It describes the verb runs."},
      {"q":"In \"The problem is too difficult\", \"too\" is ...","a":["an adverb modifying an adjective","an adjective modifying a noun","a verb","a preposition"],"c":0,"x":"Too modifies the adjective difficult, so it is an adverb."},
      {"q":"In \"Rahman has two pens\", \"two\" is ...","a":["a noun","an adverb","an adjective","a pronoun"],"c":2,"x":"Two tells how many pens, so it is an adjective."},
      {"q":"Choose the sentence with the correct word to describe the verb.","a":["He speaks English good.","He speaks English well.","He speaks well English good.","He speak English goodly."],"c":1,"x":"Well is an adverb and describes the verb speaks."}
    ],
    guide: {
      summary: "Verb menyatakan aksi atau keadaan dan waktu. Adjective (kata sifat) menjelaskan noun/pronoun. Adverb (kata keterangan) menjelaskan verb, adjective, atau adverb lain.",
      pattern: "Adjective menjawab: yang mana/bagaimana/berapa (diligent boy). Adverb menjawab: bagaimana aksi dilakukan (runs quickly). Banyak adverb berakhiran -ly.",
      vocab: [
        ["verb","kata kerja"],
        ["adjective","kata sifat"],
        ["adverb","kata keterangan"],
        ["diligent","rajin"]
      ],
      translations: [
        "Alfian belajar Grammar.",
        "Mereka tampak lelah.",
        "Harun adalah anak laki-laki yang rajin.",
        "Rahman punya dua pulpen.",
        "Ali berlari dengan cepat.",
        "Ruangan ini sangat besar.",
        "Mereka berbicara sangat cepat.",
        "Pengemudi itu mengemudi lebih pelan."
      ],
      challenge: "Tulis 3 kalimat tentang tugas kerja. Pakai satu verb, satu adjective yang menjelaskan noun, dan satu adverb yang menjelaskan verb. Beri label."
    }
  },
  {
    definition: "A preposition is placed before a noun or pronoun to show its relationship to other words. A conjunction connects words or sentences. An interjection is an exclamatory word or phrase that shows a sudden feeling.",
    pattern: "Preposition: with, to, for, on, in, besides, after\nConjunction: and, but, before, because, either...or, otherwise\nInterjection: Oh, Well, Uh, Hurrah!, Alas!, Bah",
    examples: [
      ["I cut meat with a knife.","with = preposition"],
      ["The book is on the table.","on = preposition (position)"],
      ["Rudi and Ali came yesterday.","and = conjunction joining names"],
      ["She is intelligent but lazy.","but = conjunction (contrast)"],
      ["Because he was naughty, his parents punished him.","because = conjunction (reason)"],
      ["We must be early; otherwise we won't get a seat.","otherwise = conjunction"],
      ["Hurrah! We have won!","Hurrah = interjection"],
      ["Alas! He realized his folly too late.","Alas = interjection"]
    ],
    wrong: "I cut meat with knife.",
    right: "I cut meat with a knife.",
    challenge: "Write 3 short sentences for a work email: one with a preposition, one with a conjunction, and one with an interjection.",
    quiz: [
      {"q":"In \"The book is on the table\", \"on\" is a ...","a":["conjunction","preposition","adverb","interjection"],"c":1,"x":"On links book and table, so it is a preposition."},
      {"q":"In \"Rudi and Ali came yesterday\", \"and\" is a ...","a":["preposition","pronoun","conjunction","verb"],"c":2,"x":"And joins two names."},
      {"q":"Which word is an interjection in \"Hurrah! We have won!\"?","a":["We","have","won","Hurrah"],"c":3,"x":"Hurrah expresses sudden joy."},
      {"q":"In \"We must be early; otherwise we won't get a seat\", \"otherwise\" is a ...","a":["conjunction","noun","preposition","interjection"],"c":0,"x":"It connects two clauses."},
      {"q":"In \"She goes to the cafeteria\", \"to\" is a ...","a":["verb","pronoun","adjective","preposition"],"c":3,"x":"To shows direction toward the noun cafeteria."},
      {"q":"In \"He has breakfast before he goes to school\", \"before\" connects two clauses, so it is a ...","a":["conjunction","preposition","noun","interjection"],"c":0,"x":"Before is followed by a clause (he goes), so here it is a conjunction."}
    ],
    guide: {
      summary: "Preposition (kata depan) berada sebelum noun/pronoun untuk menunjukkan hubungan. Conjunction (kata sambung) menghubungkan kata atau kalimat. Interjection (kata seru) mengungkapkan perasaan mendadak.",
      pattern: "Preposition + noun (on the table). Conjunction menyambung dua hal (and, but, because). Interjection biasanya diikuti tanda seru (Hurrah!).",
      vocab: [
        ["preposition","kata depan"],
        ["conjunction","kata sambung"],
        ["interjection","kata seru"],
        ["otherwise","kalau tidak"]
      ],
      translations: [
        "Aku memotong daging dengan pisau.",
        "Buku itu ada di atas meja.",
        "Rudi dan Ali datang kemarin.",
        "Dia pintar tetapi malas.",
        "Karena dia nakal, orang tuanya menghukumnya.",
        "Kita harus datang awal; kalau tidak, kita tidak dapat tempat duduk.",
        "Hore! Kita menang!",
        "Sayang sekali! Dia menyadari kebodohannya terlalu terlambat."
      ],
      challenge: "Tulis 3 kalimat pendek untuk email kerja: satu dengan preposition, satu dengan conjunction, satu dengan interjection."
    }
  },
  {
    definition: "To find a word's part of speech, look at what the word does in its sentence. The same word can fall into different classes. Practise naming the part of speech of an underlined word.",
    pattern: "Noun / Pronoun / Verb / Adjective\nAdverb / Preposition / Conjunction / Interjection\n\nAsk: what does this word do here?\nnames something = noun, replaces a noun = pronoun,\nshows action/state = verb, describes a noun = adjective,\ndescribes verb/adj/adv = adverb, links to a noun = preposition,\nconnects = conjunction, sudden feeling = interjection",
    examples: [
      ["Luthfi is never late for school.","late = adjective (describes Luthfi)"],
      ["The choir practiced hard for the show.","hard = adverb"],
      ["The fishermen returned with a big catch.","big = adjective"],
      ["Well, did you have a good time?","Well = interjection"],
      ["The baby is crying because he is hungry.","because = conjunction"],
      ["There is no secret between us.","between = preposition"],
      ["Mrs. Maria worked so hard that she fell ill.","she = pronoun"]
    ],
    wrong: "The choir practiced hardly for the show.",
    right: "The choir practiced hard for the show.",
    challenge: "Write 4 sentences about your daily work and underline one word in each. Name the part of speech of each underlined word.",
    quiz: [
      {"q":"Luthfi is never late for school. (late)","a":["noun","adjective","adverb","verb"],"c":1,"x":"Late describes Luthfi after the linking verb is."},
      {"q":"It rained the whole night. (rained)","a":["adverb","verb","noun","adjective"],"c":1,"x":"Rained is the action of the sentence."},
      {"q":"The choir practiced hard for the show. (hard)","a":["adjective","noun","preposition","adverb"],"c":3,"x":"Hard tells how the choir practiced."},
      {"q":"The fishermen returned with a big catch. (big)","a":["noun","pronoun","adjective","adverb"],"c":2,"x":"Big describes the noun catch."},
      {"q":"\"Well, did you have a good time?\" (Well)","a":["interjection","adverb","adjective","conjunction"],"c":0,"x":"Well here is an exclamation opening the question."},
      {"q":"The baby is crying because he is hungry. (because)","a":["adverb","pronoun","conjunction","preposition"],"c":2,"x":"Because joins two clauses."},
      {"q":"Is Ali learning English? (Is)","a":["noun","adverb","conjunction","verb"],"c":3,"x":"Is is the helping verb in the continuous tense."},
      {"q":"There is no secret between us. (between)","a":["preposition","conjunction","adverb","adjective"],"c":0,"x":"Between is followed by the pronoun us."},
      {"q":"Mrs. Maria worked so hard that she fell ill. (she)","a":["adjective","verb","pronoun","noun"],"c":2,"x":"She replaces the noun Mrs. Maria."},
      {"q":"Put the parcel on the table. (Put)","a":["adverb","adjective","verb","noun"],"c":2,"x":"Put is a command verb."}
    ],
    guide: {
      summary: "Untuk menentukan jenis kata, lihat fungsinya dalam kalimat, bukan hanya bentuknya. Latihan ini mengidentifikasi part of speech kata bergaris bawah.",
      pattern: "Tanyakan: kata ini melakukan apa di kalimat? Menamai (noun), menggantikan noun (pronoun), aksi (verb), menjelaskan noun (adjective), menjelaskan verb (adverb), menghubungkan (preposition/conjunction), seruan (interjection).",
      vocab: [
        ["choir","paduan suara"],
        ["catch","hasil tangkapan"],
        ["secret","rahasia"],
        ["parcel","paket"]
      ],
      translations: [
        "Luthfi tidak pernah terlambat ke sekolah.",
        "Paduan suara berlatih keras untuk pertunjukan.",
        "Para nelayan kembali dengan hasil tangkapan besar.",
        "Nah, apakah kamu bersenang-senang?",
        "Bayi itu menangis karena dia lapar.",
        "Tidak ada rahasia di antara kita.",
        "Bu Maria bekerja begitu keras sehingga dia jatuh sakit."
      ],
      challenge: "Tulis 4 kalimat tentang pekerjaan harianmu, garis bawahi satu kata di tiap kalimat, lalu sebutkan jenis katanya."
    }
  },
  {
    definition: "Many English words change their part of speech depending on how they are used. Always judge a word by its job in the sentence: match can be a noun or a verb, live a verb or an adjective, kind a noun or an adjective.",
    pattern: "match: a soccer match (noun) / do not match (verb)\nlive: They live in prosperity (verb) / a live telecast (adjective)\nkind: kind to people (adjective) / the kind of man (noun)\nwell: works well (adverb)\ntime: Do you realize what time it is? (noun)",
    examples: [
      ["We watched a soccer match yesterday.","match = noun"],
      ["Their characters do not match.","match = verb"],
      ["They live in prosperity.","live = verb"],
      ["There was a live telecast of the concert.","live = adjective"],
      ["Agus works well.","well = adverb"],
      ["People are usually kind to those in need.","kind = adjective"],
      ["This is the kind of man I detest.","kind = noun"],
      ["Look carefully before you cross the road.","carefully = adverb, road = noun"]
    ],
    wrong: "Agus works good.",
    right: "Agus works well.",
    challenge: "Write two sentences using the word 'work' (or 'plan'), once as a noun and once as a verb, about your job.",
    quiz: [
      {"q":"We watched a soccer match yesterday. (match)","a":["noun","verb","adjective","adverb"],"c":0,"x":"Match is a thing watched, so a noun."},
      {"q":"Their characters do not match. (match)","a":["adjective","pronoun","verb","noun"],"c":2,"x":"Match is the action after do not."},
      {"q":"Do you realize what time it is? (time)","a":["adverb","adjective","noun","verb"],"c":2,"x":"Time names the thing asked about."},
      {"q":"They live in prosperity. (live)","a":["adverb","verb","adjective","noun"],"c":1,"x":"Live is what they do."},
      {"q":"There was a live telecast of the concert. (live)","a":["adjective","verb","noun","adverb"],"c":0,"x":"Live describes the noun telecast."},
      {"q":"Agus works well. (well)","a":["interjection","adverb","adjective","noun"],"c":1,"x":"Well describes how Agus works."},
      {"q":"People are usually kind to those in need. (kind)","a":["adjective","noun","verb","adverb"],"c":0,"x":"Kind describes People."},
      {"q":"This is the kind of man I detest. (kind)","a":["noun","adjective","verb","adverb"],"c":0,"x":"Kind here means 'type', a noun."},
      {"q":"Look carefully before you cross the road. (carefully)","a":["adjective","noun","preposition","adverb"],"c":3,"x":"Carefully describes the verb look."},
      {"q":"Many yearn for success, but few are willing to strive for it. (but)","a":["interjection","conjunction","preposition","adverb"],"c":1,"x":"But joins two contrasting clauses."},
      {"q":"He looked forward eagerly to the trip. (to)","a":["verb","preposition","conjunction","adverb"],"c":1,"x":"To comes before the noun trip."},
      {"q":"Several countries are troubled by economic and social problems. (Several)","a":["adverb","pronoun","verb","adjective"],"c":3,"x":"Several tells how many countries."}
    ],
    guide: {
      summary: "Satu kata bisa punya jenis berbeda tergantung pemakaian. Contoh: match bisa noun atau verb, live bisa verb atau adjective, kind bisa noun atau adjective.",
      pattern: "Jangan hafal kata saja. Lihat posisinya: setelah a/the biasanya noun, setelah subjek biasanya verb, sebelum noun biasanya adjective.",
      vocab: [
        ["match","pertandingan / cocok"],
        ["live","tinggal / langsung"],
        ["kind","baik / jenis"],
        ["prosperity","kemakmuran"]
      ],
      translations: [
        "Kami menonton pertandingan sepak bola kemarin.",
        "Karakter mereka tidak cocok.",
        "Mereka hidup dalam kemakmuran.",
        "Ada siaran langsung konser itu.",
        "Agus bekerja dengan baik.",
        "Orang-orang biasanya baik kepada mereka yang membutuhkan.",
        "Ini jenis pria yang kubenci.",
        "Lihatlah dengan hati-hati sebelum menyeberang jalan."
      ],
      challenge: "Tulis dua kalimat dengan kata work (atau plan) tentang pekerjaanmu: sekali sebagai noun dan sekali sebagai verb."
    }
  }
];
