//A function that clears all content before before generating new random content
function clearAll() {
	const memeContainer = document.querySelector(".showMeme");
	const jokeContainer = document.querySelector(".joke-content");
	const quoteContainer = document.querySelector(".quote-content");
	const riddleContainer = document.querySelector(".riddle-content");

	memeContainer.innerHTML = "";
	jokeContainer.innerHTML = "";
	quoteContainer.innerHTML = "";
	riddleContainer.innerHTML = "";
}

function showMeme() {
	clearAll();
	const memeFolder = "../images/";
	let randomNumber = Math.floor(Math.random() * 33).toString();
	let randomMeme = `${memeFolder}${randomNumber}.jpg`;
	let meme = document.createElement("img");
	meme.src = randomMeme;
	memeDiv = document.querySelector(".showMeme");
	memeDiv.appendChild(meme);
}

function showJoke() {
	clearAll();
	const randomJokeText = getRandomData("jokes");
	const jokeParagraph = document.createElement("p");
	jokeParagraph.innerText = randomJokeText;
	jokeDiv = document.querySelector(".joke-content");
	jokeDiv.appendChild(jokeParagraph);
}

function showQuote() {
	clearAll();
	const randomQuote = getRandomData("quotes");
	const quoteP = document.createElement("p");
	const authorP = document.createElement("p");

	const { quote, author } = randomQuote; //destructing a the randomJoke Object
	quoteP.innerText = quote;
	authorP.innerText = `- ${author}`;

	const quoteContainer = document.querySelector(".quote-content");
	quoteContainer.appendChild(quoteP);
	quoteContainer.appendChild(authorP);
}

function showRiddle() {
	clearAll();
	const randomRiddle = getRandomData("riddles");

	const { question, answer } = randomRiddle;
	const questionP = document.createElement("p");
	questionP.textContent = question;
	const answerP = document.createElement("p");
	answerP.textContent = answer;
	answerP.setAttribute("id", "riddle-answer");
	answerP.hidden = true;

	const riddleContainer = document.querySelector(".riddle-content");
	riddleContainer.appendChild(questionP);
	riddleContainer.appendChild(answerP);
}

function revealAnswers() {
	const riddleContainer = document.querySelector(".riddle-content");
	const riddle = riddleContainer.querySelector("p");
	const answer = document.querySelector("#riddle-answer");

	riddle && answer.hidden
		? (answer.hidden = false)
		: !riddle
		? alert("There is no riddle selected to reveal answer to!")
		: alert("Answer already shown");
}

function getRandomData(type) {
	return data[type][rn(data[type].length)];
}

const jokes = [
	"Programming is easy",
	"What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.",
	"I invented a new word! Plagiarism!",
	"Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
	"Why do we tell actors to “break a leg?” Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.",
	"Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”",
	"Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”",
	"Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house.",
	"Knock! Knock! Who’s there? Control Freak. Con…  OK, now you say, “Control Freak who?” ",
	"Hear about the new restaurant called Karma?There’s no menu: You get what you deserve.",
	"A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!” “Don’t worry,” said the doc. “Those are just contractions.”",
	"A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”",
	"Did you hear about the actor who fell through the floorboards? He was just going through a stage.",
];

const quotes = [
	{
		quote:
			"“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
		author: "Albert Einstein",
	},
	{
		quote:
			"“Learn as if you will live forever, live like you will die tomorrow.”",
		author: "Mahatma Gandhi",
	},
	{
		quote:
			"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
		author: "Mark Twain",
	},
	{
		quote:
			"“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
		author: "Eleanor Roosevelt",
	},
	{
		quote:
			"“When you change your thoughts, remember to also change your world.”",
		author: "Norman Vincent Peale",
	},
	{
		quote:
			"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
		author: "Walter Anderson",
	},
	{
		quote:
			"“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”",
		author: "Diane McLaren",
	},
	{
		quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
		author: `Winston S. Churchill`,
	},
	{
		quote: `"It is better to fail in originality than to succeed in imitation."`,
		author: `Herman Melville`,
	},
	{
		quote: `"The road to success and the road to failure are almost exactly the same."`,
		author: `Colin R. Davis`,
	},
	{
		quote: `“Success usually comes to those who are too busy looking for it.”`,
		author: `Henry David Thoreau`,
	},
	{
		quote: `“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.”`,
		author: `Dale Carnegie`,
	},
	{
		quote: `"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded 
			genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race."`,
		author: `Calvin Coolidge`,
	},
	{
		quote: `“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”`,
		author: `Mister Rogers`,
	},
	{
		quote: `“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”`,
		author: `John Wooden`,
	},
	{
		quote: `“I never dreamed about success. I worked for it.”`,
		author: `Estée Lauder`,
	},
	{
		quote: `“Success is getting what you want, happiness is wanting what you get.”`,
		author: `W. P. Kinsella`,
	},
];

const riddles = [
	{
		question: "What has to be broken before you can use it?",
		answer: `An egg`,
	},
	{
		question: `I’m tall when I’m young, and I’m short when I’m old. What am I?`,
		answer: `A candle`,
	},
	{ question: `What month of the year has 28 days?`, answer: `All of them` },
	{
		question: "What is full of holes but still holds water?",
		answer: `A sponge`,
	},
	{
		question: "What question can you never answer yes to?",
		answer: `Are you asleep yet?`,
	},
	{
		question: `What is always in front of you but can’t be seen?`,
		answer: `The future`,
	},
	{
		question: ` There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?`,
		answer: `There aren’t any—it’s a one-story house.`,
	},
	{
		question: `What can you break, even if you never pick it up or touch it?`,
		answer: `A promise`,
	},
	{ question: `What goes up but never comes down?`, answer: `Your age` },
	{
		question: `A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?`,
		answer: `He was bald.`,
	},
	{ question: `What gets wet while drying?`, answer: `A towel` },
	{
		question: `What can you keep after giving to someone?`,
		answer: `Your word`,
	},
	{
		question: `I shave every day, but my beard stays the same. What am I?`,
		answer: `A barber`,
	},
	{
		question: `You see a boat filled with people, yet there isn’t a single person on board. How is that possible?`,
		answer: `All the people on the boat are married.`,
	},
	{
		question: `You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?`,
		answer: `The match`,
	},
	{
		question: `A man dies of old age on his 25 birthday. How is this possible?`,
		answer: `He was born on February 29.`,
	},
	{
		question: `I have branches, but no fruit, trunk or leaves. What am I?`,
		answer: `A bank`,
	},
	{
		question: `What can’t talk but will reply when spoken to?`,
		answer: `An echo`,
	},
	{
		question: `The more of this there is, the less you see. What is it?`,
		answer: `Darkness`,
	},
	{
		question: `David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?`,
		answer: `David`,
	},
	{
		question: ` I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?`,
		answer: `Your shadow`,
	},
	{
		question: `What has many keys but can’t open a single lock?`,
		answer: `A piano`,
	},
	{
		question: `What can you hold in your left hand but not in your right?`,
		answer: `Your right elbow`,
	},
	{
		question: `What is black when it’s clean and white when it’s dirty?`,
		answer: `A chalkboard`,
	},
	{ question: `What gets bigger when more is taken away?`, answer: `A hole` },
	{
		question: `I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?`,
		answer: `Your breath`,
	},
	{
		question: ` I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?`,
		answer: `Yarn`,
	},
	{
		question: `Where does today come before yesterday?`,
		answer: `The dictionary`,
	},
	{
		question: `What invention lets you look right through a wall?`,
		answer: `A window`,
	},
	{
		question: `If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?`,
		answer: `A secret`,
	},
	{ question: ` What can’t be put in a saucepan?`, answer: `It’s lid` },
	{
		question: `What goes up and down but doesn’t move?`,
		answer: `A staircase`,
	},
	{
		question: `If you’re running in a race and you pass the person in second place, what place are you in?`,
		answer: `Second place`,
	},
	{
		question: ` It belongs to you, but other people use it more than you do. What is it?`,
		answer: `Your name`,
	},
	{ question: `What has lots of eyes, but can’t see?`, answer: `A potato` },
	{ question: `What has one eye, but can’t see?`, answer: `A needle` },
	{ question: `What has one head, one foot and four legs?`, answer: `A bed` },
	{ question: `What can you catch, but not throw?`, answer: `A cold` },
	{ question: `What has many teeth, but can’t bite?`, answer: `A comb` },
	{ question: `What building has the most stories?`, answer: `The library` },
];

function rn(len) {
	return Math.floor(Math.random() * len);
}

const data = {
	jokes,
	quotes,
	riddles,
};
