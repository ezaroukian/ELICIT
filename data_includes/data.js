

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
		continueMessage: "Click here to continue"
    },
	"MessageForm", {//This doesn't seem to work, I put directly in Form above
		contMess: "Click here to submit your answer and continue",
		timeoutForm: 20*60*1000
	}

];

var items = [

//    ["sep", "Separator", { 
//		transfer: "keypress",
//		normalMessage: "When ready, press any key to continue to the next scenario"
//	}],
	["inst", "Question", {
			instructions: "Your answer to this question will not affect your eligibility for this experiment.",
			q: "Do you consider English your first or primary language?",
			as: ["Yes", "No"],
			randomOrder: "false",
			presentHorizontally: "true",
			countsForProgressBar: "false",
			hideProgressBar: "false"	
		}
	],
    ["sep", "Message", { 
		html: "",
		continueMessage: "When ready, click to continue to the next scenario"
	}],

	["middle", "Message", { 
		html: "<p>You have completed the first half of this experiment.</p>",
		continueMessage: "Click here to continue to the second half of the experiment"
	}],

//	["practice-pipeline", "Message", {
//		html: { "Here's a pipeline practice, which will come with instruction. IBEX won't check the answer, so I'll either have to find a way to do it myself or just provide it for the user to compare (before/after submit)" }
//		}
//	],
//	["practice-pipeline", "MessageForm", {
//		html: { include: "Scenario2.ext.html" },
//		answers: { include: "Scenario2.ans.html"}
//		}
//	],
	["default", "Message", {
		html: "Something went wrong and default was used"
		}
	],
	["inst", "Message", {
		html: {include: "instructions.html"}
		}
	],
	/* ["trainN", "Message", {
		html: "<p>On the next screen you will see a practice scenario with four sentences without markup.</p><p>These sentences will not contain sufficient information to determine the who/what/when/where of the terrorist plot, but go ahead and make your best guess so that you can practice entering and submitting you answer.</p><p>Again, this is only a practice scenario. Feel free to take as much time as you need.</p> ",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainN", "MessageForm", {
		html: {include: "train.orig.html"},
		answers: { include: "train.ans.html"},
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainN", "Message", {
		html: "<p>You have completed the training scenario. The experiment will now begin, and you will be shown two full scenarios without markup.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "Message", {
		html: "<p>On the next screen you will see a practice scenario with four marked up sentences.</p><p>These sentences will not contain sufficient information to determine the who/what/when/where of the terrorist plot, but go ahead and make your best guess so that you can practice entering and submitting you answer.</p><p>Again, this is only a practice scenario. Feel free to take as much time as you need.</p> ",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "MessageForm", {
		html: {include: "train.ext.html"},
		answers: { include: "train.ans.html"},
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "Message", {
		html: "<p>You have completed the training scenario. The experiment will now begin, and you will be shown two full scenarios with markup.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	], */
//	["pipeline", "Form", {//testing timeout
//		html: "<p>Timeout?</p>",
//		timeout: 5*1000
//		}
//	],
//	["pipeline", "MessageForm", {//testing timeout
//		html: "<p>Timeout?</p>",
//		answers: "<p>Message+Form</p>",
//		timeoutForm: 2*1000
//		}
//	],
	
//	["pipeline", "MessageForm", {
//		html: { include: "TrainingB.ext.html" },
//		answers: { include: "TrainingB.ans.html"},//trying to do select with required
//		validators: {
//            who: function (s) { if (s!="") return true; else return "Bad value for \u2018age\u2019"; }
//        },
//		}
//	],
	["pipeline", "MessageForm", {
		html: { include: "Scenario1.ext.html" },
		answers: { include: "Scenario1.ans.html"},
		}
	],
	["pipeline", "MessageForm", {
		html: { include: "Scenario4.ext.html" },
		answers: { include: "Scenario4.ans.html"}
		}
	],
	["plain", "MessageForm", {
		html: { include: "Scenario5.orig.html" },
		answers: { include: "Scenario5.ans.html"}
		}
	],
	["plain", "MessageForm", {
		html: { include: "Scenario7.orig.html" },
		answers: { include: "Scenario7.ans.html"}
		}
	],
//	["plain", "MessageForm", {
//		html: { include: "Scenario8.orig.html" },
//		answers: { include: "Scenario8.ans.html"}
//		}
//	],
	["toSUS","Message", {html: '<p>You will now be asked a series of questions about the style of document (with/without markup) you just used to answer the who/what/when/where questions.</p><p>In these questions, "the system" refers to the style of document (with/without markup) you used.</p>'}
	],
	
	["end","Message", {
		html: "<p>Thank you for your participation. Your results will help us determine how best to automatically extract information from text and present it to decision makers.</p>",
		continueMessage: "Click here to send your answers to the server and complete the experiment"
		}
	],
	
	
    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
	["test-after", "Message", { html: {include: 'test.confirm.html'}} ]

  
];

//Fit random block/scenario in here
i = Math.random();
j = Math.random();
console.log(i);
switch(true){
	case i>=5/6.0:
	console.log("i>=.833");
		if(j<.5){
			var shuffleSequence = ss6_il;
			items = items.concat(p6_il);}
		else{
			var shuffleSequence = ss6_li;
			items = items.concat(p6_li);}
		break;
	case i>=4/6.0:
		console.log(".66<=i<.833");
		if(j< .5){
			var shuffleSequence = ss5_il;
			items = items.concat(p5_il);}
		else{
			var shuffleSequence = ss5_li;
			items = items.concat(p5_li);}
		break;	
	case i>=3/6.0:
		console.log(".5<=i<.66");
		if(j<.5){
			var shuffleSequence = ss4_il;
			items = items.concat(p4_il);}
		else{	
			var shuffleSequence = ss4_li;
			items = items.concat(p4_li);}
		break;
	case i>=2/6.0:
		console.log(".33<=i<.5");
		if(j<.5){
			var shuffleSequence = ss3_il;
			items = items.concat(p3_il);}
		else{	
			var shuffleSequence = ss3_li;
			items = items.concat(p3_li);}
		break;	
	case i>=1/6.0:
		console.log(".166<=i<.33");
		if(j<.5){
			var shuffleSequence = ss2_il;
			items = items.concat(p2_il);}
		else{	
			var shuffleSequence = ss2_li;
			items = items.concat(p2_li);}
		break;
	case i>=0:
		console.log("0<=i");
		if(j<.5){
			var shuffleSequence = ss1_il;
			items = items.concat(p1_il);}
		else{	
			var shuffleSequence = ss1_li;
			items = items.concat(p1_li);}
		break;
	default:
		var shuffleSequence = seq("default");
}
if(j<.5){
	items = items.concat(training_il);
	items = items.concat(comments_il);}
else{
	items = items.concat(training_li);
	items = items.concat(comments_li);}
console.log(j);
if(j<.5)
	console.log("il");
else	
	console.log("li");
	

//alert(items);
items = items.concat(SUSItems);

//items = [['1.ext.train', 'MessageFormC', {'hideProgressBar': 'true', 'html': {'include': 'train.ext.html'}, 'answers': {'include': 'train.ans.html'}, 'countsForProgressBar': 'false'}], ["train-after", "Message", { 'html': {'include': 'train.confirm.html'}} ]]

//shuffleSequence = seq("1.ext.train", "train-after");