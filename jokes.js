// This file contains a collection of jokes categorized by type.
const jokes = [
  {
    id: 1,
    jokeText: "Why don't scientists trust atoms? Because they make up everything.",
    jokeType: "Puns"
  },
  {
    id: 2,
    jokeText: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "Puns"
  },
  {
    id: 3,
    jokeText: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns"
  },
  {
    id: 4,
    jokeText: "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay"
  },
  {
    id: 5,
    jokeText: "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay"
  },
  {
    id: 6,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Puns"
  },
  {
    id: 7,
    jokeText: "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns"
  },
  {
    id: 8,
    jokeText: "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math"
  },
  {
    id: 9,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food"
  },
  {
    id: 10,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food"
  },
  {
    id: 11,
    jokeText: "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay"
  },
  {
    id: 12,
    jokeText: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports"
  },
  {
    id: 13,
    jokeText: "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay"
  },
  {
    id: 14,
    jokeText: "Why did the soccer player bring string to the game? So he could tie the score.",
    jokeType: "Sports"
  },
  {
    id: 15,
    jokeText: "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Puns"
  },
  {
    id: 16,
    jokeText: "Why did the math book look sad? Because it had too many problems.",
    jokeType: "Math"
  },
  {
    id: 17,
    jokeText: "Why was the computer cold? It forgot to close its Windows.",
    jokeType: "Tech"
  },
  {
    id: 18,
    jokeText: "Why don’t skeletons fight each other? They don’t have the guts.",
    jokeType: "Wordplay"
  },
  {
    id: 19,
    jokeText: "How does a penguin build its house? Igloos it together.",
    jokeType: "Animals"
  },
  {
    id: 20,
    jokeText: "Why don’t programmers like nature? It has too many bugs.",
    jokeType: "Tech"
  },
  {
    id: 21,
    jokeText: "Why was Cinderella so bad at soccer? Because she always ran away from the ball.",
    jokeType: "Sports"
  },
  {
    id: 22,
    jokeText: "What do you call cheese that isn't yours? Nacho cheese.",
    jokeType: "Food"
  },
  {
    id: 23,
    jokeText: "Why did the bicycle fall over? Because it was two-tired.",
    jokeType: "Puns"
  },
  {
    id: 24,
    jokeText: "Why did the cookie go to the doctor? Because it felt crummy.",
    jokeType: "Food"
  },
  {
    id: 25,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "Food"
  },
  {
    id: 26,
    jokeText: "How do cows stay up to date? They read the moos-paper.",
    jokeType: "Animals"
  },
  {
    id: 27,
    jokeText: "What do you call an alligator in a vest? An investigator.",
    jokeType: "Wordplay"
  },
  {
    id: 28,
    jokeText: "How do you find Will Smith in the snow? Look for fresh prints.",
    jokeType: "Puns"
  },
  {
    id: 29,
    jokeText: "Why did the banana go to the hospital? Because it wasn’t peeling well.",
    jokeType: "Food"
  },
  {
    id: 30,
    jokeText: "Why was the stadium so cool? It was filled with fans.",
    jokeType: "Sports"
  },
  {
    id: 31,
    jokeText: "Why did the chicken join a band? Because it had the drumsticks.",
    jokeType: "Animals"
  },
  {
    id: 32,
    jokeText: "Why don’t you ever see elephants hiding in trees? Because they’re so good at it.",
    jokeType: "Animals"
  },
  {
    id: 33,
    jokeText: "What do you call a factory that makes good products? A satisfactory.",
    jokeType: "Puns"
  },
  {
    id: 34,
    jokeText: "Why was the calendar afraid? Because its days were numbered.",
    jokeType: "Wordplay"
  },
  {
    id: 35,
    jokeText: "How do you make a tissue dance? Put a little boogie in it.",
    jokeType: "Puns"
  },
  {
    id: 36,
    jokeText: "Why don’t eggs tell jokes? They’d crack each other up.",
    jokeType: "Food"
  },
  {
    id: 37,
    jokeText: "Why did the man put his money in the freezer? He wanted cold hard cash.",
    jokeType: "Puns"
  },
  {
    id: 38,
    jokeText: "What do you call a can opener that doesn’t work? A can’t opener.",
    jokeType: "Wordplay"
  },
  {
    id: 39,
    jokeText: "Why did the grape stop in the middle of the road? Because it ran out of juice.",
    jokeType: "Food"
  },
  {
    id: 40,
    jokeText: "Why are elevator jokes so classic and good? They work on many levels.",
    jokeType: "Wordplay"
  },
  {
    id: 41,
    jokeText: "Why did the music teacher go to jail? Because she got caught with too many notes.",
    jokeType: "Music"
  },
  {
    id: 42,
    jokeText: "Why don’t oysters donate to charity? Because they are shellfish.",
    jokeType: "Food"
  },
  {
    id: 43,
    jokeText: "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    jokeType: "Puns"
  },
  {
    id: 44,
    jokeText: "Why did the picture go to jail? Because it was framed.",
    jokeType: "Wordplay"
  },
  {
    id: 45,
    jokeText: "Why did the man run around his bed? Because he was trying to catch up on sleep.",
    jokeType: "Puns"
  },
  {
    id: 46,
    jokeText: "What kind of shoes do ninjas wear? Sneakers.",
    jokeType: "Puns"
  },
  {
    id: 47,
    jokeText: "Why are frogs so happy? They eat whatever bugs them.",
    jokeType: "Animals"
  },
  {
    id: 48,
    jokeText: "What do you call a snowman with a six-pack? An abdominal snowman.",
    jokeType: "Wordplay"
  },
  {
    id: 49,
    jokeText: "Why did the bee get married? Because he found his honey.",
    jokeType: "Animals"
  },
  {
    id: 50,
    jokeText: "Why did the man stare at the orange juice can? Because it said 'concentrate'.",
    jokeType: "Food"
  },
  {
    id: 51,
    jokeText: "What do you call a bear with no teeth? A gummy bear.",
    jokeType: "Animals"
  },
  {
    id: 52,
    jokeText: "What do you call a fish with no eyes? Fsh.",
    jokeType: "Puns"
  },
  {
    id: 53,
    jokeText: "Why did the barber win the race? He knew all the shortcuts.",
    jokeType: "Puns"
  },
  {
    id: 54,
    jokeText: "How do you catch a whole school of fish? With bookworms.",
    jokeType: "Puns"
  },
  {
    id: 55,
    jokeText: "Why don’t some fish play piano? Because you can’t tuna fish.",
    jokeType: "Music"
  },
  {
    id: 56,
    jokeText: "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
    jokeType: "Puns"
  },
  {
    id: 57,
    jokeText: "What did the janitor say when he jumped out of the closet? Supplies!",
    jokeType: "Wordplay"
  },
  {
    id: 58,
    jokeText: "Why are skeletons so calm? Because nothing gets under their skin.",
    jokeType: "Spooky"
  },
  {
    id: 59,
    jokeText: "Why did the dog sit in the shade? Because he didn’t want to be a hot dog.",
    jokeType: "Animals"
  },
  {
    id: 60,
    jokeText: "Why did the banana go out with the prune? Because it couldn’t find a date.",
    jokeType: "Food"
  },
  {
    id: 61,
    jokeText: "Why do ducks have feathers? To cover their butt quacks.",
    jokeType: "Animals"
  },
  {
    id: 62,
    jokeText: "Why was the broom late? It swept in.",
    jokeType: "Puns"
  },
  {
    id: 63,
    jokeText: "Why didn’t the skeleton go to the dance? Because he had no body to go with.",
    jokeType: "Spooky"
  },
  {
    id: 64,
    jokeText: "What kind of music do mummies listen to? Wrap music.",
    jokeType: "Spooky"
  },
  {
    id: 65,
    jokeText: "Why did the robber take a bath? Because he wanted to make a clean getaway.",
    jokeType: "Puns"
  },
  {
    id: 66,
    jokeText: "Why did the man get hit by a bike every day? Because he was stuck in a vicious cycle.",
    jokeType: "Wordplay"
  },
  {
    id: 67,
    jokeText: "Why don’t cows have any money? Because farmers milk them dry.",
    jokeType: "Animals"
  },
  {
    id: 68,
    jokeText: "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
    jokeType: "Puns"
  },
  {
    id: 69,
    jokeText: "Why did the teddy bear say no to dessert? Because it was stuffed.",
    jokeType: "Food"
  },
  {
    id: 70,
    jokeText: "Why did the cat sit on the computer? To keep an eye on the mouse.",
    jokeType: "Tech"
  },
  {
    id: 71,
    jokeText: "What do you call cheese that isn't yours? Nacho cheese.",
    jokeType: "Food"
  },
  {
    id: 72,
    jokeText: "Why couldn’t the leopard play hide and seek? Because he was always spotted.",
    jokeType: "Animals"
  },
  {
    id: 73,
    jokeText: "Why did the bicycle fall over? Because it was two-tired.",
    jokeType: "Puns"
  },
  {
    id: 74,
    jokeText: "What’s orange and sounds like a parrot? A carrot.",
    jokeType: "Wordplay"
  },
  {
    id: 75,
    jokeText: "What do you get from a pampered cow? Spoiled milk.",
    jokeType: "Animals"
  },
  {
    id: 76,
    jokeText: "Why did the math book look sad? Because it had too many problems.",
    jokeType: "Math"
  },
  {
    id: 77,
    jokeText: "What did one wall say to the other wall? I’ll meet you at the corner.",
    jokeType: "Puns"
  },
  {
    id: 78,
    jokeText: "What do you call a witch at the beach? A Sandwich",
    jokeType: "Puns"
  },
  {
    id: 79,
    jokeText: "Why did the cookie go to the hospital? Because it felt crummy.",
    jokeType: "Food"
  },
  {
    id: 80,
    jokeText: "Why did the man put his money in the blender? Because he wanted to make some liquid assets.",
    jokeType: "Wordplay"
  },
  {
    id: 81,
    jokeText: "What do you call a pile of cats? A meowtain.",
    jokeType: "Animals"
  },
  {
    id: 82,
    jokeText: "What do elves learn in school? The elf-abet.",
    jokeType: "Puns"
  },
  {
    id: 83,
    jokeText: "Why did the chicken join a band? Because it had the drumsticks.",
    jokeType: "Music"
  },
  {
    id: 84,
    jokeText: "Why was the computer cold? It left its Windows open.",
    jokeType: "Tech"
  },
  {
    id: 85,
    jokeText: "How do cows stay up to date? They read the moos-paper.",
    jokeType: "Animals"
  },
  {
    id: 86,
    jokeText: "What do you get when you cross a fish and an elephant? Swimming trunks.",
    jokeType: "Puns"
  },
  {
    id: 87,
    jokeText: "Why did the stadium get hot after the game? All the fans left.",
    jokeType: "Sports"
  },
  {
    id: 88,
    jokeText: "Why can't you trust stairs? They’re always up to something.",
    jokeType: "Wordplay"
  },
  {
    id: 89,
    jokeText: "Why did the cow win an award? For outstanding performance in the field.",
    jokeType: "Animals"
  },
  {
    id: 90,
    jokeText: "Why did the iPhone go to school? It needed to improve its screen time.",
    jokeType: "Tech"
  },
  {
    id: 91,
    jokeText: "Why don’t programmers like nature? It has too many bugs.",
    jokeType: "Tech"
  },
  {
    id: 92,
    jokeText: "Why did the fish blush? Because it saw the ocean’s bottom.",
    jokeType: "Puns"
  },
  {
    id: 93,
    jokeText: "Why do Java developers wear glasses? Because they don’t C#.",
    jokeType: "Tech"
  },
  {
    id: 94,
    jokeText: "Why do vampires always seem sick? Because they’re always coffin.",
    jokeType: "Spooky"
  },
  {
    id: 95,
    jokeText: "Why don’t eggs tell jokes? They’d crack each other up.",
    jokeType: "Food"
  },
  {
    id: 96,
    jokeText: "Why did the grape stop in the middle of the road? Because it ran out of juice.",
    jokeType: "Food"
  },
  {
    id: 97,
    jokeText: "Why did the frog take the bus to work? His car got toad away.",
    jokeType: "Animals"
  },
  {
    id: 98,
    jokeText: "Why did the coffee file a police report? It got mugged.",
    jokeType: "Food"
  },
  {
    id: 99,
    jokeText: "What’s brown and sticky? A stick.",
    jokeType: "Puns"
  },
  {
    id: 100,
    jokeText: "What do you call an alligator in a vest? An investigator.",
    jokeType: "Animals"
  }
];

export default jokes;
