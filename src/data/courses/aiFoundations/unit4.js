// Unit 4 — Generative AI: How ChatGPT Actually Works (student course "AI Foundations")
// Covers next-token prediction, embeddings & attention, prompting, hallucination, and synthetic media.
const unit = {
  id: 'unit-4',
  title: 'Generative AI: How ChatGPT Actually Works',
  description: "Pull back the curtain on chatbots and image generators: next-word prediction, meaning as geometry, prompting that works, and the skills to catch AI when it's confidently wrong.",
  icon: 'MessageSquare',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1 — The Next-Word Game
    // ------------------------------------------------------------------
    {
      id: 'the-next-word-game',
      title: 'The Next-Word Game',
      duration: '20 min',
      objectives: [
        'Explain what a large language model actually does: predict the next token, over and over',
        'Describe what tokens are and why models see tokens instead of letters',
        "Explain why 'brilliant autocomplete, not a database' predicts both the strengths and the weak spots of chatbots",
      ],
      blocks: [
        {
          type: 'intro',
          text: "Open your phone's keyboard, type 'I'll be there in', and look at the three word suggestions above the keys. Tap the middle one. Then tap the next middle one, and keep going. You'll get something like 'I'll be there in a few minutes and I will let you know' — slightly odd, but real English. Your keyboard just played the next-word game. ChatGPT plays the exact same game, with a model millions of times larger. Understand this one idea and most of the mystery around AI chatbots disappears.",
        },
        {
          type: 'text',
          text: "Here's what actually happens when you send a chatbot a question. The model does not search a database of stored answers. Instead it computes one thing: **which chunk of text is most likely to come next?** It picks a chunk, sticks it on the end of the conversation, and then plays the game again — one chunk at a time, often hundreds of times — until a complete answer has appeared on your screen.",
        },
        {
          type: 'text',
          text: "Those chunks are called **tokens**, and 'most likely' isn't a vague guess. On every single step, the model assigns a probability to every token in its vocabulary — tens of thousands of options, each scored. Try it yourself: 'The cat sat on the ___.' You probably thought 'mat,' maybe 'couch' or 'floor,' and almost certainly not 'submarine.' A **large language model (LLM)** makes the same kind of ranked prediction, just with far more context and far more precision.",
        },
        {
          type: 'keyTerms',
          title: 'Words to know',
          terms: [
            { term: 'Token', definition: 'A chunk of text — sometimes a whole word, often just a piece of one. The only unit a language model ever reads or writes.' },
            { term: 'Large language model (LLM)', definition: 'A neural network trained on massive amounts of text to predict the next token in a sequence.' },
            { term: 'Probability distribution', definition: "The model's ranked scores over every possible next token — 'mat' 62%, 'couch' 11%, 'submarine' nearly 0%." },
            { term: 'Parameters', definition: 'The billions of learned weights inside the model — the same kind of adjustable numbers you met in the neural networks unit.' },
          ],
        },
        {
          type: 'video',
          videoId: 'LPZh9BOjkQs',
          title: 'Large Language Models explained briefly (3Blue1Brown)',
          duration: '8 min',
          note: 'The best sub-10-minute explanation of the prediction loop you just read about. Watch for how the probability distribution shows up visually.',
        },
        {
          type: 'text',
          text: "Where do those probabilities come from? Training. The model read an enormous slice of the internet — books, articles, code, conversations — and played the next-word game trillions of times: guess the next token, peek at the real one, nudge the weights, repeat. Notice that this is the supervised learning loop from Unit 2. The training data is 'all the text,' and the label for every example is simply 'whatever token actually came next.'",
        },
        {
          type: 'checkpoint',
          question: 'A chatbot writes a three-paragraph answer to your history question. Based on this lesson, how did it produce that answer?',
          options: [
            'It found the closest matching answer in its database of stored documents',
            'It predicted one token at a time, each based on everything written so far',
            'It browsed the live web and copied the most relevant paragraphs it found',
            'It planned the full answer internally, then translated it into English',
          ],
          correct: 1,
          explanation: "Generation is a loop: predict a token, append it, predict again — hundreds of times over for three paragraphs. The database option is the most common misconception about chatbots: the 'knowledge' sits in trained weights, so nothing is looked up or copied at answer time.",
        },
        { type: 'heading', text: 'Tokens: how the model really sees text' },
        {
          type: 'text',
          text: "Tokens usually aren't whole words. Common words like 'the' get a single token. Rare words get chopped into pieces — 'antidisestablishmentarianism' might arrive as five or six chunks. Your first name might be one token or four, depending on how often it appeared in the training text. This matters because the model never sees letters. It sees token IDs — numbered puzzle pieces with the spelling sealed inside.",
        },
        {
          type: 'text',
          text: "That's why an LLM can write a beautiful essay yet stumble when you ask how many r's are in 'strawberry.' The r's simply aren't visible to it. The same goes for arithmetic: '2847 × 391' becomes a few opaque tokens, and the model has to *predict digits that look plausible* rather than compute the way a calculator does. When a chatbot gets long division wrong, it isn't broken — it's playing the only game it knows.",
        },
        {
          type: 'interactive',
          component: 'TokenPredictor',
          caption: "Play the next-word game yourself. Notice how often your top guess matches the model's — and where context completely changes the ranking.",
        },
        {
          type: 'checkpoint',
          question: "You ask an LLM to count the letters in 'extraordinary' and it confidently gives the wrong number. What's the most likely explanation?",
          options: [
            'Its training data included too few dictionaries and spelling lists',
            'A content filter blocks letter-by-letter analysis of any word',
            'It sees the word as one or two tokens, so the letters are hidden',
            'Counting requires a lookup table, and this model was given none',
          ],
          correct: 2,
          explanation: "Tokenization seals letters inside chunks, so the model predicts a plausible-sounding count instead of actually counting. The training-data option is tempting, but dictionaries were in training — letters just aren't the unit the model operates on.",
        },
        { type: 'heading', text: 'Brilliant autocomplete — not a database' },
        {
          type: 'text',
          text: "So where do facts live, if there's no database? During training the model adjusted billions of **parameters** — the same kind of weights you tuned by hand in Unit 3 — until its next-token guesses got good. A fact the model saw thousands of times, like Paris being the capital of France, is baked deep into those weights. A fact it saw twice is barely a smudge. Everything it 'knows' is stored as *patterns of numbers*, not as retrievable entries.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: generating 'The capital of France is Paris'",
          text: "Let's trace one full step of the game. You type: **'The capital of France is'**. Here's what happens next, and why each step exists.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Tokenize.** Your text becomes token IDs — roughly [The] [capital] [of] [France] [is]. *Why:* the network can only process numbers, never raw letters, so everything gets converted first.",
            "**Score every token.** The network processes the sequence and outputs a probability for every token it knows: 'Paris' maybe 97%, 'a' around 1%, 'banana' essentially 0%. *Why:* likelihood is the only thing the network computes — there is no separate 'truth' score.",
            "**Pick one.** The model samples from the top options — almost always 'Paris' here. A small dose of randomness is deliberately kept in. *Why:* always taking the single top token makes text repetitive and robotic; that same randomness is why one prompt gives different wording on different runs.",
            "**Append and repeat.** 'Paris' joins the sequence, and the whole game restarts to predict what follows — probably a period. *Why:* every long answer you've ever received is just this loop running hundreds of times.",
          ],
        },
        {
          type: 'text',
          text: "Notice what's missing from that loop: any step where the model checks whether 'Paris' is *true*. It answers correctly because 'Paris' overwhelmingly follows that phrase in its training text. That's why 'brilliant autocomplete, not a database' is the honest description — and in lesson 4 you'll see exactly what goes wrong when the training text is thin and the likeliest-sounding answer happens to be false.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Same game, different scale',
          text: "Your phone keyboard's suggestions come from a tiny language model trained on common phrases. The jump from that to ChatGPT wasn't a brand-new idea — it was the same next-token game scaled up enormously in data, parameters, and compute, the scaling story you saw at the end of Unit 3. This also explains the 'knowledge cutoff': the weights froze when training ended, so anything that happened afterward simply isn't in the patterns.",
        },
        {
          type: 'tryIt',
          title: 'Try it: see text the way a model does',
          intro: 'Tiktokenizer shows exactly how real models split text into colored token chunks, with a running token count.',
          steps: [
            'Open [Tiktokenizer](https://tiktokenizer.vercel.app/) and pick a recent model from the dropdown at the top.',
            'Paste your full name. How many tokens is it? Common names usually cost fewer tokens than rare ones — the tokenizer learned its chunks from frequency.',
            "Try an emoji, then a long word like 'antidisestablishmentarianism.' Watch where the split points fall.",
            'Paste a sentence in another language you know (or borrow one from a classmate), then paste its English translation. Compare the token counts.',
            'Write down one sentence explaining how what you just saw accounts for LLMs struggling with spelling, letter-counting, or arithmetic.',
          ],
          url: 'https://tiktokenizer.vercel.app/',
          urlLabel: 'Open Tiktokenizer',
        },
        {
          type: 'checkpoint',
          question: "A friend says: 'ChatGPT is basically Google with a personality — it looks everything up.' What's the most accurate correction?",
          options: [
            'It looks nothing up — it generates text from its trained weights',
            'It looks things up, but only from websites saved before its cutoff date',
            'It looks things up, but a personality layer rewrites the results first',
            'It looks things up only when you explicitly ask it for a hard fact',
          ],
          correct: 0,
          explanation: "A standard LLM retrieves nothing at answer time; every word is generated by next-token prediction from frozen weights. The 'saved websites' option tempts because training really did use web text — but that text was compressed into weights, not stored for lookup.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What does an LLM actually do? One thing: predict the next token, append it, and repeat — that loop produces every chatbot answer you've ever read.",
            "What's a token? A chunk of text, often smaller than a word — and since it's the only unit the model sees, spelling and arithmetic struggles are baked in by design.",
            'Where are the facts? Spread across billions of trained weights as statistical patterns — not sitting in a searchable database.',
            "Why 'brilliant autocomplete, not a database'? Because nothing in the prediction loop checks truth — only likelihood, learned from training text.",
          ],
        },
        {
          type: 'text',
          text: "One puzzle remains: how does a pile of numbers 'know' that Paris and France belong together at all? That's the next lesson — meaning, stored as geometry.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'What single operation does a large language model repeat to produce an answer?',
            options: [
              'Searching a stored database for the closest matching answer',
              'Predicting the most likely next token, appending it, repeating',
              'Translating your question into code and executing the program',
              'Retrieving sentences from live websites and stitching them together',
            ],
            correct: 1,
            explanation: "Generation is next-token prediction in a loop — nothing more. The database option is the classic misconception: training text was compressed into weights, so there's nothing left to 'search' at answer time.",
          },
          {
            question: "Why can a model that writes flawless essays fail to count the r's in 'strawberry'?",
            options: [
              'It processes tokens, not letters, so spelling hides inside a chunk',
              'It was trained on formal writing, where letter-counting rarely appears',
              'Its safety filters block questions about individual letters',
              'Essay writing and counting are handled by two different models',
            ],
            correct: 0,
            explanation: "Tokenization is the culprit: 'strawberry' may reach the model as one or two sealed chunks, letters invisible. The training-data option is tempting, but no amount of extra text fixes a problem caused by the input format itself.",
          },
          {
            question: 'You ask a chatbot who won a championship game that happened last night. It instantly names a team. What should you conclude?',
            options: [
              'It checked the live score online before writing its answer',
              'It must be correct, since it answered with no hedging at all',
              'The answer is pattern-generated, so verify it against live coverage',
              'It streamed live game data as the championship was played',
            ],
            correct: 2,
            explanation: "The weights froze at training time, so last night's result cannot be in them — yet the model will still produce a likely-sounding team name. Confidence is a writing style, not evidence; that's the core lesson of hallucination, coming up in lesson 4.",
          },
          {
            question: "An LLM 'remembers' that Paris is the capital of France. Where does that knowledge physically live?",
            options: [
              'In a fact table that company engineers wrote by hand',
              'In a compressed copy of Wikipedia bundled with the app',
              'In cached conversations collected from millions of users',
              'In the values of billions of trained weights',
            ],
            correct: 3,
            explanation: 'Facts are stored the way everything else is: as learned weight patterns, exactly like the weights in the neural networks you explored in Unit 3. The Wikipedia option tempts because encyclopedia text was training data — but it was used to tune weights, not shipped along for lookup.',
          },
          {
            question: 'Why do two identical prompts sometimes produce differently worded answers?',
            options: [
              'The model learns from each conversation and shifts between runs',
              'Sampling adds deliberate randomness to each token choice',
              'The model consults a different set of websites each time',
              'Answers are rotated so no two users get identical text',
            ],
            correct: 1,
            explanation: 'Sampling keeps a little randomness on purpose, so different high-probability tokens win on different runs — always taking the single top token makes text robotic. The first option is a common myth: a deployed model does not update its weights from your chats.',
          },
          {
            question: 'During training, the model guesses the next token and is corrected against the real next token from actual text. Which Unit 2 learning setup is this?',
            options: [
              'Unsupervised learning, because no human wrote any of the labels',
              'Reinforcement learning, since the model explores by trial and error',
              'Supervised learning, in which the real next token is the label',
              'Rule-based programming, since grammar rules are coded by hand',
            ],
            correct: 2,
            explanation: "It's supervised learning with a clever twist — researchers call it self-supervised, because every stretch of real text already contains its own 'correct next token.' The unsupervised option tempts since no human labeled anything, but a label still exists for every single example.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2 — Inside a Language Model
    // ------------------------------------------------------------------
    {
      id: 'inside-a-language-model',
      title: 'Inside a Language Model',
      duration: '25 min',
      objectives: [
        'Explain embeddings: how models represent word meaning as positions in space',
        'Describe, at a concept level, what attention does: deciding which earlier words matter right now',
        'Rank pre-training, fine-tuning, and prompting by cost and by what each one changes',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Here's a strange math problem: king − man + woman = ? If you answered 'queen,' congratulations — you just did arithmetic with *meaning*. In the word-vector spaces language models are built on, that equation really does land you in the neighborhood of 'queen,' because every word is stored as a list of numbers, and those numbers behave like coordinates on a map. Today you'll meet the two ideas that make the next-word game from lesson 1 actually good: embeddings (where meaning lives) and attention (how context gets used).",
        },
        { type: 'heading', text: 'Embeddings: meaning as geometry' },
        {
          type: 'text',
          text: "A neural network can't process the word 'dog' — it processes numbers. So every token gets converted into an **embedding**: a long list of numbers that acts like coordinates in a meaning-space with hundreds of dimensions. The magic is in *where* words land. Words used in similar contexts end up close together: 'dog' near 'puppy,' 'happy' near 'joyful,' 'Paris' near 'France.' Distance in this space *is* similarity of meaning.",
        },
        {
          type: 'text',
          text: "It gets better: *directions* in the space carry meaning too. The arrow from 'man' to 'woman' points roughly the same way as the arrow from 'king' to 'queen' — that shared direction encodes something like gender. So king − man + woman lands you near queen. Nobody programmed that in. It emerged from training, because words that behave alike across billions of sentences get pushed to similar coordinates.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Embeddings are everywhere',
          text: "This isn't just a chatbot trick. When a search engine understands that 'cheap sneakers' should match a page titled 'affordable running shoes,' that's embedding distance. When a streaming app recommends a song 'similar to' one you liked, similarity is measured in an embedding space. Any time software seems to understand what you *meant* rather than what you literally typed, there's a good chance vectors are being compared behind the scenes.",
        },
        {
          type: 'checkpoint',
          question: "In the game Semantris, typing 'bark' can clear both a 'dog' block and a 'tree' block. What does that reveal about how the model represents words?",
          options: [
            'The model stores a dictionary and looks up both definitions of bark',
            "'bark' sits near both 'dog' and 'tree' in learned meaning-space",
            'The model scores blocks by how similar their spellings are',
            'The game uses a hand-written list of word associations',
          ],
          correct: 1,
          explanation: "Embeddings put 'bark' close to both its 'dog sound' and 'tree covering' neighborhoods, so both associations score as related. The dictionary option is tempting, but no lookup happens — just distance measurements between learned coordinates.",
        },
        {
          type: 'tryIt',
          title: 'Try it: play with meaning-space',
          intro: 'Semantris is a word-association game built on real embeddings — the model scores how related your word is to each block on screen.',
          steps: [
            'Open [Semantris](https://research.google.com/semantris/) and choose **Blocks** mode (the untimed one — Arcade mode is fun but frantic).',
            'Type a single word to target a block. Watch which blocks clear: the model ranks every block by how related it is to your word.',
            "Hunt for double-clears: one clue that removes two blocks at once (like 'bark' for dog and tree). Each one is embedding geometry in action.",
            'Ask yourself: the game has never seen your exact clue before, so how does it score it? (Answer: distances between vectors learned from billions of sentences.)',
            'Afterwards, open the [Embedding Projector](https://projector.tensorflow.org/) on a laptop and explore real word embeddings in 3D — search for a word and inspect its nearest neighbors.',
          ],
          url: 'https://research.google.com/semantris/',
          urlLabel: 'Play Semantris',
        },
        { type: 'heading', text: 'Attention: which earlier words matter right now' },
        {
          type: 'text',
          text: "Embeddings give each word a meaning, but meaning shifts with context. Consider: 'The trophy wouldn't fit in the suitcase because it was too big.' What does 'it' refer to? The trophy. Now swap one word — 'because it was too small' — and 'it' becomes the suitcase. Your brain resolved that instantly by weighing the surrounding words. **Attention** is the mechanism that lets a language model do the same thing.",
        },
        {
          type: 'text',
          text: "At each prediction step, attention lets the model score every earlier token for relevance: *given what I'm about to predict, which previous words matter most right now?* High-scoring tokens get a louder voice in the prediction; low-scoring ones fade into the background. This runs many times in parallel across many layers, which is how the model juggles grammar, topic, tone, and facts all at once.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: attention steering a prediction',
          text: "Take the sentence: **'My sister loves astronomy, so for her birthday I bought her a ___.'** Step 1 — without context, the most frequent continuation of 'I bought her a' in everyday text would be something generic like 'gift' or 'card.' *Why this matters:* frequency alone gives bland guesses. Step 2 — attention scores the earlier tokens, and 'astronomy' and 'birthday' light up as highly relevant to the blank. *Why:* those words constrain what fits, and training taught the model that hobby words strongly shape gift words. Step 3 — the boosted context pulls the prediction toward the astronomy neighborhood of embedding-space, and 'telescope' rockets up the rankings. *Why:* this is embeddings and attention working together — attention picks which meanings matter right now, embeddings supply what's nearby in meaning.",
        },
        {
          type: 'checkpoint',
          question: "In 'The trophy wouldn't fit in the suitcase because it was too small,' which earlier token should attention weight most heavily when the model interprets 'it'?",
          options: [
            "'trophy' — the sentence's grammatical subject always wins",
            "'because' — connector words carry the most meaning here",
            "'suitcase' — a container that is too small explains the poor fit",
            'No single word — attention weights all earlier tokens equally',
          ],
          correct: 2,
          explanation: "With 'small,' the only sensible reading is that the *container* was too small, so 'suitcase' deserves the weight — flip it back to 'big' and 'trophy' would win instead. The last option names the key misconception: the entire point of attention is that words are NOT weighted equally.",
        },
        {
          type: 'links',
          title: 'See inside a real model',
          items: [
            {
              label: 'LLM Visualization — 3D walkthrough',
              url: 'https://bbycroft.net/llm',
              description: 'Fly through a working GPT in 3D: watch tokens become embeddings, pass through attention, and turn into predictions. Best on a laptop or projector.',
            },
            {
              label: 'Embedding Projector',
              url: 'https://projector.tensorflow.org/',
              description: 'Explore real high-dimensional embeddings squashed into 3D — the geometry behind Semantris, made visible.',
            },
          ],
        },
        {
          type: 'video',
          videoId: 'wjZofJX0v4M',
          title: 'Transformers, the tech behind LLMs (3Blue1Brown)',
          duration: '27 min',
          note: 'Optional deep dive for the curious — the full visual walkthrough of embeddings, attention, and prediction. Not required, but if this lesson hooked you, this is the best next step on the internet.',
        },
        { type: 'heading', text: 'Training, fine-tuning, prompting: the cost ladder' },
        {
          type: 'text',
          text: "You now know what's inside a model. The last question is: how do people *change* what a model does? There are three levers, and they differ wildly in cost. Think of them as a ladder — each rung down changes less, costs less, and is available to more people.",
        },
        {
          type: 'table',
          headers: ['Rung', 'What changes', 'Rough cost', 'Who can do it'],
          rows: [
            ['**Pre-training**', 'Every weight, learned from scratch on massive text data', 'Millions of dollars and months of compute', 'A handful of AI companies'],
            ['**Fine-tuning**', 'Weights get nudged on a smaller, focused dataset (a medical Q&A style, a helpful-assistant persona)', 'Far cheaper — but still real money and expertise', 'Companies, labs, serious hobbyists'],
            ['**Prompting**', 'Nothing inside the model — weights stay frozen; you only change the input it continues', 'Free, takes seconds', 'You, right now'],
          ],
        },
        {
          type: 'text',
          text: "Fine-tuning deserves one concrete picture, because you've already used its most famous result. A freshly pre-trained model is just a raw next-token predictor — ask it a question and it might continue with *more questions*, because questions often follow questions in internet text. Turning that raw predictor into a helpful assistant that answers, follows instructions, and declines harmful requests is a fine-tuning job: the weights get nudged on examples of good assistant behavior until that style becomes the likely continuation.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Climb the ladder from the bottom',
          text: "Engineers try the cheap rung first: can a well-written prompt with the right context solve it? Only if that fails do they consider fine-tuning, and almost nobody pre-trains from scratch. And remember from Unit 3 *how* fine-tuning nudges weights — it's gradient descent again, small downhill steps on the error, just starting from an already-trained model instead of random weights.",
        },
        {
          type: 'checkpoint',
          question: 'Your school wants a chatbot that answers questions using the student handbook. Which approach should they try first?',
          options: [
            'Pre-train a new model on the handbook so it knows nothing else',
            'Fine-tune an open model on the handbook text right away',
            'Wait for an AI company to release a model trained on your school',
            'Prompt an existing model with the handbook text as context',
          ],
          correct: 3,
          explanation: 'Prompting is the free bottom rung and often works: the handbook rides along as context, and no weights change. Pre-training on only the handbook would produce a model that can barely form sentences — it takes massive, diverse text just to learn language itself.',
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'How does a model store meaning? As embeddings — coordinates in a high-dimensional space where distance means similarity and directions encode relationships (king − man + woman ≈ queen).',
            'What does attention do? At every prediction step, it scores which earlier tokens matter most right now, so context — not just frequency — drives the next-token choice.',
            'What are the three ways to change model behavior? Pre-training (everything, millions of dollars), fine-tuning (nudge weights on focused data), prompting (change only the input — free).',
            "Which lever do you personally control? Prompting — which is exactly why it's worth learning to do well.",
          ],
        },
        {
          type: 'text',
          text: "And that's the next lesson: turning prompting from typing-and-hoping into an actual skill.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In embedding space, what does it mean when two words are located close together?',
            options: [
              'They share most of their letters and spelling',
              'They appear in similar contexts in the training text',
              'They entered the language around the same time in history',
              'They break into the same number of tokens each',
            ],
            correct: 1,
            explanation: 'Position in embedding space is learned from context of use, so neighbors are words that behave alike in real text. Spelling is a tempting guess, but tokenization already handled spelling — embeddings are purely about usage and meaning.',
          },
          {
            question: 'Why does king − man + woman land near queen in embedding space?',
            options: [
              'Directions in the space encode relationships like gender',
              'The model memorized this famous equation from math textbooks',
              'Those four words all happen to share a common token',
              'Engineers hand-coded analogy rules into the model vocabulary',
            ],
            correct: 0,
            explanation: 'Consistent relationships in training text become consistent directions in the space — the man-to-woman arrow points the same way as king-to-queen, and no one programmed that. The memorization option gets it backwards: the equation is famous *because* the geometry emerged on its own.',
          },
          {
            question: "A model is predicting the next word after 'The chef tasted the soup and added more ___.' What is attention contributing at this moment?",
            options: [
              'It deletes irrelevant words from the sentence permanently',
              'It checks the sentence against a stored grammar rulebook',
              "It scores earlier tokens, so 'soup' outweighs 'the'",
              'It slows generation down so the model can double-check facts',
            ],
            correct: 2,
            explanation: "Attention re-weights the context at every step, so 'chef,' 'tasted,' and 'soup' get a louder voice than filler words and pull the prediction toward 'salt.' The fact-checking option describes something no part of the prediction loop does, as lesson 4 will drive home.",
          },
          {
            question: 'A small tutoring company wants a chatbot that answers in their friendly style using their FAQ page. What is the sensible first step on the cost ladder?',
            options: [
              'Pre-train a brand-new model from scratch on the FAQ',
              'Fine-tune an open model before testing anything simpler',
              'Buy more powerful GPUs so the model can think harder',
              'Prompt with a role, style rules, and the FAQ pasted as context',
            ],
            correct: 3,
            explanation: 'Prompting costs nothing and frequently solves style-and-content tasks, so professionals always test it first. Fine-tuning tempts because it sounds more thorough, but paying to nudge weights before trying the free rung is backwards engineering.',
          },
          {
            question: "Fine-tuning 'nudges the weights' of a pre-trained model. Which process from Unit 3 does the nudging?",
            options: [
              'Gradient descent — small steps that reduce the loss',
              'Attention — it rewires the connections between layers',
              'Tokenization — it splits the new dataset into chunks',
              'Embedding — it shifts the model to new coordinates',
            ],
            correct: 0,
            explanation: "It's the same downhill-on-the-loss-curve process that trained the network originally, just starting from trained weights instead of random ones. Attention is tempting because it's new vocabulary from this lesson — but attention operates during prediction, not weight updating.",
          },
          {
            question: 'Which statement correctly describes what prompting changes?',
            options: [
              'It permanently updates the weights for all future users',
              'It adds the new words you use to the model vocabulary',
              'It changes only the input; the weights stay frozen',
              'It temporarily adds extra layers for harder questions',
            ],
            correct: 2,
            explanation: "Prompting changes the input, never the model — that's exactly why it's free and instant. The first option is a widespread myth; your conversations don't retrain the deployed model in real time.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3 — Prompting 101
    // ------------------------------------------------------------------
    {
      id: 'prompting-101',
      title: 'Prompting 101',
      duration: '20 min',
      objectives: [
        'Build prompts from four parts: role, task, context, and format',
        'Iterate on outputs instead of settling for the first draft',
        'State honestly what good prompting can and cannot fix',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Two students, same assignment, same chatbot. One types 'write about the water cycle' and gets a generic blob that reads like a damp encyclopedia. The other gets a clear, grade-appropriate study guide with practice questions at the end. Same model, same minute, same free account. The entire difference was the prompt. Prompting isn't magic words — it's applied understanding of everything you learned in the last two lessons.",
        },
        {
          type: 'text',
          text: 'Remember why prompts matter: the model *continues* text. Your prompt is the opening of a document, and the model writes the most likely continuation. A vague prompt points at millions of possible documents, so you get the blurry average of all of them. A specific prompt narrows the field — attention locks onto your details, and the continuation lands where you aimed.',
        },
        { type: 'heading', text: 'The four-part prompt' },
        {
          type: 'list',
          items: [
            "**Role** — who should the model write as? 'You are a patient science tutor.' Sets vocabulary, tone, and expertise level, because text written by tutors reads differently from random internet text.",
            "**Task** — what exactly should it do? 'Explain the water cycle' beats 'write about water.' Verbs matter: explain, compare, summarize, critique, and quiz each trigger a different document shape.",
            "**Context** — what does it need to know? The audience, your class notes, the assignment rubric, constraints. The model can't read your mind — but it can read your paste.",
            "**Format** — what should the output look like? A table, five numbered steps, under 200 words, ending with three practice questions. If you don't choose, the model chooses for you.",
          ],
        },
        {
          type: 'checkpoint',
          question: "A student prompts: 'You are a nutritionist. Create a one-day meal plan.' Which missing parts would most improve the result?",
          options: [
            'Context and format — who the plan is for, and its layout',
            'Nothing, because short prompts outperform long ones',
            'A politeness phrase, since models refuse impolite requests',
            'A different role, since nutritionist is far too specific',
          ],
          correct: 0,
          explanation: "Role and task are present, but without context (age, allergies, budget, goals) and format the model must guess — and it guesses generic. The 'short prompts win' option flips the truth: specificity narrows the space of continuations, which is what makes outputs useful.",
        },
        { type: 'heading', text: 'Worked example: weak to strong in three steps' },
        {
          type: 'text',
          text: "Let's rebuild that water-cycle prompt one deliberate step at a time, and narrate *why* each addition earns its place.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Start: 'write about the water cycle.'** First, pin down the task and format: *'Explain the water cycle in 5 numbered steps, each 1–2 sentences.'* — *Why:* 'write about' matches essays, poems, and ads equally well; naming the verb and the shape eliminates most bad continuations instantly.",
            "**Add role and context:** *'You are a science tutor for 7th graders. Explain the water cycle in 5 numbered steps, each 1–2 sentences, for a student reviewing the night before a quiz.'* — *Why:* the role sets reading level and tone, and the situation (quiz tomorrow) steers content toward what's testable rather than trivia.",
            "**Add constraints and a built-in check:** *'...Include one everyday example for each step, and end with three quiz questions that test the steps students most often mix up.'* — *Why:* examples force concrete writing, and requesting questions turns a passive summary into retrieval practice — you're designing the output's job, not just its topic.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'The finished prompt',
          text: "'You are a science tutor for 7th graders. Explain the water cycle in 5 numbered steps, each 1–2 sentences, for a student reviewing the night before a quiz. Include one everyday example for each step, and end with three quiz questions that test the steps students most often mix up.' Three edits, and the model now has a role, a task, context, and a format to continue from.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The fastest upgrade: show, don’t just tell',
          text: "One more professional habit: when you have a picture in your head of what the output should look like, include a small example of it. 'Write flashcards like this: front — question, back — a one-sentence answer plus a memory hook' beats three paragraphs of description. You already know why this works: the model continues patterns, and nothing establishes a pattern faster than a sample of the pattern itself.",
        },
        {
          type: 'interactive',
          component: 'PromptLab',
          caption: 'Assemble prompts from parts and compare weak versus strong outputs side by side. Notice which single part upgrades the result the most for each task.',
        },
        { type: 'heading', text: 'Iteration beats one-shot' },
        {
          type: 'text',
          text: "Even a strong prompt rarely nails it on the first try — and that's fine, because the conversation isn't over. Treat the first output as a draft and direct the revision: 'shorter,' 'more casual,' 'add a real example,' 'you drifted off-topic in step 3 — fix just that step.' Change one thing at a time so you can tell what worked. Skilled prompting looks less like casting a spell and more like editing with a very fast writing partner.",
        },
        {
          type: 'text',
          text: "Iteration also has a second superpower: it lets you *diagnose*. If the output is generic, your context was probably thin. If the structure is wrong, you never specified a format. If the tone is off, adjust the role. Each weakness in the output points back at one of the four parts — so over time, fixing outputs teaches you to write better first prompts.",
        },
        {
          type: 'checkpoint',
          question: "Your prompt produced a decent draft, but it's too formal and twice as long as you need. What's the best next move?",
          options: [
            'Start over from scratch with a completely different prompt',
            'Regenerate repeatedly until randomness produces a casual version',
            "Reply: 'cut this to half the length and make it casual'",
            'Accept it — output style is fixed and cannot be steered',
          ],
          correct: 2,
          explanation: "Iteration is the skill: name what's wrong and direct the fix, keeping everything that already works. Regenerating gambles on randomness doing your editing for you — you might eventually win, but a one-line instruction wins immediately.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'What prompting cannot fix',
          text: "Be honest about the ceiling. Prompting shapes relevance, tone, structure, and reading level — it does **not** add a truth check to the next-token loop. A flawless four-part prompt can still return invented statistics, fake citations, and confident nonsense, because nothing about your wording changes how generation works. 'Only use real sources' is a wish, not a switch. Prompting controls the *shape* of the answer; verifying the *substance* is still your job — and it's exactly what the next lesson teaches.",
        },
        {
          type: 'checkpoint',
          question: 'You write a flawless role-task-context-format prompt asking for statistics on a rare topic, and you request only verified numbers. Which part of the answer stays unreliable?',
          options: [
            'The formatting, which tends to drift as answers get longer',
            'The statistics themselves — no prompt adds a truth check',
            'The reading level, which the model always sets on its own',
            'The assigned persona, which fades after a paragraph or two',
          ],
          correct: 1,
          explanation: "Format, reading level, and persona are exactly what prompts control well; truth is what they cannot touch. Asking for 'only verified numbers' just makes fabricated numbers *sound* more verified — the next-token mechanism underneath is unchanged.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What makes a strong prompt? Four parts — role, task, context, format — because each one narrows the space of continuations the model picks from.',
            'Why does specificity work? The model continues your text; specific openings match specific documents, while vague openings match the blurry average of everything.',
            'What beats a perfect first prompt? Iteration — treat outputs as drafts and direct revisions one change at a time.',
            "What can prompting never fix? Hallucination. It shapes the answer's form, not its truthfulness.",
          ],
        },
        {
          type: 'text',
          text: 'So how do you catch a fluent, confident, well-formatted answer that happens to be false? Next lesson: hallucinations, and the three-step workflow that catches them.',
        },
      ],
      quiz: {
        questions: [
          {
            question: "Why does adding a role like 'You are an experienced debate judge' change the output?",
            options: [
              'It unlocks a hidden database of past judging decisions',
              'It sets the pattern the model continues writing from',
              'It makes the model legally accountable for its scoring',
              'It increases the amount of compute assigned to your request',
            ],
            correct: 1,
            explanation: "A role steers the continuation toward the kind of text a judge would write — distinct vocabulary, structure, and concerns — which is next-token prediction doing its job. No database unlocks and no extra compute spins up; only the input text changed.",
          },
          {
            question: "A classmate types 'do my lab report' and gets something generic with wrong details. Which single upgrade would help most?",
            options: [
              'Adding polite phrases so the model cooperates more',
              'Retyping the request in all capital letters for emphasis',
              'Asking three times in a row so the model tries harder',
              'Pasting the lab instructions and data into the prompt',
            ],
            correct: 3,
            explanation: "The model can't see the lab handout or the data unless they're in the prompt — missing context is what's causing the wrong details. Politeness is tempting because it feels natural, but it changes tone, not information.",
          },
          {
            question: 'What is the main reason to change only one thing per iteration when refining a prompt?',
            options: [
              'So you can tell which change caused which effect in the output',
              'Because models reject prompts that change too much at once',
              'Because each extra edit costs more tokens than the last',
              'So the conversation history stays short enough to read',
            ],
            correct: 0,
            explanation: "It's the same logic as a fair science experiment: one variable at a time makes cause and effect visible. Models happily accept completely rewritten prompts — the constraint is for your learning, not the model's rules.",
          },
          {
            question: "You ask for a summary of a book chapter 'with page-number citations' and receive a beautifully formatted summary with page numbers. What do you actually know?",
            options: [
              'The page numbers are right, since the format was followed',
              'The summary is accurate, since citations prove verification',
              'Only that the output matches the shape you asked for',
              'The model had a copy of the book open and quoted it',
            ],
            correct: 2,
            explanation: "Format compliance is what prompts deliver; every page number was generated by the same truth-blind prediction as everything else, so all of them still need checking against the real book. 'Citations prove verification' is precisely the trap — well-formatted output *looks* checked without being checked.",
          },
          {
            question: 'Spiral back to Unit 1: prompting feels like giving the model rules to follow. Why is a prompted chatbot still not a rule-based system?',
            options: [
              'It is rule-based — prompts compile to if-then rules inside it',
              'Following instructions is itself predicted, not executed',
              'Because prompts are written in English, not a programming language',
              'Because rule-based systems cannot accept text input at all',
            ],
            correct: 1,
            explanation: 'The model never executes your instructions as code — your words are just more text to continue plausibly, which is why models sometimes drift from them, something a true rule-executor could never do. The Unit 1 distinction holds: hand-written rules versus learned behavior.',
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 4 — Hallucinations and Fact-Checking
    // ------------------------------------------------------------------
    {
      id: 'hallucinations-and-fact-checking',
      title: 'Hallucinations and Fact-Checking',
      duration: '25 min',
      objectives: [
        'Explain from the next-token mechanism why fluent output can be false',
        'Predict which kinds of requests carry the highest hallucination risk',
        'Apply the 3-step verification workflow: find the source, cross-check, check the date',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Ask a chatbot for three memorable quotes from a book you've actually read. There's a decent chance it delivers beautifully — polished sentences, page numbers, the author's exact tone. And there's a decent chance the author never wrote any of them. The unsettling part isn't that AI makes mistakes. It's that the mistakes arrive in the same confident, fluent voice as the truths, with zero warning flags. Today you learn why that happens — and the habit that protects you.",
        },
        {
          type: 'text',
          text: "You already know the mechanism. Lesson 1 showed you the loop: score every token by likelihood, pick one, repeat. Now look closely at what that loop optimizes. It produces text that is *statistically plausible* — text shaped like the training data. At no step does anything ask 'is this true?' Truth and plausibility usually travel together, because training text is mostly accurate about well-known things. But when they split apart, the model follows plausibility every time.",
        },
        {
          type: 'text',
          text: "This is called **hallucination**: generated content that is fluent, confident, and false. It gets worse exactly where training data gets thin — obscure topics, precise numbers, quotes, citations, and anything after the training cutoff. Asked for a quote it never saw, the model does the only thing it can: generate a *quote-shaped* sentence in the right style. It isn't lying — lying requires knowing the truth and hiding it. The loop has no truth to consult.",
        },
        {
          type: 'keyTerms',
          title: 'Words to know',
          terms: [
            { term: 'Hallucination', definition: 'Fluent, confident AI output that is factually false — a byproduct of predicting likely text with no truth check.' },
            { term: 'Fluency', definition: 'How smooth and natural text sounds. LLMs are optimized for it — which is why it is not evidence of accuracy.' },
            { term: 'Primary source', definition: 'The original document or data — the book itself, the study itself, the official record — rather than a description of it.' },
            { term: 'Training cutoff', definition: 'The date the training data ends. Events after it cannot be in the weights, but the model will still generate likely-sounding answers about them.' },
          ],
        },
        {
          type: 'checkpoint',
          question: 'Why does a language model state false information in the same confident tone as true information?',
          options: [
            'It is programmed to sound confident to keep users engaged',
            'Its confidence reflects certainty, so confident errors are rare',
            'The same likelihood process generates all of its text',
            'It sounds confident only when its sources agree with each other',
          ],
          correct: 2,
          explanation: 'Nothing in that likelihood-driven process checks truth, and tone is just another learned pattern — authoritative text dominates training data, so output sounds authoritative regardless of accuracy. The second option is the dangerous misconception: a confident style tells you nothing about reliability.',
        },
        {
          type: 'tryIt',
          title: 'Try it: induce a hallucination on purpose',
          intro: 'The best vaccine against trusting AI too much is catching it fabricating — on a topic where you can check. Use any chatbot you have access to.',
          steps: [
            "Pick a genuinely obscure topic you can verify: your town's local history, a little-known book you've read, a local team's past season, a family recipe tradition.",
            "Ask for specifics that force precision: 'Give me three direct quotes with sources,' or 'List the key dates and names,' or 'Cite two articles about this.'",
            'Now verify each claim against something real: the book, a library database, a local archive, people who know. Mark each claim: confirmed, wrong, or unfindable.',
            'Look at your wrong-or-unfindable list. Notice the fabrications are grammatically perfect and stylistically right — fluency at work with nothing behind it.',
            'Write one sentence: which *kind* of detail did your chatbot fabricate most readily — names, dates, quotes, or citations?',
          ],
        },
        {
          type: 'text',
          text: "One more thing your experiment probably showed: fabrications don't come with a different feel. That's what makes hallucination more dangerous than ordinary wrong answers — a friend who's unsure hedges, a website that's sketchy looks sketchy, but a model's invented citation is typeset exactly like its real ones. Since the output gives you no signal, the checking has to happen somewhere else. That somewhere is outside the model entirely.",
        },
        { type: 'heading', text: 'The 3-step verification workflow' },
        {
          type: 'text',
          text: "You can't verify everything a chatbot tells you, and you don't need to. Use AI freely for brainstorming, explanations of well-documented concepts, and drafts. But when a specific claim is headed into your essay, your decisions, or your group chat, run the workflow:",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Find the source.** Search for the claim independently — does a real, credible source actually say this? If the chatbot named a source, open it and confirm it exists *and* says what was claimed. *Why first:* fabricated sources look identical to real ones until you look them up; this step kills most hallucinations instantly.',
            "**Cross-check a second, independent source.** One match can be a coincidence, a copy, or the same error repeated. *Why independent matters:* asking another chatbot doesn't count — different models trained on similar data share the same blind spots and the same plausible-sounding mistakes.",
            "**Check the date.** A claim can be genuinely sourced and still outdated — records get broken, science gets updated, laws change, and the model's training cutoff guarantees it lags the present. *Why last:* even two real sources can both describe a world that no longer exists.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: running the workflow',
          text: "A chatbot gives you a specific completion date for a famous landmark, and it's going in your essay. **Step 1 — find the source:** you search the landmark's official site and an encyclopedia; both give a date one year different from the chatbot's. Red flag raised in under a minute. **Step 2 — cross-check:** the two sources are independent of each other and agree with each other, not with the chatbot. Now it's two credible sources versus one prediction machine. **Step 3 — check the date:** completion dates don't change, so staleness isn't a risk here — but if this were a 'tallest building' or 'current record' claim, this step would be the one that saves you. Verdict: use the sourced date, and enjoy having caught your first hallucination in the wild.",
        },
        {
          type: 'checkpoint',
          question: "A chatbot gives you a surprising claim and you ask it, 'Are you sure? Please double-check.' It apologizes and confirms the claim. What just happened?",
          options: [
            'It re-checked the claim against its database, so it is reliable',
            'It generated a likely-sounding confirmation, nothing more',
            'The apology shows the first answer was wrong and this one right',
            'Asking twice always improves accuracy, so the claim is safer',
          ],
          correct: 1,
          explanation: "'Are you sure?' is just more text to continue — and a confident confirmation is a very likely continuation. There's no database to re-check. Real verification requires stepping *outside* the model, which is the whole point of the workflow.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four situations, three possible moves each. Pick what you would actually do — the feedback explains the reasoning.',
          props: {
            title: 'Trust or Verify?',
            scenarios: [
              {
                situation: "It's 11pm and you're finishing a history essay. A chatbot tells you the Treaty of Versailles was signed in 1919 — and adds two supporting details you've never heard before. What do you do?",
                options: [
                  {
                    text: 'Cite it all — the answer was specific and confident, and chatbots are usually right about famous history',
                    quality: 'poor',
                    feedback: "Specificity and confidence are style, not evidence — hallucinated details arrive in exactly this packaging. 'Usually right' holds for famous facts and fails exactly on the unfamiliar details, which is where the risk lives.",
                  },
                  {
                    text: 'Keep the famous date but quietly drop the two unfamiliar details',
                    quality: 'ok',
                    feedback: "Reasonable instinct — the well-documented date is low-risk and the surprising details are high-risk. But you're guessing at the boundary instead of checking. Thirty seconds with your textbook turns a guess into knowledge, and the details might be real and make your essay better.",
                  },
                  {
                    text: 'Verify the date and both details against your textbook or an encyclopedia before any of it enters the essay',
                    quality: 'best',
                    feedback: 'Exactly right. The famous date will confirm instantly, and the two unfamiliar specifics get the scrutiny specifics deserve. Step 1 of the workflow — find a real source — usually takes less time than rewriting a paragraph built on a fabrication.',
                  },
                ],
              },
              {
                situation: "A chatbot tells your friend that a trendy supplement 'is clinically proven to cure acne,' and your friend is ready to spend their savings on it. What's your advice?",
                options: [
                  {
                    text: "Trust it — the chatbot mentioned a study, so there's evidence behind the claim",
                    quality: 'poor',
                    feedback: "Mentioned studies are exactly the kind of citation-shaped detail models fabricate most readily. 'Clinically proven to cure' is also a red-flag phrase real medical sources rarely use. Health plus money is the highest-stakes combination — it deserves the full workflow, not a vibe check.",
                  },
                  {
                    text: 'Ask the chatbot to list its sources, then read whatever it provides',
                    quality: 'ok',
                    feedback: 'Better than blind trust — but the sources themselves may be invented, so you must actually open and read them, not just admire the list. And for health decisions, cross-checking means real medical sources and a professional, not the same chatbot elaborating on itself.',
                  },
                  {
                    text: 'Check what actual medical sources say, and suggest asking a doctor or pharmacist before buying anything',
                    quality: 'best',
                    feedback: "Right call. Medical claims get the strictest version of the workflow: find real sources, cross-check independent ones, and involve a professional when health and money are on the line. If the supplement really worked, credible sources will say so — that's what makes verification fair.",
                  },
                ],
              },
              {
                situation: 'A major earthquake is trending. Minutes after the news breaks, you ask a chatbot for the death toll and it gives you an exact number. What do you do with it?',
                options: [
                  {
                    text: 'Treat it as a rough estimate until news coverage firms it up',
                    quality: 'ok',
                    feedback: "Healthy skepticism, but there's a deeper problem: the event is past the model's training cutoff, so the number isn't a rough measurement — it's pattern-generated from nothing. There is no signal in it to estimate from. Skip straight to live news sources.",
                  },
                  {
                    text: 'Share the number — it was precise, so it must have come from somewhere',
                    quality: 'poor',
                    feedback: 'It did come from somewhere: the next-token loop, which produces precise-looking numbers as easily as vague ones. Breaking news is a guaranteed-hallucination zone — the model literally cannot know, and sharing invented casualty figures spreads real harm.',
                  },
                  {
                    text: "Ignore the number entirely and check live news outlets — the model can't know about events after its training cutoff",
                    quality: 'best',
                    feedback: 'Exactly. This is the one scenario where verification is not even needed — the cutoff means the model *cannot* have this information, so anything it outputs is fabricated by definition. Live, reputable news coverage is the only source that can know.',
                  },
                ],
              },
              {
                situation: 'For your science fair report, a chatbot supplies three journal citations — authors, years, page numbers, perfectly formatted. Your bibliography is due tomorrow. What do you do?',
                options: [
                  {
                    text: "Search each title in Google Scholar or your library's database; any citation you can't find gets cut",
                    quality: 'best',
                    feedback: 'Perfect. Citations are the single most-fabricated output type — models have seen millions of reference lists and generate citation-shaped text effortlessly. A two-minute search per citation either upgrades it to a real source you can actually read, or catches a fake before your name goes on it.',
                  },
                  {
                    text: 'Paste all three into the bibliography — the formatting is flawless, so they must be real',
                    quality: 'poor',
                    feedback: "Flawless formatting is evidence of one thing only: the model has seen many citations. Format is exactly what generation is good at; existence is what it can't guarantee. Submitting invented sources is a real academic-integrity problem even when the fabrication wasn't yours.",
                  },
                  {
                    text: 'Keep the citations whose journal names look familiar and drop the rest',
                    quality: 'ok',
                    feedback: "Half a strategy: familiarity filters out some fakes, but models routinely attach real journal names to papers that don't exist — that's what makes fabricated citations convincing. Recognition isn't verification; the search step barely takes longer and gives you certainty.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'text',
          text: "Does the workflow sound slow? In practice it's a 60-second habit: one search to find a source, one glance at a second, one check of the publication date. Compare that with the cost of the alternative — a fabricated quote in a graded essay, a fake statistic repeated to thirty people in a group chat, or medical advice that was never real. Verification isn't distrust of AI; it's the price of using a likelihood engine for factual work.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Know the high-risk zones',
          text: "Risk isn't evenly spread. **Highest risk:** precise specifics (names, numbers, dates, quotes), citations, obscure topics, and anything recent. **Lower risk:** explanations of well-documented concepts the training data covered thousands of times — how photosynthesis works, what a token is. Calibrate your verification effort to the risk, and remember Unit 2's rule: bias in, bias out. Where training data is thin or skewed, output quality falls off a cliff.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why do models hallucinate? The generation loop optimizes for likely-sounding text and contains no truth check — plausibility and accuracy usually agree, until they don't.",
            'When is risk highest? Precise specifics, quotes, citations, obscure topics, and post-cutoff events — everywhere training data runs thin.',
            "What's the workflow? Find the real source, cross-check a second independent one, check the date.",
            "Why can't the chatbot verify itself? Because 'are you sure?' just triggers more prediction — verification has to happen outside the model.",
          ],
        },
        {
          type: 'text',
          text: 'Text is only half the story, though. The same generative machinery now produces photorealistic faces and convincing video. Next: deepfakes, and how to keep your eyes as sharp as your fact-checking.',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Why do language models hallucinate?',
            options: [
              'Software bugs that AI companies have not yet located',
              'The generation loop has no truth-checking step at all',
              'They are programmed to guess rather than admit uncertainty',
              'Server overload degrades their memory during busy hours',
            ],
            correct: 1,
            explanation: "Hallucination isn't a malfunction — it's the mechanism working as designed on inputs where plausible and true diverge. The 'bug' framing tempts because it implies a future patch will fix it, but no patch adds truth-checking to a likelihood engine.",
          },
          {
            question: 'Which request carries the HIGHEST hallucination risk?',
            options: [
              'Explain the steps of photosynthesis inside a plant cell',
              'Give me general study tips for an upcoming math test',
              'Cite three journal articles on an obscure local event',
              'Describe what a token is inside a large language model',
            ],
            correct: 2,
            explanation: 'Obscure topic plus precise citations is the double jackpot of risk — thin training data, and citation-shaped output the model can generate endlessly. The other three are well-documented topics the training data covered heavily, where plausible and true mostly overlap.',
          },
          {
            question: "A chatbot gives you a surprising claim for your essay and names a book as the source. What's step one of verification?",
            options: [
              'Find the book and confirm it really says what was claimed',
              'Ask the chatbot whether it is sure about the claim',
              'Ask a different chatbot and see whether it agrees',
              'Judge how confident and specific the wording sounds',
            ],
            correct: 0,
            explanation: 'The workflow starts outside the model: confirm the book exists, then read it and check that it says what was claimed. Asking a second chatbot feels like cross-checking but is not independent — similar training data means shared blind spots and shared plausible errors.',
          },
          {
            question: "Why isn't asking the same chatbot 'are you sure?' real verification?",
            options: [
              'It is — models reliably correct their own errors when asked',
              'Chatbots are forbidden from re-examining previous answers',
              'Because each follow-up question costs extra tokens to run',
              'The confirmation comes from the same truth-blind prediction',
            ],
            correct: 3,
            explanation: 'A confident confirmation is simply a likely continuation of your question — nothing was re-checked because there is nothing to check against. The first option is the trap: models fold under pushback or double down based on conversational patterns, not facts.',
          },
          {
            question: 'Spiral back to Unit 2: a model trained mostly on English-language sources is asked detailed questions about history rarely covered in English. Which Unit 2 principle predicts trouble?',
            options: [
              'Overfitting — the model memorized its test set',
              'Bias in, bias out — thin data makes weak output',
              'Reinforcement learning needs a clear reward signal',
              'The train-test split has to be made at random',
            ],
            correct: 1,
            explanation: "It's the same data principle from Unit 2 wearing new clothes: model quality tracks data coverage, so under-represented topics get confident fabrication instead of silence. Overfitting is a real concept but describes memorizing training data, not gaps in it.",
          },
          {
            question: 'The verification workflow is: find the source, cross-check a second independent source, and then what?',
            options: [
              'Ask the chatbot to summarize both sources for you',
              'Rewrite the claim in your own words to avoid plagiarism',
              'Check the date — sourced claims can still be outdated',
              'Screenshot the answer in case you need the proof later',
            ],
            correct: 2,
            explanation: 'Two real sources can still describe a world that has since changed — records fall, science updates, laws change. The rewriting option matters for academic honesty but solves a different problem; it does nothing for accuracy.',
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 5 — Deepfakes and Synthetic Media
    // ------------------------------------------------------------------
    {
      id: 'deepfakes-and-synthetic-media',
      title: 'Deepfakes and Synthetic Media',
      duration: '25 min',
      objectives: [
        'Describe at a concept level how diffusion models and GANs generate images',
        'Apply visual detection heuristics — and explain why they have an expiration date',
        'Draft a personal policy for verifying and sharing media in a synthetic age',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Two friendly faces, side by side, both looking like yearbook photos. One belongs to a real person. The other belongs to no one — it was generated by a neural network, and the person you're looking at has never existed. When university researchers built a game around exactly this challenge, players discovered the uncomfortable truth: telling them apart is much harder than it sounds. In a few minutes you'll play it yourself and measure your own accuracy. First, let's see how the fakes get made.",
        },
        { type: 'heading', text: 'How machines make images' },
        {
          type: 'text',
          text: "Modern image generators mostly use **diffusion**. The idea sounds backwards: during training, the model watches real images get progressively buried in static-like noise, and learns to run that process in reverse — removing a little noise at each step. To generate, it starts from *pure random noise* and denoises step by step, steered the whole way by your text description. Where does the steering come from? Embeddings — the same meaning-as-geometry idea from lesson 2, which is how 'corgi' and 'party hat' become directions the denoising can follow.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: 'a corgi wearing a party hat'",
          text: "Step 1 — your text becomes an embedding, a set of coordinates capturing corgi-ness and party-hat-ness. *Why:* the image model can't read; it needs meaning as numbers to steer with. Step 2 — the canvas starts as pure random noise, like TV static. *Why:* starting from randomness is what lets every generation be new instead of a copy. Step 3 — the model removes a little noise, nudging the blur toward something matching the embedding; repeat dozens of times as fuzzy blobs sharpen into ears, fur, a hat. *Why small steps:* many gentle corrections beat one giant leap — each pass fixes what the last one left blurry. Step 4 — the finished image emerges: a corgi that has never existed, in a hat that was never knitted.",
        },
        {
          type: 'text',
          text: "The fake faces you're about to judge come from an older approach: a **GAN** (generative adversarial network) — two networks locked in a training duel. The *generator* forges faces; the *discriminator* — a classifier like the ones you trained in Unit 2 — tries to tell fake from real. Every time the discriminator catches a fake, the generator adjusts; every time it's fooled, the discriminator adjusts. Round after round, the forger gets so good that its faces fool not just the discriminator but most humans too.",
        },
        {
          type: 'keyTerms',
          title: 'Words to know',
          terms: [
            { term: 'Diffusion model', definition: 'An image generator that starts from random noise and removes noise step by step, guided by a text description.' },
            { term: 'GAN', definition: 'Generative adversarial network — a forger network and a detective network training against each other until the fakes become convincing.' },
            { term: 'Deepfake', definition: 'Synthetic media that shows a real person doing or saying something they never did.' },
            { term: 'Synthetic media', definition: 'Any image, audio, or video generated or substantially altered by AI.' },
          ],
        },
        {
          type: 'video',
          videoId: 'gLoI9hAX9dw',
          title: "It's Getting Harder to Spot a Deep Fake Video (Bloomberg)",
          duration: '6 min',
          note: 'Watch how face-swap deepfakes are made and why detection keeps getting harder — then test yourself in the activity below.',
        },
        {
          type: 'checkpoint',
          question: 'In the forger-versus-detective picture of a GAN, what actually drives the fake faces to improve?',
          options: [
            'Every fake the detective catches nudges the forger to adjust',
            'Human artists rate each face and the best ones are kept',
            'The generator blends real photos together pixel by pixel',
            'Engineers encode new facial-proportion rules each round',
          ],
          correct: 0,
          explanation: 'The adversarial loop is the engine: the discriminator supplies the pressure, and gradient descent — Unit 3 again — turns that pressure into better forgeries. No humans rate faces and no proportion rules exist; the realism is entirely learned.',
        },
        {
          type: 'tryIt',
          title: 'Try it: Which Face Is Real?',
          intro: "This game from University of Washington researchers shows you a real photo and a GAN-generated fake, side by side. Your job: click the real one. Let's measure whether the tells can be learned.",
          steps: [
            'Open [Which Face Is Real](https://www.whichfaceisreal.com/) and play **10 rounds**, tallying right and wrong. No studying yet — this is your baseline.',
            'Compute your baseline accuracy. Classes typically land around 60–70% on a first pass — better than a coin flip, but nowhere near reliable, which is exactly the point.',
            'Now learn the tells. GANs excel at faces but fumble the surroundings: **mismatched or mangled earrings**, **warped, melted-looking backgrounds**, **asymmetric glasses**, hair strands that blend into skin, and garbled text on clothing.',
            'Play **10 more rounds**, deliberately scanning earrings, background, and glasses. Compute your new accuracy.',
            'Compare the two scores and note which tell caught the most fakes. Then ask the harder question: what happens to your improvement when the next generation of generators fixes those flaws?',
          ],
          url: 'https://www.whichfaceisreal.com/',
          urlLabel: 'Play Which Face Is Real',
        },
        {
          type: 'links',
          title: 'Generate your own non-person',
          items: [
            {
              label: 'This Person Does Not Exist',
              url: 'https://this-person-does-not-exist.com/en',
              description: 'Refresh for a brand-new GAN-generated face each time. Practice spotting the artifacts on faces with no answer key.',
            },
          ],
        },
        { type: 'heading', text: 'Detection: useful heuristics, honest limits' },
        {
          type: 'text',
          text: "Your accuracy probably jumped after learning the tells — proof that detection heuristics work. Now for the honest part: **every visual tell has an expiration date.** The artifacts you exploited are flaws of a particular generation of models, and newer generators fix them one by one. Detection-by-eyeball is an arms race where the defense is always reacting. That's why lasting protection comes from *verification habits*, not vision.",
        },
        {
          type: 'checkpoint',
          question: 'Your class averaged 65% on Which Face Is Real before learning the tells and 85% after. Why is it still risky to rely on spotting fakes by eye?',
          options: [
            'It is not risky; 85% means the class has mastered detection',
            'The tells are flaws that newer generators simply fix',
            'Human vision physically cannot improve past 85% accuracy',
            'The game uses only easy fakes, so real ones are more obvious',
          ],
          correct: 1,
          explanation: "The tells target this generation's weaknesses — earrings and backgrounds get fixed in the next generation, and the skill quietly expires. Besides, 85% still means missing roughly one fake in seven, which is a lot when your feed shows hundreds of images a day.",
        },
        { type: 'heading', text: 'Your personal media policy' },
        {
          type: 'text',
          text: "So what actually protects you? The same move as lesson 4: step outside the artifact and verify its context. A real event leaves real traces — multiple outlets, multiple angles, named witnesses. A synthetic 'event' usually exists as exactly one clip from one anonymous account. Before you share, run your fact-checking workflow on media: find the original source, cross-check independent coverage, check the date (old footage recycled with a new caption is the cheapest fake of all).",
        },
        {
          type: 'list',
          items: [
            '**Pause before sharing** — synthetic media is engineered for the instant-share reflex; outrage and shock are its delivery mechanisms.',
            '**Interrogate the source** — who posted this first? An established outlet with a reputation to lose, or an account created last month?',
            '**Look for independent confirmation** — real events get covered by multiple unrelated sources within hours.',
            "**Respect other people's likeness** — creating synthetic media of real people without consent isn't a prank; it's a serious harm, and increasingly a crime.",
          ],
        },
        {
          type: 'interactive',
          component: 'AIOrNot',
          caption: 'Faces were the warm-up — now try text. Can you tell AI-written passages from human ones? Notice how your detection instincts transfer, and where they fail.',
        },
        {
          type: 'checkpoint',
          question: "A shocking video of a celebrity 'confessing to a crime' was posted an hour ago by an account you don't recognize. What's the best first move?",
          options: [
            'Check whether any reputable news outlets are reporting it yet',
            'Share it with a question-mark caption so others can judge',
            'Assume it is real — video is still too hard to fake well',
            'Reply to the account and ask whether the video is authentic',
          ],
          correct: 0,
          explanation: "A real celebrity confession would be everywhere within the hour — one clip from one unknown account is the classic synthetic signature. Sharing 'with a question mark' still spreads the fake; doubt in the caption doesn't slow the video down.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'The stakes are personal',
          text: "This isn't just about celebrities and politicians. Voice-cloning scams target families; fabricated images target classmates. Your policy protects you in both directions — as a viewer who won't be fooled, and as a creator who understands that generating fake media of real people crosses a hard ethical line, even 'as a joke.' Unit 5 picks up exactly here: who gets harmed by AI systems, and who decides the rules.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'How does diffusion generate images? Start from pure noise, remove it step by step, steered by a text embedding — meaning-as-geometry from lesson 2, now painting.',
            'How do GANs make convincing faces? A forger network and a detective network train against each other until the fakes fool the detective — and most humans.',
            'Do detection tells work? Yes, today — earrings, backgrounds, and glasses can lift your accuracy — but every tell expires as generators improve.',
            'What protects you long-term? The same verification habits as lesson 4: pause, find the original source, cross-check independent coverage, check the date.',
          ],
        },
        {
          type: 'text',
          text: "You now know how generative AI works — and how it fails. Unit 5 asks the bigger questions: when these systems cause harm, who's responsible, and who decides?",
        },
      ],
      quiz: {
        questions: [
          {
            question: "At a concept level, how does a diffusion model turn 'a corgi in a party hat' into an image?",
            options: [
              'It searches the web for corgi photos and edits the closest',
              'It removes noise step by step, steered by your text description',
              'It assembles the picture from a library of clip-art parts',
              'It traces the most popular corgi image in its training set',
            ],
            correct: 1,
            explanation: 'Diffusion is learned denoising run from pure static, guided by the text embedding — which is why outputs are new images, not copies. The search option is the common misconception; like LLMs, image models generate from learned patterns rather than retrieving.',
          },
          {
            question: 'In a GAN, what role does the discriminator play?',
            options: [
              'It classifies images as real or fake during training',
              'It generates the faces that end up fooling people',
              'It filters offensive images out of the training data',
              'It compresses the finished images for faster loading',
            ],
            correct: 0,
            explanation: "The discriminator is a classifier — the same kind of model you trained in Unit 2 — whose pushback is the training signal that sharpens the forger. It's the generator, not the discriminator, that produces the faces.",
          },
          {
            question: 'You suspect a profile photo is GAN-generated. Which details are the classic places to check?',
            options: [
              'The overall lighting quality and the photo resolution',
              'Whether the person is smiling in a natural, relaxed way',
              'Earrings, glasses, background edges, and hair boundaries',
              'The file size and the image format the photo was saved in',
            ],
            correct: 2,
            explanation: 'GANs master the central face but fumble accessories, symmetry, and surroundings — mismatched earrings and melted backgrounds are the signature artifacts. Lighting and resolution are tempting checks, but generators handle both beautifully.',
          },
          {
            question: 'Why do visual deepfake-detection skills lose value over time?',
            options: [
              'Most people forget the tells within a few weeks',
              'Newer generators eliminate the tells one by one',
              'Platforms ban public discussion of detection methods',
              'Human eyesight declines faster than generators improve',
            ],
            correct: 1,
            explanation: "Detection-by-eyeball is an arms race, and the defense is always one generation behind — today's reliable tell is next year's fixed bug. That's why the durable defense is verification habits (source, cross-check, date), which don't expire.",
          },
          {
            question: 'A dramatic video of a breaking event appears on your feed from a single unfamiliar account. Applying both this lesson and lesson 4, what should you do first?',
            options: [
              'Share it quickly so others can help decide if it is real',
              'Trust it if the quality is high, since fakes look glitchy',
              'Zoom in on faces and share it if you find no artifacts',
              'Search for independent coverage from established news outlets',
            ],
            correct: 3,
            explanation: 'Real events leave multiple traces within hours; a single anonymous clip is the synthetic signature. Artifact-hunting alone fails against current-generation fakes — context verification is the check that still works when your eyes no longer can.',
          },
          {
            question: 'Spiral: playing 20 rounds of Which Face Is Real with instant right/wrong feedback made you better at spotting fakes. In Unit 2 terms, what were you doing?',
            options: [
              'Following a hand-written rulebook, like a rule-based system',
              'Learning from labeled examples, one round at a time',
              'Performing unsupervised clustering on unlabeled faces',
              'Acting as a generative model that produces new faces',
            ],
            correct: 1,
            explanation: "You were the classifier: image in, real-or-fake prediction out, and each round's feedback was a label that adjusted your internal sense of the pattern — supervised learning, human edition. The rulebook option is tempting since you did learn tells, but you learned them from feedback on examples, not hand-coded instructions.",
          },
        ],
      },
    },
  ],
};

export default unit;
