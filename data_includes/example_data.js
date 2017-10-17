//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
//var shuffleSequence = seq("inst", seq("trainM", sepWith("sep","pipeline"),'toSUS', 'NL.2.p.1', 'NL.2.n.2', 'NL.2.p.3', 'NL.2.n.4', 'NL.2.p.5', 'NL.2.n.6', 'NL.2.p.7', 'NL.2.n.8', 'NL.2.p.9', 'NL.2.n.10',"comments"), seq("trainN", sepWith("sep","plain"),'toSUS', 'NL.2.p.1', 'NL.2.n.2', 'NL.2.p.3', 'NL.2.n.4', 'NL.2.p.5', 'NL.2.n.6', 'NL.2.p.7', 'NL.2.n.8', 'NL.2.p.9', 'NL.2.n.10',"comments"));//rshuffle



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

    ["sep", "Separator", { 
		transfer: "keypress",
		normalMessage: "When ready, press any key to continue to the next scenario"
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

	["inst", "Message", {
		html: {include: "instructions.html"}
		}
	],
	["trainN", "Message", {
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
		html: "<p>You have completed the training scenario. The experiment will now begin, and you will be shown two full scenarios without markup</p>",
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
	],
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
	["toSUS","Message", {html: "<p>You will now be asked a series of questions about the style of document you just used to answer the who/what/when/where questions.</p>"}
	],
	["comments","Form", {html: "Comments:<br><textarea rows='4' cols='50'></textarea>"}
	],
    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

  
];

//Fit random block/scenario in here
i = Math.random();
j = Math.random();
switch(true){
	case i<.25:
		items = items.concat(p1);
		if(j< .5)
			var shuffleSequence = ss1_il;
		else	
			var shuffleSequence = ss1_li;
		break;
	case i>=.25 & i<.5:
		items = items.concat(p2);
		if(j< .5)
			var shuffleSequence = ss2_il;
		else	
			var shuffleSequence = ss2_li;		
		break;
	case i>=.5 & i<.75:
		items = items.concat(p3);
		if(j< .5)
			var shuffleSequence = ss3_il;
		else	
			var shuffleSequence = ss3_li;
		break;
	case i>=.75:
		items = items.concat(p4);
		if(j< .5)
			var shuffleSequence = ss4_il;
		else	
			var shuffleSequence = ss4_li;
		break;
}
items = items.concat(SUSItems);
