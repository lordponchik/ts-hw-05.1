import { users } from '../../users';
import { Users } from '../../users';

console.log('task-01');
console.log('');

type GetUserNames = (users: Users) => string[];

const getUserNames: GetUserNames = users => {
  return users.map(({ name }) => name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

export {};
