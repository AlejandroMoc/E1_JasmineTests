//Test Suite
describe(`${User.name} Class`, () => {
   it('exists', () => {
       //assert
       expect(User).toBeDefined()
   });

   let model;

   beforeEach(()=>{
       model = new User();
   });

   describe('additional matcher examples', () => {
       //toBeDefined(), toEqual()
       it('gets full name pieces', () => {
           //arrange
           const firstName = 'César';
           const middleName = 'Zaniru';
           const lastName = 'Guerra';

           //act
           model = new User({firstName, middleName, lastName});

           //assert
           expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
       });
   });
});

