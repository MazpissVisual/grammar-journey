// Unit 06 · adverbs — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["adverbs"] = [
  "What Is an Adverb?",
  "Kinds of Adverbs",
  "Forming Adverbs with -ly",
  "Adverbs in Comparison: -er/-est and more/most",
  "Irregular Adverb Comparison"
];

window.lessonData["adverbs"] = [
  {
    definition: "An adverb is a word that modifies (adds meaning to) a verb, an adjective, or another adverb. It tells us more about how, when, where, or to what degree something happens or is true.",
    pattern: "Adverb + modifies:\nverb       -> Please sit here.\nadjective  -> She is very happy.\nadverb     -> He laughed very loudly.",
    examples: [
      ["Please sit here.","\"here\" modifies the verb \"sit\""],
      ["She is very happy.","\"very\" modifies the adjective \"happy\""],
      ["He laughed very loudly.","\"very\" modifies the adverb \"loudly\"; \"loudly\" modifies the verb \"laughed\""],
      ["The manager spoke clearly.","\"clearly\" modifies the verb \"spoke\""],
      ["The report was extremely detailed.","\"extremely\" modifies the adjective \"detailed\""]
    ],
    wrong: "She sings very beautiful.",
    right: "She sings very beautifully.",
    challenge: "Write three sentences about your work routine. Each must contain one adverb that modifies a verb, an adjective, or another adverb, and say which one it modifies.",
    quiz: [
      {"q":"In \"Please sit here\", the adverb \"here\" modifies:","a":["the verb \"sit\"","the pronoun \"please\"","an adjective","a noun"],"c":0,"x":"\"here\" tells where to sit, so it modifies the verb \"sit\"."},
      {"q":"In \"She is very happy\", the word \"very\" modifies:","a":["the verb \"is\"","the adjective \"happy\"","the noun \"She\"","the adverb \"happy\""],"c":1,"x":"\"very\" strengthens the adjective \"happy\"."},
      {"q":"In \"He laughed very loudly\", the word \"very\" modifies:","a":["the verb \"laughed\"","the pronoun \"He\"","the adverb \"loudly\"","the adjective \"loudly\""],"c":2,"x":"\"very\" modifies another adverb, \"loudly\"."},
      {"q":"Which word is an adverb in: \"The manager spoke clearly.\"?","a":["manager","spoke","The","clearly"],"c":3,"x":"\"clearly\" tells how the manager spoke, so it is an adverb."},
      {"q":"Which sentence contains an adverb that modifies an adjective?","a":["He runs fast.","The test was extremely difficult.","She sings beautifully.","They arrived late."],"c":1,"x":"\"extremely\" modifies the adjective \"difficult\"; the others modify verbs."}
    ],
    guide: {
      summary: "Adverb (kata keterangan) adalah kata yang menjelaskan kata kerja, kata sifat, atau adverb lain. Biasanya menjawab pertanyaan: bagaimana, kapan, di mana, seberapa.",
      pattern: "Tanya diri sendiri: kata ini menjelaskan kata apa? Kalau menjelaskan kata kerja, kata sifat, atau adverb lain, berarti itu adverb.",
      vocab: [
        ["adverb","kata keterangan"],
        ["modify","menerangkan / mengubah makna"],
        ["loudly","dengan keras"],
        ["clearly","dengan jelas"]
      ],
      translations: [
        "Silakan duduk di sini.",
        "Dia sangat bahagia.",
        "Dia tertawa sangat keras.",
        "Manajer itu berbicara dengan jelas.",
        "Laporan itu sangat terperinci."
      ],
      challenge: "Tulis tiga kalimat tentang rutinitas kerjamu. Setiap kalimat harus punya satu adverb, lalu sebutkan adverb itu menerangkan kata apa."
    }
  },
  {
    definition: "Adverbs are used to tell time (when), place (where), reason (why), manner (how), degree (how much, to what extent), and frequency (how often).",
    pattern: "time      (when)      -> soon, yesterday\nplace     (where)     -> here, outside, there\nreason    (why)       -> therefore, thus\nmanner    (how)       -> well, fairly\ndegree    (how much)  -> quite, almost\nfrequency (how often) -> always, often",
    examples: [
      ["They will leave soon.","time"],
      ["He will wait here.","place"],
      ["Therefore he was punished.","reason"],
      ["The boys played well.","manner"],
      ["They were quite satisfied.","degree"],
      ["She is always late.","frequency"]
    ],
    wrong: "He plays always football on Sunday.",
    right: "He always plays football on Sunday.",
    challenge: "Describe your work week using one adverb of each kind: time, place, manner, degree, and frequency.",
    quiz: [
      {"q":"\"He almost forgot his appointment.\" The adverb \"almost\" shows:","a":["time","place","degree","reason"],"c":2,"x":"\"almost\" tells to what extent he forgot, so it is degree. (The book labels it frequency, but degree is the accurate answer.)"},
      {"q":"\"We meet him yesterday.\" The adverb \"yesterday\" shows:","a":["place","time","manner","frequency"],"c":1,"x":"\"yesterday\" answers when."},
      {"q":"\"The pupils debated well.\" The adverb \"well\" shows:","a":["manner","time","place","degree"],"c":0,"x":"\"well\" answers how they debated."},
      {"q":"\"You may wait outside.\" The adverb \"outside\" shows:","a":["time","reason","place","manner"],"c":2,"x":"\"outside\" answers where."},
      {"q":"\"We shall therefore ignore him.\" The adverb \"therefore\" shows:","a":["frequency","degree","place","reason"],"c":3,"x":"\"therefore\" gives the reason or result."},
      {"q":"\"He often ridiculed his sister.\" The adverb \"often\" shows:","a":["frequency","time","place","manner"],"c":0,"x":"\"often\" answers how often."},
      {"q":"\"He is quite pleased with his new job.\" The adverb \"quite\" shows:","a":["place","degree","time","reason"],"c":1,"x":"\"quite\" tells how much he is pleased: degree."},
      {"q":"\"There we found the book.\" The adverb \"there\" shows:","a":["manner","time","frequency","place"],"c":3,"x":"\"there\" answers where."},
      {"q":"\"We should treat everyone fairly.\" The adverb \"fairly\" shows:","a":["manner","degree","time","place"],"c":0,"x":"\"fairly\" answers how we should treat people."}
    ],
    guide: {
      summary: "Adverb dibagi menurut fungsinya: waktu, tempat, alasan, cara, tingkat, dan frekuensi. Cukup tanya: kapan? di mana? kenapa? bagaimana? seberapa? seberapa sering?",
      pattern: "Cocokkan pertanyaan dengan jenisnya: when=time, where=place, why=reason, how=manner, how much=degree, how often=frequency.",
      vocab: [
        ["soon","segera"],
        ["therefore","oleh karena itu"],
        ["quite","cukup / lumayan"],
        ["always","selalu"]
      ],
      translations: [
        "Mereka akan segera pergi.",
        "Dia akan menunggu di sini.",
        "Karena itu, dia dihukum.",
        "Anak-anak itu bermain dengan baik.",
        "Mereka cukup puas.",
        "Dia selalu terlambat."
      ],
      challenge: "Gambarkan minggu kerjamu dengan satu adverb dari tiap jenis: waktu, tempat, cara, tingkat, dan frekuensi."
    }
  },
  {
    definition: "Many adverbs are formed from adjectives by adding the suffix -ly. If the adjective ends in -y, the y usually changes to i before -ly (busy -> busily, happy -> happily). Manner adverbs describe how an action is done.",
    pattern: "adjective + -ly = adverb\nquiet -> quietly\nslow  -> slowly\nsoft  -> softly\ngreat -> greatly\nbusy  -> busily\nhappy -> happily",
    examples: [
      ["The baby fell asleep silently.","adjective silent -> adverb silently"],
      ["The doctor stitched up the wound expertly.","manner adverb"],
      ["The engines roared noisily as the plane took off.","manner adverb"],
      ["The houses shook violently during the earthquake.","manner adverb"],
      ["The white swans glided gracefully across the lake.","manner adverb"],
      ["Measure the flour accurately and then sieve it.","manner adverb"]
    ],
    wrong: "She works very careful.",
    right: "She works very carefully.",
    challenge: "Write three sentences about how a good colleague works, using manner adverbs such as carefully, quickly, and professionally.",
    quiz: [
      {"q":"Rahman talked ___ about the first lady's visit to his school.","a":["excitedly","expertly","gracefully","violently"],"c":0,"x":"\"excitedly\" fits someone talking about an exciting visit."},
      {"q":"In the crowded restaurant the customers waited ___ to be served.","a":["gracefully","impatiently","expertly","violently"],"c":1,"x":"Waiting a long time in a crowd suggests impatiently."},
      {"q":"The baby fell asleep ___ as his mother hummed him a lullaby.","a":["noisily","violently","silently","impatiently"],"c":2,"x":"A lullaby puts a baby to sleep silently."},
      {"q":"The doctor stitched up his wound ___.","a":["noisily","violently","excitedly","expertly"],"c":3,"x":"A skilled doctor works expertly."},
      {"q":"The engines of the plane roared ___ as it took off.","a":["noisily","silently","gracefully","expertly"],"c":0,"x":"Roaring engines are noisy, not silent."},
      {"q":"The mountaineers ___ struggled up the steep slope.","a":["gracefully","gradually","violently","excitedly"],"c":1,"x":"A steep climb is made gradually, step by step."},
      {"q":"The houses shook ___ at the height of the earthquake.","a":["gracefully","silently","violently","expertly"],"c":2,"x":"An earthquake shakes houses violently."},
      {"q":"Measure the flour ___ and then sieve it.","a":["violently","noisily","excitedly","accurately"],"c":3,"x":"Measuring needs accuracy."},
      {"q":"The white swans glided ___ across the lake.","a":["gracefully","violently","noisily","impatiently"],"c":0,"x":"Swans glide gracefully."},
      {"q":"What is the adverb form of \"quiet\"?","a":["quietty","quietly","quieter","quietily"],"c":1,"x":"Add -ly to the adjective: quiet -> quietly."},
      {"q":"What is the adverb form of \"happy\"?","a":["happyly","happly","happily","happiy"],"c":2,"x":"Change y to i, then add -ly: happy -> happily."}
    ],
    guide: {
      summary: "Banyak adverb dibuat dengan menambah -ly di belakang kata sifat. Kalau kata sifat berakhiran -y, ganti y menjadi i lalu tambah -ly.",
      pattern: "Kata sifat + -ly = adverb. Khusus akhiran -y: busy -> busily, happy -> happily.",
      vocab: [
        ["silently","dengan diam"],
        ["expertly","dengan ahli"],
        ["gracefully","dengan anggun"],
        ["accurately","dengan akurat"]
      ],
      translations: [
        "Bayi itu tertidur dengan tenang.",
        "Dokter itu menjahit lukanya dengan ahli.",
        "Mesin pesawat meraung keras saat lepas landas.",
        "Rumah-rumah itu berguncang hebat saat gempa.",
        "Angsa-angsa putih meluncur dengan anggun di danau.",
        "Ukur tepung dengan akurat lalu ayak."
      ],
      challenge: "Tulis tiga kalimat tentang bagaimana rekan kerja yang baik bekerja, pakai adverb cara seperti carefully, quickly, professionally."
    }
  },
  {
    definition: "Adverbs, like adjectives, have three degrees: positive, comparative, and superlative. Some one-syllable adverbs add -er and -est (fast, faster, fastest). Adverbs of two or more syllables generally use more and most before the positive form.",
    pattern: "One syllable: -er / -est\nfast  -> faster  -> fastest\nhard  -> harder  -> hardest\nhigh  -> higher  -> highest\nlow   -> lower   -> lowest\n\nTwo or more syllables: more / most\nquickly -> more quickly -> most quickly\nattentively -> more attentively -> most attentively\ngenerously -> more generously -> most generously\nimpatiently -> more impatiently -> most impatiently",
    examples: [
      ["He walks to school more quickly than before.","comparative with more"],
      ["My friend stayed longer than usual.","comparative with -er"],
      ["Asep usually wakes up earliest.","superlative with -est"],
      ["Please speak more distinctly.","comparative with more"],
      ["She worked harder than anyone else.","comparative with -er"],
      ["He listened most attentively.","superlative with most"]
    ],
    wrong: "He drives more fast than me.",
    right: "He drives faster than me.",
    challenge: "Compare how two colleagues complete their tasks, using one -er adverb and one more/most adverb.",
    quiz: [
      {"q":"My friend stayed ___ than usual.","a":["long","more long","longer","longest"],"c":2,"x":"\"long\" is one syllable and the sentence compares with \"than\", so longer."},
      {"q":"Asep usually wakes up ___.","a":["earlier","more early","earlyest","earliest"],"c":3,"x":"Superlative of early: earliest (y changes to i)."},
      {"q":"Please speak ___, please!","a":["more distinctly","most distinctly","distinctlier","more distinct"],"c":0,"x":"\"distinctly\" has more than one syllable, so use more distinctly."},
      {"q":"He walks to school ___ than before.","a":["most quickly","more quickly","quicklier","quickest"],"c":1,"x":"Comparative of a long adverb: more quickly."},
      {"q":"What is the superlative of \"hard\" (adverb)?","a":["more hard","harder","hardest","most hard"],"c":2,"x":"One-syllable adverbs take -est."},
      {"q":"A snail walks ___ than a rabbit.","a":["more slow","slowlier","most slowly","more slowly"],"c":3,"x":"\"slowly\" has two syllables, so more slowly."},
      {"q":"What is the comparative of \"attentively\"?","a":["more attentively","attentiveer","most attentively","attentivelier"],"c":0,"x":"Long adverbs use more."},
      {"q":"Which is the superlative of \"high\"?","a":["higher","highest","most high","more high"],"c":1,"x":"high -> higher -> highest."}
    ],
    guide: {
      summary: "Adverb punya tiga tingkat: positif, komparatif (lebih), superlatif (paling). Adverb satu suku kata pakai -er/-est; yang lebih panjang pakai more/most.",
      pattern: "Pendek (fast, hard, high): tambah -er / -est. Panjang (quickly, carefully): pakai more / most di depan.",
      vocab: [
        ["comparative","tingkat perbandingan (lebih)"],
        ["superlative","tingkat paling"],
        ["distinctly","dengan jelas"],
        ["attentively","dengan penuh perhatian"]
      ],
      translations: [
        "Dia berjalan ke sekolah lebih cepat dari sebelumnya.",
        "Temanku tinggal lebih lama dari biasanya.",
        "Asep biasanya bangun paling pagi.",
        "Tolong bicara lebih jelas.",
        "Dia bekerja lebih keras dari siapa pun.",
        "Dia mendengarkan dengan paling penuh perhatian."
      ],
      challenge: "Bandingkan cara dua rekan kerja menyelesaikan tugas, pakai satu adverb berakhiran -er dan satu adverb dengan more/most."
    }
  },
  {
    definition: "A few adverbs change form altogether when compared. These irregular forms must be memorized: well, much, little, late, and badly.",
    pattern: "well   -> better     -> best\nmuch   -> more       -> most\nlittle -> less/lesser -> least\nlate   -> later      -> last\nbadly  -> worse      -> worst",
    examples: [
      ["Nobody can count money better than she.","comparative of well"],
      ["Rizqi played better than anyone else in the group.","comparative of well"],
      ["My little brother drinks less than any other child I know.","comparative of little"],
      ["No one draws better than Amin.","comparative of well"],
      ["She performed best in the interview.","superlative of well"],
      ["He arrived later than the others.","comparative of late"]
    ],
    wrong: "She works more well than before.",
    right: "She works better than before.",
    challenge: "Write three sentences about your career progress using better, best, and worse or less.",
    quiz: [
      {"q":"Nobody can count money ___ than she.","a":["best","better","more well","gooder"],"c":1,"x":"Comparative with \"than\": better."},
      {"q":"Rizqi played ___ than anyone else in the group.","a":["better","best","more well","welller"],"c":0,"x":"Comparing with \"than\" needs the comparative better."},
      {"q":"My little brother drinks ___ than any other child I know.","a":["least","littler","less","more little"],"c":2,"x":"Comparative of little: less."},
      {"q":"No one draws ___ than Amin.","a":["best","more well","gooder","better"],"c":3,"x":"Comparative of well: better."},
      {"q":"What is the superlative of \"well\"?","a":["best","better","most well","welliest"],"c":0,"x":"well -> better -> best."},
      {"q":"What is the comparative of \"badly\"?","a":["badder","worse","worst","more badly"],"c":1,"x":"badly -> worse -> worst."},
      {"q":"What is the superlative of \"much\"?","a":["more","muchest","most","mostest"],"c":2,"x":"much -> more -> most."},
      {"q":"What is the superlative of \"little\" (amount)?","a":["less","littlest","lessest","least"],"c":3,"x":"little -> less -> least."},
      {"q":"What is the comparative of \"late\" in time?","a":["later","latest","last","more late"],"c":0,"x":"late -> later -> last/latest."}
    ],
    guide: {
      summary: "Beberapa adverb berubah bentuk total saat dibandingkan. Ini harus dihafal: well-better-best, badly-worse-worst, much-more-most, little-less-least.",
      pattern: "Jangan tulis \"more well\" atau \"more bad\". Hafalkan bentuk khususnya.",
      vocab: [
        ["better","lebih baik"],
        ["worse","lebih buruk"],
        ["less","lebih sedikit"],
        ["best","terbaik"]
      ],
      translations: [
        "Tidak ada yang bisa menghitung uang lebih baik darinya.",
        "Rizqi bermain lebih baik dari siapa pun di grup.",
        "Adik kecilku minum lebih sedikit dari anak lain yang kukenal.",
        "Tidak ada yang menggambar lebih baik dari Amin.",
        "Dia tampil paling baik dalam wawancara.",
        "Dia tiba lebih lambat dari yang lain."
      ],
      challenge: "Tulis tiga kalimat tentang perkembangan kariermu dengan better, best, serta worse atau less."
    }
  }
];
