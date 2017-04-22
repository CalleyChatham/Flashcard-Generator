/**
 * Created by calleyoneil on 4/21/17.
 */
// constructor funtions
function BasicCard (front, back) {
    this.front = front;
    this.back = back;
};
var BasicCardExpression = function(front, back) {
    this.front = front;
    this.back = back;
};
// // ES6
// class ES6BasicCard {
// 	constructor(front, back) {
// 		super();
// 		this.front = front;
// 		this.back = back;

// 	}
// };

function ClozeCard (text, cloze) {
    this.text = text;
    this.cloze = cloze;
}
ClozeCard.prototype.cloze = function() {
    let arrayOfWords = this.text.split(' '); // creates an array of word because we split on spaces.
    // We can slice(2) // was the first president......
    // shift() or unshift or ...... see below
    // var myString = '... ' + arrayOfWords.join(' ');

}
var newClozeCard = new ClozeCard( "George Washington was the first president of the United States.", "George Washington")

newClozeCard.cloze();
console.log(newClozeCard.cloze());

var greaseQuote = new BasicCard("Who was Danny in love with?", "Sandy");
console.log(greaseQuote);
