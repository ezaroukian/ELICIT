//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var shuffleSequence = seq("inst", "trainM", sepWith("sep","pipeline"),'toSUS', 'NL.2.p.1', 'NL.2.n.2', 'NL.2.p.3', 'NL.2.n.4', 'NL.2.p.5', 'NL.2.n.6', 'NL.2.p.7', 'NL.2.n.8', 'NL.2.p.9', 'NL.2.n.10',"comments", "trainN", sepWith("sep","plain"),'toSUS', 'NL.2.p.1', 'NL.2.n.2', 'NL.2.p.3', 'NL.2.n.4', 'NL.2.p.5', 'NL.2.n.6', 'NL.2.p.7', 'NL.2.n.8', 'NL.2.p.9', 'NL.2.n.10',"comments");//rshuffle



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

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { 
		transfer: "keypress",
		normalMessage: "When ready, press any key to continue to the next scenario"
	}],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).
	
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
		html: "A message introducing no markup",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainN", "MessageForm", {
		html: {include: "train.orig.html"},
		answers: { include: "ans.blank.html"},
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainN", "Message", {
		html: "<p>You have completed the training scenario. The experiment will now begin.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "Message", {
		html: "<p>On the next screen you will see a practice scenario with 4 marked up sentences.</p><p>These sentences will not contain sufficient information to determine the who/what/when/where of the terrorist plot, but go ahead and make your best guess so that you can practice entering and submitting you answer.</p><p>Again, this is only a practice scenario. Feel free to take as much time as you need.</p> ",
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "MessageForm", {
		html: {include: "train.ext.html"},
		answers: { include: "ans.blank.html"},
		hideProgressBar: true,
		countsForProgressBar: false
		}
	],
	["trainM", "Message", {
		html: "<p>You have completed the training scenario. The experiment will now begin.</p><p>Remember to work as quickly as you can without sacrificing accuracy.</p>",
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
	
	["pipeline", "MessageForm", {
		html: { include: "TrainingB.ext.html" },
		answers: { include: "TrainingB.ans.html"},//trying to do select with required
		validators: {
            who: function (s) { if (s!="") return true; else return "Bad value for \u2018age\u2019"; }
        },
		}
	],
	["pipeline", "MessageForm", {
		html: { include: "Scenario1.ext.html" },
		answers: { include: "ans.blank.html"},
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
	["plain", "MessageForm", {
		html: { include: "Scenario8.orig.html" },
		answers: { include: "Scenario8.ans.html"}
		}
	],
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

items = items.concat(newSUSItems);
