class User {
   firstName;
   lastName;
   middleName;

   constructor(data,userService){
       this.firstName = data.firstName || '';
       this.lastName = data.lastName || '';
       this.middleName = data.middleName || '';
       this.id = data.id;
       this.userService = userService;
   }

   get fullName(){
       if(this.middleName.length>0){
           return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
       }
       return `${this.firstName} ${this.lastName}`
   }

   async getMyFullUserData(){
       return this.userService.getUserById(this.id);
   }
   sayMyName(){
       window.alert(this.fullName);
   }
}
