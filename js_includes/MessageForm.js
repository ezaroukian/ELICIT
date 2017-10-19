define_ibex_controller({
    name: "MessageForm",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [2],
                children: [
                    "Message", this.options,
					"Message", {
						html: { include: "clock.html"},//I built in a clock! Probably not an A+ idea, but easy for now
						transfer: null
						}, 
                    "Form", {
						html:dget(this.options, "answers"),
						timeout:dget(this.options, "timeoutForm"),
						continueMessage:dget(this.options, "contMess")
					}]
            });
        }
    },
    properties: {
	    obligatory: ["html"],
		countsForProgressBar: true,
		htmlDescription: function (opts) {
			return truncateHTML(htmlCodeToDOM(opts.html), 100);
		}
	}
});