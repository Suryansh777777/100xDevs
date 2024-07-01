interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User, 'name' | 'email'>;
  
  type UserProfilePartial = Partial<UserProfile>;

  const displayUserProfile = (user: UserProfilePartial) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
  
  displayUserProfile({
    name: 'John Doe',
    email: 'johnde@asda'
    });