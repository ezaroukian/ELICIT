//--------------------------------------------------
//EGZ - added to replace shuffle for shorter version
function oneOf() { 
	console.log("oneOf");
	return new OneOf($.map(oneOf.arguments, randomize));
}
function OneOf(args) {
	console.log("OneOf");
    this.args = args;

    this.run = function(arrays) {
		var es = evenShuffle(arrays);
		//console.log("    the first", Array.isArray(es), es[0].type, "(", es[1].type, ")",  );
        return [es[0]];
    }
}
//--------------------------------------------------