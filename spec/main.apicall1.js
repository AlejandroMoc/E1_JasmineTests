//Test Suite
describe(`${User.name} Class`, () => {
   let model;
   let mockUserService;

   beforeEach(()=>{
       mockUserService={
           lastId:null,
           user: {},
           getUserById(id){
               this.lastId=id;
               return this.user;
           }
       };
       const data = { firstName: 'Dylan', middleName: 'Christopher', lastName: 'Israel', id: 1};
       model = new User(data, mockUserService);
   });

   describe(`getMyFullUserData`, () => {
       it('passes id to get user', async () => {
           //arrange
           mockUserService.lastId=null;

           //act
           await model.getMyFullUserData();

           //asert
           expect(mockUserService.lastId).toBe(1);
       });

       it('gets full user data', async () => {
           //arrange
           mockUserService.user = new User({
               firstName: 'Juan',
               middleName: 'Programa',
               lastName: 'Bien :)',
               id: 2
           });
           //act

       });

   });
});


