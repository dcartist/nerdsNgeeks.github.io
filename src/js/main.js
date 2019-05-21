let questNumber = document.querySelector('#questNumber')
let answer1 = document.querySelector('#answer1')
let answer2 = document.querySelector('#answer2')
let answer3 = document.querySelector('#answer3')
let activeQuestion = document.querySelector('#activeQuestion');
let questCounter = 0
let score = 0
questNumber.innerHTML = "This is another test"
let questList = []
let questionsAsked = []
class QuestionMaker {
    constructor(question, option1, option2, option3, realAnswer, score) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.realAnswer = realAnswer;
        this.score = score;
    }
}
/* 
//Fisher–Yates Shuffle https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    questionsAsked.push(array)
    return array;
}
// shuffle(questList) */
//questions listed
questList[0] = new QuestionMaker('Where does Spongebob Squarepants work?', 'The Krusty Krab', 'Red Lobster', 'The Chum Bucket', 'Krusty Crab', 20)
questList[1] = new QuestionMaker('Who was the captain of the Enterprise in the pilot episode of Star Trek?', 'Captain Kirk', 'Captain Pike', 'Captian Jones', 'Captain Pike', 45)
questList[2] = new QuestionMaker('In the arcade game Joust, the player controls a knight riding what animal?', 'Camel', 'Ostrich', 'Horse', 'Ostrich', 30)
questList[3] = new QuestionMaker('The Connecticut Leather Company later became what toy company that was popular in the 1980s for its Cabbage Patch Kids and video game consoles?', 'Cole', 'LeCo', 'Coleco', 'Coleco', 60)
questList[4] = new QuestionMaker('What now retired NBA player starred in the 1996 movie Kazaam', 'Sinbad', 'Shaquille O’Neal', 'Micheal Jordan', 'Shaquille', 25)
questList[5] = new QuestionMaker('The first person shooter video game DOOM was first released in what year?', '1991', '1993', '1992', '1993', 30)
questList[6] = new QuestionMaker('Appearing on the show in 1982, who was the youngest person to ever host Saturday Night Live?', 'Jodi Foster', 'Drew Barrymore', 'Brooke Shields', 'Drew Barrymore', 35)
questList[7] = new QuestionMaker('What was the first publicly traded U.S. company to reach a $1 trillion market cap? ', 'Microsoft', 'Facebook', 'Apple', 'Apple', 25)
questList[8] = new QuestionMaker('In what year did Nintendo release its first game console in North America?', '1985', '1986', '1987', '1985', 35)
questList[9] = new QuestionMaker('What heavy metal element was once known as quicksilver?', 'Iron', 'Mercury', 'Nickel', 'Mercury', 30)
questList[10] = new QuestionMaker('Orson Welles provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Unicron', 40)
questList[11] = new QuestionMaker('What is the most abundant chemical element in the Universe?', 'Hydrogen', 'Oxygen', 'Carbon', 'Hydrogen', 30)
questList[12] = new QuestionMaker('What was the name of the Eminem single that set the world’s record in 2013 for the most words used in a song?', 'Berzerk', 'Loose Yourself', 'Rap God', 'Rap God', 30)
questList[13] = new QuestionMaker('The Star Trek episode "Mirror, Mirror" has certain members of the crew switch places with their counterparts in an alternate, or mirror, universe. Which of these characters did not switch places?', 'Spock', 'Uhura', 'Scotty', 'Spock', 20)
questList[14] = new QuestionMaker('In which film was the spaceship called Nostromo?', '2001: A Space Odyssey', 'Alien', 'Spaceballs', 'Alien', 30)
questList[15] = new QuestionMaker('What is the registry number for the star ship Enterprise in the original series?', 'NCC-1401', 'NCC-1610', 'NCC-1701', 'NCC-1701', 30)
questList[16] = new QuestionMaker("What is Captain Kirk's middle name?", 'Tiberius', 'Titus', 'Thaddeus', 'Tiberius', 25)
questList[17] = new QuestionMaker('Which of the following is not a name used to describe the stable wormhole on "Deep Space Nine"?', 'The Passageway', 'The Galactic Vortex', 'The Eye of the Universe', 'The Galactic Vortex', 30)
questList[18] = new QuestionMaker('Head of Scientific Research at UNIT, this cunning lady has met The Doctor multiple times. She helped him deal with small black cubes, the Zygons and even the terrifying Daleks', 'River Song', 'Clara Oswald', 'Kate Stewart', 'Kate Stewart', 30)
questList[19] = new QuestionMaker('Who is the author of the book “A Brief History of Time”?', 'Stephen Hawking', 'Michio Kaku', 'Lawrence M. Krauss', 'Stephen Hawking', 35)
questList[20] = new QuestionMaker('Leonard Nimoy  provided the voice for which Transformer in “The Transformers: The Movie” released in 1986?', 'Unicron', 'Galvatron', 'Optimus Prime', 'Galvatron', 40)


console.log(questList[10].option1)
console.log(questList[10].question)
answer1.innerHTML = "testing #1"
answer2.innerHTML = "testing #6"

function buttonInput(button, info) {
    button.innerHTML = `${info}`
}
answer1.addEventListener("click", function(evt) {
    evt.preventDefault();
    // answer1.innerHTML = questionsAsked[i].option1
    console.log(answer1.innerHTML)
})

answer2.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(answer2.innerHTML)
})
answer3.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(answer3.innerHTML)
})

function randomPick() {
    for (i = 0; i < 11; i++) {
        let newNum = Math.floor(Math.random() * 20)
        questionsAsked.push(questList[newNum])
        activeQuestion.innerHTML = questionsAsked[i].question
        questNumber.innerHTML = `${i}`
        answer1.innerHTML = questionsAsked[i].option1
        answer2.innerHTML = questionsAsked[i].option2
        answer3.innerHTML = questionsAsked[i].option3

        gamePlay(i)
    }
}
randomPick()
console.log(questionsAsked)

function gamePlay(i) {

}