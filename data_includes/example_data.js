//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var shuffleSequence = seq("pipeline","plain")

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
        saveReactionTime: true
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

    ["sep", "Separator", { }],

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
	
	["training1", "Message", {
		html: { include: "TrainingB.ext.html" },//mouseover works
		}
	],
	["pipeline", "MessageForm", {
		html: { include: "TrainingB.ext.html" },//mouseover doesn't work (works if ans is same file)
		answers: { include: "TrainingB.ans.html"}
		}
	],
	["pipeline", "MessageForm", {
		html: { include: "Scenario1.ext.html" },
		answers: { include: "Scenario1.ans.html"}
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
    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

  
];
