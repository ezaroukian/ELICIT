//EGZ - added to replace shuffle for shorter version
function oneOf() { 
	return new OneOf($.map(oneOf.arguments, randomize));
}
function OneOf(args) {
    this.args = args;

    this.run = function(arrays) {
		var es = evenShuffle(arrays);
		//console.log("    the first", Array.isArray(es), es[0].type, "(", es[1].type, ")",  );
        return [es[0]];
    }
}