let protorabbit = {
	speak(line) {
		console.log(`the ${this.type} rabbit says '${line}'`);
	}
};
function makerabbit(type)
{
	let rabbit = Object.create(protorabbit);
	rabbit.type = type;
	return rabbit;
}
let whiterabbit = new makerabbit("white");
whiterabbit.speak("hungry");