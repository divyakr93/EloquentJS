//create an object with specific prototype
let protoRabit = {
	speak(line) {
		console.log(`the ${this.type} rabbit says '${line}'`);
	}
};
let killerrabit = Object.create(protoRabit);
killerrabit.type = "killer";
killerrabit.speak("skree");