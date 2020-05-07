const validate = string =>
	string.replace(/ /g, '')
		.split('')
		.filter(function (item, pos, self) {
			return self.indexOf(item) == pos;
		})
		.join('');

const solution = (jewels, stones) => {
	console.log(validate(jewels));
	const result = stones.match(new RegExp(`[${validate(jewels)}]`, 'g')) || [];
	return result.length;
}
	