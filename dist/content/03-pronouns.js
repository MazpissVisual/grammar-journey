// Unit 03 · pronouns — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["pronouns"] = [
  "Personal Pronouns",
  "Possessive Pronouns",
  "Demonstrative Pronouns",
  "Relative Pronouns",
  "Interrogative Pronouns",
  "Indefinite Pronouns",
  "Emphatic & Reflexive Pronouns"
];

window.lessonData["pronouns"] = [
  {
    definition: "A pronoun is a word used in place of a noun. There are seven kinds: personal, possessive, demonstrative, relative, interrogative, indefinite, and emphatic/reflexive. A personal pronoun stands for the person speaking, spoken to, or spoken of, and it can be the subject or the object of a sentence. I, you, he, she, and we refer mainly to people; it refers to non-human creatures, things, events, places, and abstract ideas; they can refer to both people and things.",
    pattern: "Person | Subject | Object\n1st singular: I | me\n2nd singular: you | you\n3rd singular: he | him / she | her / it | it\n1st plural: we | us\n2nd plural: you | you\n3rd plural: they | them\nSubject goes before the verb; object goes after the verb or a preposition.",
    examples: [
      ["I have a stamp-album.","I = subject."],
      ["She is a kind lady.","She = subject."],
      ["My father gave me a present.","me = object of gave."],
      ["Mariah visited them yesterday.","them = object of visited."],
      ["We dislike him as much as they do.","they = subject of do; him = object."]
    ],
    wrong: "My sister and me always play together.",
    right: "My sister and I always play together.",
    challenge: "Write five sentences about your team or your family. Use at least two subject pronouns and two object pronouns.",
    quiz: [
      {"q":"Choose the correct pronoun: “We got the news from ___.”","a":["they","them","their","theirs"],"c":1,"x":"After the preposition ‘from’ we need an object pronoun: them."},
      {"q":"Choose the correct pronoun: “My sister and ___ always play together.”","a":["me","I","myself","mine"],"c":1,"x":"‘My sister and I’ is the subject of ‘play’, so use the subject form I."},
      {"q":"Choose the correct pronoun: “The presents were given to ___ and her brothers.”","a":["she","her","hers","herself"],"c":1,"x":"After the preposition ‘to’ use the object form: her."},
      {"q":"Choose the correct pronoun: “___ and her friends will sleep in one room.”","a":["Her","She","Hers","Herself"],"c":1,"x":"It is the subject of ‘will sleep’, so use she."},
      {"q":"Choose the correct pronoun: “We forgot to remind ___ of the meeting.”","a":["he","his","him","himself"],"c":2,"x":"‘Him’ is the object of the verb ‘remind’."},
      {"q":"Choose the correct pronoun: “We dislike him as much as ___ do.”","a":["them","they","their","theirs"],"c":1,"x":"‘They’ is the subject of the understood verb: ... as much as they do."},
      {"q":"Choose the correct pronoun: “They always try to insult ___.”","a":["I","my","me","mine"],"c":2,"x":"‘Me’ is the object of ‘insult’."},
      {"q":"Choose the correct pronoun: “Let you and ___ settle our problem at once!”","a":["I","me","my","mine"],"c":1,"x":"After ‘let’ we use object pronouns: let you and me."},
      {"q":"Which personal pronoun generally refers to things, events, places, and ideas?","a":["he","she","it","we"],"c":2,"x":"‘It’ is used for non-human living creatures, things, events, places, and abstract ideas."}
    ],
    guide: {
      summary: "Pronoun adalah kata ganti pengganti noun. Personal pronoun adalah kata ganti orang: orang yang berbicara, diajak bicara, atau dibicarakan. Bentuknya berubah menurut posisinya: sebagai pelaku (subject) atau penerima (object).",
      pattern: "Sebelum kata kerja pakai I/you/he/she/it/we/they. Sesudah kata kerja atau kata depan (from, to, with) pakai me/you/him/her/it/us/them. It dipakai untuk benda, tempat, kejadian, dan ide.",
      vocab: [
        ["subject","pelaku"],
        ["object","penerima tindakan"],
        ["pronoun","kata ganti"],
        ["person","orang (pelaku bicara)"]
      ],
      translations: [
        "Saya punya album prangko.",
        "Dia adalah wanita yang baik.",
        "Ayah saya memberi saya hadiah.",
        "Mariah mengunjungi mereka kemarin.",
        "Kami tidak menyukainya sebesar mereka tidak menyukainya."
      ],
      challenge: "Tulis lima kalimat tentang tim atau keluargamu. Pakai minimal dua subject pronoun dan dua object pronoun."
    }
  },
  {
    definition: "A possessive pronoun shows possession and stands alone, with no noun after it. Compare ‘my pen’ (possessive adjective + noun) with ‘mine’ (possessive pronoun, replacing ‘my pen’).",
    pattern: "Person | Subject | Object | Possessive\nI | me | mine\nyou | you | yours\nhe | him | his\nshe | her | hers\nwe | us | ours\nyou (plural) | you | yours\nthey | them | theirs\nNo noun after a possessive pronoun: This school is ours.",
    examples: [
      ["The blue pen is mine.","mine = my pen."],
      ["Is this key yours?","yours = your key."],
      ["That is Aminah; this car is hers.","hers = her car."],
      ["This school is ours.","ours = our school."],
      ["Fatmawati is a friend of ours.","after ‘of’ use a possessive pronoun."]
    ],
    wrong: "This school is our.",
    right: "This school is ours.",
    challenge: "Compare your tools with a colleague's. Write four sentences using mine, yours, his/hers, and ours/theirs.",
    quiz: [
      {"q":"Choose the correct word: “Nobody believes that this villa is ___.”","a":["I","my","mine","me"],"c":2,"x":"No noun follows the blank, so use the possessive pronoun mine."},
      {"q":"Complete: “I don't know who the owner of that car is. Isn't it ___?”","a":["your","yours","you","yourself"],"c":1,"x":"No noun follows, so use yours (= your car)."},
      {"q":"Complete: “That book is ___, but this one is his.”","a":["she","her","hers","herself"],"c":2,"x":"A possessive pronoun that stands alone: hers."},
      {"q":"Choose the correct word: “Fatmawati is a friend of ___.”","a":["we","ours","us","our"],"c":1,"x":"After ‘of’ a possessive pronoun is needed: a friend of ours."},
      {"q":"Complete: “I keep my money at home and Dewi and Fatmawati keep ___ in a bank.”","a":["hers","his","mine","theirs"],"c":3,"x":"‘Theirs’ replaces ‘their money’ for Dewi and Fatmawati."},
      {"q":"Complete: “We never care so much about our books, but Subhan's mother always takes good care of ___.”","a":["his","hers","ours","theirs"],"c":1,"x":"Subhan's mother is a woman, so hers (= her books)."},
      {"q":"Complete: “I agree to return ___ if you give mine back.”","a":["mine","yours","your","you"],"c":1,"x":"‘Yours’ = your thing; it contrasts with ‘mine’."},
      {"q":"Choose the correct word: “Firdaus is actually an old friend of ___.”","a":["she","her","hers","herself"],"c":2,"x":"After ‘of’ use the possessive pronoun hers."},
      {"q":"Complete: “This house belongs to a gentleman, and that one belongs to his wife. Either ___ or hers costs quite a lot of money.”","a":["his","he","him","himself"],"c":0,"x":"‘His’ is the possessive pronoun that pairs with ‘hers’."},
      {"q":"Which word is a possessive pronoun?","a":["my","mine","me","myself"],"c":1,"x":"‘Mine’ stands alone; ‘my’ needs a noun after it."}
    ],
    guide: {
      summary: "Possessive pronoun adalah kata ganti kepemilikan yang berdiri sendiri, tanpa noun di belakangnya. ‘Mine’ berarti ‘milik saya’, jadi tidak perlu lagi menulis ‘my pen’.",
      pattern: "Kalau setelah kata itu ada noun, pakai my/your/her/our/their. Kalau tidak ada noun, pakai mine/yours/hers/ours/theirs. Setelah ‘of’ juga pakai bentuk ini (a friend of ours).",
      vocab: [
        ["mine","milik saya"],
        ["yours","milikmu"],
        ["hers","miliknya (perempuan)"],
        ["theirs","milik mereka"]
      ],
      translations: [
        "Pulpen biru itu milik saya.",
        "Apakah kunci ini milikmu?",
        "Itu Aminah; mobil ini miliknya.",
        "Sekolah ini milik kami.",
        "Fatmawati adalah salah satu teman kami."
      ],
      challenge: "Bandingkan barang-barangmu dengan milik rekan kerja. Tulis empat kalimat dengan mine, yours, his/hers, dan ours/theirs."
    }
  },
  {
    definition: "A demonstrative pronoun points to nouns: this, that, these, those. This and that refer to singular nouns; these and those refer to plural ones. This and these point to persons or things near the speaker; that and those point to persons or things farther away.",
    pattern: "Near: this (singular) | these (plural)\nFar: that (singular) | those (plural)\nWhen you change to plural, the verb and noun change too: That is my pen → Those are my pens.",
    examples: [
      ["This is math and that is a reading book.","this = near; that = farther away."],
      ["My father gave me five pens, and these are in my room.","these points back to the pens."],
      ["Both pails are full, but this one holds more water than that.","this one / that compare two things."],
      ["These sandals are new, but those boots are old.","these / those are plural."]
    ],
    wrong: "These is my magazines.",
    right: "These are my magazines.",
    challenge: "Look around your workspace. Write four sentences using this, that, these, and those.",
    quiz: [
      {"q":"Change to plural: “That is his table-tennis bat.”","a":["Those is his table-tennis bats.","Those are his table-tennis bats.","These are his table-tennis bats.","That are his table-tennis bats."],"c":1,"x":"That → those, is → are, bat → bats."},
      {"q":"Change to plural: “This is the present from Mariam.”","a":["These is the presents from Mariam.","Those are the presents from Mariam.","These are the presents from Mariam.","This are the presents from Mariam."],"c":2,"x":"This (near) → these, is → are, present → presents."},
      {"q":"Change to plural: “This is an unoccupied house.”","a":["These are unoccupied houses.","These are an unoccupied houses.","Those are unoccupied houses.","These is unoccupied houses."],"c":0,"x":"Drop ‘an’ with a plural noun and use are: These are unoccupied houses."},
      {"q":"Change to plural: “That is a rose bush.”","a":["Those are rose bush.","Those is rose bushes.","These are rose bushes.","Those are rose bushes."],"c":3,"x":"That → those; bush → bushes (add -es)."},
      {"q":"Change to plural: “This is a battery-operated toy.”","a":["These are battery-operated toys.","Those are battery-operated toys.","These is battery-operated toys.","This are battery-operated toys."],"c":0,"x":"This → these, is → are, toy → toys."},
      {"q":"Change to plural: “This is better than that.”","a":["These is better than those.","These are better than those.","These are better than that.","Those are better than these."],"c":1,"x":"Both pronouns become plural: these ... those, with are."},
      {"q":"Change to plural: “That is an expensive watch.”","a":["Those are expensive watches.","Those are an expensive watches.","These are expensive watches.","That are expensive watches."],"c":0,"x":"That → those, is → are, watch → watches."},
      {"q":"Change to plural: “This is my magazine.”","a":["These is my magazines.","These are my magazines.","These are my magazine.","Those are my magazines."],"c":1,"x":"This → these, is → are, magazine → magazines."},
      {"q":"Which pronoun points to a singular thing that is near the speaker?","a":["this","that","these","those"],"c":0,"x":"This = singular and near."},
      {"q":"Which pronoun points to plural things that are far from the speaker?","a":["this","that","these","those"],"c":3,"x":"Those = plural and far."}
    ],
    guide: {
      summary: "Demonstrative pronoun adalah kata tunjuk: this/these untuk yang dekat, that/those untuk yang jauh. This dan that untuk satu benda; these dan those untuk banyak benda.",
      pattern: "Dekat + satu = this. Dekat + banyak = these. Jauh + satu = that. Jauh + banyak = those. Saat jadi jamak, kata kerja dan noun ikut berubah (is → are, pen → pens).",
      vocab: [
        ["this","ini"],
        ["that","itu"],
        ["these","ini (jamak)"],
        ["those","itu (jamak)"]
      ],
      translations: [
        "Ini matematika dan itu buku bacaan.",
        "Ayah saya memberi saya lima pulpen, dan semuanya ada di kamar saya.",
        "Kedua ember penuh, tetapi yang ini memuat lebih banyak air daripada yang itu.",
        "Sandal-sandal ini baru, tetapi sepatu bot itu sudah tua."
      ],
      challenge: "Lihat sekeliling meja kerjamu. Tulis empat kalimat dengan this, that, these, dan those."
    }
  },
  {
    definition: "A relative (conjunctive) pronoun connects two parts of a sentence: who, whom, whose, which, and that. Who, whom, and whose refer to persons. Which is used for things and for persons considered as a group. That and which are usually interchangeable, but that is used more often after superlatives and after all, much, little, everything, and none.",
    pattern: "Person: who (subject) | whom (object) | whose (possession)\nThing: which\nThat: replaces who/which; common after superlatives, all, much, little, everything, none\nI like the person who is diligent.\nHe is willing to pay for the best that is available.",
    examples: [
      ["I like the person who is diligent.","who = person, subject."],
      ["Everyone cheered the player who scored three goals.","who = person."],
      ["We saw a film, which was very amusing.","which = thing."],
      ["Something that I don't like is to lie.","that = thing."],
      ["We comforted the woman whose savings were lost in the fire.","whose = possession."],
      ["All that you have said has been noted.","that after ‘all’."]
    ],
    wrong: "This is the student which comes from Surabaya.",
    right: "This is the student who comes from Surabaya.",
    challenge: "Describe a colleague, a tool, and a project using who, which, and that. Write one sentence for each.",
    quiz: [
      {"q":"Choose the correct word: “Here is the pen ___ you lent me.”","a":["who","which","whom","whose"],"c":1,"x":"‘Pen’ is a thing, so use ‘which’."},
      {"q":"Choose the correct word: “This is the student ___ comes from Surabaya.”","a":["who","which","whose","whichever"],"c":0,"x":"‘Student’ is a person and the word is the subject of ‘comes’: who."},
      {"q":"Choose the correct word: “They salvaged the ship ___ sank last month.”","a":["who","whom","which","whose"],"c":2,"x":"‘Ship’ is a thing: which."},
      {"q":"Choose the correct word: “The parcels ___ my aunt sent from Jakarta arrived this morning.”","a":["who","whose","whom","which"],"c":3,"x":"‘Parcels’ are things: which."},
      {"q":"Choose the correct word: “The teacher ___ taught me music has gone to London.”","a":["who","which","whose","whom"],"c":0,"x":"‘Teacher’ is a person and the subject of ‘taught’: who."},
      {"q":"Choose the correct word: “Children ___ parents are dead are called orphans.”","a":["who","which","whose","whom"],"c":2,"x":"‘Whose’ shows possession: the children's parents."},
      {"q":"Choose the correct word: “Have you forgotten all ___ I told you?”","a":["who","that","whom","whose"],"c":1,"x":"After ‘all’ we use ‘that’."},
      {"q":"Choose the correct word: “He remembers the registration number of the car ___ knocked him down.”","a":["who","whose","whom","which"],"c":3,"x":"‘Car’ is a thing: which."},
      {"q":"Choose the correct word: “Those ___ homes were affected by the flood were given shelter in a school building.”","a":["who","whom","whose","which"],"c":2,"x":"‘Whose homes’ shows possession."},
      {"q":"Choose the correct word: “Mr. Husain is the person ___ the committee voted chairman.”","a":["whom","whose","which","whoever"],"c":0,"x":"The committee voted the person: the person is the object, so whom."},
      {"q":"Choose the correct word: “The names of the pupils to ___ prizes were given appeared in the school magazine.”","a":["who","whom","whose","which"],"c":1,"x":"After the preposition ‘to’, a person takes ‘whom’."},
      {"q":"Choose the correct word: “He is willing to pay for the best ___ is available.”","a":["who","that","whom","whose"],"c":1,"x":"After a superlative (the best), ‘that’ is preferred."}
    ],
    guide: {
      summary: "Relative pronoun adalah kata ganti penghubung yang menyambung dua bagian kalimat, misalnya ‘orang yang…’ atau ‘benda yang…’. Who/whom/whose untuk orang, which untuk benda, that bisa untuk keduanya.",
      pattern: "Orang = who (pelaku), whom (penerima), whose (milik). Benda = which. That sering dipakai setelah superlatif atau setelah all, everything, none, much, little.",
      vocab: [
        ["who","yang (orang)"],
        ["whom","yang (orang, objek)"],
        ["which","yang (benda)"],
        ["whose","yang … milik"]
      ],
      translations: [
        "Saya suka orang yang rajin.",
        "Semua orang menyoraki pemain yang mencetak tiga gol.",
        "Kami menonton film yang sangat lucu.",
        "Hal yang tidak saya sukai adalah berbohong.",
        "Kami menghibur wanita yang tabungannya hilang dalam kebakaran.",
        "Semua yang telah kamu katakan sudah dicatat."
      ],
      challenge: "Gambarkan seorang rekan, sebuah alat, dan sebuah proyek memakai who, which, dan that. Tulis satu kalimat untuk masing-masing."
    }
  },
  {
    definition: "Interrogative pronouns are used to ask questions: who, whom, whose, what, and which. Who is the subject of a question; whom is the object and is also used after a preposition; whose refers to possession. For things and animals we use which and what. Which is more specific than what and is used when the possible answers are few or known to the speaker.",
    pattern: "Who + verb? = subject of the question\nWhom + auxiliary + subject + verb? = object / after a preposition\nWhose + noun / is...? = possession\nWhat = open choice | Which = few, known choices\nWhat is your name? / Which is the shortest route to the campus?",
    examples: [
      ["Who gave you this letter?","who = subject of the question."],
      ["Whom are you inviting?","whom = object of the question."],
      ["From whom did you borrow the ladder?","whom after a preposition."],
      ["Whose is this pen?","whose = possession."],
      ["What is your name?","what = open choice."],
      ["Which is the shortest route to the campus?","which = limited, known choices."]
    ],
    wrong: "Who is this pen?",
    right: "Whose is this pen?",
    challenge: "Prepare five interview questions for a new colleague using who, whom, whose, what, and which.",
    quiz: [
      {"q":"Complete: “The teacher appointed Rizka monitor. ___ did the teacher appoint monitor of the class?”","a":["Whom","Whose","Which","What"],"c":0,"x":"Rizka is a person and the object of ‘appoint’: whom."},
      {"q":"Complete: “This schoolbag is Evi's. ___ is this schoolbag?”","a":["Who","Whom","Whose","Which"],"c":2,"x":"Evi's shows possession, so ask with whose."},
      {"q":"Complete: “The clerk typed this letter. ___ typed this letter?”","a":["Whom","Whose","Who","Which"],"c":2,"x":"The clerk is the subject of ‘typed’: who."},
      {"q":"Complete: “Fatmawati made the cake. ___ made the cake?”","a":["Whom","Who","Whose","What"],"c":1,"x":"Asking about the subject: who."},
      {"q":"Complete: “I went with Muhammad. With ___ did you go to the football match?”","a":["who","whom","whose","which"],"c":1,"x":"After a preposition (with), use whom."},
      {"q":"Complete: “They bought a present for their mother. For ___ did they buy the present?”","a":["who","whose","whom","what"],"c":2,"x":"After a preposition (for), a person takes whom."},
      {"q":"Complete: “The corner terrace-house is Mr. Baker's. ___ is the corner terrace-house?”","a":["Whose","Whom","Who","What"],"c":0,"x":"Mr. Baker's shows possession: whose."},
      {"q":"Choose the best word: “___ are you asking to run the errand?”","a":["Whom","Whose","Whichever","Whatever"],"c":0,"x":"A person is the object of ‘asking’: whom."},
      {"q":"Choose the best word: “___ is the better idea, John's or Mary's?”","a":["Who","Whom","Which","Whoever"],"c":2,"x":"There are only two known choices, so use which."},
      {"q":"Choose the best word: “___ does this mean?”","a":["Who","Whom","Whose","What"],"c":3,"x":"We ask about a thing with an open answer: what."},
      {"q":"Choose the best word: “___ do you prefer, the green dress or the blue?”","a":["Who","Whose","Which","Whom"],"c":2,"x":"Only two choices are given, so use which."},
      {"q":"Choose the best word: “___ is the person responsible for all this?”","a":["Whom","Who","Whose","Whichever"],"c":1,"x":"It asks for the subject (the person): who."}
    ],
    guide: {
      summary: "Interrogative pronoun adalah kata tanya: who (siapa, sebagai pelaku), whom (siapa, sebagai objek), whose (milik siapa), what (apa), which (yang mana).",
      pattern: "Who bertanya tentang pelaku. Whom bertanya tentang penerima atau setelah kata depan (with whom, for whom). Whose bertanya tentang kepemilikan. Which dipakai kalau pilihannya terbatas dan sudah diketahui; what untuk pilihan terbuka.",
      vocab: [
        ["who","siapa"],
        ["whom","siapa (objek)"],
        ["whose","milik siapa"],
        ["which","yang mana"]
      ],
      translations: [
        "Siapa yang memberimu surat ini?",
        "Siapa yang kamu undang?",
        "Dari siapa kamu meminjam tangga itu?",
        "Ini pulpen milik siapa?",
        "Siapa namamu? (Apa namamu?)",
        "Yang mana rute tercepat menuju kampus?"
      ],
      challenge: "Siapkan lima pertanyaan wawancara untuk rekan kerja baru dengan who, whom, whose, what, dan which."
    }
  },
  {
    definition: "Indefinite pronouns refer very generally to persons, things, or quantities, without naming them. There are two groups: pronouns of persons and things (someone, nobody, everything, ...) and pronouns of quantity (all, both, many, none, ...). Words like everyone, everybody, nobody, each, and either take a singular verb; both, several, many, and few take a plural verb.",
    pattern: "Persons & things:\nsomeone, somebody, something\nanyone, anybody, anything\nno one, nobody, nothing\neveryone, everybody, everything\nQuantity:\na lot (of), lots (of), all, many, more, most, much, another, any, both, each, either, neither, few, least, less, little, none, other(s), plenty, several, some\nAfter a negative verb use any-: I don't see anybody.",
    examples: [
      ["Someone sent me a letter.","someone = an unknown person."],
      ["I don't see anybody in the class.","anybody after a negative verb."],
      ["I have nothing to do, so I just stay home and sleep.","nothing = not anything."],
      ["Both of them come to school on time.","both = two, plural."],
      ["None of those boys over there speaks English well.","none of + noun, here with a singular verb."],
      ["The more I study, the less I remember.","more / less = quantity."]
    ],
    wrong: "Everyone think your idea is perfect.",
    right: "Everyone thinks your idea is perfect.",
    challenge: "Describe your workplace using someone, everyone, nothing, many, and few in five sentences.",
    quiz: [
      {"q":"Choose the correct word: “Both Ali and Arif have done ___ homework.”","a":["his","her","their","our"],"c":2,"x":"‘Both Ali and Arif’ is plural, so use their."},
      {"q":"Choose the correct word: “All of my sisters ___ still single.”","a":["am","is","are","be"],"c":2,"x":"‘All of my sisters’ is plural: are."},
      {"q":"Choose the correct word: “Everyone ___ your idea is perfect.”","a":["think","thinks","thinking","are thinking"],"c":1,"x":"‘Everyone’ is singular, so the verb takes -s."},
      {"q":"Choose the correct word: “Either Rini or Rina ___ studying English seriously.”","a":["are","is","were","be"],"c":1,"x":"‘Either ... or’ with a singular subject takes is."},
      {"q":"Choose the correct word: “There ___ something wrong in our exercise yesterday.”","a":["was","were","are","be"],"c":0,"x":"‘Something’ is singular and the time is past: was."},
      {"q":"Choose the correct word: “Each of the students ___ a nice present.”","a":["get","gets","are getting","have got"],"c":1,"x":"‘Each’ is singular: each ... gets."},
      {"q":"Choose the correct word: “Neither Budi nor Bambang ___ a lie.”","a":["tell","tells","are telling","have told"],"c":1,"x":"‘Neither ... nor’ with singular subjects takes a singular verb: tells."},
      {"q":"Choose the correct word: “One of those girls keeps ___ money in a bank.”","a":["her","their","hers","theirs"],"c":0,"x":"‘One’ is singular; a possessive adjective is needed before ‘money’: her."},
      {"q":"Choose the correct word: “Some of these soldiers ___ dead and others were badly wounded.”","a":["was","were","is","be"],"c":1,"x":"‘Some of these soldiers’ is plural: were."},
      {"q":"Choose the correct word: “Nobody ___ to the meeting on time.”","a":["come","comes","coming","are coming"],"c":1,"x":"‘Nobody’ is singular, so the verb takes -s."},
      {"q":"Choose the correct word: “During the rainy season, only few of the farmers ___ their rice fields unfertilized.”","a":["leaves","leave","leaving","is leave"],"c":1,"x":"‘Few’ is plural: leave."},
      {"q":"Choose the correct word: “None but the fools ___ your story.”","a":["believes","believe","believing","is believing"],"c":1,"x":"‘The fools’ is plural: believe."}
    ],
    guide: {
      summary: "Indefinite pronoun adalah kata ganti tak tentu: merujuk ke orang, benda, atau jumlah secara umum, misalnya someone (seseorang), nothing (tidak ada apa-apa), everyone (semua orang), many (banyak).",
      pattern: "Ada dua kelompok: orang/benda (some-, any-, no-, every- + one/body/thing) dan jumlah (all, both, many, few, none, dst.). Everyone, nobody, each, either memakai kata kerja tunggal. Both, many, few, several memakai kata kerja jamak. Setelah kata kerja negatif pakai any- (anybody), bukan no-.",
      vocab: [
        ["someone","seseorang"],
        ["everyone","semua orang"],
        ["nothing","tidak ada apa pun"],
        ["several","beberapa"]
      ],
      translations: [
        "Seseorang mengirimi saya surat.",
        "Saya tidak melihat siapa pun di kelas.",
        "Saya tidak punya apa-apa untuk dikerjakan, jadi saya hanya di rumah dan tidur.",
        "Keduanya datang ke sekolah tepat waktu.",
        "Tidak satu pun dari anak laki-laki di sana berbicara bahasa Inggris dengan baik.",
        "Semakin banyak saya belajar, semakin sedikit saya ingat."
      ],
      challenge: "Gambarkan tempat kerjamu dengan someone, everyone, nothing, many, dan few dalam lima kalimat."
    }
  },
  {
    definition: "Emphatic and reflexive pronouns have the same forms (-self / -selves). An emphatic pronoun emphasizes the noun or pronoun it refers to; it usually follows that noun or pronoun immediately, though it may come at the end of the sentence. A reflexive pronoun functions as the object and comes after the verb, but it refers to the subject: in a reflexive sentence the subject and object are the same person.",
    pattern: "I | myself\nyou (singular) | yourself\nhe | himself\nshe | herself\nit | itself\nwe | ourselves\nyou (plural) | yourselves\nthey | themselves\nEmphatic: The leader himself wrote the song.\nReflexive: She scolded herself.",
    examples: [
      ["The leader himself wrote the song.","emphatic: stresses the leader."],
      ["They cleared the garden themselves.","emphatic: at the end of the sentence."],
      ["The boy told himself to work hard.","reflexive: object = subject."],
      ["She scolded herself for being so lazy.","reflexive: herself = she."],
      ["You will hurt yourself if you are not careful.","reflexive: you = yourself."]
    ],
    wrong: "They cleared the garden theirselves.",
    right: "They cleared the garden themselves.",
    challenge: "Write four sentences about work you did yourself. Use two emphatic and two reflexive pronouns.",
    quiz: [
      {"q":"Choose the correct word: “My uncle ___ repaired the car.”","a":["himself","herself","itself","themselves"],"c":0,"x":"‘My uncle’ is male and singular: himself (emphatic)."},
      {"q":"Choose the correct word: “The girls ___ cooked dinner.”","a":["herself","themselves","theirselves","itself"],"c":1,"x":"‘The girls’ is plural: themselves. ‘Theirselves’ does not exist."},
      {"q":"Choose the correct word: “Tom and John built the house ___.”","a":["himself","themselves","ourselves","theirselves"],"c":1,"x":"Two people (they): themselves."},
      {"q":"Choose the correct word: “The game ___ was not interesting.”","a":["himself","itself","themselves","herself"],"c":1,"x":"A thing uses itself."},
      {"q":"In “The maid excused herself and left”, what kind of pronoun is ‘herself’?","a":["Reflexive","Emphatic","Relative","Possessive"],"c":0,"x":"It is the object of ‘excused’ and refers to the subject (the maid): reflexive."},
      {"q":"In “The leaders themselves did not know what they were doing”, what kind of pronoun is ‘themselves’?","a":["Reflexive","Emphatic","Interrogative","Possessive"],"c":1,"x":"It only stresses ‘the leaders’ and is not the object: emphatic."},
      {"q":"In “Are you able to operate the machine yourself?”, what kind of pronoun is ‘yourself’?","a":["Reflexive","Emphatic","Relative","Demonstrative"],"c":1,"x":"It adds emphasis at the end of the sentence; the object is ‘the machine’: emphatic."},
      {"q":"In “Some people try to cheat themselves”, what kind of pronoun is ‘themselves’?","a":["Emphatic","Possessive","Reflexive","Relative"],"c":2,"x":"It is the object and refers back to the subject: reflexive."},
      {"q":"Choose the correct word: “Dewi cut ___ with a knife when she was preparing dinner.”","a":["her","herself","she","hers"],"c":1,"x":"Subject and object are the same person: herself."},
      {"q":"Choose the correct word: “Let us help ___ to the food.”","a":["us","our","ourselves","ours"],"c":2,"x":"The object is the same as the subject (we): ourselves."},
      {"q":"Choose the correct word: “You must learn to take care of ___.”","a":["you","yourself","your","yours"],"c":1,"x":"Subject and object are the same person: yourself."},
      {"q":"Choose the correct word: “Few people blame ___ if things go wrong.”","a":["them","themself","themselves","their"],"c":2,"x":"The reflexive form for ‘they/people’ is themselves."}
    ],
    guide: {
      summary: "Emphatic dan reflexive pronoun bentuknya sama (myself, himself, themselves, dst.). Emphatic dipakai untuk menegaskan (‘dia sendiri’), reflexive dipakai saat pelaku dan penerima tindakannya orang yang sama.",
      pattern: "Menegaskan = taruh -self langsung setelah noun atau di akhir kalimat. Pelaku = penerima = pakai reflexive (She scolded herself). Ingat: themselves, bukan theirselves; yourself (satu orang) dan yourselves (banyak orang).",
      vocab: [
        ["myself","diri saya sendiri"],
        ["himself / herself","dirinya sendiri"],
        ["themselves","diri mereka sendiri"],
        ["emphasize","menegaskan"]
      ],
      translations: [
        "Ketua itu sendiri yang menulis lagunya.",
        "Mereka membersihkan kebun itu sendiri.",
        "Anak laki-laki itu menyuruh dirinya bekerja keras.",
        "Dia memarahi dirinya sendiri karena sangat malas.",
        "Kamu akan melukai dirimu sendiri kalau tidak hati-hati."
      ],
      challenge: "Tulis empat kalimat tentang pekerjaan yang kamu kerjakan sendiri. Pakai dua emphatic dan dua reflexive pronoun."
    }
  }
];
