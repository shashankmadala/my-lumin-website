// Unit 5 — AI, Ethics, and Society (student course "AI Foundations")
// Documented bias cases, the data economy, honest AI use in school, and who sets the rules.

const unit = {
  id: 'unit-5',
  title: 'AI, Ethics, and Society',
  description: 'Real documented cases of AI gone wrong, what your apps know about you, how to use AI honestly in school, and who actually decides the rules.',
  icon: 'Scale',
  lessons: [
    // ------------------------------------------------------------------
    // Lesson 1 — Algorithmic Bias in the Wild
    // ------------------------------------------------------------------
    {
      id: 'algorithmic-bias-in-the-wild',
      title: 'Algorithmic Bias in the Wild',
      duration: '20 min',
      objectives: [
        'Describe three documented cases where AI systems produced biased outcomes',
        'Trace an unfair AI outcome back to a specific data or design cause',
        "Explain why 'fairness' has competing definitions that can't all be satisfied at once",
      ],
      blocks: [
        {
          type: 'intro',
          text: "MIT researcher Joy Buolamwini was building a face-tracking project when she hit a wall: the software followed her lighter-skinned friends' faces easily but wouldn't register hers. Then she held up a plain white mask — and the software instantly 'saw' her. No line of code anywhere said 'ignore darker skin.' Nobody wrote that rule. Yet the failure was real and repeatable. How does software discriminate when no one told it to? That's the mystery this lesson unpacks, through three documented cases — and every one of them traces back to a cause you can name.",
        },
        {
          type: 'text',
          text: "Here's the tool you'll use all lesson: whenever an AI system treats groups differently, don't ask 'is the AI racist or sexist?' Ask **'what did it learn from, and what was it built to do?'** In Unit 2 you saw that a model is a pattern-finder trained on data. If the data or the goal is skewed, the pattern will be too — no bad intentions required.",
        },
        { type: 'heading', text: "Case 1: Face recognition that doesn't see everyone" },
        {
          type: 'text',
          text: "Buolamwini turned her mask moment into research. Her **Gender Shades** project tested commercial face-analysis systems from major tech companies and found they made far more errors on darker-skinned women's faces than on lighter-skinned men's — the same product, wildly different reliability depending on whose face was in front of it. The cause? The benchmark datasets these systems were measured against turned out to be overwhelmingly lighter-skinned — a strong sign the training data was skewed the same way. The models had simply seen far fewer examples of everyone else.",
        },
        {
          type: 'callout',
          variant: 'realworld',
          title: 'Users as bias detectors',
          text: "Bias doesn't only get caught in labs. When Twitter automatically cropped tall photos, users started posting images containing two faces — one Black, one white — and noticed the crop kept centering the white face. The public experiment went viral, and in 2021 the company dropped the automatic crop. Ordinary users running informal tests exposed a design flaw the company hadn't caught.",
        },
        {
          type: 'video',
          videoId: 'Ok5sKLXqynQ',
          title: 'Are We Automating Racism? (Vox)',
          duration: '23 min',
          note: 'Optional deeper dive — includes the Twitter image-crop experiment and interviews with researchers. Worth watching if this case grabbed you.',
        },
        {
          type: 'checkpoint',
          question: 'A face-recognition system has much higher error rates for one demographic group. Based on this lesson, what is the most likely root cause?',
          options: [
            "That group's faces are inherently harder for computers to process",
            "An engineer secretly programmed the system to discriminate",
            'The training data contained far fewer examples of that group',
            'The cameras used to capture the photos were defective',
          ],
          correct: 2,
          explanation: "Models learn from examples, so underrepresented groups get less reliable predictions — that's exactly what Gender Shades documented. The first option is a common misconception: the problem is what the model was shown, not anything about the faces themselves.",
        },
        { type: 'heading', text: 'Case 2: The resume screener that learned the past' },
        {
          type: 'text',
          text: "A major tech company built an experimental AI tool to rank job applicants. It was trained on roughly a decade of the company's own past resumes — and because the tech industry had hired mostly men over that decade, the model learned that pattern as if it were a signal of quality. It started downgrading resumes that hinted the applicant was a woman, like ones mentioning a women's chess club or a women's college. Engineers tried to strip out those signals, couldn't guarantee the model wasn't finding new ones, and the tool was scrapped.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: tracing the harm to its cause',
          text: "Let's run the diagnosis step by step, because this chain shows up in almost every bias case:",
        },
        {
          type: 'list',
          ordered: true,
          items: [
            "**Goal chosen:** 'predict which applicants resemble our past successful hires.' Sounds neutral — but notice it quietly assumes past hiring was fair.",
            "**Data collected:** ten years of real resumes and hiring decisions. Historical data doesn't record what *should* have happened, only what did.",
            "**Pattern found:** past hires skewed heavily male, so 'resembles past hires' partly means 'resembles a man's resume.' The model can't tell a fair pattern from an unfair one — it just finds patterns.",
            "**Proxy learned:** even without a 'gender' column, words like 'women's' correlated with gender, so the model used them as stand-ins. This is why deleting the obvious column doesn't fix the problem.",
            "**Harm produced:** qualified women ranked lower — the past's bias, automated and sped up.",
          ],
        },
        { type: 'heading', text: 'Case 3: Lending and the proxy problem' },
        {
          type: 'text',
          text: "Loan-approval models usually never see an applicant's race — using it directly is illegal in many places. But they do see things like zip code, and in countries with a history of segregated housing, zip code correlates strongly with race. A variable that secretly carries information about a protected trait is called a **proxy variable**. Through proxies, a 'race-blind' model can still reproduce decades-old discrimination in who gets credit.",
        },
        {
          type: 'text',
          text: "Worse, lending decisions can create a **feedback loop**: if a community is denied loans, people there build less credit history, which makes future data show them as 'riskier,' which justifies more denials. The model's own decisions manufacture the evidence that seems to prove it right.",
        },
        {
          type: 'checkpoint',
          question: 'A loan model was never given race as an input, yet its approval rates differ sharply by race. What best explains this?',
          options: [
            'Someone must have secretly re-added race to the training data',
            'The model learned proxies like zip code that correlate with race',
            'It is a coincidence that will disappear once more data arrives',
            'The approval gap simply proves the applicants differed in creditworthiness',
          ],
          correct: 1,
          explanation: "Proxies let bias in through the side door: the model finds variables that carry the same information as the one you removed. 'More data will fix it' is a tempting distractor — but more data drawn from the same biased history deepens the pattern instead of erasing it.",
        },
        { type: 'heading', text: "What does 'fair' even mean?" },
        {
          type: 'text',
          text: "Here's the uncomfortable part: even people who agree bias is bad disagree about what fairness *is*. And these aren't just word games — the definitions mathematically conflict. When two groups have different base rates in the historical data, a model generally cannot satisfy all fairness definitions at once. Improving one can worsen another.",
        },
        {
          type: 'table',
          headers: ['Fairness definition', 'What it demands', 'The trade-off'],
          rows: [
            ['Equal treatment', 'Apply identical rules and thresholds to everyone', "Identical rules on unequal historical data can still produce unequal outcomes"],
            ['Equal error rates', 'The model should be wrong equally often for every group', 'May require different thresholds per group — which violates equal treatment'],
            ['Equal outcomes', 'Approval or success rates should match across groups', 'Can conflict with both of the above when base rates in the data differ'],
          ],
        },
        {
          type: 'text',
          text: "So choosing a fairness definition isn't a math problem — it's a **values decision** that math can inform but can't make for you. That's why 'we'll just make the algorithm fair' is never the whole answer, and why the question of *who decides* matters so much (we'll get there in Lesson 4).",
        },
        {
          type: 'keyTerms',
          title: 'Key terms',
          terms: [
            { term: 'Algorithmic bias', definition: 'Systematic unfairness in a model’s outputs, usually inherited from its data or design goal' },
            { term: 'Proxy variable', definition: 'An input that secretly carries information about a protected trait, like zip code standing in for race' },
            { term: 'Feedback loop', definition: "A cycle where a model's decisions generate the future data that appears to confirm those decisions" },
            { term: 'Fairness metric', definition: 'A precise, measurable definition of fairness — several exist, and they can mathematically conflict' },
          ],
        },
        {
          type: 'text',
          text: "Now it's your turn to sit in the decision-maker's chair. In each scenario below, you're the engineer or product manager. There's rarely a perfect option — that's the point.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Three bias dilemmas — you make the call.',
          props: {
            title: "You're the Engineer",
            scenarios: [
              {
                situation: "Your team's face-unlock feature launches Friday. Overall accuracy is excellent — but your final tests show it fails far more often for users with darker skin. Marketing says the overall number is great and the deadline is fixed. What do you do?",
                options: [
                  {
                    text: 'Ship it — the overall accuracy is excellent, and most users will be fine',
                    quality: 'poor',
                    feedback: "This is exactly how the Gender Shades failures reached the market: 'overall accuracy' hid who the errors landed on. A product that reliably fails one group isn't a finished product — and users will discover it publicly, like the Twitter crop case.",
                  },
                  {
                    text: 'Delay launch, collect representative training data, and require per-group accuracy testing before shipping',
                    quality: 'best',
                    feedback: "Right call, and notice why: you fixed the cause (unrepresentative data) and changed the process (per-group testing) so the bug can't silently return in v2. Delays are costly — but shipping a product that fails one demographic costs more, in harm and in trust.",
                  },
                  {
                    text: "Ship on time, but publish the per-group error rates and commit to a fix in the next update",
                    quality: 'ok',
                    feedback: "Transparency is genuinely better than hiding the problem, and honest limits-reporting is real practice. But be clear-eyed: you're still knowingly shipping a product that works worse for some users, and 'we'll patch it later' promises have a way of slipping.",
                  },
                ],
              },
              {
                situation: "Your fraud-detection model flags suspicious accounts. It makes two kinds of errors: false positives lock innocent users out of their accounts, and false negatives let real fraud through. Leadership wants fraud minimized at all costs. Then you notice the false positives — the innocent people getting locked out — are heavily concentrated among users from a few low-income neighborhoods. What matters most here?",
                options: [
                  {
                    text: "Keep optimizing total accuracy — one overall number keeps things objective",
                    quality: 'poor',
                    feedback: "One overall number is exactly what hides the problem. Two models can have identical total accuracy while one dumps all its mistakes on a single community. 'Objective' metrics that ignore error distribution aren't neutral — they just make the unfairness invisible.",
                  },
                  {
                    text: 'Break the error rates down by group, and treat "who bears the cost of our mistakes" as a design requirement with its own target',
                    quality: 'best',
                    feedback: "This is the professional move: disaggregate the errors, then decide — openly — what trade-off you're accepting. Every threshold choice distributes mistakes onto someone; doing it deliberately and measurably beats doing it accidentally.",
                  },
                  {
                    text: 'Loosen the model overall so fewer people get locked out, accepting more fraud',
                    quality: 'ok',
                    feedback: "You noticed real people bear the cost of false positives — good instinct. But loosening everything treats the symptom: the errors may still concentrate on the same neighborhoods, just less often, and you gave up fraud protection everywhere to get it. Disaggregate first, then tune.",
                  },
                ],
              },
              {
                situation: "Your school-district client uses your 'dropout risk' model to flag students for intervention. Flagged students get extra check-ins — and every check-in gets logged in their file. A year later, the client is thrilled: flagged students have more documented incidents than anyone else, so the model looks incredibly accurate. Something nags at you. What is it?",
                options: [
                  {
                    text: "Nothing — the data confirms the model works, and the client is happy",
                    quality: 'poor',
                    feedback: "Look again at where the 'confirming' data came from: flagged students got more scrutiny, and more scrutiny produces more documentation. The model may be grading its own influence, not predicting reality. This is the lending feedback loop wearing a school uniform.",
                  },
                  {
                    text: "Flag more students so everyone gets the extra support equally",
                    quality: 'ok',
                    feedback: "Equalizing scrutiny does weaken the loop, and universal support isn't a bad idea on its own merits. But it dodges the real question — you still don't know whether the model ever predicted anything, and the district is still making decisions based on scores you can't validate.",
                  },
                  {
                    text: 'Audit whether the intervention itself is generating the data — for example, compare documentation rates for similar students who were and weren’t flagged',
                    quality: 'best',
                    feedback: "Exactly — you spotted a feedback loop. The model's decisions (flagging) changed the data-collection process (check-ins and logging), which manufactured evidence of its own accuracy. Until you break that circle, 'the data proves it works' proves nothing.",
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'checkpoint',
          question: "A city's model predicts crime 'hotspots' and sends extra patrols there. More patrols lead to more recorded incidents in those areas, which raises the model's hotspot scores further. What is this an example of?",
          options: [
            'A feedback loop — the patrols generate the confirming data',
            'Proof the model correctly identified where crime actually happens',
            'A proxy variable quietly standing in for a protected trait',
            'Overfitting, because the model memorized its training set',
          ],
          correct: 0,
          explanation: "The extra recorded incidents come partly from extra watching, so the model is feeding itself — the same loop you saw in lending and the dropout-risk scenario. It's tempting to read rising scores as proof the model works, but data produced *by* a decision can't neutrally validate that decision.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "How does AI discriminate with no racist rule in the code? By learning patterns from skewed data or skewed goals — Gender Shades traced face-recognition failures straight to unrepresentative training sets.",
            "Why doesn't removing the sensitive column fix bias? Because proxy variables like zip code carry the same information in through the side door.",
            "What's a feedback loop? A model whose decisions create the future data that seems to prove it right — lending denials and hotspot policing both do this.",
            "Why can't we just 'make it fair'? Because fairness has multiple precise definitions that mathematically conflict — choosing one is a values decision, not a calculation.",
          ],
        },
        {
          type: 'text',
          text: "Biased models are trained on data — and the data economy that collects it is the other half of the story. Next: what your apps actually know about you, and what they merely guess.",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'What did the Gender Shades project document?',
            options: [
              'That face-analysis systems refuse to process photos of women entirely',
              'That every commercial system tested performed equally on all faces',
              'That accuracy dropped sharply for darker-skinned women’s faces',
              'That face recognition can never be made accurate for anyone',
            ],
            correct: 2,
            explanation: "Gender Shades measured error-rate *disparities*: the same commercial products misclassified darker-skinned women at rates up to roughly 35%, while erring under 1% of the time on lighter-skinned men. The 'never accurate for anyone' option overreaches — the finding was unequal accuracy traced to unrepresentative benchmark data, not impossible accuracy.",
          },
          {
            question: "Your team's new voice assistant performs noticeably worse for users with certain accents. What's the best first step?",
            options: [
              'Measure error rates per accent group and audit the training data',
              'Tell affected users to speak more clearly, since overall accuracy is high',
              'Retrain the same model on the same data with far more computing power',
              'Strip accent-related features from the audio so the model is accent-blind',
            ],
            correct: 0,
            explanation: "Diagnose before treating: disaggregating errors and inspecting representation targets the most common cause, which is too few examples from those groups in the training data. Retraining on the same skewed data with more compute reproduces the same skew, and stripping accent features would discard the very audio detail the model needs to recognize words.",
          },
          {
            question: 'Why did the resume-screening tool end up biased against women?',
            options: [
              'Its engineers deliberately programmed a preference for male applicants',
              'Someone tampered with the rankings after the model produced them',
              'Women’s resumes in the data genuinely showed weaker qualifications',
              'It learned from a decade of past hiring decisions that skewed male',
            ],
            correct: 3,
            explanation: "The model treated 'resembles our past hires' as 'good candidate,' and a decade of male-dominated hiring turned that into a gender signal — historical data records what happened, not what was fair. The first option is the key misconception this unit fights: bias usually enters through data and goals, not through anyone's intent.",
          },
          {
            question: 'In a lending model, zip code can function as a proxy variable. What does that mean?',
            options: [
              'Zip code is random noise that the model eventually learns to ignore',
              'Zip code carries race information the model was never given directly',
              'Zip code is the single most predictive feature of loan repayment',
              'The model uses zip code to verify that applicants live where they say',
            ],
            correct: 1,
            explanation: "A proxy carries a protected trait's information under another name — decades of housing segregation make zip code correlate with race, so a 'race-blind' model isn't blind at all. That's why deleting the sensitive column alone doesn't produce fairness: the model simply routes the same information through whatever variable is left.",
          },
          {
            question: "Two groups have different approval base rates in historical lending data. Your team wants the model to satisfy equal treatment, equal error rates, AND equal outcomes simultaneously. What should you tell them?",
            options: [
              'A large enough neural network can be trained to satisfy all three',
              'Fairness definitions never conflict; the team needs better code',
              'These definitions conflict here, so the team must choose openly',
              'The model should ship with no fairness metric at all, to stay neutral',
            ],
            correct: 2,
            explanation: "When base rates differ between groups, the math forces trade-offs — you cannot maximize equal treatment, equal error rates, and equal outcomes at once, so someone must decide which matters most and own that values choice. 'Ship with no metric to stay neutral' is the trap answer: skipping the decision makes it invisible, not neutral.",
          },
          {
            question: "Spiral (Unit 2): You train a Teachable Machine classifier with 50 photos of golden retrievers and only 3 photos of black labs. It then misclassifies black labs constantly. Which real-world case does this most resemble, and why?",
            options: [
              'The lending feedback loop, because the model changed its own future data',
              'The Twitter crop case, because ordinary users discovered the flaw first',
              'The resume screener, because someone deliberately sabotaged the model',
              'Gender Shades, because underrepresented groups got higher error rates',
            ],
            correct: 3,
            explanation: "Same mechanism at different scales: groups with few training examples get unreliable predictions, whether it's your 3 lab photos or underrepresented faces in commercial datasets. It's not a feedback loop (your classifier doesn't influence future photos), and no sabotage is needed — skewed data does it alone.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 2 — Privacy and the Data Economy
    // ------------------------------------------------------------------
    {
      id: 'privacy-and-the-data-economy',
      title: 'Privacy and the Data Economy',
      duration: '18 min',
      objectives: [
        'Distinguish data that apps collect from data they infer about you',
        'Explain what recommendation systems actually optimize for, and how that shapes your feed',
        'Take at least one concrete step to shrink your data footprint today',
      ],
      blocks: [
        {
          type: 'intro',
          text: "You never told any app your bedtime. But your phone knows it — from when your screen goes dark, when you stop typing, when the first notification gets read in the morning. You paused two extra seconds on a video last night without tapping anything; the app logged the pause, and today your feed has three more videos just like it. None of this is a leak or a hack. It's the normal business model of free apps — and once you can see it, you can start making deliberate choices about it.",
        },
        { type: 'heading', text: 'Collected vs. inferred: the two layers of what apps know' },
        {
          type: 'text',
          text: "**Collected data** is what you hand over or generate directly: posts, taps, searches, watch time, location pings, contacts, even your phone model and battery level. **Inferred data** is what gets *predicted* from all that: your interests, your mood, your income bracket, your politics, whether you're likely a student and at which school. Nobody asked you for those — a model guessed them, using exactly the pattern-finding you studied in Unit 2.",
        },
        {
          type: 'text',
          text: "The inferred layer is the one most people never see. You can scroll your own posts, but you can't easily scroll the profile of guesses built about you — and it's the guesses that decide which ads and videos you're shown. Some inferences are wrong, and those can matter too: get mislabeled as interested in something once, and your feed may keep feeding the error.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: three innocent data points become one sensitive inference',
          text: "Watch how the layers stack. **Step 1 — collect:** your phone pings its location from the same building every weekday, 8 am to 3 pm. Boring data, freely given. **Step 2 — collect more:** your activity goes quiet during those hours and spikes at 3:15. Also boring. **Step 3 — infer:** a model combines them — weekday building + school-hours silence — and concludes 'high school student,' with a decent guess at *which* school. Nobody asked; no single data point said it. **Step 4 — apply:** that label joins an ad profile, and now every advertiser targeting 'teens near Jefferson High' can reach you. The lesson in the chain: sensitive conclusions don't require sensitive data — just enough boring data and a pattern-finder.",
        },
        {
          type: 'interactive',
          component: 'SortingGame',
          caption: 'Collected or inferred? Sort what the app actually has from what it guessed.',
          props: {
            title: 'What Does the App Really Know?',
            categories: [
              { id: 'collected', label: 'Collected (you generated it)' },
              { id: 'inferred', label: 'Inferred (a model guessed it)' },
            ],
            items: [
              { text: 'The 14 seconds you spent watching a skateboard video', category: 'collected', explanation: 'Watch time is logged directly as you behave — no guessing involved.' },
              { text: 'Your GPS location at 8:15 this morning', category: 'collected', explanation: 'Location pings are raw sensor data your phone transmits — collected, not deduced.' },
              { text: "'Probably a high school student, likely 14-16 years old'", category: 'inferred', explanation: 'Unless you typed your age, this is a model’s prediction from behavior patterns like school-hours phone silence.' },
              { text: "'High likelihood of clicking sneaker ads this month'", category: 'inferred', explanation: 'A prediction assembled from watch history, searches, and what similar users clicked — classic Unit 2 pattern-finding.' },
              { text: 'The search you typed at 11:40 pm', category: 'collected', explanation: 'Searches are collected the moment you press enter — and they feed many inferences downstream.' },
              { text: "'Mood tonight: down — comfort content will hold attention'", category: 'inferred', explanation: 'No app measures mood directly; it’s guessed from signals like scroll speed, time of night, and what you linger on.' },
              { text: 'Your phone model and battery percentage', category: 'collected', explanation: 'Apps read device details directly. Even this can matter — it hints at income and at how desperate you are to charge.' },
              { text: "'Likely close friends with these six accounts'", category: 'inferred', explanation: 'Inferred from message frequency, tagged photos, and overlapping locations — a social map you never drew for them.' },
            ],
          },
        },
        {
          type: 'checkpoint',
          question: "An app shows you mattress ads after you watched videos at 2 am three nights in a row. You never searched for mattresses. What most likely happened?",
          options: [
            'The app secretly read your private messages about being tired',
            'A model inferred a sleep problem from your late-night activity',
            'Coincidence — ad targeting is mostly random guessing',
            'The mattress company bought your search history from your school',
          ],
          correct: 1,
          explanation: "Timestamps on your own activity are enough: a model inferred 'sleep-deprived' from *when* you were active, no message-reading required. That's the unsettling power of inference — sensitive conclusions from innocent-looking data. Random ad targeting is the distractor; targeting is the entire business model.",
        },
        { type: 'heading', text: 'What the feed is actually optimizing' },
        {
          type: 'text',
          text: "Your recommendation feed is a machine learning model with a job, and the job is worth stating precisely: **predict what keeps you engaged** — watching, scrolling, tapping, returning. It is not trained to maximize how informed, happy, or rested you are, because none of those are the metric. Whatever holds attention gets amplified, and content that triggers strong emotion — outrage, envy, anxiety — happens to hold attention very well.",
        },
        {
          type: 'callout',
          variant: 'info',
          title: "The algorithm isn't out to get you",
          text: "It's not evil — it's *indifferent*. Like the biased models in Lesson 1, the feed does exactly what its goal metric says, and nothing the metric doesn't measure. If doomscrolling keeps you on the app, the system serves more of it, not because it wants you miserable but because 'miserable but watching' scores identically to 'delighted and watching.' Once you know the metric, the feed's weird behavior becomes predictable.",
        },
        {
          type: 'checkpoint',
          question: "You watch one workout video. A week later your feed is pushing extreme diet content you never asked for. Using this lesson's model of recommendation systems, what's the best explanation?",
          options: [
            'The app is deliberately trying to damage your health',
            'A human editor at the company picked this content for you',
            'More extreme content holds attention, so the metric rewards it',
            'Your account was mislabeled as an athlete, and this is that error',
          ],
          correct: 2,
          explanation: "Engagement optimization tends to escalate: mild interest in fitness reads as a signal, and more intense versions of a topic often hold attention better, so the model drifts that way on its own. No human editor and no malicious plan is needed — which is exactly why the pattern is so common across apps.",
        },
        { type: 'heading', text: 'Practical privacy moves you can make today' },
        {
          type: 'text',
          text: "You can't opt out of the data economy entirely, but you're not powerless either. Each move below cuts off a real data stream or an inference source — small levers, but they're yours:",
        },
        {
          type: 'list',
          items: [
            "**Set location to 'only while using the app'** (or off) — background location is one of the richest inference sources there is: home, school, routines, who you're with.",
            "**Turn off ad personalization** in your phone settings and inside big apps — you'll still see ads, but you starve the inferred-interest profile.",
            "**Run the privacy checkup** that major platforms offer, and actually read what's on. Defaults favor collection; these checkups largely appeared under regulatory pressure — use them.",
            "**Stop syncing your contacts.** Uploading your address book shares data about people who never agreed to it — your friends included.",
            "**Treat 'fun' quizzes and personality tests as data collection**, because that's what they are: self-reported labels, the highest-quality training data you can donate.",
            "**Audit app permissions monthly** — does that flashlight app really need your microphone? Revoke anything that doesn't serve you.",
          ],
        },
        {
          type: 'text',
          text: "One objection worth answering: 'They already have everything — why bother?' Two reasons. First, data collection is ongoing, not finished: every restriction you set today cuts off a stream that would have run for years. Second, defaults are a negotiation. Collection defaults get set where companies expect little pushback; every person who does change them shifts what companies can assume. Privacy isn't all-or-nothing — it's a dial, and the dial is yours.",
        },
        {
          type: 'tryIt',
          title: 'Audit one app in 10 minutes',
          intro: "Pick the app you use most. You're going to find out what it collects, what it guesses, and turn off one thing — for real, right now.",
          steps: [
            "Open the app's settings and find **Privacy** (sometimes buried under 'Account' or 'Settings and privacy').",
            "Find the **ad preferences / ad personalization** page. Read the list of interests the app has assigned you. Write down the two most accurate — and the most wrong.",
            "Look for a **'download your data'** or 'your activity' option. You don't have to download it — just read the *categories* of what's collected. Count them.",
            'Check what **permissions** the app has on your phone (Settings > Apps on Android, Settings > Privacy & Security on iPhone): location, microphone, camera, contacts. Ask for each: does the app need this to do what I use it for?',
            "**Turn off one thing** — ad personalization, background location, or contact syncing. Notice the app still works.",
            "Reflect: which surprised you more, what it collected or what it inferred? That gap is the data economy in one sentence.",
          ],
        },
        {
          type: 'keyTerms',
          title: 'Key terms',
          terms: [
            { term: 'Collected data', definition: 'Information you directly generate or provide: taps, searches, watch time, location, posts' },
            { term: 'Inferred data', definition: 'Predictions a model makes about you from collected data: interests, mood, demographics' },
            { term: 'Recommendation system', definition: 'An ML model that ranks content by predicted engagement — what will keep you watching, scrolling, or clicking' },
            { term: 'Engagement optimization', definition: "Training a system to maximize attention metrics like watch time, rather than user wellbeing" },
          ],
        },
        {
          type: 'checkpoint',
          question: "A friend insists: 'My phone must be listening — I *talked* about hiking boots and then got a boot ad.' What's the strongest response based on this lesson?",
          options: [
            "You're right — apps constantly record audio, and nothing can stop it",
            'Inference explains it, with no microphone access required',
            'Ads are essentially random, so the timing was pure luck',
            'It only happens if you granted the app microphone permission',
          ],
          correct: 1,
          explanation: "Location near trails, your friends' searches, and your browsing already give models enough to predict 'hiking boots,' so eavesdropping is unnecessary — that is both the mundane truth and the more important lesson. The 'random ads' option is the opposite error: targeting is precise, just not audio-powered.",
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "What's the difference between collected and inferred data? Collected is what you generate (taps, searches, location); inferred is what models predict from it (interests, mood, demographics) — and the inferred layer is the one you never see.",
            'What does your feed optimize? Engagement — attention metrics like watch time — not your wellbeing, which is why emotionally intense content gets amplified.',
            "Is the algorithm malicious? No — it's indifferent, faithfully maximizing the metric it was given. Same lesson as biased models: look at the goal, not for a villain.",
            'What can you actually do? Cut off data streams: restrict location, kill ad personalization, stop contact syncing, audit permissions. Small levers, but real ones.',
          ],
        },
        {
          type: 'text',
          text: "You now know what the apps know. Next up: the AI question you face most directly — what's honest and what isn't when AI meets your homework.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "Which of these is *inferred* data rather than collected data?",
            options: [
              'The 40 minutes of screen time the app logged for you on Tuesday',
              "The tag 'likely interested in gaming' on your profile",
              'The comment you typed and posted under a video',
              'The GPS coordinates your phone sent during lunch',
            ],
            correct: 1,
            explanation: "The interest tag is a model's prediction built from your behavior — you never typed it anywhere. The other three are raw records of things you actually did, which is what makes them collected data (and the fuel those predictions run on).",
          },
          {
            question: 'What is a recommendation system trained to maximize?',
            options: [
              'How accurate and truthful the recommended content is',
              'How much users learn from what appears in their feed',
              "Users' long-term happiness and reported wellbeing",
              'Engagement — predicted watch time and return visits',
            ],
            correct: 3,
            explanation: "The training metric is engagement, and the system optimizes exactly that — nothing else. 'Accuracy of content' is the tempting distractor: feeds have no truth metric at all, which is precisely why engaging falsehoods can outperform boring facts.",
          },
          {
            question: "You want to cut down what one app can infer about you, but keep using it. Which single change starves the most inference?",
            options: [
              'Switching the app to dark mode to reduce screen tracking',
              'Clearing the app cache every week to erase your history',
              'Turning off background location and ad personalization',
              'Logging out every night so the app stops watching you',
            ],
            correct: 2,
            explanation: "Background location is one of the richest inference sources (home, school, routines), and the ad-personalization profile is where inferences get applied — cutting both starves the guessing engine. Cache-clearing is the classic placebo: it frees storage on *your* phone but deletes nothing on their servers.",
          },
          {
            question: "A video app notices that videos making users angry get watched twice as long. Following its engagement objective, what will the recommendation model most likely do over time?",
            options: [
              'Amplify the anger-provoking videos it can already see',
              'Suppress the angry videos, since they harm user wellbeing',
              'Balance angry and calm content equally, to stay fair',
              'Ask users directly whether they enjoy feeling angry',
            ],
            correct: 0,
            explanation: "The model amplifies whatever maximizes its metric, and here anger holds attention — so anger wins, no villain required. 'Suppress to protect users' assumes a wellbeing objective the system simply doesn't have; that gap between metric and wellbeing is the core of this lesson.",
          },
          {
            question: 'Spiral (Unit 2): The system that guesses your interests from watch history is doing which kind of machine learning move?',
            options: [
              'Following if-then rules an engineer hand-wrote for each user',
              'Finding patterns in behavior data to predict labels',
              'Randomly assigning interests until one of them sticks',
              'Copying interests straight off a form you filled out',
            ],
            correct: 1,
            explanation: "Interest inference is classification at scale: behavioral data in, predicted labels out — the same pattern-finding you did with Teachable Machine in Unit 2, just trained on millions of users. Hand-written per-user rules is the Unit 1 'rules vs. learning' distractor: no one could write them, which is exactly why it's learned.",
          },
          {
            question: "Spiral (Unit 1): Why is a modern recommendation feed built as a *learned* system instead of a rule-based one?",
            options: [
              'Rule-based systems are illegal for social media companies',
              'Learned systems are always simpler to build and to debug',
              'No one could hand-write rules for millions of individual users',
              'Rule-based software cannot produce video recommendations at all',
            ],
            correct: 2,
            explanation: "This is Unit 1's rules-vs-learning line in the wild: when the mapping from a person's history to 'what they'll watch next' is too complex and personal to specify by hand, you learn it from data instead. Learned systems are actually *harder* to debug than explicit rules — that distractor gets the trade-off backwards.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 3 — AI and Your Schoolwork
    // ------------------------------------------------------------------
    {
      id: 'ai-and-your-schoolwork',
      title: 'AI and Your Schoolwork',
      duration: '22 min',
      objectives: [
        'Classify a use of AI on schoolwork as assistance, augmentation, or plagiarism — with reasons',
        "Explain why AI detectors can't reliably prove who wrote something",
        'Use AI in ways that build your skills instead of replacing them, and build a disclosure habit',
      ],
      blocks: [
        {
          type: 'intro',
          text: "It's 11 pm. The essay is due at 8 am, the document is blank, and the AI tab is right there — it could produce five paragraphs in eleven seconds. This lesson is not a lecture about why you shouldn't. It's the honest guide: where the real line is between using AI and cheating with it, why 'the detector will catch you' is the wrong thing to worry about, and how the same tool that can hollow out your education can genuinely make you better at things — depending entirely on how you point it.",
        },
        { type: 'heading', text: 'Three ways to use AI (only one is cheating)' },
        {
          type: 'text',
          text: "**Assistance** means AI helps you do your own work: explaining a concept you're stuck on, quizzing you before a test, pointing out grammar errors in a sentence you wrote. **Augmentation** means AI improves work you created: critiquing your finished draft, suggesting counterarguments you consider and accept or reject. **Plagiarism** means submitting work that isn't yours: generating the essay, having AI solve the problem set, or paraphrasing AI output to disguise it. The question that sorts them: *whose thinking is in the submitted work?*",
        },
        {
          type: 'table',
          headers: ['What you did', 'Category', 'Why'],
          rows: [
            ['Asked AI to explain photosynthesis three ways, then wrote your own notes', 'Assistance', 'AI taught; you produced the work. Same as asking a tutor.'],
            ['Pasted your finished draft and asked for its weakest argument', 'Augmentation', 'The ideas and words are yours; AI gave feedback you chose how to use.'],
            ['Generated an essay, then swapped some words to make it sound like you', 'Plagiarism', 'The thinking and structure are the model’s. Rewording stolen work is still stolen work.'],
            ["Asked for a worked example of a *similar* math problem, then solved yours", 'Assistance', 'You practiced the skill; AI supplied practice material, not answers.'],
            ["Photographed the problem set and copied AI's answers", 'Plagiarism', 'No thinking of yours occurred — which was the entire point of the assignment.'],
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The line moves — check the assignment',
          text: "These categories aren't the last word: your teacher's policy is. Augmentation that's fine on a take-home project may be banned on an essay meant to test your unaided writing, and some teachers welcome AI brainstorming while others don't. The rule of thumb: if you're unsure whether a use is allowed, that uncertainty *is* the signal to ask first.",
        },
        {
          type: 'checkpoint',
          question: "You wrote a full draft yourself, then asked AI to 'rewrite this to sound smarter' and submitted its version. How should this be classified?",
          options: [
            'Assistance — the ideas and research all started with you',
            'Plagiarism territory — the submitted writing isn’t yours',
            'Augmentation — AI only polished work that was already yours',
            'Acceptable, as long as no detector flags the final version',
          ],
          correct: 1,
          explanation: "Feedback on your draft is augmentation; *replacing your prose with the model's* crosses the line, because the submitted writing is no longer yours even though the ideas were. The 'no detector flags it' option confuses getting caught with being honest — the next section takes that apart.",
        },
        { type: 'heading', text: "Why 'the detector will catch you' is the wrong frame" },
        {
          type: 'text',
          text: "AI detectors don't *know* who wrote a text — they estimate how statistically predictable it looks. That guess fails in both directions. Lightly edited AI text often sails through. Meanwhile, real human writing gets falsely flagged — and research has found the false accusations land hardest on non-native English speakers, whose careful, conventional phrasing resembles what detectors score as 'AI-like.' A tool that misses cheaters and accuses honest students is not something to build your decisions around.",
        },
        {
          type: 'text',
          text: "So here's the better frame. The essay was never the product — the *thinking practice* was. Teachers don't collect five paragraphs because the world needs more five-paragraph essays; the assignment exists to make you do reps of organizing evidence and building arguments. Outsource the reps and you still get the grade, maybe — but you paid tuition in time and walked out without the muscle. That's the real cost, and no detector is involved.",
        },
        {
          type: 'checkpoint',
          question: 'Why is an AI detector score weak evidence in a cheating accusation?',
          options: [
            'Detectors only work on essays longer than about ten pages',
            'Detectors are highly accurate, but most schools ignore them',
            'Detectors estimate predictability and err in both directions',
            'Detectors match the essay against a database of AI-written texts',
          ],
          correct: 2,
          explanation: "A detector outputs a statistical guess, not an eyewitness account — lightly edited AI text slips through, while genuine human writing gets flagged, most often from non-native English speakers. It also isn't matching your essay against a library of known AI output the way a plagiarism checker matches sources, so there is nothing to look up and confirm — which is why drafts and a conversation about the work are far stronger evidence.",
        },
        { type: 'heading', text: 'Using AI to learn (the upgrade)' },
        {
          type: 'text',
          text: "Here's the twist most 'don't cheat' talks skip: pointed correctly, AI is one of the best study tools ever built. The rule that makes it work — **AI generates questions, examples, and feedback; you generate the answers.** The moment it starts generating your answers, learning stops.",
        },
        {
          type: 'list',
          items: [
            "**AI as explainer:** 'Explain confidence intervals three different ways, one with a sports analogy.' Then close the tab and explain it back in your own words — the explaining-back is where learning happens.",
            "**AI as quizzer:** 'Make me 6 practice questions on this chapter. Don’t show answers until I try.' You already know from this course that retrieval practice beats re-reading — AI makes unlimited practice on demand.",
            "**AI as feedback coach:** 'Here’s my draft. What’s my weakest paragraph and why? Don’t rewrite anything.' The 'don’t rewrite' clause keeps the work yours.",
            "**AI as example generator:** 'Show me a worked example of a problem *like* this one, step by step.' Then solve your actual problem alone.",
          ],
        },
        {
          type: 'callout',
          variant: 'example',
          title: "Worked example: converting a 'do it for me' prompt into a 'help me learn' prompt",
          text: "**Step 1 — the tempting prompt:** 'Write my lab conclusion about the pendulum experiment.' Why it fails you: the conclusion-writing *is* the science skill being graded, and the model doesn't know your actual data — it'll produce plausible generic filler (Unit 4 taught you why: it predicts likely text, it doesn't know your lab). **Step 2 — flip who does the thinking:** 'Here's my data table. Ask me 3 questions a scientist would ask about my results, one at a time.' Why this works: now the model interrogates you, and your answers become raw material. **Step 3 — draft yourself, then:** 'Here's my conclusion. Is my claim actually supported by my data? Point at specific numbers.' You did the science; AI stress-tested it. Same tool, opposite outcome.",
        },
        {
          type: 'checkpoint',
          question: 'Which use of AI most directly turns it into retrieval practice — one of the best-evidenced study techniques there is?',
          options: [
            'Having it summarize the chapter so you can skip the reading',
            'Having it quiz you on the chapter before you see answers',
            'Having it write flashcard answers you read through once',
            'Having it reassure you that you’re probably ready for the test',
          ],
          correct: 1,
          explanation: "Retrieval practice means *pulling answers out of your own memory* — being quizzed forces exactly that, while summaries and read-through answers keep you in passive review mode. Reading AI-written flashcards feels productive but skips the retrieval step that actually builds memory.",
        },
        {
          type: 'interactive',
          component: 'ScenarioSim',
          caption: 'Four homework nights. Choose honestly — the feedback is too.',
          props: {
            title: 'The Homework Dilemmas',
            scenarios: [
              {
                situation: "11 pm. History essay due at 8 am, and your page is blank. You genuinely don't know where to start. The AI tab is open. What's your move?",
                options: [
                  {
                    text: "Generate a full essay, then edit it heavily so it sounds like you",
                    quality: 'poor',
                    feedback: "Heavy editing doesn't change whose thinking it is — the argument and structure are the model's, which makes this plagiarism with extra steps. And you'll walk into the next in-class essay having practiced nothing. The blank page was the assignment.",
                  },
                  {
                    text: "Ask AI to interview you: 'Ask me 5 questions about my topic, then help me turn MY answers into an outline' — then write from that outline",
                    quality: 'best',
                    feedback: "This beats the blank page without outsourcing the thinking: the answers came out of your head, the outline organizes *your* ideas, and the writing is yours. That's assistance at its best — and it's usually faster than the guilt-edit cycle of option one.",
                  },
                  {
                    text: 'Ask AI for a quick overview of the topic to get oriented, then write the essay yourself',
                    quality: 'ok',
                    feedback: "Legitimate — reading an overview is like skimming an encyclopedia entry first. Two cautions: verify anything you use (Unit 4: models generate plausible text, including plausible errors), and notice you're still facing the blank page alone afterward. The interview approach gets you further.",
                  },
                ],
              },
              {
                situation: "Your English essay has a full draft you wrote yourself. It's due tomorrow and you know it could be better. How do you use AI, if at all?",
                options: [
                  {
                    text: "Paste it in and ask for feedback: 'What's my weakest argument? Where does my evidence fail to support my claim?' Then revise it yourself",
                    quality: 'best',
                    feedback: "Textbook augmentation: the words stay yours, the judgment stays yours, and you practice the hardest skill in writing — revision. Add a one-line disclosure ('AI used for draft feedback') and this is how professional writers increasingly work.",
                  },
                  {
                    text: "Ask it to 'rewrite the essay to be more sophisticated' and submit that",
                    quality: 'poor',
                    feedback: "This is the trap from earlier in the lesson: your ideas may survive, but the submitted *writing* is the model's — and writing is what an English essay grades. Bonus irony: models often flatten a distinctive student voice into generic smoothness, so you may have traded your best asset away.",
                  },
                  {
                    text: 'Run a grammar-and-typo pass, reviewing each suggestion before accepting it',
                    quality: 'ok',
                    feedback: "Reasonable and widely accepted — this is spell-check's grown-up sibling, and reviewing each change keeps you in control. You left value on the table, though: mechanical polish was never your draft's real weakness. Feedback on the *argument* is the higher-leverage ask.",
                  },
                ],
              },
              {
                situation: "Math homework: you've hit a wall on stoichiometry-style conversion problems — you got the first two wrong and don't understand why. Eight more to go. What now?",
                options: [
                  {
                    text: 'Photograph the problem set and copy the answers AI gives you',
                    quality: 'poor',
                    feedback: "You'll finish in four minutes and learn in zero. The wall you hit was diagnostic information — it told you exactly what to fix before the test, where there is no AI tab. Copied homework converts that warning into a surprise failure two weeks later.",
                  },
                  {
                    text: "Ask for one worked example of a *similar* problem explained step by step, study why each step happens, then redo YOUR problems without help",
                    quality: 'best',
                    feedback: "This is how worked examples are supposed to work: study the reasoning on a parallel problem, then close the example and generate the solution yourself. The 'redo mine alone' step is what converts understanding into skill — skip it and the understanding evaporates by Friday.",
                  },
                  {
                    text: "Ask for a hint on the exact problem you're stuck on, then finish it yourself",
                    quality: 'ok',
                    feedback: "A hint that unsticks you is fine — tutors do it constantly. Watch the ratchet, though: one hint becomes a hint per problem, and by number eight the AI is solving and you're transcribing. The similar-example route builds more independence for the same effort.",
                  },
                ],
              },
              {
                situation: "Group project, due Friday. A teammate drops their section in the chat — it's obviously AI-generated, and you spot two sources in it that don't seem to exist. What do you do?",
                options: [
                  {
                    text: "Submit it as-is — their section is their responsibility, not yours",
                    quality: 'poor',
                    feedback: "On a group project, the grade and the integrity violation are shared — 'not my section' won't survive contact with the teacher's rubric. And you *know* about the fake sources now (Unit 4 told you exactly why models invent citations), which makes submitting them a choice, not an accident.",
                  },
                  {
                    text: "Tell your teammate directly: the fake sources have to go, the section needs their actual thinking, and the group should agree on what AI use it discloses",
                    quality: 'best',
                    feedback: "Uncomfortable and correct. You addressed the person who can fix it, protected the whole group's work, and pushed the team toward an explicit AI agreement — which is exactly what professional teams do. Offering to help them rebuild it makes this land as support, not an attack.",
                  },
                  {
                    text: 'Quietly verify and fix the sources yourself, replace the worst paragraphs, and say nothing',
                    quality: 'ok',
                    feedback: "The submission is now honest, which matters most — but you did their work, they learned nothing, and next project this happens again. You also made a unilateral call the group should have made together. Fix plus conversation beats fix plus silence.",
                  },
                ],
              },
            ],
          },
        },
        { type: 'heading', text: 'The disclosure habit' },
        {
          type: 'text',
          text: "One habit dissolves most of the gray zone: **say what you used AI for.** One line does it — 'I used [tool] to brainstorm topics,' 'AI feedback on my second draft,' 'grammar check only.' Disclosure turns a secret into a conversation you can defend, and it's rapidly becoming the professional norm in journalism, science, and software. The self-test is built in: if writing the disclosure line would embarrass you, the use probably crossed your own line — better to find that out before you submit.",
        },
        {
          type: 'tryIt',
          title: 'Can YOU spot the AI? Play ROFT',
          intro: "Real or Fake Text, built by NLP researchers at Penn, shows you a passage that starts human-written — somewhere, an AI silently takes over. Your job: catch the exact sentence where it happens. If it's hard for you, notice what that implies about teachers and detectors.",
          url: 'https://www.roft.io/',
          urlLabel: 'Play Real or Fake Text',
          steps: [
            "Open the site and start a game — the New York Times articles category works well for this exercise.",
            'Read sentence by sentence. After each one, decide: still the human writer, or has the AI taken over?',
            'Play at least 5 rounds and note your score — most people find they’re much less accurate than they expected.',
            "Write down two 'tells' you used or noticed: generic phrasing? Facts drifting subtly off course? A change in the writing's voice?",
            'Debrief: you just did, with full attention, what AI detectors attempt statistically — and you probably still got fooled. Now re-evaluate how much weight a detector score deserves as evidence against a student.',
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Where's the line between using AI and cheating? Follow the thinking: assistance and augmentation keep your thinking in the work; plagiarism submits the model's thinking as yours — and rewording it doesn't change whose it is.",
            "Why not just rely on detectors? Because they're statistical guessers that miss edited AI text and falsely accuse real writers — non-native English speakers most of all.",
            'How do you use AI to actually learn? It generates questions, worked examples, and feedback; you generate the answers. The moment it writes your answers, learning stops.',
            "What's the disclosure habit? One line saying what you used AI for — it turns gray zones into defensible choices, and doubles as a self-test of whether you should be doing it.",
          ],
        },
        {
          type: 'text',
          text: "You've now made these calls as a student. Last lesson of the unit: zoom all the way out — when AI decisions affect everyone, who gets to write the rules?",
        },
      ],
      quiz: {
        questions: [
          {
            question: 'Which of these is *assistance* rather than plagiarism?',
            options: [
              'Asking AI to explain a concept, then writing your answers yourself',
              'Generating an essay, then editing it until it sounds like your voice',
              'Having AI solve the even-numbered problems while you do the odd ones',
              'Paraphrasing an AI summary and submitting it as your book report',
            ],
            correct: 0,
            explanation: "Getting an explanation and then producing your own work keeps your thinking in the submission — that's the assistance test. The 'edit until it sounds like me' option is the classic trap: revising the model's essay doesn't make its argument and structure yours.",
          },
          {
            question: "A teacher's AI detector flags an essay by a student who learned English two years ago as '92% AI-written.' The student denies using AI. What should the school understand about this evidence?",
            options: [
              'A score above 90% is effectively proof that the student cheated',
              'The student should reproduce the essay from memory to be believed',
              'It’s weak evidence, since detectors falsely flag human writing',
              'The same detector should be run three more times to confirm it',
            ],
            correct: 2,
            explanation: "Detectors guess from statistical predictability, and careful conventional phrasing — common in second-language writers — reads as 'AI-like': one 2023 study of seven commercial detectors misclassified more than 60% of human-written TOEFL essays as AI-generated. Re-running the same flawed instrument (or treating its number as proof) adds confidence without adding evidence, so drafts and a conversation about the work matter far more.",
          },
          {
            question: "It's late, you're exhausted, and a big essay is due tomorrow. Which use of AI gets you to a finished, honest essay fastest?",
            options: [
              'Generate the essay and paraphrase it — you can learn the material later',
              'Have AI interview you, then write from an outline of your answers',
              'Copy a classmate’s essay instead, since AI detectors can’t catch that',
              'Submit nothing rather than risk any AI involvement at all',
            ],
            correct: 1,
            explanation: "The interview-then-outline move breaks the blank page while keeping every idea and sentence yours — legitimate and usually faster than the generate-then-disguise cycle. 'Learn the material later' is the lie procrastination tells; later never comes, and the in-class essay will collect the debt.",
          },
          {
            question: 'You want AI to improve your actual writing skill over a semester, not just tonight’s grade. Which habit does that best?',
            options: [
              'Having it rewrite each essay so you can study better writing',
              'Having it write topic sentences that you build paragraphs around',
              'Using it only for a final spell-check, so your process stays pure',
              'Asking it to critique each draft, then revising it yourself',
            ],
            correct: 3,
            explanation: "Skill grows in the revision reps: feedback tells you where the draft fails, and *you* doing the fixing is the practice. Studying AI rewrites feels instructive but is passive — like watching someone else lift weights — and outsourced topic sentences quietly outsource the essay's actual structure.",
          },
          {
            question: 'Spiral (Unit 4): Your AI-drafted history section includes three confident, properly formatted source citations. Before using any of them, what must you do, and why?',
            options: [
              'Nothing — clean formatting shows the model retrieved real sources',
              'Check only that the formatting matches your assigned style guide',
              'Verify that each source exists and actually says what’s claimed',
              'Verify only the citations dated before the model’s training cutoff',
            ],
            correct: 2,
            explanation: "Unit 4's core mechanism: the model generates statistically likely text, and 'likely-looking citation' is a pattern it reproduces whether or not the source is real. Clean formatting is exactly what makes hallucinated citations dangerous — polish signals effort, not retrieval, because the model isn't looking anything up.",
          },
          {
            question: "Spiral (Unit 4): In ROFT, players often notice AI-written sentences feel fluent but oddly generic, with facts drifting slightly off. Which Unit 4 concept explains this?",
            options: [
              'The model stores a database of facts but has a poor writing style',
              'Next-word prediction favors probable phrasing over checked facts',
              'AI text turns generic because companies censor creative outputs',
              'The model hedges on purpose to avoid being detected as AI',
            ],
            correct: 1,
            explanation: "Fluency and truth come apart because the model optimizes for 'what word likely comes next,' not 'what is accurate' — probable phrasing is smooth and safe, and factual drift costs nothing in the training objective. The 'database of facts' option is the Unit 4 misconception: LLMs store patterns, not a lookup table.",
          },
        ],
      },
    },

    // ------------------------------------------------------------------
    // Lesson 4 — Who Decides AI Ethics?
    // ------------------------------------------------------------------
    {
      id: 'who-decides-ai-ethics',
      title: 'Who Decides AI Ethics?',
      duration: '20 min',
      objectives: [
        'Explain why self-driving-car dilemmas are really about encoding values into code',
        'Compare the roles of companies, governments, and users in setting AI rules',
        'Draft concrete, enforceable rules for AI use at your own school',
      ],
      blocks: [
        {
          type: 'intro',
          text: "A self-driving car's brakes fail. Swerve left into one lane, continue into another — someone gets hurt either way. Here's what makes this different from every ethics dilemma humans have faced before: the car won't decide in the moment. Its choice was already made, years earlier, by engineers and product managers in a conference room, and then shipped to every car in the fleet. A split-second moral judgment became a *design specification*. Someone wrote it down. The question this lesson chases: who should hold that pen?",
        },
        {
          type: 'video',
          videoId: 'ixIoDYVfKA0',
          title: 'The ethical dilemma of self-driving cars — Patrick Lin (TED-Ed)',
          duration: '4 min',
          note: 'Watch this first — it sets up everything below in four minutes.',
        },
        {
          type: 'text',
          text: "Real crashes rarely present clean either/or choices, and engineers will tell you the dramatic trolley-style dilemma is vanishingly rare. But don't let that dismiss the deeper point: *every* driving decision encodes values, including the boring ones. How much distance to give a cyclist. Whether to exceed the speed limit to match traffic flow. How aggressively to brake for a plastic bag that might be a cat. Each is a trade-off between risks to different people — chosen once, by someone, and executed identically millions of times. That's what makes it a **values-encoding problem**: writing software forces someone's ethics to become everyone's defaults.",
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Worked example: finding the values hidden in one "technical" setting',
          text: "Take a spec that sounds purely technical: *'On highways, the vehicle may exceed the posted limit by up to 5 mph to match surrounding traffic flow.'* **Step 1 — name the trade-off:** matching flow reduces risky speed differences with other cars, but raises the energy of any crash that does happen. Two safety goals, pointing in opposite directions. **Step 2 — ask who carries each risk:** flowing with traffic mostly protects the car's own passengers; the extra speed mostly endangers whoever gets hit. The dial quietly shifts risk from customers to bystanders. **Step 3 — notice who chose:** not a legislature, not the affected pedestrians — a product team, picking a number. **Step 4 — generalize:** any time a 'technical' setting allocates risk or benefit between people, it's a values decision wearing an engineering costume. Now you can spot them everywhere.",
        },
        {
          type: 'tryIt',
          title: 'Judge the dilemmas: MIT’s Moral Machine',
          intro: "Moral Machine, from MIT, shows you crash dilemmas a self-driving car might face and asks what it should do. Millions of people worldwide have judged them — and disagreed along the way. **Content note:** the scenarios depict fatal accident dilemmas (in simple cartoon graphics). It's designed for ages 13+; preview it first if that concerns you, or skip the site and discuss the reflection questions in step 4 instead.",
          url: 'https://www.moralmachine.net/',
          urlLabel: 'Open Moral Machine',
          steps: [
            "Click **Start Judging** and work through the ~13 dilemmas. Go with your gut — there are no right answers, which is precisely the point.",
            'At the end, study your results summary: did you tend to protect the many over the few? The young? Pedestrians who followed the law?',
            "Compare with a classmate. Find one dilemma where you chose differently, and each explain your reasoning for two minutes.",
            "Now the real questions: If you two disagree, whose preferences should the carmaker program in — yours, theirs, the global average? Should a car behave differently in different countries? And should any single company get to answer this alone?",
          ],
        },
        {
          type: 'checkpoint',
          question: 'Millions of Moral Machine players disagree with each other about what the car should do. What is the most important conclusion to draw from that?',
          options: [
            'The majority answer for each dilemma should simply be programmed in',
            'With no agreed right answer, the real question is who decides',
            'Self-driving cars should be banned until everyone agrees',
            'The disagreement proves ethics has no place in engineering work',
          ],
          correct: 1,
          explanation: "The disagreement is the finding: values differ, yet the code must pick something, so the load-bearing question shifts from 'what's right?' to 'who legitimately chooses, and how?' — a governance question, not an engineering one. Majority-rule programming is the tempting shortcut, but majorities differ by country and can vote to sacrifice minorities, which is why it can't settle the matter alone.",
        },
        { type: 'heading', text: 'Zoom out: who actually sets the rules?' },
        {
          type: 'text',
          text: "Self-driving cars are one case of a much bigger pattern — every AI system you've met in this unit encodes somebody's choices: the fairness threshold in a lending model, the engagement metric in your feed, the training data in a face classifier. Three forces, roughly, decide those choices today.",
        },
        {
          type: 'text',
          text: "**Companies** move first and fastest — they choose the defaults, the metrics, and the safety testing before anything ships. But you saw their incentive structure in Lesson 2: engagement and profit are the metrics with teeth. **Governments** can set enforceable rules for everyone; the European Union's **AI Act** — the first broad, comprehensive law regulating AI — signals that the era of 'no rules yet' is ending. Laws bring democratic legitimacy but move slowly, and technology outruns them. **Users and researchers** hold the third lever: independent researchers like the Gender Shades team, and ordinary users like the ones who exposed the Twitter crop bias, have repeatedly forced companies to change products. Pressure works — but it's reactive, arriving only after harm is visible.",
        },
        {
          type: 'table',
          headers: ['Who', 'Their tools', 'Their limits'],
          rows: [
            ['Companies', 'Product design, defaults, internal testing, terms of service', 'Move fast, but profit and engagement incentives shape what "safe enough" means'],
            ['Governments', 'Laws and regulation (e.g., the EU AI Act), enforcement, fines', 'Democratic legitimacy, but slow — rules often trail the technology by years'],
            ['Users & researchers', 'Audits, public experiments, boycotts, opting out, viral pressure', 'Powerful but reactive — usually kicks in only after harm is already public'],
          ],
        },
        {
          type: 'text',
          text: "The three forces aren't rivals so much as gears that turn each other. Researcher audits give regulators the evidence they need to write targeted rules; the threat of regulation makes companies invest in testing *before* the scandal; and user pressure decides which failures become front-page news at all. When you hear 'who should govern AI?', the honest answer is usually: all three, checking each other — because each one alone has a blind spot the others cover.",
        },
        {
          type: 'checkpoint',
          question: "A photo app's beauty filter consistently misbehaves for darker skin tones. Independent researchers publish an audit, it spreads widely, and within a month the company overhauls the feature. Which rule-setting force just acted, and what's its built-in limitation?",
          options: [
            'Government regulation — limited by slow legislative processes',
            'Company self-governance — limited by profit incentives',
            'Users and researchers — limited by acting only after harm',
            'International law — limited by conflicting national borders',
          ],
          correct: 2,
          explanation: "An outside audit plus public pressure is the users-and-researchers lever, the same one Gender Shades pulled — and its limit is timing: the harm had already shipped before the pressure worked, so it corrects harms rather than preventing them. It wasn't self-governance: the company reacted to external pressure, it didn't catch the flaw through its own testing.",
        },
        { type: 'heading', text: 'The rules closest to you: school AI policy' },
        {
          type: 'text',
          text: "The EU AI Act is far away. Your school's AI policy is not — it decides whether Lesson 3's gray zones get you a conversation or a suspension, whether a detector score alone counts as evidence, and which tools you can use openly instead of secretly. Schools everywhere are writing these policies *right now*, often without asking students — the people the rules govern and the ones who know best how AI is actually being used. That's a gap you can fill: student input, a proposal to student council, a pilot in one class. Policy is a thing people write, which means it's a thing you can help write.",
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'What separates a good rule from a poster slogan',
          text: "Test any proposed rule four ways. **Clear:** could a brand-new student follow it without guessing? ('Use AI responsibly' fails instantly.) **Realistic:** does it acknowledge AI exists and will be used? (Total bans mostly convert use into hidden use.) **Fair:** does it depend on unreliable detector scores, or on evidence and conversation? **Constructive:** does it say what you CAN do, not only what you can't? Rules that fail these tests don't guide behavior — they decorate hallways.",
        },
        {
          type: 'checkpoint',
          question: 'Using the four tests — clear, realistic, fair, constructive — which of these is the best-written school AI rule?',
          options: [
            "'Students must use AI responsibly and ethically at all times'",
            "'Any AI use is an automatic zero, as flagged by our detection software'",
            "'AI may be used for brainstorming and draft feedback, if disclosed'",
            "'Teachers may decide anything about AI at any time, case by case'",
          ],
          correct: 2,
          explanation: "It names a specific allowed use and the disclosure mechanism, which makes it clear, realistic about how students actually work, and constructive — and it never leans on detector scores. 'Responsibly and ethically' sounds noble but fails the clarity test: no two people agree on what it permits, so it functions as a slogan rather than a rule.",
        },
        {
          type: 'tryIt',
          title: 'Write the policy yourself: 3 rules for AI at your school',
          intro: "Time to hold the pen. You've spent this unit learning what goes wrong (bias, data extraction, dishonest use) and what rule-setters can do. Draft the three rules YOU would put in your school's AI policy.",
          steps: [
            'Pick three real situations from your school life that need a rule — for example: AI feedback on essay drafts, AI use during test prep, and what happens when a detector flags someone.',
            "For each, write one rule with three parts: what IS allowed, what is NOT allowed, and how students disclose. (Steal the format from the checkpoint's winning rule if it helps.)",
            'Run each rule through the four tests: clear? realistic? fair? constructive? Revise until all four pass.',
            "Trade drafts with a classmate and attack each other's loopholes: 'What could I get away with under your rule?' Patch what they find.",
            "Optional but real: compare your three rules with your school's actual AI policy — if you can even find one. If yours is better (it may be), send it to a teacher or student council. Policies get written by the people who show up.",
          ],
        },
        {
          type: 'keyTerms',
          title: 'Key terms',
          terms: [
            { term: 'Values encoding', definition: 'Turning ethical choices into software defaults that then apply automatically, at scale, to everyone' },
            { term: 'Regulation', definition: 'Government-made rules with legal force — like the EU AI Act, the first broad law governing AI' },
            { term: 'Stakeholder', definition: 'Anyone affected by a decision — for school AI policy, that includes students, not just administrators' },
            { term: 'Audit', definition: 'An independent test of how a system actually behaves — the tool researchers used in Gender Shades' },
          ],
        },
        { type: 'heading', text: 'Key takeaways' },
        {
          type: 'list',
          items: [
            "Why are self-driving dilemmas about more than crashes? Because every coded driving decision — dramatic or mundane — turns someone's values into everyone's defaults, executed identically at scale.",
            "What did Moral Machine actually demonstrate? That people genuinely disagree about machine ethics — so the deciding question isn't 'what's right?' but 'who legitimately chooses?'",
            'Who sets AI rules today? Companies (fast, but profit-driven), governments (legitimate, but slow — the EU AI Act is the first big move), and users/researchers (powerful, but reactive).',
            'What makes an AI rule good? It passes four tests: clear, realistic, fair, constructive — and the rules nearest you, like your school policy, are ones you can actually help write.',
          ],
        },
        {
          type: 'text',
          text: "You've now seen AI's failures, its economics, its role in your own work, and the fight over its rules. Unit 6 turns the lens forward: what all of this means for your future — and what you'll build with it.",
        },
      ],
      quiz: {
        questions: [
          {
            question: "Why do engineers say a self-driving car 'encodes values' even in ordinary, non-crash driving?",
            options: [
              'Because the car’s AI develops its own moral opinions over time',
              'Because only rare crash scenarios carry any ethical stakes',
              'Because self-driving cars must pass an ethics certification exam',
              'Because routine settings trade risk between different people',
            ],
            correct: 3,
            explanation: "The mundane settings are the ethics: following distance, speed, and caution around cyclists each shift risk between passengers, cyclists, and pedestrians, and shipping the choice makes that trade-off automatic for millions of trips. The 'develops its own opinions' option is the anthropomorphism this course keeps flagging — humans chose those values; the car just executes them.",
          },
          {
            question: 'Which of these self-driving design decisions is a values decision disguised as a technical setting?',
            options: [
              'How often the software checks the server for updates',
              'How much extra passing distance to give cyclists',
              'Which programming language the engineering team uses',
              'Which file format stores the car’s sensor logs',
            ],
            correct: 1,
            explanation: "Cyclist clearance trades one group's safety against another group's travel time — an ethical allocation of risk wearing an engineering costume. The other three genuinely are neutral implementation choices; the skill this lesson builds is telling the two apart.",
          },
          {
            question: 'What is the significance of the EU AI Act in the story of who governs AI?',
            options: [
              'It’s the first comprehensive government regulation of AI',
              'It requires every AI model sold worldwide to be open source',
              'It hands AI rule-making from governments back to companies',
              'It permanently banned self-driving cars across all of Europe',
            ],
            correct: 0,
            explanation: "Its importance here is the precedent: a major government body writing enforceable, economy-wide AI rules means self-regulation by companies is no longer the only game. The other options invent provisions the law doesn't contain — a good habit check, since this course only claims what it can source.",
          },
          {
            question: "A new social app's algorithm is quietly amplifying dangerous stunt videos to teens. Which response best matches the strengths of each rule-setting force?",
            options: [
              'Users should simply stop watching what the app shows them',
              'Only the company can ever know or fix what its algorithm does',
              'Researchers audit it now while regulators write rules next',
              'Wait for legislation, since public audits only create panic',
            ],
            correct: 2,
            explanation: "This pairing uses each force where it's strong — audits and public pressure are fast but reactive, regulation is slow but preventive — exactly the complementary structure from the lesson's table. 'Only the company can know' is contradicted by this unit's history: Gender Shades and the Twitter crop tests were both outside audits.",
          },
          {
            question: "Your student council asks you to propose one AI rule for the school handbook. Applying this lesson's four tests, which proposal is strongest?",
            options: [
              "'AI is banned on all schoolwork; our scanning software finds every violation'",
              "'AI is allowed for practice questions and draft feedback, if disclosed'",
              "'Students should think carefully before using AI on any assignment'",
              "'Each teacher may set any AI rule at any time, without writing it down'",
            ],
            correct: 1,
            explanation: "It passes all four tests — specific allowed uses (clear, constructive), acknowledges real behavior (realistic), and leaves enforcement resting on evidence and conversation rather than unreliable detectors (fair — Lesson 3 showed why that matters). The total-ban option fails 'realistic' and doubles down on detector scores, the least reliable evidence available.",
          },
          {
            question: "Spiral (Unit 1): A regulator proposes: 'Just require every self-driving car to follow one hand-written rule — never harm anyone.' Why doesn't this work for a modern learned driving system?",
            options: [
              'Because car companies would simply refuse to type the rule in',
              'Because ‘never harm anyone’ isn’t a computable instruction',
              'Because the rule would force cars to drive far too slowly',
              'Because laws are not allowed to mention harm, for liability reasons',
            ],
            correct: 1,
            explanation: "This is Unit 1's rules-vs-learning lesson at its limit: hand-written rules need crisp, checkable conditions, but driving is learned behavior navigating continuous trade-offs where some tiny risk always remains. The regulation that works targets measurable things — testing standards, error-rate audits, transparency — not slogans the software can't execute.",
          },
        ],
      },
    },
  ],
};

export default unit;
