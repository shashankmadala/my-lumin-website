// Unit 1 — What Is AI, Really? Student course "AI Foundations".
// Defines AI by capability, spots AI in daily life, traces the field's history,
// and lands the pivotal rules-vs-learning distinction that sets up Unit 2.

const unit = {
  id: 'unit-1',
  title: "What Is AI, Really?",
  icon: 'Brain',
  description:
    "Define AI by what it can actually do, spot the AI hiding in your everyday apps, trace 75 years of booms and winters, and learn the one distinction that explains it all: software that follows rules versus software that learns.",
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1 — What Counts as AI?
    // ------------------------------------------------------------------
    {
      id: 'what-counts-as-ai',
      title: "What Counts as AI?",
      duration: '20 min',
      objectives: [
        "Define AI by four capabilities: perceive, reason, predict, act",
        "Explain why a spam filter is AI but a calculator is not",
        "Distinguish narrow AI (everything today) from general AI (hypothetical)",
        "Recognize the AI effect — why yesterday's AI becomes today's 'just software'",
      ],
      blocks: [
        {
          type: 'intro',
          text:
            "Your calculator can multiply eight-digit numbers faster than any human who has ever lived. Nobody calls it intelligent. Meanwhile, the spam filter in your email — which just quietly moved a sketchy 'You won a prize!' message out of your inbox — is considered artificial intelligence. So raw speed clearly isn't what makes something AI. What is? By the end of this lesson you'll have a test you can run on any app on your phone.",
        },
        { type: 'heading', text: "What makes something AI?" },
        {
          type: 'text',
          text:
            "There's no single official definition of artificial intelligence, but the most useful one defines AI by **capability**. A system counts as AI when it does things that normally require human-style intelligence — and one common way to break that down is four abilities.",
        },
        {
          type: 'list',
          items: [
            "**Perceive** — take in messy, real-world input like images, sound, or text (a face-unlock camera reading your face).",
            "**Reason** — connect pieces of information to reach a conclusion (a maps app weighing three routes against live traffic).",
            "**Predict** — make a best guess about something unknown or upcoming (autocomplete guessing your next word).",
            "**Act** — make a decision or take an action based on that guess (the spam filter actually moving the email).",
          ],
        },
        {
          type: 'text',
          text:
            "A system doesn't need all four to count, but it needs at least one done in a *flexible, learned* way. That last part matters. A motion-sensor light technically 'perceives' and 'acts,' but it follows one fixed rule forever — nobody calls it intelligent.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: is a spam filter AI?",
          text:
            "Let's run the four-capability test on a spam filter, step by step. **Perceive:** it reads the raw text of an incoming email — sender, subject, body — input it has never seen before. **Reason:** it combines dozens of signals at once: unfamiliar sender, suspicious link, wording that resembles past scams. **Predict:** it estimates the chance the message is spam — say, 97%. **Act:** because that's above its threshold, it moves the message to the spam folder without asking you. Four for four, all powered by patterns learned from millions of past emails. Verdict: AI.",
        },
        {
          type: 'checkpoint',
          question:
            "You say 'play my study playlist' and a smart speaker turns your spoken words into text. Which AI capability is that?",
          options: [
            "Perceive — the same job face unlock does",
            "Reason — the same job a maps app does",
            "Predict — the same job your autocomplete does",
            "Act — the same job the spam filter does",
          ],
          correct: 0,
          explanation:
            "Turning messy real-world sound into words is perception: taking in raw input, exactly like a camera reading a face. Figuring out which playlist you meant would be reasoning, and starting the music would be acting.",
        },
        { type: 'heading', text: "AI vs. ordinary software" },
        {
          type: 'text',
          text:
            "Every app on your phone is software, but most of it isn't AI. A calculator follows fixed instructions written by a programmer: for any input there's exactly one correct output, and it's identical every single time. It never guesses, never learns, and can never be 'wrong' unless a human made a coding mistake.",
        },
        {
          type: 'text',
          text:
            "The spam filter is different in kind, not just in degree. Nobody wrote a rule for every possible scam — the filter learned patterns from millions of example emails, and it makes probabilistic guesses about messages nobody has ever seen before. That also means it can be wrong, which is exactly why real emails sometimes land in your spam folder.",
        },
        {
          type: 'table',
          headers: ["", "Calculator", "Spam filter"],
          rows: [
            ["How it works", "Fixed instructions from a programmer", "Patterns learned from example data"],
            ["Same input, same output?", "Always", "Not necessarily — it changes as it keeps learning"],
            ["Handles brand-new inputs?", "Only what it was programmed for", "Yes — it makes a best guess"],
            ["Can it be wrong?", "Only if the code has a bug", "Yes — predictions are probabilistic"],
          ],
        },
        {
          type: 'video',
          videoId: 'a0_lo_GDcFw',
          title: "What Is Artificial Intelligence? Crash Course AI #1",
          duration: '11 min',
          note: "A tour of what AI can and can't do today — watch for how often the examples match the four capabilities you just learned.",
        },
        {
          type: 'checkpoint',
          question:
            "A friend says: 'My calculator app does math no human can do, so it must be AI.' What's the strongest reply?",
          options: [
            "Speed counts as intelligence once a machine beats humans",
            "It maps each input to one fixed answer and never learns",
            "It is AI, but a very weak and old-fashioned kind of AI",
            "Calculators were AI until researchers reclassified them",
          ],
          correct: 1,
          explanation:
            "A calculator is deterministic, rule-following software: every input maps to exactly one hard-coded output, and nothing about it improves with use. The first option is the classic trap — machines have out-calculated us since the 1940s, and we have never called that intelligence.",
        },
        { type: 'heading', text: "Narrow AI is all we have" },
        {
          type: 'text',
          text:
            "Every AI system that exists today is **narrow AI**: excellent at one specific task and helpless outside it. The program that beat the world's best Go players can't drive a car, write an essay, or explain its own moves. Even ChatGPT, which *feels* general because it can discuss anything, is narrow — it rests on one underlying skill, predicting what comes next in a sequence, done extremely well.",
        },
        {
          type: 'text',
          text:
            "**General AI** — a system with flexible, human-like intelligence across many different domains — doesn't exist. The robots you know from movies are science fiction, and researchers genuinely disagree about whether or when anything like general AI will be built.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: "The AI effect",
          text:
            "Here's a strange pattern: once an AI technology works reliably, we stop calling it AI. Chess programs, speech-to-text, GPS route-finding, and reading handwritten zip codes were all celebrated AI breakthroughs in their day — now they're just 'features.' A running joke in computer science: AI is whatever computers can't do *yet*. Keep this in mind whenever someone scoffs 'that's not real AI' — the goalposts have been moving for 75 years.",
        },
        {
          type: 'checkpoint',
          question:
            "Your phone's chess app can beat nearly any human on Earth, yet almost nobody calls it AI anymore. This is an example of:",
          options: ["General AI (AGI)", "A false positive", "The AI effect", "An AI winter"],
          correct: 2,
          explanation:
            "The AI effect is our habit of rebranding AI as 'just software' once it works reliably. It's not general AI — a chess app does exactly one thing — and an AI winter (you'll meet those in lesson 3) is a collapse in funding, not a change in labels.",
        },
        { type: 'heading', text: "You try: sort the tech" },
        {
          type: 'text',
          text:
            "Time to apply the test yourself. For each item below, ask: does it learn from data and make flexible guesses (AI), or does it follow fixed instructions with one right answer (not AI)? Some of these are trickier than they look.",
        },
        {
          type: 'interactive',
          component: 'SortingGame',
          caption: "Use the four-capability test: does it perceive, reason, predict, or act in a learned, flexible way?",
          props: {
            title: "AI or Not AI?",
            categories: [
              { id: 'ai', label: "AI" },
              { id: 'not-ai', label: "Not AI" },
            ],
            items: [
              {
                text: "Basic home thermostat",
                category: 'not-ai',
                explanation:
                  "A classic thermostat follows one fixed rule: below 68°? Heat on. It never learns your schedule or predicts anything. (Some 'smart' thermostats that learn your routine are a different story.)",
              },
              {
                text: "Calculator app",
                category: 'not-ai',
                explanation:
                  "Fixed instructions, one correct answer per input, zero learning. Fast is not the same as intelligent.",
              },
              {
                text: "Email spam filter",
                category: 'ai',
                explanation:
                  "It learned patterns from millions of labeled emails and makes probabilistic guesses about messages it has never seen. Perceive, reason, predict, act — the full set.",
              },
              {
                text: "ChatGPT",
                category: 'ai',
                explanation:
                  "A language model trained on enormous amounts of text to predict what words come next. Definitely AI — but still *narrow* AI: one task, done impressively.",
              },
              {
                text: "Face unlock on a phone",
                category: 'ai',
                explanation:
                  "It learned a flexible model of your face and predicts 'is this the owner?' under new angles and lighting every time. That's perception plus prediction.",
              },
              {
                text: "Vending machine",
                category: 'not-ai',
                explanation:
                  "Press C4, get snack C4. Every input maps to one fixed output — no perception of anything messy, no guessing, no learning.",
              },
              {
                text: "Netflix recommendations",
                category: 'ai',
                explanation:
                  "It learned patterns from what millions of people watched, then predicts what will keep *you* watching. Learned patterns plus prediction = AI.",
              },
              {
                text: "GPS rerouting you around traffic",
                category: 'ai',
                explanation:
                  "Predicting travel time uses patterns learned from location data reported by thousands of phones. The prediction can be wrong — a hint that it's a learned guess, not a lookup.",
              },
              {
                text: "Random number generator",
                category: 'not-ai',
                explanation:
                  "Randomness isn't intelligence. It perceives nothing, predicts nothing, and learns nothing — it just produces noise on demand.",
              },
              {
                text: "Keyboard autocomplete",
                category: 'ai',
                explanation:
                  "It predicts your next word from patterns in billions of typed sentences — and adapts to your personal typing over time. Prediction from learned patterns is the heart of AI.",
              },
            ],
          },
        },
        { type: 'heading', text: "Key takeaways" },
        {
          type: 'list',
          items: [
            "What makes something AI? It perceives, reasons, predicts, or acts in a flexible way — learned from data rather than hard-coded.",
            "Is a calculator AI? No — fixed instructions, one correct answer, no learning and no guessing. Speed alone isn't intelligence.",
            "Is today's AI general? No. Every deployed system is narrow AI, built for one task. General AI doesn't exist yet.",
            "Why do people say 'that's not real AI' about older tech? The AI effect: once it works reliably, we quietly rebrand it as ordinary software.",
            "Next up: counting how many of these narrow AI systems you already use before lunch — it's more than you think.",
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question: "Which set of four capabilities gives the working definition of AI used in this lesson?",
            options: [
              "Calculate, store, display, repeat",
              "Think, feel, imagine, dream",
              "Perceive, reason, predict, act",
              "Search, sort, copy, delete",
            ],
            correct: 2,
            explanation:
              "Perceive, reason, predict, act describe flexible, intelligence-like behavior. Calculate/store/display is what *all* ordinary software does — that's the tempting trap, but it doesn't separate AI from a calculator.",
          },
          {
            question:
              "A friend insists their calculator app is AI 'because it solves problems no human could.' Why is the calculator NOT AI?",
            options: [
              "It follows fixed instructions, and it never learns or guesses",
              "It is AI — beating every human at math is what qualifies it",
              "It counted as AI decades ago but was later reclassified",
              "It lacks the advanced math functions that would make it AI",
            ],
            correct: 0,
            explanation:
              "AI is defined by learned, flexible capability, not by speed or difficulty: a calculator maps each input to exactly one hard-coded output and can never handle a kind of problem its programmer didn't anticipate. The 'beats every human' option is the classic misconception — computers have out-calculated us since day one, and we've never called that intelligence.",
          },
          {
            question: "ChatGPT can write essays, poems, and code. Does that make it general AI?",
            options: [
              "Yes — handling that many kinds of writing is general intelligence",
              "Yes — 'general AI' means an AI released to the general public",
              "No — it is not really AI at all, just a search engine with a chat box",
              "No — it is narrow AI built around one underlying skill",
            ],
            correct: 3,
            explanation:
              "Every one of those outputs comes from a single underlying skill — predicting what comes next in a sequence — so ChatGPT can't drive a car or fold laundry. Breadth of *topics* is what makes the first option tempting, but general AI means flexible intelligence across fundamentally different domains, and nothing like that exists today.",
          },
          {
            question:
              "For decades, beating a chess grandmaster was considered a definitive test of machine intelligence. Today your phone does it and nobody calls it AI. What is this pattern called?",
            options: ["The Turing test", "The AI effect", "An AI winter", "The AI boom"],
            correct: 1,
            explanation:
              "The AI effect is our tendency to stop calling technology 'AI' once it works reliably. The Turing test is a specific chat-based test of machine behavior (coming in lesson 3), not a name for this rebranding habit.",
          },
          {
            question: "Which of these systems is the best example of AI?",
            options: [
              "A vending machine that drops snack C4 when you press C4",
              "A spam filter that flags scam emails it has never seen",
              "A random number generator built into your phone",
              "A digital alarm clock that rings at a time you set",
            ],
            correct: 1,
            explanation:
              "Handling never-before-seen input with a learned, probabilistic guess is the signature of AI. The vending machine and alarm clock map fixed inputs to fixed outputs, and a random number generator perceives and predicts nothing — randomness isn't intelligence.",
          },
          {
            question:
              "A real email from your teacher lands in the spam folder. What does this reveal about AI systems in general?",
            options: [
              "The filter is broken — a working filter never makes errors",
              "The email must have been spam if the filter said so",
              "AI predictions are best guesses, so mistakes happen",
              "Enough hand-written rules would make the filter perfect",
            ],
            correct: 2,
            explanation:
              "Learned systems trade perfect certainty for the ability to handle novel input — being *usually* right on anything beats being always right on almost nothing. Calling it 'broken' misunderstands the design: a filter that never misfired would have to be so cautious it would catch almost no spam.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2 — AI All Around You
    // ------------------------------------------------------------------
    {
      id: 'ai-all-around-you',
      title: "AI All Around You",
      duration: '20 min',
      objectives: [
        "Identify the AI systems hiding in an ordinary day",
        "Explain the data → patterns → predictions loop that powers them all",
        "Recognize training data in the wild — including data you're generating right now",
      ],
      blocks: [
        {
          type: 'intro',
          text:
            "7:02 a.m.: your phone unlocks by looking at your face. 7:15: autocomplete finishes your text before you do. 7:30: Maps warns you traffic is bad and promises a 22-minute ride. 7:48: your playlist serves up a song you've never heard — and you like it. That's at least four AI systems before homeroom, and not one of them announced itself. Today you'll learn the single loop that powers every one of them.",
        },
        { type: 'heading', text: "One loop behind everything: data → patterns → predictions" },
        {
          type: 'text',
          text:
            "Strip away the branding, and almost every AI feature you touch runs the same three-step loop. It's the most useful mental model in this entire course, so let's name the steps carefully.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Data** — the system collects a huge pile of examples: billions of typed sentences, millions of labeled photos, years of speed reports from phones on the road.",
            "**Patterns** — during training, it finds regularities in those examples: 'after the words *see you*, the word *soon* is extremely common,' or 'this road crawls at 3 p.m. on Fridays.'",
            "**Prediction** — facing a brand-new situation, it applies those patterns to make a best guess: the next word, the beach photo, the arrival time.",
          ],
        },
        {
          type: 'text',
          text:
            "Two moments matter inside the loop. **Training** happens ahead of time, often on giant computers: the system digests the data and compresses it into patterns. **Prediction** happens in milliseconds, on your device, for your specific case. When your keyboard suggests a word, it isn't re-reading billions of sentences — it already boiled them down.",
        },
        {
          type: 'text',
          text:
            "Notice what's *not* in the loop: understanding. Autocomplete doesn't know what your words mean, and Maps has never sat in traffic. Each one is applying patterns from data — which is why they're impressively right most of the time and occasionally, hilariously wrong.",
        },
        {
          type: 'checkpoint',
          question: "Maps predicts your ride will take 22 minutes. In the loop, what is the DATA?",
          options: [
            "The '22 minutes' estimate shown on your screen",
            "Speed reports from phones that drove the route",
            "The color of the route line drawn on the map",
            "Your phone's battery level and screen brightness",
          ],
          correct: 1,
          explanation:
            "The data is the pile of examples the system learned from — historical and live speed reports from other phones. The '22 minutes' figure is the loop's *output*, the prediction, which is the step people most often mistake for the input.",
        },
        { type: 'heading', text: "A school day's worth of hidden AI" },
        {
          type: 'table',
          headers: ["Where you see it", "Data it learned from", "What it predicts"],
          rows: [
            ["Keyboard autocomplete", "Billions of sentences people have typed", "Your most likely next word"],
            ["Photo search for 'dog'", "Millions of photos labeled by people", "Which of your photos contain a dog"],
            ["Maps ETA", "Live + historical speeds from phones on the road", "How long your trip will take"],
            ["Feed ranking (TikTok, YouTube, Instagram)", "What millions of users watched, liked, skipped", "Which post keeps *you* watching"],
            ["Voice assistant", "Huge sets of recorded, transcribed speech", "Which words you just said"],
          ],
        },
        {
          type: 'text',
          text:
            "Photo search deserves a closer look, because nobody ever tagged *your* photos. People labeled millions of *other* images, the model learned which visual patterns go with the label 'dog,' and now it scans your camera roll making a dog/not-dog prediction for every single shot. Your search results are predictions.",
        },
        {
          type: 'text',
          text:
            "And look hard at the feed-ranking row, because it's the sneakiest. The prediction isn't 'what's good' or 'what's true' — it's 'what will keep you scrolling.' Every tap, pause, and rewatch you make becomes fresh training data, which is why your For You page knows you a little too well. You're not just using that system. You're training it.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: autocomplete, step by step",
          text:
            "Type 'see you' and watch three suggestions appear. Here's the loop running in real time. **Step 1 — data:** the keyboard's model was trained on billions of real sentences, plus your own typing history on your phone. Why so much data? Because rare phrases need many examples before a pattern is trustworthy. **Step 2 — patterns:** in all that text, 'see you soon,' 'see you later,' and 'see you tomorrow' vastly outnumber everything else. **Step 3 — prediction:** the model ranks every possible next word by probability and surfaces the top three. And if you always type 'later,' your personal data gradually reshapes the pattern — same loop, personalized to you.",
        },
        {
          type: 'checkpoint',
          question: "In the autocomplete example, which part is the PATTERNS step?",
          options: [
            "Collecting billions of sentences people have typed",
            "Displaying three suggested words above the keyboard",
            "Learning which words usually follow 'see you'",
            "Tapping the middle suggestion to accept it",
          ],
          correct: 2,
          explanation:
            "Patterns are the regularities extracted from the data during training — like the fact that 'see you' is usually followed by 'soon,' 'later,' or 'tomorrow.' Collecting sentences is the data step, and putting three suggestions on your screen is the prediction step in action.",
        },
        {
          type: 'tryIt',
          title: "Try it: Quick, Draw!",
          intro:
            "Google's Quick, Draw! challenges you to doodle objects while a neural network guesses what you're drawing in real time. It learned from over 50 million doodles contributed by players — and in a few minutes, you'll see that training data with your own eyes.",
          steps: [
            "Open [Quick, Draw!](https://quickdraw.withgoogle.com/) and play one full game — six rounds, 20 seconds each.",
            "As you play, notice *when* the AI guesses right. It's usually after just a few strokes. Which of your drawings did it catch instantly, and which stumped it?",
            "Now open the [dataset explorer](https://quickdraw.withgoogle.com/data) and click any object — try 'shoe' or 'cat.'",
            "You're looking at a wall of real drawings of that one object, pulled from a public dataset of 50 million doodles. Scroll for a bit. Notice how differently people draw the same thing — and what stays the same across almost all of them.",
            "Here's the punchline: **you are looking at training data.** The AI recognized your cat because your strokes matched patterns shared across a huge pile of other people's cats. And the doodles you just drew? They can be added to that same public dataset — you helped build the next version.",
          ],
          url: 'https://quickdraw.withgoogle.com/',
          urlLabel: "Play Quick, Draw!",
        },
        {
          type: 'text',
          text:
            "Think about why some of your drawings were recognized in two strokes. It wasn't mind-reading — your first strokes matched a pattern that shows up in thousands of other people's drawings. And when the AI failed, your drawing probably broke the pattern (nothing wrong with an avant-garde giraffe). Recognition is pattern-matching against data. Nothing more, nothing less.",
        },
        {
          type: 'checkpoint',
          question: "After you finish playing Quick, Draw!, what happens to your doodles?",
          options: [
            "They are deleted the moment the game ends",
            "They stay on your device and are never reused",
            "Human judges review them to score the AI's guesses",
            "They can join the public training dataset",
          ],
          correct: 3,
          explanation:
            "Quick, Draw! drawings feed the same crowdsourced open dataset the model learns from — that's how it reached 50 million examples in the first place. It's a rare case where a system *tells* you you're generating training data; most apps collect it silently.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: "You're generating training data right now",
          text:
            "Data collection like Quick, Draw!'s happens constantly — usually without a fun game attached. Voice assistants improve from voice recordings, Maps improves from your commute, and feeds improve from every second of your attention. In Unit 5 you'll weigh the privacy trade-offs. For now, just start noticing the loop everywhere: if an app adapts to you, you're feeding it data.",
        },
        { type: 'heading', text: "Key takeaways" },
        {
          type: 'list',
          items: [
            "What's the loop behind almost every AI feature? Data → patterns → predictions: learn from examples, extract regularities, guess the new case.",
            "Where does Maps' ETA come from? Patterns in speed and location data from thousands of phones — not from 'knowing' the roads.",
            "What does a social feed actually predict? Whatever is most likely to keep you engaged — and your behavior is its training data.",
            "Why did Quick, Draw! recognize your doodles? Your strokes matched patterns learned from a dataset of 50 million drawings by other players.",
            "Next lesson: where did all of this come from? Seventy years of booms, busts, and breakthroughs — in seven milestones.",
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question: "Which sequence correctly describes the loop behind most AI features?",
            options: [
              "Predictions → patterns → data",
              "Data → patterns → prediction",
              "Rules → code → fixed output",
              "Question → lookup → answer",
            ],
            correct: 1,
            explanation:
              "Systems collect examples (data), extract regularities from them (patterns), then apply those to new cases (prediction). 'Rules → code → fixed output' describes ordinary programmed software — the thing AI specifically is not.",
          },
          {
            question:
              "Your photo app instantly finds all your beach photos, even though you never labeled a single one. How?",
            options: [
              "It asks your other apps what is in each of your photos",
              "It reads only the GPS coordinates saved inside each photo",
              "A human reviewer quietly tagged your photos in the background",
              "A model trained on labeled photos predicts which ones match",
            ],
            correct: 3,
            explanation:
              "The model learned beach-like visual patterns from millions of images other people labeled, then applies them to your pixels as predictions. GPS is the tempting distractor — location data does exist, but it can't tell a beach photo from a parking-lot photo taken at the same beach.",
          },
          {
            question: "What does a social media feed's ranking system actually predict?",
            options: [
              "Which posts have the highest quality content",
              "Which posts are the most factually truthful",
              "Which posts you will watch, like, or share",
              "Which posts your friends want you to see",
            ],
            correct: 2,
            explanation:
              "The system is trained on engagement — watches, likes, shares — so that's what it optimizes. 'Highest quality' is the natural assumption, but quality is never in the training signal; a post can score high by being outrageous rather than good.",
          },
          {
            question: "Quick, Draw! often recognizes a cat from just two strokes. Why?",
            options: [
              "Your first strokes match the patterns in other players' cats",
              "It watches through your camera to see what you mean to draw",
              "It stores photos of real cats and compares yours to them",
              "It already knows the prompt, so the guessing is for show",
            ],
            correct: 0,
            explanation:
              "Most people start a cat the same few ways, and the model learned those patterns from a dataset of 50 million doodles. The 'stored photos' option confuses two kinds of data — it learned from *drawings*, which is why it recognizes doodle-patterns rather than photographs.",
          },
          {
            question:
              "Your voice assistant works perfectly at home but keeps mishearing you in the noisy cafeteria. Using the loop, what's the best explanation?",
            options: [
              "Its microphone follows a rule allowing only one voice at a time",
              "Cafeteria noise doesn't match the clean speech it trained on",
              "It never stored a copy of your voice, so it guesses randomly",
              "The prediction step switches itself off whenever rooms get loud",
            ],
            correct: 1,
            explanation:
              "Predictions are only as good as the match between new input and training patterns — cafeteria noise pushes the audio far from the mostly-clear recordings the model learned from. Nothing 'shuts off'; the model still predicts, just badly, which is exactly how learned systems fail.",
          },
          {
            question: "In the loop, what happens during the PATTERNS step?",
            options: [
              "The system gathers millions of raw examples",
              "The system guesses about your specific case",
              "The system asks a person to verify its output",
              "The system finds regularities in the data",
            ],
            correct: 3,
            explanation:
              "Patterns are the regularities extracted from data during training — like which words tend to follow 'see you.' Collecting examples is the data step, and guessing about your case is the prediction step; mixing those up is the most common error, so keep the three stages distinct.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3 — A Short History of Thinking Machines
    // ------------------------------------------------------------------
    {
      id: 'history-of-thinking-machines',
      title: "A Short History of Thinking Machines",
      duration: '25 min',
      objectives: [
        "Sequence the key milestones from the Turing test (1950) to ChatGPT (2022)",
        "Explain AI booms and winters using three ingredients: compute, data, and algorithms",
        "Evaluate modern AI hype using the same three-ingredient test",
      ],
      blocks: [
        {
          type: 'intro',
          text:
            "In 1950 — before the phrase 'artificial intelligence' existed, before almost anyone had seen a computer — the mathematician Alan Turing asked a question that still drives tech headlines: can machines think? Instead of arguing philosophy, he proposed a game. If a machine could chat with you so convincingly that you couldn't tell it from a human, he argued, quibbling over the word 'think' stops mattering. Seventy-five years later, millions of people have played that exact game online — and in the largest run of it, players chatting with a bot guessed wrong about 40% of the time. This is the story of how we got here.",
        },
        { type: 'heading', text: "1950: the imitation game" },
        {
          type: 'text',
          text:
            "Turing's setup, now called the **Turing test**: a judge exchanges text messages with two hidden partners — one human, one machine — and tries to tell which is which. If judges can't reliably pick out the machine, it passes. Notice what the test measures: *conversational indistinguishability*. It says nothing about consciousness, feelings, or understanding — a deliberate dodge that made the question scientific instead of philosophical.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: "Play a modern Turing test",
          text:
            "[Human or Not](https://humanornot.so/) pairs you for a two-minute anonymous chat; afterward you guess whether your partner was human or AI. Fair warning before you click: when the match is human, you're chatting with a real stranger online, so check your school's policy on chat sites first. If you do play, keep score — and notice how often the AI fools you.",
        },
        { type: 'heading', text: "1956: AI gets its name" },
        {
          type: 'text',
          text:
            "In the summer of 1956, a small workshop at Dartmouth College gave the field its name: **artificial intelligence**. The attendees were spectacularly optimistic, expecting major breakthroughs within a generation. That optimism set a pattern you'll see repeat: bold promises first, reality check later.",
        },
        { type: 'heading', text: "Boom #1: the age of rules and experts" },
        {
          type: 'text',
          text:
            "Early AI's biggest commercial success was the **expert system**: interview a human expert — a doctor, a chemist, a mechanic — and encode their knowledge as thousands of if-then rules. In narrow, stable domains these worked well enough to spark a corporate gold rush in the 1980s. But the systems were brittle: anything outside their rulebook produced nonsense, and maintaining tens of thousands of hand-written rules became a nightmare.",
        },
        {
          type: 'checkpoint',
          question: "In Turing's imitation game, what exactly is being tested?",
          options: [
            "Whether a machine is truly conscious and self-aware",
            "Whether its chat can be told apart from a real human's",
            "Whether a machine can beat a human at a board game",
            "Whether a machine can pass a written school exam",
          ],
          correct: 1,
          explanation:
            "Turing deliberately replaced the unanswerable question 'can machines think?' with a measurable one: can judges tell the machine's conversation from a human's? Consciousness is exactly what the test avoids claiming anything about, which is why it sidesteps philosophy entirely.",
        },
        { type: 'heading', text: "The winters: when AI froze over" },
        {
          type: 'text',
          text:
            "Twice — in the mid-1970s and again around the end of the 1980s — funding and excitement collapsed so hard the field named the phenomenon: an **AI winter**. To understand why winters happen (and whether another one is coming), you need the three-ingredient framework.",
        },
        {
          type: 'text',
          text:
            "Every AI boom and bust in history comes down to three ingredients. When all three are plentiful, AI leaps forward. When even one is missing, promises quietly fail.",
        },
        {
          type: 'list',
          items: [
            "**Compute** — raw processing power. Early researchers had brilliant ideas and machines millions of times weaker than your phone.",
            "**Data** — examples to learn from. Before the internet, there was no ocean of text, images, and clicks to train on.",
            "**Algorithms** — the methods themselves. Neural networks existed on paper for decades before anyone knew how to make deep ones actually work.",
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: "The winter pattern",
          text:
            "It repeats like clockwork: researchers overpromise ('human-level AI within a generation'), governments and companies pour in money, the missing ingredients doom the results, and funding evaporates for a decade. The lesson is *not* 'AI always fails.' It's that progress tracks ingredients, not hype — a test worth running on every breathless AI headline you'll ever see.",
        },
        {
          type: 'checkpoint',
          question: "Which situation most closely matches how AI winters actually started?",
          options: [
            "Big promises outran the ingredients, so funders pulled out",
            "Computers physically overheated and stopped working reliably",
            "AI succeeded so completely that more research was pointless",
            "Governments banned AI research in most of the world at once",
          ],
          correct: 0,
          explanation:
            "Winters are hype crashes: the gap between promises and what compute, data, and algorithms could actually deliver became undeniable, and money fled. No bans or hardware breakdowns were involved — just broken promises meeting reality.",
        },
        { type: 'heading', text: "The comeback: five sparks" },
        {
          type: 'text',
          text:
            "**1997 — Deep Blue.** IBM's chess machine defeated world champion Garry Kasparov. Historic — but Deep Blue was mostly brute-force search plus hand-crafted chess knowledge, closer to a very fast rulebook than to learning. Remember that; it matters in the next lesson.",
        },
        {
          type: 'text',
          text:
            "**2012 — ImageNet.** A deep neural network crushed the field in the ImageNet image-recognition contest, and the modern AI boom ignited almost overnight. Why 2012 and not 1992? Run the ingredients test.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: why 2012? Run the three-ingredient test",
          text:
            "**Data:** the ImageNet dataset offered labeled images at a scale earlier researchers could only dream of — deep networks starve on small datasets, so this ingredient was non-negotiable. **Compute:** gaming graphics cards (GPUs) turned out to be accidentally perfect for neural-network math, making training massively faster and cheaper. **Algorithms:** researchers had finally worked out how to train many-layered ('deep') networks reliably. Remove any one ingredient and 2012 is just another year. Every breakthrough since — AlphaGo, ChatGPT — passes the exact same three-part test.",
        },
        {
          type: 'text',
          text:
            "**2016 — AlphaGo.** DeepMind's system defeated Go champion Lee Sedol. Go has far too many possible positions for Deep Blue-style brute force — AlphaGo won by *learning* from human games and from millions of games against itself.",
        },
        {
          type: 'text',
          text:
            "**2017 — Transformers.** Researchers introduced a new neural-network architecture for processing language. It scaled beautifully, and it's the 'T' in ChatGPT. **2022 — ChatGPT** put a transformer-based language model in everyone's browser, and AI went from research news to dinner-table conversation in about a week.",
        },
        {
          type: 'interactive',
          component: 'SequenceBuilder',
          caption: "No years shown — that's the point. Reconstruct the order from the story.",
          props: {
            title: "Build the timeline of thinking machines",
            intro: "Drag these seven milestones into the order they actually happened.",
            steps: [
              "Alan Turing proposes the imitation game: can a machine pass as human in conversation?",
              "Researchers at a Dartmouth workshop coin the term 'artificial intelligence'",
              "Expert systems boom: companies encode human expertise into thousands of if-then rules",
              "IBM's Deep Blue defeats world chess champion Garry Kasparov",
              "A deep neural network shatters records in the ImageNet image-recognition contest",
              "DeepMind's AlphaGo defeats Go champion Lee Sedol",
              "ChatGPT launches and brings large language models to the public",
            ],
          },
        },
        {
          type: 'checkpoint',
          question:
            "AlphaGo (2016) conquered Go, where Deep Blue-style brute force was hopeless. In ingredient terms, what changed?",
          options: [
            "Computers finally got fast enough to check every Go position",
            "The rules of Go were simplified ahead of the championship match",
            "Learning from data and self-play replaced hand-built rules",
            "AlphaGo memorized every game ever played and looked up moves",
          ],
          correct: 2,
          explanation:
            "Go's possibilities are astronomically beyond any brute-force check or memorized lookup — that's precisely why it fell only when learning-based methods (plus modern compute) matured. The 'fast enough to check everything' option is the misconception the AlphaGo story exists to bust.",
        },
        { type: 'heading', text: "Key takeaways" },
        {
          type: 'list',
          items: [
            "What did the Turing test propose? Judge machines by whether their conversation is indistinguishable from a human's — a practical test, deliberately silent on 'real thinking.'",
            "Why did AI winters happen? Hype outran the available compute, data, and algorithms — and when the promises broke, funding froze.",
            "What made 2012 the turning point? All three ingredients arrived at once: large labeled datasets, GPU compute, and deep-learning algorithms.",
            "How is Deep Blue different from AlphaGo? Deep Blue searched using hand-built rules; AlphaGo learned from examples and self-play.",
            "Next lesson: that rules-versus-learning split is the most important idea in this course — you'll build both kinds of system and watch one fall apart.",
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question: "Which statement about the AI timeline is correct?",
            options: [
              "The Turing test came before the field was even named",
              "ChatGPT launched before the ImageNet breakthrough",
              "The Dartmouth workshop happened before Turing's paper",
              "Deep Blue beat Kasparov after AlphaGo beat Lee Sedol",
            ],
            correct: 0,
            explanation:
              "Turing's paper appeared in 1950, six years before the 1956 Dartmouth workshop gave the field its name — the test came before the term. The other three reverse real orderings: ImageNet (2012) came before ChatGPT (2022), and Deep Blue (1997) came before AlphaGo (2016).",
          },
          {
            question:
              "In the 1970s, researchers had promising ideas for neural networks — yet AI still hit a winter. Using the three-ingredient framework, what's the best diagnosis?",
            options: [
              "Researchers lost interest and moved to other fields",
              "Universities banned the algorithms as too dangerous",
              "Compute and data were far too scarce for the ideas",
              "AI was already solved, so funding was unnecessary",
            ],
            correct: 2,
            explanation:
              "Ideas alone aren't enough — neural networks sat on paper for decades waiting for enough compute and data to become useful, so results couldn't match the hype. Winters weren't caused by lost interest or bans; they were caused by the gap between promises and what the ingredients could deliver.",
          },
          {
            question: "What's the key difference between Deep Blue (1997) and AlphaGo (2016)?",
            options: [
              "Deep Blue searched with hand-crafted chess rules; AlphaGo learned",
              "Deep Blue learned from data; AlphaGo used hand-written rules",
              "Deep Blue played Go, while AlphaGo was built to play chess",
              "Neither learned — both stored every possible game in advance",
            ],
            correct: 0,
            explanation:
              "Deep Blue is the triumph of the rule-and-search era; AlphaGo learned patterns from human games and from millions of games against itself. 'Stored every game' is impossible for either — chess and especially Go have vastly more positions than could ever be held in memory.",
          },
          {
            question: "Why does 2017 matter in the story of modern AI?",
            options: [
              "The first AI winter officially came to an end",
              "Deep Blue defeated chess champion Garry Kasparov",
              "A machine passed the Turing test for the very first time",
              "Researchers introduced the transformer architecture",
            ],
            correct: 3,
            explanation:
              "The transformer, introduced in 2017, is the architecture behind today's large language models — it's literally the T in GPT. Deep Blue's match was 1997, and the first controlled study reporting a Turing test pass came much later, in 2025.",
          },
          {
            question:
              "A startup claims it will deliver human-level general AI within two years and wants investors now. Based on AI history, what's the wisest response?",
            options: [
              "Invest right away, since AI progress never really slows",
              "Dismiss it — AI has never delivered on anything it promised",
              "Ask what new compute, data, or algorithms make it possible",
              "Wait and see whether a bigger company copies the idea first",
            ],
            correct: 2,
            explanation:
              "History's pattern is confident timelines crashing into missing ingredients, so the smart move is checking what's actually new rather than blind faith or blanket cynicism. 'Never delivered anything' is equally wrong: the real record alternates genuine breakthroughs with busted hype.",
          },
          {
            question:
              "In AI21 Labs' Human or Not experiment — over 10 million chats — players talking to a bot guessed wrong about 40% of the time. What does that actually demonstrate?",
            options: [
              "Modern AI genuinely understands what it is saying",
              "AI can be hard to tell from a human in a short chat",
              "The players were careless and not really paying attention",
              "The Turing test has been proven meaningless by the result",
            ],
            correct: 1,
            explanation:
              "Conversational indistinguishability is exactly what the Turing test measures, and all it measures. Turing designed the test to *sidestep* questions of understanding, so 'the AI understands' reads far more into the result than the evidence can support.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 4 — Rules vs. Learning
    // ------------------------------------------------------------------
    {
      id: 'rules-vs-learning',
      title: "Rules vs. Learning",
      duration: '25 min',
      objectives: [
        "Hand-write rules for a spam filter and predict where they break",
        "Explain why learning from labeled examples beats rules on messy, adversarial problems",
        "Decide whether a given problem calls for a rule-based or data-driven system",
      ],
      blocks: [
        {
          type: 'intro',
          text:
            "Congratulations — you've just been hired as the school district's spam-fighting engineer. Thousands of sketchy emails hit student inboxes every day, and your job is to stop them. You have two possible strategies, and choosing between them is the single most important idea in this whole course. Let's try the obvious strategy first — and watch it fall apart in slow motion.",
        },
        { type: 'heading', text: "Attempt #1: write the rules yourself" },
        {
          type: 'text',
          text:
            "You know what spam looks like, so you start typing rules. Each rule is a simple if-then instruction — exactly the kind of logic that runs a calculator or a vending machine. Ten minutes later you have a first draft, with a reason behind every line.",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Rule 1: if the subject contains 'FREE', mark as spam.** Why: scam emails love shouting FREE, so this should catch a big share immediately.",
            "**Rule 2: if the message asks for a password, mark as spam.** Why: real services almost never ask for your password by email — this targets phishing directly.",
            "**Rule 3: if the sender isn't in the school directory, flag for review.** Why: most legitimate mail comes from known senders, so this is a safety net for whatever slips past the first two rules.",
          ],
        },
        {
          type: 'text',
          text:
            "You deploy the filter Monday morning, feeling great. By Tuesday, two disasters are sitting in your inbox — and they're mirror images of each other.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: "The two failures",
          text:
            "**Failure 1 — the miss (false negative):** a scammer sends 'F R E E   M O N E Y'. Rule 1 searches for the exact text 'FREE' — and with spaces between the letters, there's no match. Any human reads it instantly; your rule is completely blind to it. **Failure 2 — the false alarm (false positive):** the student council sends 'Free pizza in the cafeteria today!' Rule 1 matches the word and vaporizes a perfectly innocent email about pizza. Same word, opposite meanings. The meaning was never in the word — it's in the context, and rules that match text can't see context.",
        },
        {
          type: 'checkpoint',
          question: "Why did 'F R E E   M O N E Y' get past Rule 1?",
          options: [
            "The scammer hacked into the filter and disabled it",
            "Spacing the letters breaks the rule's exact match",
            "The rule had been switched off by mistake that morning",
            "Spam filters cannot process words in capital letters",
          ],
          correct: 1,
          explanation:
            "Rules match literal patterns, so any trivial rewrite — spaces, dashes, lookalike letters — slips through even though a human reads the meaning instantly. No hacking needed: the scammer just stepped one inch outside the rule's exact wording.",
        },
        { type: 'heading', text: "Why hand-written rules break" },
        {
          type: 'text',
          text:
            "Your filter didn't fail because you wrote bad rules. It failed because spam-filtering has three properties that doom *any* hand-written rulebook — and learning to spot these properties tells you when AI is the right tool for a job.",
        },
        {
          type: 'list',
          items: [
            "**Adversaries adapt.** The moment your rule ships, spammers probe it: FR-EE, an image of the word, a lookalike character. You patch; they route around the patch. It's an arms race, and you're fighting it by hand.",
            "**Meaning lives in context.** 'Free' is menacing in 'FREE MONEY' and harmless in 'free pizza.' No list of banned words can capture the difference, because the words are identical.",
            "**Edge cases never end.** Cover 99 cases and the 100th arrives tomorrow. Real rulebooks swell into thousands of rules that nobody fully understands, where every fix risks breaking something else.",
          ],
        },
        { type: 'heading', text: "Attempt #2: learn from examples" },
        {
          type: 'text',
          text:
            "Now the second strategy. Instead of telling the computer what spam looks like, you *show* it: 10,000 real emails, each labeled 'spam' or 'not spam' by people. The system's job is to find the patterns that separate the two piles on its own. This is **machine learning**, and the labeled pile is called **training data**.",
        },
        {
          type: 'text',
          text:
            "What it learns isn't one rule but thousands of weighted clues considered together: odd spacing, suspicious links, a sender with no history, urgency words — and combinations no human would ever think to write down. 'Free' near 'cafeteria' from a directory sender scores low. 'F R E E' from an unknown sender with a sketchy link scores high. Context, finally.",
        },
        {
          type: 'text',
          text:
            "Best of all: when spammers invent a new trick, you don't rewrite anything. You add freshly labeled examples and retrain — the system updates its own patterns. The arms race doesn't end, but now your side has a machine fighting it.",
        },
        {
          type: 'checkpoint',
          question: "In the learned spam filter, what replaces the hand-written rules?",
          options: [
            "A much longer list of banned words and phrases",
            "A person who reads every incoming message first",
            "Weighted clues pulled from labeled example emails",
            "A coin-flip guess applied to each new email",
          ],
          correct: 2,
          explanation:
            "The system derives its own patterns from training data — thousands of weak signals weighed together, not one brittle keyword match. A longer banned-word list is just more rules, with all the same blind spots you watched fail.",
        },
        { type: 'heading', text: "So are rules obsolete? Not even close" },
        {
          type: 'text',
          text:
            "Rule-based systems still run most of the world, and often they're the *right* choice. Your grade calculator, tax software, and a game's scoreboard must be exact, predictable, and explainable — you'd be furious if your GPA were a 'best guess.' The real question is never 'which is smarter.' It's 'which fits the problem.'",
        },
        {
          type: 'table',
          headers: ["Ask about the problem", "Choose rules", "Choose learning"],
          rows: [
            ["Can you write down the complete logic?", "Yes — it's known and finite (tax brackets)", "No — you know it when you see it (spam, faces)"],
            ["Do the inputs keep changing?", "Inputs are stable", "Adversaries adapt, or input is messy and real-world"],
            ["Is a wrong answer ever acceptable?", "Never — must be exact", "Occasionally — a missed spam email is survivable"],
            ["Must you explain every output?", "Yes — trace the rules line by line", "Partial explanations are enough"],
          ],
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: "The question to ask about any 'smart' system",
          text:
            "This same choice shows up everywhere: banks detecting fraud (adversaries adapt — learning wins), video-game NPCs (mostly rules), your camera's face detection (learning), autopilot systems (a careful mix of both). From now on, when you meet any smart-seeming system, ask one question: *was this written, or was it trained?* You'll never see software the same way again.",
        },
        {
          type: 'checkpoint',
          question:
            "Your principal wants software that turns each student's grades into a GPA using the district's exact published formula. Which approach fits, and why?",
          options: [
            "Rule-based — the formula is known and must be exact",
            "Machine learning — it is newer, so it must work better",
            "Machine learning — train it on last year's GPAs to estimate",
            "Neither — GPAs should always be computed by hand",
          ],
          correct: 0,
          explanation:
            "When the complete logic is known and errors are unacceptable, rules win: every output can be traced and explained line by line. A learned model would introduce guessing into something that has exactly one right answer, and 'newer is better' is the misconception this whole lesson exists to kill.",
        },
        { type: 'heading', text: "Train your inner pattern-spotter" },
        {
          type: 'text',
          text:
            "Machine learning is pattern-finding at industrial scale — but the core skill is one you already have. This game shows you a sequence; your job is to spot the regularity and predict what comes next. That's exactly what the spam filter did with its 10,000 emails, minus the math.",
        },
        {
          type: 'interactive',
          component: 'PatternGame',
          caption: "Spot the pattern, predict the next item — you're doing by eye what a model does with training data.",
        },
        {
          type: 'keyTerms',
          title: "Unit 1 vocabulary",
          terms: [
            {
              term: "artificial intelligence (AI)",
              definition:
                "A system that perceives, reasons, predicts, or acts in ways that normally require human intelligence — usually by learning patterns from data.",
            },
            {
              term: "narrow AI",
              definition:
                "AI built for one specific task, like filtering spam or playing Go. Every AI system deployed today is narrow.",
            },
            {
              term: "general AI",
              definition:
                "A hypothetical AI with flexible, human-like intelligence across many domains. It does not currently exist.",
            },
            {
              term: "the AI effect",
              definition:
                "Our habit of no longer calling a technology 'AI' once it works reliably — like GPS routing or speech-to-text.",
            },
            {
              term: "rule-based system",
              definition:
                "Software that follows if-then instructions written by programmers. Exact and predictable, but brittle on messy input.",
            },
            {
              term: "data-driven system",
              definition:
                "Software that learns patterns from examples instead of following hand-written rules.",
            },
            {
              term: "machine learning",
              definition:
                "Training a system on examples so it can make predictions about new, unseen cases.",
            },
            {
              term: "training data",
              definition:
                "The collection of labeled examples a system learns from — like 10,000 emails marked spam or not spam.",
            },
            {
              term: "prediction",
              definition:
                "A system's best statistical guess about something unknown — the next word, the arrival time, spam or not spam.",
            },
            {
              term: "false positive",
              definition:
                "When a system wrongly flags something harmless — like the free-pizza email landing in the spam folder.",
            },
          ],
        },
        { type: 'heading', text: "Key takeaways" },
        {
          type: 'list',
          items: [
            "Why do hand-written rules fail on spam? Adversaries adapt, meaning depends on context, and the edge cases never stop coming.",
            "What does 'learning from examples' mean? The system extracts its own patterns from labeled training data instead of following rules a human wrote.",
            "When are rules still the right tool? When the logic is fully known and answers must be exact and explainable — grades, taxes, scoreboards.",
            "What's a false positive? A harmless item wrongly flagged — the price of systems that are 'usually right' instead of always right.",
            "You now hold the key to Unit 2: if machines learn from examples, then everything depends on the examples. Time to train one yourself.",
          ],
        },
      ],
      quiz: {
        questions: [
          {
            question:
              "Your rule 'if the subject contains FREE, mark as spam' deleted the student council's 'Free pizza today!' email. What's the root cause?",
            options: [
              "The rule has a typo, and fixing the code would prevent it",
              "Students should never use the word 'free' in school email",
              "The filter just needed a few more rules to become perfect",
              "The rule matches the word but cannot read the context",
            ],
            correct: 3,
            explanation:
              "The rule worked exactly as written — that's the problem: text matching is blind to meaning, and 'free' is innocent beside 'pizza' and menacing beside 'money.' 'Add more rules' is the tempting fix, but each new rule brings its own context-blindness and its own edge cases.",
          },
          {
            question:
              "A bank's fraud team notices criminals invent new scam patterns every few weeks. Which approach should power their fraud detector, and why?",
            options: [
              "Data-driven — retrain on fresh labeled examples as tactics change",
              "Rule-based — money needs exact answers, never predictions",
              "Rule-based — criminals cannot adapt to rules they can't see",
              "Neither — a human should review every single transaction",
            ],
            correct: 0,
            explanation:
              "Adapting adversaries are the signature case for learning: retraining absorbs new tactics without anyone hand-patching rules forever. The 'money needs exact answers' option confuses two different jobs — computing a balance needs rules, but *detecting* fraud is inherently a prediction problem.",
          },
          {
            question: "What is training data?",
            options: [
              "The instructions a programmer writes to control a system",
              "The output a system produces once it has been trained",
              "Labeled examples a system studies to find patterns",
              "The computer code that makes up the AI model itself",
            ],
            correct: 2,
            explanation:
              "Training data is the input to learning: labeled examples — like emails marked spam or not spam — that the system mines for patterns. Confusing it with the programmer's instructions mixes up the two paradigms; in machine learning, the examples largely replace the instructions.",
          },
          {
            question:
              "A city needs software that computes exact bus fares from its published fare table (age, distance, transfers). What's the best approach?",
            options: [
              "Machine learning — train it on old receipts and estimate",
              "Rule-based — the logic is known and must be exact",
              "Machine learning — fares involve messy real-world factors",
              "Either one — both approaches would give identical results",
            ],
            correct: 1,
            explanation:
              "The complete logic already exists in the published fare table, and a wrong fare is never acceptable — the textbook case for rules. Training a model here would replace a guaranteed-correct calculation with a statistical guess: worse in every way.",
          },
          {
            question: "What's the core difference between rule-based and data-driven systems?",
            options: [
              "Who finds the patterns — a programmer or the machine",
              "Whether the system involves any computer code at all",
              "Which one came first — rules are older and therefore worse",
              "Which one is always correct — data-driven systems never err",
            ],
            correct: 0,
            explanation:
              "The dividing line is where the intelligence comes from: a programmer writes the logic in a rule-based system, while a data-driven system extracts its own patterns from examples. The last option has it backwards — data-driven systems are precisely the ones that make probabilistic mistakes, which rules-done-right never do.",
          },
          {
            question:
              "A spam filter trained on last year's emails starts missing a brand-new style of scam. Based on this lesson, what's the best fix?",
            options: [
              "Switch to a keyword blocklist, since models cannot change",
              "Nothing — once trained, a model is fixed for good",
              "Add newly labeled examples of the scam and retrain",
              "Ask students to stop opening unfamiliar emails entirely",
            ],
            correct: 2,
            explanation:
              "Retraining on fresh labeled examples is exactly how learned systems keep up with an arms race — it's their superpower over rulebooks. The idea that models are 'fixed forever' is a common misconception; scheduled retraining is standard practice.",
          },
        ],
      },
    },
  ],
};

export default unit;
