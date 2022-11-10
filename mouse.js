mouse.js
function Mouse() {
	this.name = name;
	this.dead = flase;
}

Mouse.prototype.die = function() {
	this.dead = true;
}

module.exports = Mouse