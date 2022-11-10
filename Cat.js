Cat.js
function cat() {
	 	this.stomaach = [];
}

Cat.prototype.eat = function (mouse) {
	this.stomaach.push(mouse)
}

module.exports = Cat