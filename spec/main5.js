//Test Suite
describe(`${User.name} Class`, () => {
    describe(`default values`, () => {
        it('first name defaults to empty', () => {
            // arrange
            const data = { firstName: null };
            // act
            const model = new User(data);
            // assert
            expect(model.firstName).toBe('');
        });

        it('last name defaults to empty', () => {
            // arrange
            const data = { lastName: null };
            // act
            const model = new User(data);
            // assert
            expect(model.lastName).toBe('');
        });

        it('middle name defaults to empty', () => {
            // arrange
            const data = { middleName: null };
            // act
            const model = new User(data);
            // assert
            expect(model.middleName).toBe('');
        });
    });

    describe('full name', ()=>{
        beforeEach(() => {
            model = new User({firstName: 'Dylan', lastName: 'Israel'});
        });

        it('middle initial when middlename is defined with first and last',() => {
            //arange
            model.middleName='Christopher';
            //act
            const result = model.fullName;
            //assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });

        it('when no middle name return just first and last',() => {
            //arange
            model.middleName='';
            //act
            const result = model.fullName;
            //assert
            expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });

});