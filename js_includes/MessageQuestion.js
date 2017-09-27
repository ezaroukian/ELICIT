define_ibex_controller({
    name: "MessageQuestion",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null;
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Message", this.options,
                    "Question", this.options ]
            });
        }
    },
    properties: {
	}
});