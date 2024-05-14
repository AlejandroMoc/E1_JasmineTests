//Test Suite
describe(`${User.name} Class`, () => {
   it('exists', () => {
       //assert
       expect(User).toBeDefined()
   });

   let model;

   beforeEach(() => {
       model = new User();
   });

   describe('additional matcher examples', () => {
       //tobeDefined(), toEqual()

   });
});

