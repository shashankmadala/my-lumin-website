// Unit 3 — Neural Networks: How Deep Learning Works (student course "AI Foundations")
// Lessons: from-neuron-to-network, how-networks-learn, computer-vision, the-scale-of-modern-ai

const unit = {
  id: 'unit-3',
  title: 'Neural Networks: How Deep Learning Works',
  description: "Open the black box: build a neuron out of plain arithmetic, watch a network learn from its mistakes, see how machines read images, and size up the giant models behind today's AI.",
  icon: 'Network',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1
    // ------------------------------------------------------------------
    {
      id: 'from-neuron-to-network',
      title: 'From Neuron to Network',
      duration: '18 min',
      objectives: [
        'You will be able to label the parts of an artificial neuron: inputs, weights, bias, and activation.',
        "You will be able to compute a single neuron's output by hand.",
        'You will be able to explain how stacked layers turn simple detectors into complex ones.',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Here's the strange part about deep learning: the \"brain cells\" of AI don't do anything smart. One artificial neuron just multiplies a few numbers, adds them up, and decides whether to send a signal. That's it — arithmetic you could do on paper in ten seconds. But stack millions of these simple units into layers, and the pile of arithmetic starts recognizing faces, reading handwriting, and flagging tumors on medical scans. This lesson shows you the tiny machine at the bottom of it all — and has you run one by hand.",
        },
        { type: 'heading', text: 'Meet the artificial neuron' },
        {
          type: 'text',
          text: 'An **artificial neuron** is a tiny decision-maker, loosely inspired by the neurons in your brain. It takes in numbers (its **inputs**), multiplies each input by a private number of its own (a **weight**), adds everything up along with one extra number called the **bias**, and finally passes the total through an **activation function** that decides what signal to send out. Four parts, one job: turn incoming evidence into an outgoing signal.',
        },
        {
          type: 'keyTerms',
          title: 'The four parts',
          terms: [
            { term: 'Input', definition: 'A number fed into the neuron — a pixel brightness, a yes/no fact written as 1 or 0, or the output of another neuron.' },
            { term: 'Weight', definition: 'A number that scales one input: how much that input matters to the decision. Big weight, big influence.' },
            { term: 'Bias', definition: 'A number added to the weighted total. It sets the bar — how much evidence the neuron needs before it fires.' },
            { term: 'Activation function', definition: "The rule that turns the neuron's raw total into its output — deciding whether, and how strongly, it fires." },
          ],
        },
        {
          type: 'text',
          text: "Weights are the interesting part, so here's a human version. When you decide whether to go to a basketball game, you weigh the factors: maybe you care a lot about whether your best friend is going, a little about the weather, and somewhat about unfinished homework. \"How much you care\" — that's exactly what a weight is. A neuron makes decisions the same way, except its caring is written down as numbers.",
        },
        { type: 'subheading', text: 'Worked example: the game-night neuron' },
        {
          type: 'text',
          text: "Let's build a neuron that decides: go to the game (output 1) or stay home (output 0). It takes three yes/no inputs, each written as 1 or 0: *is the weather good*, *is your best friend going*, *is your homework done*. We'll give those inputs weights of 2, 6, and 3, and set the bias to −5. Tonight: the weather is good (1), your best friend is not going (0), and your homework is done (1). Follow each step and notice *why* it's there:",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Multiply each input by its weight:** 1 × 2 = 2, then 0 × 6 = 0, then 1 × 3 = 3. The weights scale each input by how much it matters. The friend input has the biggest weight (6) because it matters most — but tonight it contributes 0, because the answer was no.',
            '**Add the results:** 2 + 0 + 3 = 5. This sum is the total evidence in favor of going out. Adding is how the neuron combines many small clues into one score.',
            "**Add the bias:** 5 + (−5) = 0. A bias of −5 makes this a picky neuron: it effectively says \"don't fire unless the evidence beats 5 points.\" A positive bias would do the opposite — an eager neuron that fires easily.",
            '**Apply the activation function:** our rule is "output 1 if the total is greater than 0, otherwise output 0." The total is exactly 0, which is not greater than 0 — so the neuron outputs 0. Stay home.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Rerun it in your head',
          text: "Flip one input: your best friend *is* going. Now the sum is 2 + 6 + 3 = 11, and 11 − 5 = 6, which is greater than 0 — the neuron fires. One input flipped the whole decision, because its weight was large. That's the entire trick of neural networks: the weights encode what matters.",
        },
        {
          type: 'checkpoint',
          question: 'Same neuron (weights 2, 6, 3 and bias −5). Tonight the weather is bad (0), your best friend is going (1), and your homework is not done (0). What does the neuron output?',
          options: [
            '1 — the weighted sum is 6, and 6 − 5 = 1, above 0',
            '0 — two of the three inputs are 0, so evidence is thin',
            '1 — the friend input always forces the neuron to fire',
            '0 — a bias of −5 always cancels out the weighted sum',
          ],
          correct: 0,
          explanation: 'Run the steps: (0 × 2) + (1 × 6) + (0 × 3) = 6, and 6 + (−5) = 1, which is greater than 0, so the neuron fires. Counting how many inputs are 0 tells you nothing by itself — one heavily weighted input can outvote all the others — and the bias is a fixed −5, not a magic canceller.',
        },
        { type: 'heading', text: 'From one neuron to a network' },
        {
          type: 'text',
          text: "One neuron can only make one simple, weighted call. The power move is stacking. A **layer** is a row of neurons that all look at the same inputs — but each has its own weights, so each learns to notice something different. Stack layers so that the outputs of one become the inputs of the next, and something remarkable happens: each layer can build slightly more complex ideas out of the simpler ones below it.",
        },
        {
          type: 'text',
          text: 'In a network that looks at images, the first layer of neurons might fire for tiny edges — little boundaries between dark and light. The next layer takes those edge signals as *its* inputs and combines them into corners and curves. Deeper layers combine corners and curves into eyes, wheels, or letters. Every layer is a set of detectors built out of the previous layer\'s detectors — detectors of detectors, all the way up.',
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Why "deep" learning?',
          text: '"Deep" just means many layers — depth of the stack, not depth of thought. When your phone unlocks by seeing your face, a stack of layered detectors like this runs in a fraction of a second: edge detectors feeding shape detectors feeding face detectors.',
        },
        {
          type: 'interactive',
          component: 'NeuronPlayground',
          caption: "Drag the weight and bias sliders and watch the neuron's output change live. Challenge: find settings where flipping a single input flips the decision — then find settings where no single input can.",
        },
        {
          type: 'checkpoint',
          question: 'A deep network learns to recognize handwritten digits. Which job most likely belongs to one of the *later* layers?',
          options: [
            'Detecting a tiny dark-to-light edge just two pixels wide',
            'Detecting a loop sitting on top of a vertical stroke',
            'Reading the raw brightness value of one single pixel',
            'Multiplying a single input by its weight inside one neuron',
          ],
          correct: 1,
          explanation: "Later layers combine simpler features into complex ones, so \"loop on top of a stroke\" — built from many edges and curves — lives late in the stack. Raw pixels and tiny edges belong to the earliest layers, and multiplying an input by a weight isn't a layer's job at all: that happens inside every neuron, everywhere in the network.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What does one neuron actually do? It multiplies its inputs by weights, adds a bias, and applies an activation function — pure arithmetic.',
            'What do weights mean? How much each input matters: a big weight gives that input a big say in the decision.',
            'What does the bias do? It sets the threshold — how much total evidence the neuron needs before it fires.',
            'Why stack layers? Because each layer builds more complex detectors out of the previous layer\'s simpler ones: edges, then shapes, then objects.',
          ],
        },
        {
          type: 'text',
          text: "One question is left hanging: we chose the game-night weights ourselves, but real networks have millions of weights and nobody types them in. Next lesson: how a network finds its own weights by learning from its mistakes.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In an artificial neuron, what does a weight represent?',
            options: [
              'How many other neurons feed their output into this one',
              "How much one input sways the neuron's decision",
              'How quickly the neuron produces its output signal',
              'How many layers the signal has already travelled through',
            ],
            correct: 1,
            explanation: 'A weight scales one input up or down, encoding how much that input matters: big weight, big say. It says nothing about speed or connection counts — those options confuse the structure of the network with the arithmetic inside a single unit.',
          },
          {
            question: 'A neuron has weights 4 and −3, a bias of −2, and outputs 1 only when its total is greater than 0. Both inputs are 1. What does it output?',
            options: [
              '0 — the total is 4 − 3 − 2 = −1, which is not above 0',
              '1 — both inputs are 1, so the neuron has to fire',
              '1 — the positive weight 4 outweighs the negative weight −3',
              '−1 — the neuron sends its raw total straight out',
            ],
            correct: 0,
            explanation: 'Weighted sum: 4 − 3 = 1; add the bias: 1 − 2 = −1; the activation rule turns that into output 0. The last option is the trap — the raw total really is −1, but the neuron outputs the *activation* of that total, never the total itself — and a big positive weight can always be overruled by the rest of the sum.',
          },
          {
            question: "What is the job of a neuron's bias?",
            options: [
              'It stores one training example for the neuron to reuse',
              'It makes the model unfair toward certain groups of people',
              'It shifts the bar for how much evidence a neuron needs to fire',
              'It picks out which one input should matter most',
            ],
            correct: 2,
            explanation: "The bias is just a number added to the weighted sum, raising or lowering the bar for firing. It's an unlucky name clash: *data bias* from Unit 2 (skewed training data) is a completely different concept — a neuron's bias is plain arithmetic, and choosing which input matters is the weights' job.",
          },
          {
            question: "Why can a deep network recognize complex objects when a single neuron can't?",
            options: [
              'Deeper networks always run on much faster hardware chips',
              'Each layer memorizes its own separate set of training photos',
              'Each layer watches a different private region of the image',
              'Each layer builds complex detectors out of simpler ones',
            ],
            correct: 3,
            explanation: 'Depth lets the network build features hierarchically: edges combine into shapes, shapes into objects. Layers don\'t memorize photos or split the image into private regions — every layer transforms the *whole* signal the previous layer produced — and depth is about structure, not about faster hardware.',
          },
          {
            question: 'An engineer trains a single neuron to tell cat photos from dog photos, and it barely beats random guessing. What is the most likely explanation?',
            options: [
              'Its activation function must have been wired backwards',
              'Cat and dog photos look too alike for any computer to split',
              'One weighted sum is too simple for cat-versus-dog pixels',
              'The neuron simply needed a much larger bias value',
            ],
            correct: 2,
            explanation: 'A lone neuron can only draw one simple weighted boundary, and no single weighting of raw pixels separates cats from dogs — that takes layers building up edge, texture, and shape detectors. Computers absolutely can tell them apart; they just need a network, not a neuron, and no bias value fixes a missing hierarchy.',
          },
          {
            question: 'What does the activation function decide?',
            options: [
              'Which of the training examples this neuron is allowed to see',
              'Whether, and how strongly, the neuron passes a signal forward',
              'How many weights the neuron is allowed to carry',
              'When the network has learned enough to stop training',
            ],
            correct: 1,
            explanation: "The activation function converts the neuron's raw total into its output signal — in our example, \"1 if greater than 0, else 0.\" It plays no role in choosing data or ending training; those are decisions made outside the neuron entirely, by the people running the training loop.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2
    // ------------------------------------------------------------------
    {
      id: 'how-networks-learn',
      title: 'How Networks Learn: Loss and Gradient Descent',
      duration: '22 min',
      objectives: [
        'You will be able to explain loss as a single score for how wrong a network is.',
        'You will be able to describe gradient descent using the downhill-in-fog analogy.',
        'You will be able to explain, at a concept level, what backpropagation computes and why learning means adjusting weights.',
      ],
      blocks: [
        {
          type: 'intro',
          text: "Fresh out of the box, a neural network is terrible at everything. Its weights start as random numbers, so a brand-new digit reader will look at a 7 and confidently call it a 3. What turns that random guesser into a system that can outperform people at narrow tasks isn't a programmer typing in better weights — with millions of them, nobody could. It's a loop: guess, measure how wrong, nudge every weight a tiny bit, repeat a few million times. Let's walk that loop once, slowly.",
        },
        { type: 'heading', text: 'Loss: a single score for wrongness' },
        {
          type: 'text',
          text: "**Loss** is a number that measures how wrong the network's predictions are. Bigger loss means more wrong; a loss near 0 means nearly perfect. To compute it, you need training examples with known answers — the labeled data you met in Unit 2. Show the network an example, compare its prediction to the correct label, and turn the gap into a score.",
        },
        {
          type: 'text',
          text: "Say the network sees a photo of a handwritten 7 and spreads its confidence like this: 45% \"3\", 20% \"7\", and the rest scattered. The right answer was 7, and the network gave it only 20% — that's a big gap, so a big loss. If it had said 95% \"7\", the loss would be tiny. Average this over thousands of training examples and you get one number that works like a report card for the entire network.",
        },
        {
          type: 'checkpoint',
          question: "During training, Model A's loss goes 4.1 → 2.0 → 0.9. Model B's goes 4.1 → 4.0 → 4.2. What can you conclude?",
          options: [
            "Model B just has a harder task, so its flat loss is fine",
            'Model A is memorizing its training data, which is bad',
            'Model A is improving; Model B is not learning at all',
            'Model B needs a bigger bias value to catch up',
          ],
          correct: 2,
          explanation: "Falling loss means shrinking gaps between predictions and correct labels — that's Model A — while a flat or wobbling loss means no learning is happening. Falling loss alone doesn't prove memorization (you'd need to check performance on *unseen* data for that), and one bias is a single knob among millions, not a cure.",
        },
        { type: 'heading', text: 'Gradient descent: walking downhill in fog' },
        {
          type: 'text',
          text: "Now the key move: how do you *lower* the loss? Picture yourself on a hillside in fog so thick you can't see two steps ahead. You want the valley. You can't see it — but you can feel the slope under your feet. So you point downhill, take one small step, feel the slope again, and repeat. Enough small steps and you walk your way down without ever seeing the landscape.",
        },
        {
          type: 'text',
          text: "That's **gradient descent**. Your position on the hill is the current setting of all the weights. Your altitude is the loss. A step is a small change to every weight. \"Feeling the slope\" means working out which direction of change makes the loss drop fastest — the *gradient* is just math-speak for that slope. The network never sees the whole landscape; it only ever feels the ground under its feet.",
        },
        { type: 'subheading', text: 'Worked example: one step of the training loop' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Show the network one training example** — a photo labeled "dog." Why labeled data? Because you can\'t measure wrongness without knowing the right answer (Unit 2\'s whole point).',
            '**Let it guess.** With its current weights it outputs: cat 70%, dog 30%. Early in training this is basically random — remember, the weights started as random numbers.',
            '**Compute the loss.** The correct answer was "dog" and the network gave dog only 30%, so the loss is high. This single number is the signal everything else runs on.',
            "**Backpropagation: assign the blame.** Working backward from the error, the algorithm computes, for every single weight, how much that weight contributed to the mistake — and therefore which direction to nudge it. This is \"feeling the slope,\" done for millions of weights at once.",
            '**Nudge every weight a tiny amount** in its blame-reducing direction. Tiny is deliberate: a huge step could overshoot the valley entirely, like leaping downhill in fog.',
            '**Repeat** with the next example, millions of times. No single step accomplishes much — learning is the accumulation of millions of tiny corrections.',
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Backpropagation, in one paragraph',
          text: "A network can have millions of weights, so \"which way should each one move?\" is a monster question. **Backpropagation** answers it efficiently by working backward from the error, layer by layer, computing each weight's share of the blame. The machinery is calculus, but the idea is blame assignment: every weight learns which way it personally pushed the network toward the wrong answer.",
        },
        {
          type: 'text',
          text: "So \"learning,\" for a neural network, is nothing mystical: it's millions of weights, each adjusted slightly, over and over, until predictions match labels. The network doesn't store the training photos — after training, all that remains is the tuned weights. When training goes well, those weights encode general-purpose detectors (edges, shapes, patterns) that work on images the network has never seen.",
        },
        {
          type: 'video',
          videoId: 'aircAruvnKk',
          title: 'But what is a neural network? — 3Blue1Brown',
          duration: '19 min',
          note: 'Minutes 0–8 are the core: watch how the digit-recognition network is structured, layer by layer. The rest dives deeper into the math — great if you\'re hooked, optional if you\'re not.',
        },
        {
          type: 'checkpoint',
          question: 'In the foggy-hill analogy for gradient descent, what does your altitude represent?',
          options: [
            'The loss — how wrong the network currently is',
            'The number of layers stacked inside the network',
            'The number of training examples seen so far',
            'The output value the activation function produces',
          ],
          correct: 0,
          explanation: 'Altitude maps to loss: walking downhill means changing weights so the loss falls. Your *position* is the current weight settings — the number of layers stays fixed during this walk, so it can\'t be the thing rising and falling as you step.',
        },
        {
          type: 'tryIt',
          title: 'Break it, then fix it: TensorFlow Playground',
          intro: "TensorFlow Playground is a real neural network training live in your browser — you can watch the loss fall (or refuse to).",
          url: 'https://playground.tensorflow.org/',
          urlLabel: 'Open TensorFlow Playground',
          steps: [
            'Open the Playground and choose the **spiral** dataset — the swirl-shaped thumbnail, bottom-right of the four in the DATA column. It\'s the hardest of the four.',
            'Set the network to **1 hidden layer** with 2–3 neurons (use the + and − buttons). Press play and watch the **Test loss** number — it should stall high. One thin layer can\'t bend a decision boundary around a spiral.',
            'Now add hidden layers and neurons a little at a time, restarting training each time, until the test loss drops below about 0.1. Which helped more: adding neurons to one layer, or adding layers?',
            'Notice the browser URL changing as you edit — the entire network setup is encoded in the link. Experiment freely; you can always undo, and you can send a classmate a broken configuration to diagnose.',
            "Watch the lines between neurons while training runs: their thickness shows the weights changing. You're literally watching gradient descent adjust weights in real time.",
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Go deeper',
          text: 'Ready for chapter 2 of the story? [Gradient descent, how neural networks learn — 3Blue1Brown, ~21 min](https://www.youtube.com/watch?v=IHZwWFHWa-w) shows the downhill walk on a real loss landscape, with the visuals this lesson could only describe.',
        },
        {
          type: 'keyTerms',
          title: 'Vocabulary check',
          terms: [
            { term: 'Loss', definition: "A single number measuring how wrong the network's predictions are. Training exists to drive it down." },
            { term: 'Gradient descent', definition: 'Repeatedly nudging all weights in the direction that reduces loss — walking downhill in fog.' },
            { term: 'Backpropagation', definition: "The algorithm that works backward from the error to compute each weight's share of the blame." },
            { term: 'Training loop', definition: 'Guess → measure loss → assign blame → nudge weights → repeat, across millions of examples.' },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What is loss? A single number scoring how wrong the network's predictions are — training is the project of driving it toward 0.",
            'How does gradient descent work? Like walking downhill in fog: feel the slope, take a tiny step that lowers the loss, repeat millions of times.',
            'What does backpropagation compute? Each weight\'s share of the blame for the error, so every weight knows which way to nudge.',
            'What is "learning," concretely? Millions of weights each adjusted slightly, over and over — no rules typed in, no photos stored.',
          ],
        },
        {
          type: 'text',
          text: 'Next up: point a trained network at a photograph. What does it actually receive? Not a picture — numbers. A lot of numbers.',
        },
      ],
      quiz: {
        questions: [
          {
            question: "What does a network's loss measure?",
            options: [
              'How much of the training data was thrown out as unusable',
              'How much electricity the whole training run consumed',
              "How wrong the network's predictions are, as one score",
              'How many weights the network still has left to adjust',
            ],
            correct: 2,
            explanation: 'Loss scores the gap between predictions and correct labels, averaged into one number — lower is better. The name tempts people toward "lost data" or "lost energy," but it is purely a wrongness score, and it says nothing about how many weights remain untuned.',
          },
          {
            question: 'What actually happens in one step of gradient descent?',
            options: [
              'The network drops the training examples it got wrong',
              'Every single weight shifts a tiny step toward lower loss',
              'A fresh layer of neurons is added to the network',
              'The network files away a copy of the example for later',
            ],
            correct: 1,
            explanation: 'Gradient descent changes weights — nothing else. It never edits the dataset or the architecture, and the "files away a copy" option is the memorization misconception: a network keeps tuned weights, not a photo album of its training data.',
          },
          {
            question: 'Which question does backpropagation answer?',
            options: [
              '"How much did each weight contribute to the error?"',
              '"Which training example should the network see next?"',
              '"How many layers and neurons should this network have?"',
              '"Is the accuracy now good enough to stop training?"',
            ],
            correct: 0,
            explanation: "Backpropagation is blame assignment: working backward from the error, it computes each weight's share of the mistake and therefore a nudge direction for it. Choosing data order, architecture, and stopping rules are all decisions made outside the network's learning math, by engineers.",
          },
          {
            question: 'On TensorFlow Playground, your training loss reaches nearly 0 but your test loss stays high. Using Unit 2, what is the best diagnosis?',
            options: [
              'The learning steps are too small for it to learn anything',
              'The test data must be broken and can safely be ignored',
              'The network needs a higher loss before it can learn',
              'The network is overfitting the training points',
            ],
            correct: 3,
            explanation: "Near-zero training loss plus high test loss is the classic overfitting signature from Unit 2's training-and-testing lesson: the network fit its training points too specifically and cannot generalize. If the steps were too small to learn, the *training* loss would be high too — instead, it learned the training data all too well.",
          },
          {
            question: "A hand-written-rules spam filter (Unit 1 style) and a neural-network spam filter both miss a new kind of spam. What can the network do that the rule system can't?",
            options: [
              'Refuse to classify any email that looks unfamiliar to it',
              'Ask its programmer to sit down and write a better rule',
              'Improve by retraining on labeled examples of the new spam',
              'Guarantee it will never repeat that mistake again',
            ],
            correct: 2,
            explanation: 'This is the rules-versus-learning divide from Unit 1: a learned system updates its own weights from new labeled data, while a rule system changes only when a human rewrites the rules. No system, learned or not, can guarantee zero future mistakes.',
          },
          {
            question: 'Your Playground network on the spiral dataset has 1 hidden layer, and its test loss has been stuck at 0.5 for a long time. What is the most promising next move?',
            options: [
              'Just keep training for several more hours without changes',
              'Add hidden layers and neurons to bend a richer boundary',
              'Remove the hidden layer entirely to simplify the problem',
              'Shrink the training dataset so there is less to learn',
            ],
            correct: 1,
            explanation: "A one-layer network simply lacks the capacity to bend a boundary around a spiral — more training time won't create capacity that isn't there, and removing the layer takes capacity away. Adding depth lets later layers combine earlier features, which is exactly why deep networks exist.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3
    // ------------------------------------------------------------------
    {
      id: 'computer-vision',
      title: 'Computer Vision: How Machines See',
      duration: '18 min',
      objectives: [
        'You will be able to explain how images become numbers a network can process.',
        'You will be able to trace how CNN layers build from edges to shapes to objects.',
        'You will be able to identify where vision AI works well, where it fails, and why.',
      ],
      blocks: [
        {
          type: 'intro',
          text: "To you, it's obviously a photo of your dog. To a computer, the same photo is a grid of numbers — hundreds of thousands of them, each one just recording how bright or colorful a single dot is. Nowhere in those numbers does it say \"dog.\" Computer vision is the art of finding *dog* in the numbers, and it now works well enough to help read medical scans and steer cars — while still failing in ways that wouldn't fool a toddler. Both halves of that sentence matter.",
        },
        { type: 'heading', text: 'Pictures are numbers' },
        {
          type: 'text',
          text: "A grayscale image is a grid of **pixels**, each holding one number from 0 (black) to 255 (white). A color image holds three numbers per pixel — the amounts of red, green, and blue (**RGB**). Do the math on even a modest 640 × 480 photo: 307,200 pixels, so nearly a million numbers in color. When a network \"looks at\" a photo, that spreadsheet of numbers is its entire input.",
        },
        {
          type: 'text',
          text: 'Numbers in, weighted sums, layer after layer — this should sound familiar from Lesson 1. A **convolutional neural network (CNN)** is a network shaped for images: instead of every neuron watching every pixel, small detectors slide across the whole image, each hunting for one little pattern wherever it appears. Same neuron math, smarter wiring.',
        },
        { type: 'subheading', text: 'Worked example: how a CNN reads a handwritten 7' },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Input: raw pixels.** The network receives a brightness grid — say 28 × 28 = 784 numbers. Why start here? Because that's all a camera can deliver: measurements, not meaning.",
            '**Early layers: edges.** Sliding detectors fire wherever they find their pattern — a dark-to-light boundary, a short diagonal. Edges come first because they\'re the simplest visual clue that exists in a grid of brightness numbers.',
            "**Middle layers: parts.** The next layers take the edge map as input and combine: a horizontal bar near the top, a long right-leaning diagonal below it. Each part detector is built from edge detectors — Lesson 1's \"detectors of detectors\" in action.",
            '**Late layers: whole shapes.** "A horizontal bar joined to a right-leaning diagonal" is basically the anatomy of a 7, so a late-layer neuron fires hard when both parts show up in the right arrangement.',
            "**Output: scores.** The final layer produces a confidence per digit — maybe 96% for \"7\" and crumbs elsewhere. The network never *saw* a seven; it accumulated evidence, layer by layer, from nothing but brightness numbers.",
          ],
        },
        {
          type: 'checkpoint',
          question: 'A CNN is trained to recognize cats. Which detector most likely lives in its *middle* layers?',
          options: [
            'A detector for a tiny dark-to-light edge in the grid',
            'A detector for a pointy, triangular ear shape',
            'A detector for the raw value of pixel number 3,041',
            'A detector for the whole scene "cat sitting on a couch"',
          ],
          correct: 1,
          explanation: 'An ear shape is a mid-complexity part: built from several edges, but still just a building block of the full cat. Tiny edges and raw pixel values belong at the very start of the stack, and whole-scene concepts like "cat on a couch" only emerge at the end.',
        },
        { type: 'heading', text: 'Where vision AI is working' },
        {
          type: 'text',
          text: 'In **medical imaging**, models trained on many labeled scans flag suspicious patterns for a radiologist to review — tireless, consistent, and fast at exactly the kind of narrow pattern-spotting CNNs do best. In **self-driving**, vision systems locate lanes, signs, pedestrians, and other vehicles many times per second. And you already met the everyday versions in Unit 1: face unlock, photo apps that group pictures by person, plant-identification apps.',
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'The AI flags, the human decides',
          text: "In medicine, approved systems are generally deployed as assistants rather than decision-makers: the model never gets tired or distracted, and the human brings context and catches the weird cases. Notice the deliberate design choice — the AI *flags*, the human *decides*. Keep that pattern in mind; it comes back at the end of this lesson.",
        },
        { type: 'heading', text: 'Where it breaks' },
        {
          type: 'text',
          text: "**Adversarial attacks:** researchers have shown that a few small, carefully designed stickers or patterns added to an object can make a vision model misread it — say, mistaking a modified stop sign for a different sign — while a human barely notices anything. The stickers aren't random: they're engineered to strongly excite the wrong learned detectors, hijacking the evidence pipeline you traced above.",
        },
        {
          type: 'text',
          text: "**Unusual angles and rare situations:** a model only knows the patterns in its training data — Unit 2's lesson echoing again. Objects photographed upside-down, oddly lit, partially covered, or in rare contexts (a bicycle mounted on a car's roof rack, say) can produce confident nonsense. And that's the trap: the model reports high confidence either way. Confidence is not understanding.",
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Stakes change everything',
          text: "A photo app mislabeling your cat as a loaf of bread is a meme. A car misreading a stop sign is not. That's why serious deployments never rely on one camera and one model: they layer multiple sensors, fallback rules, and human oversight — engineering around known failure modes instead of pretending they don't exist.",
        },
        {
          type: 'checkpoint',
          question: 'A skin-scan model was trained mostly on images of light skin. A hospital wants to deploy it for all patients tomorrow. What is the best call?',
          options: [
            'Deploy it — a big enough model absorbs any data gap',
            'Deploy it, but report results only for light-skinned patients',
            'Reject computer vision in medicine once and for all',
            'Delay until it is retrained and tested on all skin tones',
          ],
          correct: 3,
          explanation: "This is Unit 2's bias-in-bias-out in a high-stakes setting: a model can only be trusted on the kinds of data it was trained and *tested* on, so the gap has to be closed before deployment. Model size doesn't fill data gaps, and quietly serving only part of the population is an ethics failure, not a fix.",
        },
        {
          type: 'tryIt',
          title: 'Recognition vs. assistance: AutoDraw',
          intro: "AutoDraw uses the same family of drawing-recognition models as Google's Quick, Draw! game — but points the technology at *helping* you instead of scoring you.",
          url: 'https://www.autodraw.com/',
          urlLabel: 'Open AutoDraw',
          steps: [
            'Open [AutoDraw](https://www.autodraw.com/) and pick the **AutoDraw** tool from the left-hand toolbar (the pen with sparkles, not the plain Draw pen). Draw a bicycle in about 20 seconds — badly is fine. Badly is the point.',
            "Watch the guess bar along the top update as you add strokes. That's a vision model scoring your pixel patterns against shapes it learned — live recognition, exactly like the CNN pipeline above.",
            "Click one of its suggestions to swap in a clean, artist-drawn version. That's the *assistance* half: same recognition tech, different product goal.",
            "Now open the [Quick, Draw! dataset explorer](https://quickdraw.withgoogle.com/data) and search for \"bicycle.\" You're browsing millions of crowd-drawn sketches this family of models learned from — you are literally looking at training data.",
            'Reflect: which of your drawings got misread, and what was missing from them? Usually it\'s the strong edges and telltale parts that the training drawings share.',
          ],
        },
        {
          type: 'keyTerms',
          title: 'Vocabulary check',
          terms: [
            { term: 'Pixel', definition: 'One dot of an image, stored as a brightness number (0–255) or three color numbers.' },
            { term: 'RGB', definition: 'The three numbers — red, green, blue — that together encode the color of one pixel.' },
            { term: 'Convolutional neural network (CNN)', definition: 'A network built for images: small sliding detectors find edges, then parts, then objects, layer by layer.' },
            { term: 'Adversarial example', definition: 'An input deliberately modified — sometimes with just stickers or subtle patterns — to make a model misclassify it.' },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            'What does a computer actually see? Numbers — one brightness or color value per pixel, and nothing else.',
            'How does a CNN find objects in the numbers? Layer by layer: edge detectors feed part detectors, which feed object detectors.',
            'Where does vision AI shine? Narrow, well-practiced pattern-spotting — medical scans, lane-keeping, photo search — especially with a human making the final call.',
            'Why do stickers and weird angles break it? The model leans on learned pixel patterns, not understanding — patterns can be hijacked, or simply missing from the training data.',
          ],
        },
        {
          type: 'text',
          text: "Vision networks are big — but they're small next to the language models making headlines. Next lesson: what \"big\" actually means, what it costs, and when big is the wrong choice.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'When a neural network "looks at" a photo, what does it actually receive?',
            options: [
              "A grid of numbers giving each pixel's brightness and its color",
              'A ready-made list of the objects present in the scene',
              'A miniature copy of the image, viewed the way people view it',
              "The photographer's caption, tags, and file details",
            ],
            correct: 0,
            explanation: "The input is pure numbers — pixel values, nothing more. An object list is the *output* the network has to earn layer by layer, and \"viewed the way people view it\" is the anthropomorphism trap: there's no little viewer inside, just arithmetic on a number grid.",
          },
          {
            question: 'A CNN has a mid-layer detector that fires for circular, wheel-like shapes. Which earlier detectors does it most likely build on?',
            options: [
              'Detectors that fire for a whole car in the frame',
              'Confidence scores coming from the output layer',
              'Detectors for the color red anywhere in the image',
              'Detectors for short, curved edge segments',
            ],
            correct: 3,
            explanation: 'A circle is a ring of short curved edges, so a wheel detector naturally builds on curve detectors from earlier layers. Whole-car detectors and output scores come *later* in the stack — features flow from simple to complex, never backwards — and wheels come in every color, so a red detector would be useless.',
          },
          {
            question: 'A self-driving system detects bicycles on the road perfectly but fails on a bicycle mounted on a car\'s roof rack. What is the most likely reason?',
            options: [
              'A CNN cannot detect more than one object in a frame',
              'That context was rare or missing from training data',
              'The camera must have glitched at that exact moment',
              'A metal roof rack blocks the patterns a CNN relies on',
            ],
            correct: 1,
            explanation: "The model learned \"bicycle\" as it appeared in training — mostly on roads, at road height — so a roof-mounted bike is out-of-distribution: same object, unfamiliar context, learned patterns that don't cover it. CNNs detect many objects at once routinely, so that distractor blames the wrong limitation.",
          },
          {
            question: 'Why can a small sticker fool a vision model into misreading a sign when humans barely notice it?',
            options: [
              'The sticker physically blocks most of the camera lens',
              'Stickers legally change what a traffic sign means',
              'The pattern is built to excite the wrong learned detectors',
              'The model was never trained on photos containing any signs',
            ],
            correct: 2,
            explanation: 'Adversarial patterns exploit exactly how CNNs work: they inject pixel evidence that excites the wrong feature detectors, because the model leans on pixel patterns rather than understanding. Humans read the sign\'s meaning from shape and context, so a few small stickers can\'t hijack us the same way — and they cover far too little of the sign for blocking to be the mechanism.',
          },
          {
            question: "A student's leaf-disease classifier scores 99% on the photos it was trained on. Thinking back to Unit 2, what should they check before trusting it in a real garden?",
            options: [
              'Its accuracy on new photos it has never seen, taken outdoors',
              'Whether it can also classify garden insects and animals',
              'Whether it runs fast enough on an ordinary phone',
              'Whether its training loss ever reached exactly zero',
            ],
            correct: 0,
            explanation: 'Training accuracy proves little — the model may have memorized its examples, which is precisely why Unit 2 insists on a train/test split. Only performance on unseen, realistic photos predicts field results; a training loss of zero would actually be a warning sign, not a reassurance.',
          },
          {
            question: 'A hospital is deciding how to use a scan-reading model that is accurate overall but occasionally fails in odd ways. Which deployment is wisest?',
            options: [
              'Let the model diagnose and order treatment with no human review',
              'Point the model only at the rarest, strangest cases',
              'Shelve the model until it is perfectly accurate',
              'Have it flag suspicious scans for a radiologist to judge',
            ],
            correct: 3,
            explanation: '"AI flags, human decides" harnesses the model\'s tireless pattern-spotting while a human absorbs its odd failures. Full automation ignores known failure modes; saving it for only the strangest cases aims it exactly where models are weakest (rare data); and demanding perfection discards real value — no diagnostic, human or machine, is perfect.',
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 4
    // ------------------------------------------------------------------
    {
      id: 'the-scale-of-modern-ai',
      title: 'The Scale of Modern AI',
      duration: '18 min',
      objectives: [
        'You will be able to define parameters and use parameter counts to compare model sizes.',
        'You will be able to describe what training frontier-scale models costs in compute and energy.',
        'You will be able to argue when a smaller model is the better engineering choice.',
      ],
      blocks: [
        {
          type: 'intro',
          text: 'Every weight and bias in a network is one **parameter** — one adjustable number. GPT-2, a language model that made headlines in 2019, had about 1.5 billion of them. Its successor GPT-3 arrived with about 175 billion — roughly a hundred times more. The models behind today\'s chatbots are believed to be larger still, though companies have mostly stopped publishing exact counts. This lesson is about what those numbers mean, what scale costs, and why the biggest model is often the wrong tool.',
        },
        { type: 'heading', text: 'Parameters: the knobs that got learned' },
        {
          type: 'text',
          text: "A **parameter** is any number a model learned during training: every weight and every bias from Lesson 1, all set by the gradient-descent loop from Lesson 2. More parameters means more adjustable knobs, which means more capacity to represent complex patterns. A few thousand parameters can capture a decent spam filter; it takes billions to capture the structure of human language well enough to hold a conversation.",
        },
        {
          type: 'text',
          text: "You can watch the growth yourself on [Our World in Data's parameter-count chart](https://ourworldindata.org/grapher/parameters-in-notable-artificial-intelligence-systems), built on data from Epoch AI. Check the y-axis before you conclude anything: it's a **log scale**, where each gridline is 10 times the one below. On a log scale, a straight rising line doesn't mean steady addition — it means repeated *multiplication*, year after year.",
        },
        {
          type: 'checkpoint',
          question: 'GPT-2 has about 1.5 billion parameters; GPT-3 has about 175 billion. Roughly how big was the jump?',
          options: [
            'About 10×',
            'About 100×',
            'About 1,000×',
            'About 175×',
          ],
          correct: 1,
          explanation: '175 ÷ 1.5 ≈ 117, so about 100×. The tempting "175×" comes from reading the big number alone and skipping the division — a good reminder to compute multipliers instead of eyeballing headlines.',
        },
        { type: 'heading', text: 'What scale costs' },
        {
          type: 'text',
          text: "Parameters don't set themselves. Training a frontier-scale model means running the guess–measure–nudge loop from Lesson 2 across an enormous slice of the internet's text, on thousands of specialized chips (GPUs) working together for weeks or months. The hardware, engineering, and electricity bills are so large that only a handful of organizations in the world can afford a frontier training run — which is itself a fact worth knowing about who shapes this technology.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The energy line item',
          text: "Energy is part of the price of scale: a big training run consumes a lot of electricity, and then *running* the model for millions of users every day keeps the meter spinning. That's one reason \"smaller but efficient\" has become a serious research direction, not a consolation prize.",
        },
        {
          type: 'links',
          title: 'Explore the scale yourself',
          items: [
            {
              label: 'AI parameter counts over time — Our World in Data',
              url: 'https://ourworldindata.org/grapher/parameters-in-notable-artificial-intelligence-systems',
              description: 'Interactive log-scale chart of model sizes across decades, with data from Epoch AI. Find GPT-2 and GPT-3 and compute the multiplier yourself.',
            },
            {
              label: 'Epoch AI: models explorer',
              url: 'https://epoch.ai/data/ai-models',
              description: 'A live database of 3,500+ models going back to 1950 — filter and plot by parameters, training compute, and release date.',
            },
            {
              label: 'LLM visualization in 3D — Brendan Bycroft',
              url: 'https://bbycroft.net/llm',
              description: "Fly through a working language model's insides, then zoom out from a nano-model to GPT-3 scale and *feel* the size difference. Best on a laptop or projector.",
            },
          ],
        },
        { type: 'heading', text: 'When small is smart' },
        {
          type: 'text',
          text: "So why would anyone choose a small model? Plenty of reasons: it can run directly on your phone, which means it works offline and your data never leaves the device; it answers instantly; it costs close to nothing to run; it sips energy instead of gulping it; and it's far easier to test and audit. If the job is narrow — waking up when you say a key phrase, filtering spam, spotting one crop disease — a small tailored model is simply the right engineering call. Unit 1's oldest lesson applies: match the tool to the problem.",
        },
        { type: 'subheading', text: 'Worked example: choosing a model size' },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Define the task precisely.** "Detect whether a photo shows a cracked phone screen" is narrow; "answer any customer question about anything" is open-ended. This comes first because task breadth is the biggest driver of the size you need.',
            "**Ask where it must run.** If the answer is \"on the device, possibly offline, keeping data private,\" giant models are out immediately — they only live in data centers.",
            "**Count your data.** A narrow task with a few thousand labeled examples suits a small trained model — your Teachable Machine classifier in Unit 2 was exactly this. Frontier models exist because open-ended language requires internet-scale training text.",
            '**Pick the smallest model that meets your accuracy target.** Size beyond what the task needs buys you extra cost, delay, and energy use — not better answers.',
          ],
        },
        {
          type: 'table',
          headers: ['', 'Tiny model', 'Frontier model'],
          rows: [
            ['Parameters', 'Thousands to a few million', 'Hundreds of billions or more'],
            ['Training data', 'Hundreds to thousands of labeled examples', 'A huge slice of the public internet'],
            ['Hardware and cost', 'A laptop; minutes to hours; effectively free', 'Thousands of specialized chips for weeks or months; enormous cost'],
            ['Where it runs', 'On your phone or device, even offline', 'In data centers, reached over the internet'],
            ['Best at', 'One narrow task: spam filtering, wake-word detection, plant ID', 'Open-ended tasks: conversation, translation, coding help'],
          ],
        },
        {
          type: 'checkpoint',
          question: 'A startup wants farmers to detect a crop disease from photos, in fields with no internet service. Which approach fits best?',
          options: [
            'A small vision model that runs on the phone itself',
            'A frontier chatbot reached over the mobile internet',
            'The model with the most parameters, for top accuracy',
            'Hand-written rules for every diseased-leaf pattern',
          ],
          correct: 0,
          explanation: 'No connectivity rules out anything cloud-based, and the task is narrow with collectible labeled photos — the sweet spot for a small on-device model trained on labeled crop images. Hand-written rules fail for the reason you learned in Unit 1: nobody can enumerate the visual variety of diseased leaves.',
        },
        {
          type: 'interactive',
          component: 'FlashcardDeck',
          caption: 'Flip through the eight terms that unlock everything in this unit — say each answer out loud before you flip.',
          props: {
            title: 'Unit 3 vocabulary',
            cards: [
              { front: 'Weight', back: "A learned number that scales one input — how much that input matters to a neuron's decision." },
              { front: 'Bias (in a neuron)', back: 'A learned number added to the weighted sum; it sets how much evidence the neuron needs before it fires. Not the same as data bias.' },
              { front: 'Activation function', back: "The rule that turns a neuron's raw total into its output — deciding whether, and how strongly, it fires." },
              { front: 'Loss', back: "A single number measuring how wrong the network's predictions are. Training exists to drive it down." },
              { front: 'Gradient descent', back: 'Adjusting all weights in small steps in the direction that reduces loss — like walking downhill in fog, feeling the slope underfoot.' },
              { front: 'Backpropagation', back: "The algorithm that works backward from the error to compute each weight's share of the blame, so each weight knows which way to nudge." },
              { front: 'Convolutional neural network (CNN)', back: 'A network built for images: sliding detectors find edges, then parts, then whole objects — layer by layer.' },
              { front: 'Parameter', back: 'Any number a model learned during training — every weight and bias. Parameter count is the standard measure of model size.' },
            ],
          },
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What's a parameter? Any learned number in a model — its weights and biases. Parameter count is how model size is measured.",
            'How fast did models grow? GPT-2 to GPT-3 was roughly a 100× jump — growth by multiplication, which log-scale charts flatten into straight lines.',
            'What does frontier scale cost? Thousands of specialized chips running for months, enormous budgets, and real energy use — which is why so few organizations train frontier models.',
            'When is small the right call? Narrow tasks, on-device privacy, offline use, and tight budgets — pick the smallest model that meets the target.',
          ],
        },
        {
          type: 'text',
          text: 'You now know what those billions of parameters *are*. Unit 4 asks the fun question: how does a mountain of learned weights figure out how to finish your sentences?',
        },
      ],
      quiz: {
        questions: [
          {
            question: 'In model-speak, what is a "parameter"?',
            options: [
              'A rule that a programmer typed in by hand',
              'One of the training photos stored inside the model',
              'The count of layers stacked inside the network',
              'A number the model learned during training',
            ],
            correct: 3,
            explanation: 'Parameters are the learned numbers themselves — every weight and bias, all set by gradient descent. "Rules typed by hand" is the Unit 1 rules-based misconception, and models don\'t store their training photos; they keep only the tuned numbers.',
          },
          {
            question: 'On a chart with a log-scale y-axis, model sizes over time form a roughly straight rising line. What does that tell you?',
            options: [
              'Sizes grow by roughly the same fixed *amount* every year',
              'Sizes are being *multiplied* by a similar factor each year',
              'Sizes have essentially stopped growing since then',
              'The chart axis must have been drawn incorrectly',
            ],
            correct: 1,
            explanation: 'On a log scale each gridline is 10× the previous one, so a straight line means repeated multiplication — exponential growth. "Same amount each year" describes a straight line on an ordinary linear chart, which is the classic log-scale misreading.',
          },
          {
            question: 'Which job most plausibly *requires* a frontier-scale model rather than a small one?',
            options: [
              'Spotting the wake phrase "hey assistant" on a speaker',
              'Classifying leaf photos as healthy or diseased',
              'Answering open-ended questions on any topic at all',
              'Sorting incoming email into spam and not-spam',
            ],
            correct: 2,
            explanation: 'Open-ended language is the one task on this list with essentially unlimited breadth — that breadth is what billions of parameters buy. The other three are narrow, well-bounded tasks that small models have handled for years, cheaply and on-device.',
          },
          {
            question: 'A hospital wants AI scan analysis, but patient images legally cannot leave the building and results are needed in seconds. What should the engineering team favor?',
            options: [
              "A smaller specialized model on the hospital's own servers",
              'The largest cloud model, since bigger is always better',
              'No AI at all, since only frontier models can handle medicine',
              'A frontier model downloaded onto one hospital desktop',
            ],
            correct: 0,
            explanation: 'Privacy and speed both point to a local specialized model — scan reading is a narrow task, exactly where small models excel. Frontier models can\'t leave the data center (they don\'t fit on a desktop), and "bigger is always better" ignores that narrow tasks don\'t need frontier breadth.',
          },
          {
            question: "A team scales its hiring model from 1 million to 1 billion parameters but keeps training it on the same historically skewed data from Unit 2's lesson. What should they expect?",
            options: [
              'The extra parameters will cancel out the bias in the data',
              'The model may fit the skewed patterns even more faithfully',
              'Bias only affects small models, so it will disappear',
              'The model will refuse to train on such skewed data',
            ],
            correct: 1,
            explanation: "Bias in, bias out — at any size. A bigger model has more capacity to capture whatever patterns the data contains, including the skewed ones, so scaling can even sharpen the problem rather than cancel it. Nothing in gradient descent audits data for fairness; that's a human job.",
          },
          {
            question: "Unit 1's history lesson covered AI booms and winters. Which trio of ingredients powered the modern deep-learning boom?",
            options: [
              'Faster typing, better keyboards, and more coders',
              'Robots, satellites, and touchscreen smartphones',
              'More compute, more data, and better algorithms',
              'Computers finally becoming genuinely conscious',
            ],
            correct: 2,
            explanation: 'Compute, data, and algorithms are the recurring boom ingredients from Unit 1 — and this unit showed all three at work: GPUs supply the compute, internet-scale datasets supply the data, and techniques like backpropagation are the algorithms. Consciousness was never part of the story.',
          },
        ],
      },
    },
  ],
};

export default unit;
