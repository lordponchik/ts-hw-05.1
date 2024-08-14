import { Users } from '../../users';
import { users } from '../../users';

console.log('task-02');
console.log('');

type GetUsersWithEyeColor = (users: Users, color: string) => Users;

const getUsersWithEyeColor: GetUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

export {};
