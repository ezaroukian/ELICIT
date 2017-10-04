define_ibex_controller({
    name: "MessageForm",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
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