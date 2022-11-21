const func = {
	pubFunc(word) {
		let firstChar = word.charAt(0);
		let afterFirst = word.slice(1);
		return firstChar.toUpperCase() + afterFirst;
	},
};

module.exports = func;
