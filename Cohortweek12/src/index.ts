// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
//   }
  
//   // For a profile display, only pick `name` and `email`
//   type UserProfile = Pick<User, 'name' | 'email'>;
  
//   type UserProfilePartial = Partial<UserProfile>;

//   const displayUserProfile = (user: UserProfilePartial) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
//   };
  
//   displayUserProfile({
//     name: 'John Doe',
//     email: 'johnde@asda'
//     });

//One way
// type User = {
//     readonly id: number;
//     readonly name: string;
//     readonly email: string;
// }

// const user: User = {
//     id: 1,
//     name: 'John Doe',
//     email: 'johndoe@asda'
// }

//Another way
 
// type Company = {
//      id: number;
//      name: string;
//      email: string;
// }

// const company: Readonly<Company> = {
//     id: 1,
//     name: 'John Doe',
//     email: 'johndoe@asda'
// }

// type User   = { 
//     id:number
//     username: string;
// }

// //Traditional way
// type Users= {
//     [key : string]: User        
// }

// //Record Way
// type UsersRecord = Record<string, User>

// const users:Users = {
//     "ras@asd":{
//         id: 1,
//         username: 'John Doe',
//     },
//     "ras1@asd":{
//         id: 2,
//         username: 'John Doe',
//     },
// }

interface User1 {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User1>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }