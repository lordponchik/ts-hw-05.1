import { Users } from '../../users';
import { users } from '../../users';

console.log('task-06');
console.log('');

type GetUsersWithAge = (users: Users, min: number, max: number) => Users;

const getUsersWithAge: GetUsersWithAge = (users, min, max) => {
  return users.filter(({ age }) => age >= min && age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

export {};
