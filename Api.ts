export default class Api {

	private max_options: number = 8;

	play(selectedValue: number) {
		let rnd: number = Math.round(Math.random() * (this.max_options - 1));
		return {
			draw: rnd,
			selected: selectedValue,
			won: rnd == selectedValue
		}
	}

};