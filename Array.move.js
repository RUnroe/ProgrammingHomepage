Array.prototype.move || Object.defineProperty(Array.prototype, "move", {
	value: function (index, howMany, toIndex) {
		var
		array = this,
		index = parseInt(index) || 0,
		index = index < 0 ? array.length + index : index,
		toIndex = parseInt(toIndex) || 0,
		toIndex = toIndex < 0 ? array.length + toIndex : toIndex,
		toIndex = toIndex <= index ? toIndex : toIndex <= index + howMany ? index : toIndex - howMany,
		moved;

		array.splice.apply(array, [toIndex, 0].concat(moved = array.splice(index, howMany)));

		return moved;
	}
});