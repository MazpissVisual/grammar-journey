// Unit 04 · verbs — konten per lesson (sumber: buku English Grammar 1).
// Setiap lesson: definition, pattern, examples [[kalimat, catatan]], wrong/right, challenge,
// quiz [{q, a, c (indeks jawaban benar), x (penjelasan)}], guide (bantuan Bahasa Indonesia).
window.lessonTitles["verbs"] = [
  "What a Verb Does: Action Verbs",
  "Linking Verbs",
  "Linking Verbs and Complements",
  "Transitive and Intransitive Verbs"
];

window.lessonData["verbs"] = [
  {
    definition: "A verb expresses an action or state of being and shows time. It is the most important part of speech: without a verb there is no sentence. One verb has many forms, and verbs that show something done are action verbs.",
    pattern: "Forms of go:\nto go / went\nbe going / have, has, had gone\ngoes / should have gone\n\nAction verbs: needed, had, started, drenched",
    examples: [
      ["Betty needed help.","needed = action verb"],
      ["Irfan had a good idea.","had = action verb"],
      ["My father started the car.","started = action you can see"],
      ["The rain drenched us.","drenched = action verb"],
      ["She has gone home.","has gone = a form of go"]
    ],
    wrong: "Betty need help yesterday.",
    right: "Betty needed help yesterday.",
    challenge: "Write 3 sentences about what you did at work yesterday, each with a different action verb in the past form.",
    quiz: [
      {"q":"Which word is the verb in \"My father started the car\"?","a":["father","started","car","My"],"c":1,"x":"Started is the action."},
      {"q":"Which sentence has a verb?","a":["The old car","Betty and her friend","Irfan had a good idea.","In the morning"],"c":2,"x":"Had is the verb; the others lack one."},
      {"q":"Which of these is a form of the verb go?","a":["gone","gave","goat","going to"],"c":0,"x":"Gone is the past participle of go."},
      {"q":"In \"The rain drenched us\", the verb is ...","a":["rain","us","The","drenched"],"c":3,"x":"Drenched is the action."},
      {"q":"Choose the correct past form: \"Betty ___ help yesterday.\"","a":["need","needed","needs","needing"],"c":1,"x":"Yesterday needs the past form needed."}
    ],
    guide: {
      summary: "Verb (kata kerja) menyatakan aksi atau keadaan dan waktu. Tanpa verb tidak ada kalimat. Satu verb punya banyak bentuk (go, went, gone). Action verb adalah verb untuk aksi.",
      pattern: "Cari kata yang menjawab \"melakukan apa?\". Itu verb-nya. Perhatikan bentuknya (kini, lampau, perfect).",
      vocab: [
        ["verb","kata kerja"],
        ["action","aksi"],
        ["need","butuh"],
        ["drench","membasahi kuyup"]
      ],
      translations: [
        "Betty membutuhkan bantuan.",
        "Irfan punya ide bagus.",
        "Ayahku menyalakan mobil.",
        "Hujan membuat kami basah kuyup.",
        "Dia sudah pulang."
      ],
      challenge: "Tulis 3 kalimat tentang apa yang kamu kerjakan kemarin di kantor, tiap kalimat dengan action verb lampau berbeda."
    }
  },
  {
    definition: "Linking verbs do not show action; they tell what something is or seems. The most common is to be (is, am, are, was, were, been). Others include seem, appear, remain, grow, become, get, feel, look, sound, taste and smell. Many of them can also be action verbs.",
    pattern: "to be: is, am, are, was, were, been\nOthers: seem, appear, remain, grow, become, get, feel, look, sound, taste, smell\n\nLinking: The melon looked ripe. / The night grew cold.\nAction: Betty looked at the melon. / Peter grows tomatoes.\n(action verbs take an object)",
    examples: [
      ["The boy is diligent.","is = linking verb"],
      ["I am a farmer.","am = linking verb"],
      ["Firdaus has been a teacher for eleven years.","been = linking verb"],
      ["The food looks good.","looks = linking"],
      ["The melon looked ripe.","linking (looked = seemed)"],
      ["Betty looked at the melon.","action (she directed her eyes)"],
      ["The night grew cold.","grew = linking"],
      ["Peter grows tomatoes.","grows = action (has an object)"]
    ],
    wrong: "That cake smell deliciously.",
    right: "That cake smells delicious.",
    challenge: "Write one sentence with a linking verb and one with an action verb using the same word (look, feel, or grow), about your work.",
    quiz: [
      {"q":"That cake smells delicious. The verb \"smells\" is ...","a":["an action verb","a linking verb","a noun","an adverb"],"c":1,"x":"Smells links the cake to the adjective delicious."},
      {"q":"These fruits taste sour. The verb \"taste\" is ...","a":["action verb","adverb","linking verb","preposition"],"c":2,"x":"Taste links the fruits to the adjective sour."},
      {"q":"Ita appeared at the door with flowers for my sister. The verb \"appeared\" is ...","a":["linking verb","action verb","adjective","pronoun"],"c":1,"x":"Here ‘appeared’ means ‘came into view’, which is an action. (If it meant ‘seemed’, as in ‘She appeared tired’, it would be a linking verb.)"},
      {"q":"Muhammad looked for his name in the article. The verb \"looked\" is ...","a":["a linking verb","a noun","an action verb","a conjunction"],"c":2,"x":"Looked for means searched, an action."},
      {"q":"Many students waited in line for breakfast at the dining hall. The verb \"waited\" is ...","a":["linking verb","action verb","adjective","preposition"],"c":1,"x":"Waited is an action."},
      {"q":"In which sentence is \"looked\" a linking verb?","a":["Betty looked at the melon.","The melon looked ripe.","She looked for her key.","He looked up the word."],"c":1,"x":"Looked ripe: looked means seemed and is followed by an adjective."}
    ],
    guide: {
      summary: "Linking verb tidak menunjukkan aksi, tapi menghubungkan subjek dengan keadaannya. Paling umum adalah to be. Verb seperti look, feel, taste, grow bisa linking atau action.",
      pattern: "Tes mudah: ganti verb dengan is/are. Kalau kalimat masih masuk akal (The cake is delicious), itu linking verb. Kalau ada objek yang dikenai aksi, itu action verb.",
      vocab: [
        ["linking verb","kata kerja penghubung"],
        ["seem","tampak"],
        ["ripe","matang"],
        ["sour","asam"]
      ],
      translations: [
        "Anak laki-laki itu rajin.",
        "Aku seorang petani.",
        "Firdaus sudah menjadi guru selama sebelas tahun.",
        "Makanannya tampak enak.",
        "Melon itu tampak matang.",
        "Betty melihat ke arah melon itu.",
        "Malam menjadi dingin.",
        "Peter menanam tomat."
      ],
      challenge: "Tulis satu kalimat dengan linking verb dan satu dengan action verb memakai kata yang sama (look, feel, atau grow) tentang pekerjaanmu."
    }
  },
  {
    definition: "A linking verb is followed by a complement, either a noun, a pronoun or an adjective. The complement completes the sentence, which would be incomplete if it stopped at the linking verb.",
    pattern: "subject + linking verb + complement\nComplement = noun / pronoun / adjective\n\nWe are students. (noun)\nWe are happy. (adjective)\nThe horse seems strong. (adjective)",
    examples: [
      ["We are teachers.","complement = noun"],
      ["We are happy.","complement = adjective"],
      ["The horse seems tired.","complement = adjective"],
      ["The children become doctors.","complement = noun"],
      ["Mary remains calm.","complement = adjective"],
      ["This cake smells sweet.","complement = adjective"]
    ],
    wrong: "This cake smells sweetly.",
    right: "This cake smells sweet.",
    challenge: "Write 3 sentences using become, seem and remain, each followed by a noun or adjective complement describing your career goals.",
    quiz: [
      {"q":"Complete with a noun: \"We are ___.\"","a":["students","happy","quickly","tired"],"c":0,"x":"Students is a noun; the others are adjectives or an adverb."},
      {"q":"Complete with an adjective: \"We are ___.\"","a":["a doctor","friends","happy","teachers"],"c":2,"x":"Happy is the only adjective."},
      {"q":"Complete with a noun: \"The horse seems ___.\"","a":["a champion","fast","strong","tired"],"c":0,"x":"A champion is a noun phrase."},
      {"q":"Complete with an adjective: \"The horse seems ___.\"","a":["an animal","a runner","a stallion","tired"],"c":3,"x":"Tired is an adjective."},
      {"q":"Complete with a noun: \"The children become ___.\"","a":["clever","doctors","tall","happy"],"c":1,"x":"Doctors is a noun."},
      {"q":"Complete with an adjective: \"The children become ___.\"","a":["teachers","tall","students","nurses"],"c":1,"x":"Tall is an adjective."},
      {"q":"Complete with a noun: \"Mary remains ___.\"","a":["calm","quiet","a nurse","cheerful"],"c":2,"x":"A nurse is a noun phrase."},
      {"q":"Complete with an adjective: \"Mary remains ___.\"","a":["silent","a leader","my friend","a student"],"c":0,"x":"Silent is an adjective."},
      {"q":"Complete with a noun: \"This cake smells of ___.\"","a":["delicious","sweet","good","vanilla"],"c":3,"x":"‘Vanilla’ is a noun; delicious, sweet, and good are adjectives."},
      {"q":"Complete with an adjective: \"This cake smells ___.\"","a":["a rose","delicious","a flower","the kitchen"],"c":1,"x":"Delicious is an adjective."}
    ],
    guide: {
      summary: "Setelah linking verb ada complement (pelengkap) berupa noun, pronoun, atau adjective. Tanpa complement, kalimat terasa belum selesai.",
      pattern: "Rumus: subjek + linking verb + noun/adjective. Setelah linking verb pakai adjective, bukan adverb (smells sweet, bukan sweetly).",
      vocab: [
        ["complement","pelengkap"],
        ["remain","tetap"],
        ["become","menjadi"],
        ["calm","tenang"]
      ],
      translations: [
        "Kami adalah guru.",
        "Kami bahagia.",
        "Kuda itu tampak lelah.",
        "Anak-anak itu menjadi dokter.",
        "Mary tetap tenang.",
        "Kue ini berbau manis."
      ],
      challenge: "Tulis 3 kalimat dengan become, seem, dan remain, masing-masing diikuti noun atau adjective, tentang tujuan kariermu."
    }
  },
  {
    definition: "Some action verbs take a direct object (transitive verbs); others do not (intransitive verbs). The same verb can be intransitive in one sentence and transitive in another.",
    pattern: "Transitive: verb + object\nI read a newspaper. / He drinks water.\n\nIntransitive: no object\nI travel to Bali. / She runs.\n\nSame verb, both uses:\nThe children run slowly. (intransitive)\nThe party runs its campaigns. (transitive)",
    examples: [
      ["I read a newspaper.","transitive (object: newspaper)"],
      ["He drinks water.","transitive (object: water)"],
      ["I kicked the ball.","transitive (object: the ball)"],
      ["I travel to Bali.","intransitive (no object)"],
      ["She runs.","intransitive"],
      ["You will sleep.","intransitive"],
      ["I wrote the letter.","transitive"],
      ["I wrote last night.","intransitive (same verb, no object)"]
    ],
    wrong: "I kicked.",
    right: "I kicked the ball.",
    challenge: "Write one transitive and one intransitive sentence with the verb \"work\" or \"run\" about a business or team.",
    quiz: [
      {"q":"The children run slowly in the first two laps. The verb \"run\" is ...","a":["transitive","intransitive","linking","a noun"],"c":1,"x":"No direct object follows run."},
      {"q":"The political party runs its campaigns efficiently. The verb \"runs\" is ...","a":["intransitive","linking","transitive","an adverb"],"c":2,"x":"Its campaigns is the object of runs."},
      {"q":"Ali drives the car recklessly. The verb \"drives\" is ...","a":["transitive","intransitive","linking","an adjective"],"c":0,"x":"The car is the object."},
      {"q":"Always drive carefully. The verb \"drive\" is ...","a":["transitive","linking","a noun","intransitive"],"c":3,"x":"No object follows drive."},
      {"q":"The team trains regularly. The verb \"trains\" is ...","a":["transitive","intransitive","linking","an adverb"],"c":1,"x":"There is no object."},
      {"q":"The national coach trains the team for the match. The verb \"trains\" is ...","a":["intransitive","a noun","transitive","linking"],"c":2,"x":"The team is the object."},
      {"q":"He eats lots of chocolate. The verb \"eats\" is ...","a":["transitive","intransitive","linking","an adverb"],"c":0,"x":"Lots of chocolate is the object."},
      {"q":"She got a scolding for coming home late. The verb \"got\" is ...","a":["intransitive","linking","transitive","a noun"],"c":2,"x":"A scolding is the object of got."},
      {"q":"We should eat only at meal-times. The verb \"eat\" is ...","a":["transitive","linking","a pronoun","intransitive"],"c":3,"x":"No object follows eat."}
    ],
    guide: {
      summary: "Transitive verb membutuhkan objek langsung. Intransitive verb tidak. Satu verb bisa keduanya tergantung kalimat.",
      pattern: "Tanya \"apa/siapa yang di-...?\" setelah verb. Kalau ada jawabannya (read what? newspaper), itu transitive. Kalau tidak ada, intransitive.",
      vocab: [
        ["transitive","membutuhkan objek"],
        ["intransitive","tanpa objek"],
        ["object","objek"],
        ["campaign","kampanye"]
      ],
      translations: [
        "Saya membaca koran.",
        "Dia minum air.",
        "Saya menendang bola.",
        "Saya bepergian ke Bali.",
        "Dia berlari.",
        "Kamu akan tidur.",
        "Saya menulis surat itu.",
        "Saya menulis tadi malam."
      ],
      challenge: "Tulis satu kalimat transitive dan satu intransitive dengan verb work atau run tentang bisnis atau tim."
    }
  }
];
