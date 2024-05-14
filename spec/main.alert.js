//Test Suite
describe(`${User.name} Class`, () => {

    let model;

    beforeEach(()=>{
        model = new User();
    });

    describe(`say my name`, () => {
        it('alerts the full name of user', () => {
            //arrange
            model.firstName="Dylan";
            model.lastName="Israel";
            spyOn(window, 'alert');

            //act
            model.sayMyName();

            //asert
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith('Dylan Israel');
        });
    });
});