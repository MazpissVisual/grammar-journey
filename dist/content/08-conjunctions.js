// Unit 08 · conjunctions — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["conjunctions"] = [
  "Coordinating Conjunctions: and, but, or",
  "Subordinating Conjunctions",
  "Words That Are Both Prepositions and Conjunctions",
  "Correlative Conjunctions"
];

window.lessonData["conjunctions"] = [
  {
    definition: "Conjunctions connect one word to another word, or one sentence to another sentence. Coordinating conjunctions (and, but, or) join two elements of equal importance: two words, phrases, or clauses.",
    pattern: "A and B  -> addition\nA but B  -> contrast\nA or B   -> choice / warning\n(also: so = result, yet = contrast, for = reason)",
    examples: [
      ["He teaches physics and mathematics in this school.","and joins two nouns"],
      ["He is tired and wants to rest.","and joins two clauses"],
      ["He is intelligent but lazy.","but joins two adjectives"],
      ["He felt tired but did not stop working.","but = contrast"],
      ["You can have this pen or that one.","or = choice"],
      ["You must hurry up or you will be left behind.","or = warning"]
    ],
    wrong: "Work hard, you will succeed.",
    right: "Work hard and you will succeed.",
    challenge: "Write three sentences about your job using and, but, and or.",
    quiz: [
      {"q":"Choose the best way to join: \"We must hold on to the buoy. We shall drown.\"","a":["We must hold on to the buoy or we shall drown.","We must hold on to the buoy and we shall drown.","We must hold on to the buoy but we shall drown.","We must hold on to the buoy so we shall drown."],"c":0,"x":"\"or\" gives the warning: if we do not hold on, we will drown."},
      {"q":"Choose the best way to join: \"He was not invited. He turned up.\"","a":["He was not invited and he turned up.","He was not invited but he turned up.","He was not invited or he turned up.","He was not invited so he turned up."],"c":1,"x":"The two facts contrast, so but."},
      {"q":"Choose the best way to join: \"Work hard. You will succeed.\"","a":["Work hard but you will succeed.","Work hard or you will succeed.","Work hard and you will succeed.","Work hard nor you will succeed."],"c":2,"x":"\"and\" links an action to its result."},
      {"q":"\"We expected her but she did not turn up.\" The conjunction \"but\" is:","a":["subordinating","correlative","a preposition","coordinating"],"c":3,"x":"\"but\" joins two equal clauses: coordinating."},
      {"q":"\"We had an early breakfast and set out before eight.\" The coordinating conjunction is:","a":["and","before","had","set"],"c":0,"x":"\"and\" joins the two actions; \"before\" is a preposition here."},
      {"q":"\"She was busy, so she did not help them.\" The word \"so\" shows:","a":["contrast","result","choice","time"],"c":1,"x":"\"so\" introduces a result."},
      {"q":"He has been warned several times ___ he still makes careless mistakes.","a":["because","unless","if","yet"],"c":3,"x":"\"yet\" shows contrast; the others do not make sense."}
    ],
    guide: {
      summary: "Conjunction (kata sambung) menghubungkan kata dengan kata atau kalimat dengan kalimat. And, but, dan or adalah coordinating conjunction: menggabungkan dua bagian yang sama penting.",
      pattern: "and = dan (tambahan); but = tetapi (berlawanan); or = atau (pilihan / peringatan); so = jadi (hasil).",
      vocab: [
        ["and","dan"],
        ["but","tetapi"],
        ["or","atau"],
        ["lazy","malas"]
      ],
      translations: [
        "Dia mengajar fisika dan matematika di sekolah ini.",
        "Dia lelah dan ingin beristirahat.",
        "Dia cerdas tetapi malas.",
        "Dia merasa lelah tetapi tidak berhenti bekerja.",
        "Kamu boleh ambil pulpen ini atau yang itu.",
        "Kamu harus bergegas atau akan tertinggal."
      ],
      challenge: "Tulis tiga kalimat tentang pekerjaanmu memakai and, but, dan or."
    }
  },
  {
    definition: "Subordinating conjunctions join a main clause to a subordinate (dependent) clause that gives extra information such as reason, condition, time, or contrast. The most common are: because, if, since, when, where, although, as, as if, unless, that, before, after.",
    pattern: "main clause + subordinating conjunction + subordinate clause\nreason    : because, since, as\ncondition : if, unless\ntime      : when, before, after\ncontrast  : although",
    examples: [
      ["He is tired because he has been working hard.","because = reason"],
      ["You will succeed if you are diligent.","if = condition"],
      ["The children play outside when it is fine.","when = time"],
      ["Although he has been warned, he does not care.","although = contrast"],
      ["Since we must return early, let us leave now.","since = reason"],
      ["She won the prize although she was not excited.","although = contrast"]
    ],
    wrong: "Although he was tired, but he kept working.",
    right: "Although he was tired, he kept working.",
    challenge: "Write three sentences about a workplace situation using because, if, and although.",
    quiz: [
      {"q":"Which word is the subordinating conjunction in: \"The children play outside when it is fine.\"?","a":["play","outside","when","fine"],"c":2,"x":"\"when\" introduces the subordinate clause \"it is fine\"."},
      {"q":"Which word is the subordinating conjunction in: \"If you wish, you may join us.\"?","a":["wish","If","may","join"],"c":1,"x":"\"If\" introduces a condition."},
      {"q":"Which word is the subordinating conjunction in: \"Although he has been warned, he does not care.\"?","a":["warned","care","he","Although"],"c":3,"x":"\"Although\" introduces the contrast clause."},
      {"q":"Which word is the subordinating conjunction in: \"Since we must return early, let us leave now.\"?","a":["Since","must","early","now"],"c":0,"x":"\"Since\" gives the reason."},
      {"q":"Join: \"She heard the news. She jumped for joy.\"","a":["She heard the news but she jumped for joy.","She jumped for joy when she heard the news.","She jumped for joy unless she heard the news.","She jumped for joy although she heard the news."],"c":1,"x":"\"when\" links the two events in time."},
      {"q":"Join: \"She won the prize. She was not excited.\"","a":["She won the prize because she was not excited.","She won the prize if she was not excited.","She won the prize although she was not excited.","She won the prize unless she was not excited."],"c":2,"x":"The ideas contrast, so although."},
      {"q":"Join: \"There is a vacancy. You will be offered the job.\"","a":["If there is a vacancy, you will be offered the job.","Although there is a vacancy, you will be offered the job.","Unless there is a vacancy, you will be offered the job.","Before there is a vacancy, you will be offered the job."],"c":0,"x":"Being offered the job depends on a vacancy: if."},
      {"q":"Join: \"We cannot wait for him. We shall start without him.\"","a":["Unless we cannot wait for him, we shall start without him.","Although we cannot wait for him, we shall start without him.","If we cannot wait for him, we shall start without him.","Since we cannot wait for him, we shall start without him."],"c":3,"x":"\"Since\" gives the reason."},
      {"q":"He is not angry ___ they have cheated him.","a":["although","so","because of","or"],"c":0,"x":"\"although\" shows contrast."},
      {"q":"You may pay now ___ you wish.","a":["but","if","nor","so"],"c":1,"x":"\"if you wish\" gives a condition."}
    ],
    guide: {
      summary: "Subordinating conjunction menghubungkan klausa utama dengan klausa tambahan (anak kalimat) yang tidak bisa berdiri sendiri, misalnya karena (because), jika (if), meskipun (although).",
      pattern: "Klausa utama + kata sambung + klausa anak. Kata sambung ini bisa juga di awal kalimat: Although he was tired, he kept working.",
      vocab: [
        ["because","karena"],
        ["although","meskipun"],
        ["unless","kecuali jika"],
        ["since","karena / sejak"]
      ],
      translations: [
        "Dia lelah karena telah bekerja keras.",
        "Kamu akan berhasil jika kamu rajin.",
        "Anak-anak bermain di luar ketika cuaca cerah.",
        "Meskipun sudah diperingatkan, dia tidak peduli.",
        "Karena kita harus pulang lebih awal, ayo berangkat sekarang.",
        "Dia memenangkan hadiah meskipun tidak merasa senang."
      ],
      challenge: "Tulis tiga kalimat tentang situasi di tempat kerja memakai because, if, dan although."
    }
  },
  {
    definition: "Some words, such as before, after, and until, can work as prepositions or as conjunctions. If a noun follows, the word is a preposition; if a full clause (subject + verb) follows, it is a conjunction.",
    pattern: "before / after / until + noun   -> preposition\nbefore / after / until + clause -> conjunction",
    examples: [
      ["The class ended before lunch.","preposition (noun follows)"],
      ["The class ended before it was time for lunch.","conjunction (clause follows)"],
      ["We did our homework after dinner.","preposition"],
      ["We did our homework after we had had dinner.","conjunction"],
      ["Please stay here until Friday.","preposition"],
      ["Please stay here until I come back.","conjunction"]
    ],
    wrong: "Please wait until will I come back.",
    right: "Please wait until I come back.",
    challenge: "Write one pair of sentences with before and one with after: first as a preposition, then as a conjunction, about your daily work.",
    quiz: [
      {"q":"In \"The class ended before lunch\", the word \"before\" is a:","a":["preposition","conjunction","adverb of manner","correlative"],"c":0,"x":"A noun (lunch) follows, so it is a preposition."},
      {"q":"In \"We did our homework after we had had dinner\", the word \"after\" is a:","a":["preposition","conjunction","noun","verb"],"c":1,"x":"A clause (we had had dinner) follows, so it is a conjunction."},
      {"q":"Which sentence uses \"until\" as a conjunction?","a":["Please stay here until Friday.","Wait until noon.","Please stay here until I come back.","He worked until midnight."],"c":2,"x":"Only \"until I come back\" is followed by a clause."},
      {"q":"He telephoned me ___ he had talked to her.","a":["before","unless","or","after"],"c":3,"x":"Talking to her happened first, then he telephoned: he telephoned me after he had talked to her."},
      {"q":"Hand in your work ___ the bell rings.","a":["before","nor","but","either"],"c":0,"x":"\"before\" introduces the clause \"the bell rings\"."},
      {"q":"Think carefully ___ you speak.","a":["but","before","nor","or"],"c":1,"x":"\"before\" shows the order of actions."},
      {"q":"Which sentence uses \"after\" as a preposition?","a":["We left after the meeting ended.","She called after she arrived.","We did our homework after dinner.","He rested after he finished."],"c":2,"x":"\"after dinner\" is followed by a noun."}
    ],
    guide: {
      summary: "Kata before, after, dan until bisa jadi preposition atau conjunction. Lihat apa yang mengikutinya: kata benda berarti preposition, klausa (subjek + kata kerja) berarti conjunction.",
      pattern: "before lunch (benda) = preposition. before it was lunch time (klausa) = conjunction.",
      vocab: [
        ["before","sebelum"],
        ["after","setelah"],
        ["until","sampai"],
        ["clause","klausa"]
      ],
      translations: [
        "Kelas berakhir sebelum makan siang.",
        "Kelas berakhir sebelum waktunya makan siang.",
        "Kami mengerjakan PR setelah makan malam.",
        "Kami mengerjakan PR setelah kami selesai makan malam.",
        "Tolong tetap di sini sampai hari Jumat.",
        "Tolong tetap di sini sampai aku kembali."
      ],
      challenge: "Tulis sepasang kalimat dengan before dan sepasang dengan after tentang pekerjaan harianmu: pertama sebagai preposition, lalu sebagai conjunction."
    }
  },
  {
    definition: "Correlative conjunctions are used in pairs: both...and, either...or, neither...nor, not only...but also. They join elements that should have the same grammatical form.",
    pattern: "both A and B\neither A or B\nneither A nor B\nnot only A but also B\nwhether A or B",
    examples: [
      ["Both John and Mary are students in this school.","both...and"],
      ["You must either contribute some useful ideas or keep quiet.","either...or"],
      ["Neither he nor his brother is trustworthy.","neither...nor"],
      ["He is not only stubborn but also lazy.","not only...but also"],
      ["Neither Irma nor Tina comes here on time.","neither...nor"],
      ["Whether Tono or Tini will go is not the matter.","whether...or"]
    ],
    wrong: "Either he or I am wrong, nor you.",
    right: "Either he or I am wrong.",
    challenge: "Write three sentences about your team using both...and, either...or, and not only...but also.",
    quiz: [
      {"q":"\"Either behave yourself or leave the room.\" The correlative pair is:","a":["either...or","both...and","neither...nor","not only...but also"],"c":0,"x":"Two options are given: either...or."},
      {"q":"\"They are not only proud but also selfish.\" The correlative pair is:","a":["either...or","not only...but also","both...and","neither...nor"],"c":1,"x":"not only...but also adds a second quality."},
      {"q":"\"We have neither the time nor the money to go for a holiday.\" The correlative pair is:","a":["both...and","either...or","neither...nor","whether...or"],"c":2,"x":"Neither...nor negates both items."},
      {"q":"Join: \"He will not help us. She will not help us.\"","a":["Both he and she will help us.","Either he or she will help us.","Not only he but also she will help us.","Neither he nor she will help us."],"c":3,"x":"Neither...nor combines two negatives."},
      {"q":"She knows ___ French ___ German.","a":["both / and","either / and","neither / or","both / nor"],"c":0,"x":"The correct pair is both...and."},
      {"q":"___ you or he will be the chairman.","a":["Both","Either","Neither","Whether"],"c":1,"x":"\"Either you or he\" matches \"or\"."},
      {"q":"I cannot decide whether to take up Accountancy ___ Law.","a":["and","nor","or","but"],"c":2,"x":"whether...or."},
      {"q":"___ John and Mary are students in this school.","a":["Either","Neither","Whether","Both"],"c":3,"x":"\"Both\" pairs with \"and\"."}
    ],
    guide: {
      summary: "Correlative conjunction dipakai berpasangan: both...and (keduanya), either...or (salah satu), neither...nor (tidak satu pun), not only...but also (tidak hanya...tetapi juga).",
      pattern: "Pasangannya tidak boleh tertukar. Bagian setelah tiap kata harus bentuknya sama: kata benda dengan kata benda, kata sifat dengan kata sifat.",
      vocab: [
        ["both","keduanya"],
        ["either","salah satu"],
        ["neither","tidak keduanya"],
        ["trustworthy","dapat dipercaya"]
      ],
      translations: [
        "John dan Mary keduanya adalah siswa di sekolah ini.",
        "Kamu harus menyumbangkan ide yang berguna atau diam.",
        "Baik dia maupun saudaranya tidak dapat dipercaya.",
        "Dia tidak hanya keras kepala tetapi juga malas.",
        "Baik Irma maupun Tina tidak datang tepat waktu.",
        "Apakah Tono atau Tini yang akan pergi bukanlah masalah."
      ],
      challenge: "Tulis tiga kalimat tentang timmu memakai both...and, either...or, dan not only...but also."
    }
  }
];
