import { Users } from '../../users';
import { users } from '../../users';

console.log('task-03');
console.log('');

type GetUsersWithGender = (users: Users, gender: string) => string[];

const getUsersWithGender: GetUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(({ name }) => name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

export {};
