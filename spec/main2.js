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
    
    // act
    const result = insertDashes(value);
    // log
    console.log("result: ", result);
    
    // assert
    expect(result).toBe(undefined);
    });
});