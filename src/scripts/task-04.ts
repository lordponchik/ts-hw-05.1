import { Users } from '../../users';
import { users } from '../../users';

console.log('task-04');
console.log('');

type GetInactiveUsers = (users: Users) => Users;

const getInactiveUsers: GetInactiveUsers = users => {
  return users.filter(({ isActive }) => !isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

export {};
