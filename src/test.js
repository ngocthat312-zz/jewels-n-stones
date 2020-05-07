const validate = string =>
	string.replace(/ /g, '')
		.split('')
		.filter((item, pos, self) => {
			return self.indexOf(item) == pos;
		})
		.join('');

const solution = (jewels, stones) => {
	const result = stones.match(new RegExp(`[${validate(jewels)}]`, 'g')) || [];
	return result.length;
}
	
