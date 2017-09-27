define_ibex_controller({
    name: "MessageForm",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", {
						html:dget(this.options, "doc"),
						transfer: null
						},
                    "Form", this.options ]
            });
        }
    },
    properties: {
	}
});