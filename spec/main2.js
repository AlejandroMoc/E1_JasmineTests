//PRUEBA 2
function insertDashes(str) {
	// write code here
	}
	/**
	* Test Suite
	*/
describe('insertDashes()', () => {
	it('insert dashes in between chars', () => {
	// arrange
	const value = "aba caba";
	
	// acts
	const result = insertDashes(value);
	// log
	console.log("result: ", result);
	
	// assert
	expect(result).toBe(undefined);
	});
});