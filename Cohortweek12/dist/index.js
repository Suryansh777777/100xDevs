"use strict";
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
};
displayUserProfile({
    name: 'John Doe',
    email: 'johnde@asda'
});
