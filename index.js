var read = require('readline-sync');
var style = require('chalk');

var title = style.bold.underline.hex('#fa6232');
var highlight = style.bold.hex('#f7fa32');
var quesClr = style.bold.bgWhite.blue;
var optionsClr = style.bold.bgHex('#D350CC').hex('#0930D7');
var finalScoreClr = style.bold.bgHex('#D350CC').hex('#0930D7');

var rightAnsClr = style.bgHex('#07AC4E').bold.white;
var wrongAnsClr = style.bold.bgRed.white;
var scoreClr = style.inverse.bgBlack.bold.grey;
var wrongClr = style.bold.red;

//Hardcoded
var levelOne = [
  {
    question: "The germans calls this the 'spider monkey' and the italians call it the 'snail'. Which symbol is this?",
    options: ["+", "@", "$", "#"],
    answer: "@"
  }, {
    question: "Find the correctly spelt word.",
    options: ["Benefitted", "Benefited", "Benifited", "Benefeted"],
    answer: "Benefited"
  }, {
    question: "Select the wrongly spelt word in the following.",
    options: ["reminascant", "remembrance", "remnant", "remittance"],
    answer: "reminascant"
  }, {
    question: "Select the term that will come in the place of?7, 11, 19, 31, ? , 67",
    options: ["43", "47", "51", "45"],
    answer: "47"
  }, {
    question: "A tram library for children was launched in ___________, the first of its kind on the occasion of Children's Day.",
    options: ["Gujarat", "Delhi", "Mumbai", "Kolkata"],
    answer: "Kolkata"
  }, {
    question: "When is 'World Toilet Day' celebrated every year?",
    options: ["Nov 16", "Nov 18", "Nov 19", "Esa koi day hota hi nhi"],
    answer: "Nov 19"
  }, {
    question: "Who was the first Indian in space?",
    options: ["Donald Trump", "Vikram Ambalal", "Rakesh Sharma", "Gunjan Saxena"],
    answer: "Rakesh Sharma"
  }, {
    question: "Which team has won the IPL 2020 title?",
    options: ["DC", "MI", "CSK"],
    answer: "MI"
  }, {
    question: "How many countries have been declared as COVID-19 free till 9 June?",
    options: ["4", "9", "7", "12"],
    answer: "9"
  }, {
    question: "What is the currency of Thailand?",
    options: ["Dinar", "Dollar", "Baht", "Rupee"],
    answer: "Baht"
  }
]

var levelTwo = [{
  question: "What is the color of Shinchan's dog Shiro?",
  options: ["Pink", "Yellow", "Cream", "White"],
  answer: "White"
}, {
  question: "What is the vegetable that Shinchan hates to eat?",
  options: ["Beans", "Capsicum", "Carrot", "Garlic"],
  answer: "Capsicum"
}, {
  question: "Whom does Shinchan's teacher Yoshinaga marry?",
  options: ["Kazama", "Suzuki", "Shiro", "None of the Above"],
  answer: "Ishida Junichi"
}, {
  question: "What is the name of Shinchan's mom?",
  options: ["Misae", "Mandy", "Miranda", "Mili"],
  answer: "Misae"
}, {
  question: "What is Gian's passion?",
  options: ["Wrestling", "Creating Mess", "Singing", "Vellapanti"],
  answer: "Singing"
}, {
  question: "Has Nobita ever kissed Gian?",
  options: ["Yes", "No"],
  answer: "Yes"
}, {
  question: "Is Dekisugi the handsome boy whom every girl has a slight crush on?",
  options: ["Yes", "No"],
  answer: "Yes"
}, {
  question: "What are the marks usually scored by Nobita in tests?",
  options: [0, 100, 50],
  answer: 0
}, {
  question: "What city do Oswald and his friends live in?",
  options: ["Building City", "Small Town", "Big City", "Light City"],
  answer: "Big City"
}, {
  question: "Who is Oswald's penguin friend?",
  options: ["Henry", "Weenie", "Daisy", "Oobi"],
  answer: "Henry"
},
]

var levelThree = [
  {
    question: "Why do good girls like bad guys?",
    options: ["hey don't ... they like good guys", `because the dark side has  ${highlight('cookies')}`, "I've had this question for a real long time", "that's a great question"],
    answer: "that's a great question"
  },
  {
    question: `Who is the ${highlight('most popular')} person on TikTok? `,
    options: ["Aamir Sidiqqui", "Jannat Zubair", "Carry Minati", "Avneet Kaur"],
    answer: "Carry Minati"
  }, {
    question: "What was the color of Neha Kakkar's wedding lehenga? ",
    options: ["Same as of Deepika's one", "Same as of Anushka's one", ` ${highlight('Remix')} of (1)&(2).`],
    answer: "Remix of (1)&(2)."
  }, {
    question: `What was the input of Rahul Gandhi's   ${highlight('startup')}, which when processed gives gold as output? `,
    options: ["Ore", "His overused grey matter", "Potato", "Coal"],
    answer: "Potato"
  }, {
    question: "What is catchphrase of Shakti Kapoor from movie \"Raja Babu\"? ",
    options: ["Yeh Teja Teja Kya hai..yeh Teja Teja", "Pachaas Rupey kaat overacting ka ", "Main hoon Nandu...sabka Bandhu", "Pushpa..I hate tears"],
    answer: "Main hoon Nandu...sabka Bandhu"
  },
]


//Processing Input
function printScore(score) {
  console.log(scoreClr(`  Your Score is: ${score}  `));
}

function quizThree() {
  console.log("\n\n\n\t\t\t\t" + title('Promoted to Level 3'));
  var score = 0;
  var randomQs = 0;
  var randomArr = [];

    randomQs = Math.floor(Math.random() * levelThree.length);

  for (i = 0; i < levelThree.length; i++) {

    console.log(`\n \n \n \n` + quesClr(`Question ${i + 1}. ${levelThree[randomQs].question}`));
    var userAns = read.keyInSelect(levelThree[randomQs].options, optionsClr("Ans?"));

    if (levelThree[randomQs].options[userAns] === levelThree[randomQs].answer) {
      console.log("\n" + rightAnsClr("  Correct Answer!! ") + "\n ------------------ ");
      ++score;
      printScore(score);
    }
    else {
      console.log("\n" + wrongAnsClr(`Wrong Answer!!.`) + "\n\n" + optionsClr(`[Correct Answer is : ${levelThree[randomQs].answer} ]`)
        + ` \n --------------------- `);
      printScore(score);
    }
    // do {
    //   randomQs = Math.floor(Math.random() * levelThree.length);
    // } while (randomArr.includes(randomQs));
    // randomArr.push(randomQs);

randomArr.push(randomQs);
    randomQs = Math.floor(Math.random() * levelThree.length);

    while (randomArr.includes(randomQs)&& i<levelThree.length-1) {
      randomQs = Math.floor(Math.random() * levelThree.length);
    }
  }
  console.log(finalScoreClr(`\n\n\t\t  Your Total Score is: ${score}/5 `));

  return score;
}

function quizTwo() {
  console.log("\n\n\n\t\t\t\t" + title('Promoted to Level 2'));
  var score = 0;
var randomQs = 0;
  var randomArr = [];
  randomQs = Math.floor(Math.random() * levelTwo.length);

  for (i = 0; i < levelTwo.length; i++) {

    console.log(`\n \n \n \n` + quesClr(`Question ${i + 1}. ${levelTwo[randomQs].question}`));
    // for(j=0;j<quiz[i].options.length;j++)
    var userAns = read.keyInSelect(levelTwo[randomQs].options, optionsClr("Ans?"));

    if (levelTwo[randomQs].options[userAns] === levelTwo[randomQs].answer) {
      console.log("\n" + rightAnsClr("  Correct Answer!! ") + "\n ------------------ ");
      ++score;
      printScore(score);
    }
    else {
      console.log("\n" + wrongAnsClr(`Wrong Answer!!.`) + "\n\n" + optionsClr(`[Correct Answer is : ${levelTwo[randomQs].answer} ]`)
        + ` \n --------------------- `);
      printScore(score);
    }

randomArr.push(randomQs);
    randomQs = Math.floor(Math.random() * levelTwo.length);

    while (randomArr.includes(randomQs)&& i<levelTwo.length-1) {
      randomQs = Math.floor(Math.random() * levelTwo.length);
    }
  }
  console.log(finalScoreClr(`\n\n\t\t  Your Total Score is: ${score}/10 `));

  return score;
}



function quizOne() {
  console.log("\n\n\n\t\t\t\t" + title(' Level 1'));
  var score = 0;

  var randomQs = 0;
  var randomArr = [];
  randomQs = Math.floor(Math.random() * levelOne.length);

  for (i = 0; i < levelOne.length; i++) {

    console.log(`\n \n \n \n` + quesClr(`Question ${i + 1}. ${levelOne[randomQs].question}`));
    // for(j=0;j<quiz[i].options.length;j++)
    var userAns = read.keyInSelect(levelOne[randomQs].options, optionsClr("Ans?"));

    if (levelOne[randomQs].options[userAns] === levelOne[randomQs].answer) {
      console.log("\n" + rightAnsClr("  Correct Answer!! ") + "\n ------------------ ");
      ++score;
      printScore(score);
    }
    else {
      console.log("\n" + wrongAnsClr(`Wrong Answer!!.`) + "\n\n" + optionsClr(`[Correct Answer is : ${levelOne[randomQs].answer} ]`)
        + ` \n --------------------- `);
      printScore(score);
    }

    randomArr.push(randomQs);
    randomQs = Math.floor(Math.random() * levelOne.length);

    while (randomArr.includes(randomQs)&& i<levelOne.length-1) {
      randomQs = Math.floor(Math.random() * levelOne.length);
    }
  }
  console.log(finalScoreClr(`\n\n\t\t  Your Total Score is: ${score}/10 `));

  return score;
}



//Printing Output

console.log("💖💖💖 " + title(` WELCOME TO THE QUIZ `) + "💖💖💖");

var userName = read.question("\n What’s your name? ");
console.log(highlight(`Hi, ${userName}!`));

if (read.keyInYNStrict("\n Do you wanna play Quiz? ")) {
  // var scoreLevelTwo;
  //  var scoreLevelThree;
  var scoreLevelOne = quizOne();
  if (scoreLevelOne >= 5) {
    var scoreLevelTwo = quizTwo();

    if (scoreLevelTwo >= 7) {
      var scoreLevelThree = quizThree();
      if (scoreLevelThree >= 5) {
        console.log(`\n\n\n\t\t *** 🎀 You score ${rightAnsClr('highest')}🎀 ***\n {Send me ss😘  so that I will update my datalog.}`);
      }
      else {
        console.log(`Congrats! You made it to Final Round. `);
      }
    }
    else
      console.log(`Well Played! Cannot Play Further.`);
  }
  else {
    console.log(`Well Played! Cannot Play Further.`);
  }

  console.log(`\n\n\n\t\t\tThank You.`);
}
else {
  console.log("\n" + wrongClr("That's unfair buddy. 😏"));
  // process.exit();
}