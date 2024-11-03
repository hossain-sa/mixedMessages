// quotes from https://blog.wonderbly.com/occasions/astrology-quotes/
const astrologyMsgs = ["Stars impel but they don’t compel", "One’s astrological horoscope may be compared metaphorically to one’s genetic heritage; it cannot be changed, but we can do what we may with what we are given.", "When we pass judgment, we hit a dead end. When we analyze something with an open mind, we can explore a concept into infinity."];

// quotes from https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/
const inspiringMsgs = ["Whatever the mind of man can conceive and believe, it can achieve.", "You miss 100% of the shots you don’t take.", "Life is 10% what happens to me and 90% of how I react to it."];

// quotes from https://bookroo.com/quotes/nonsense
const nonsenseMsgs = ["The fault lies not with the mob, who demands nonsense, but with those who do not know how to produce anything else.", "The very nature of Joy makes nonsense of our common distinction between having and wanting.", "In nonsense is strength."];

// get random number between 1-3 to select msg category
const categorySelector = Math.round(Math.random() * 2) + 1;

// get random number between 1-3 for message selector
const messageSelector = Math.round(Math.random() * 2) + 1;

console.log(categorySelector, messageSelector);