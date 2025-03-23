var relevance = [
    // "circumstantial ad hominem",
    // "abusive ad hominem",
    "ad hominem",
    "tu quoque",
    // "two wrongs make a right",
    "straw man",
    "appeal to force",
    "appeal to people",
    "appeal to pity",
    "red herring",
    "equivocation",
    "begging the question",
];

var relevance_fallacies = [
    // `Tom: This Toyota Prius will give you the best mileage out of any car in this lot!\n
    // Jerry: I don’t believe you. You’re just saying that because you get the highest commission on selling Toyotas.`,
    `Malik: Personally, I think your suit would look better buttoned up, it would complement your shirt’s color better that way.\n
    Ahmed: I’m not taking fashion advice from you while you’re sitting in those ugly pajamas.`,
    `DeNiro says that gambling is the riskiest way to get rich. He claims the odds at casinos are always stacked against you. This is meaningless coming from the guy who made $7 million dollars at the slot machine.`,
    // `Babar did nothing wrong by bribing the NADRA officer. If he hadn’t, he would still be waiting for an appointment. It’s the only way to get things done on time.`,
    `Chang: The technology billionaires such as Elon Musk, Jeff Bezos and Mark Zuckerberg are destroying our planet with their incessant need for growth, even when it comes at the expense of the ecology.\n
    Matt: So you have a problem with rich people. You want all of us to start paying 50% of our income in taxes to the government. I ain’t a communist, buddy. `,
    `Arthur: What’re we doin’ Dutch? We’ve been on the run from the law for over a year now.\n
    Dutch: I have a plan, Arthur. You’ve got to stop questioning me. It’s going to make me wonder whether you are with me or against me. And trust me Arthur, you don't want me wondering that you're against me.`,
    `Ted: Oh, Barney, look at me; I am 32 and still single. I am never going to find the one.
    Barney: Of course, you’re not Ted, and here’s why: look at yourself, you don’t wear suits. How can you ever hope to stand apart from the crowd if you don’t wear suits? That’s like asking how you can be awesome without being awesome. `,
    `I insist that you approve my floor plan for now. I assure you, I will fix the violations in the next 2 weeks. If you reject this, I will lose my job and end up on the streets.`,
    `Fatima 1: I think Lahore is better than Karachi to grow one’s career. There are so many startups and multinational companies hiring for jobs everyday in Lahore. Not to mention the excellent networking opportunities.\n 
    Fatima 2: Girl, you can’t talk about Lahore without its smog, have you seen how bad it is? You can barely breathe outside for a minute before getting a coughing attack. `,
    `Teacher: Why haven’t you done your homework?\n
    Student: You said it would be a piece of cake, but I never saw any cake.`,
    `Karachi Hot has the best biryani in Lahore, because every other biryani in Lahore is inferior to it.`,
];

var insufficient_evidence = [
    "appeal to ignorance",
    "false dilemma",
    // "inappropriate appeal to authority",
    "false cause",
    "slippery slope",
    "loaded question",
    "hasty generalization",
    // "fallacy of inconsistency",
    "weak analogy",
];

var insufficient_evidence_fallacies = [
    `We have never seen a horse nor a monkey surviving in outer space. That is conclusive proof that both horses and monkeys cannot survive in outer space.`,
    `If I jump off the third floor right now, I am either going to die on impact or live to tell the tale of my stupidity.`,
    // `The Mi Band is the most fashionable watch you can buy in the market right now because everyone on Pakistan’s hockey team wears one. `,
    `We didn’t have any of this global warming stuff back when pirates were ruling the seas. Is it not clear? We must bring back pirates to control global warming.`,
    `Schools should not implement student uniforms, because it will introduce a trend of controlling policies. Next thing we know, schools get to decide what students should eat, when they should wake up and what they’re allowed to watch.`,
    `"The trunk of a Hyundai Tucson is huge. I could fit in there."
    "What are you on about? It only has space for a toddler."
    "So you haven’t stopped stuffing toddlers in there?"`,
    `I just interviewed my first ever candidate from LUMS, and my God was he arrogant. I don’t think I will be accepting any applications coming from this community of snobs.`,
    // "fallacy of inconsistency - couldn't find an",
    `Amir Khan, one of the most successful Bollywood actors, was born into a Muslim family and so was I. Amir Khan is 5’6”, and so am I. We even share the same last name. This practically guarantees my success in Bollywood.`,
];

// var puzzlewords = [
//     // word, clue
//     ["Incomplete", "Some of us are always meant to be this."],
//     ["Ecosystem", "Any system where life can grow and thrive."],
//     [
//         "Rad",
//         "If it's totally far out, then it's also probably totally this.",
//     ],
//     ["Love", "Basis for all of human civilization."],
//     ["Peace", "When no soul is trying to destroy another soul."],
//     ["Community", "Where we come from and we we finally end."],
//     [
//         "Justice",
//         "If anyone is missing this, then nobody really has it.",
//     ],
//     [
//         "Land",
//         "There is nothing sadder than a peasant without this.",
//     ],
//     [
//         "Equality",
//         "If we are to trust each other in society, we must have this between everyone.",
//     ],
//     [
//         "Fraternity",
//         "In Utopia, we are so friendly, it is like we are in one of these.",
//     ],
//     [
//         "Comrade",
//         "You call your friends this, because Mr. and Mrs. are Sexist, gender-dominating terms.",
//     ],
//     [
//         "Cooperative",
//         "If something is based on the opposite of Domination, it is called this.",
//     ],
//     [
//         "Voluntary",
//         "Not just free to arrive when you want, but free to leave when you want, too.",
//     ],
//     [
//         "Non-coercive",
//         "To do something in a way that requires no force at all.",
//     ],
//     [
//         "Horizontal",
//         "If top-down societies are vertical, then bottom-up societies are this.",
//     ],
//     [
//         "Wholesome",
//         "Your health, your family, and your community should be this.",
//     ],
// ];
