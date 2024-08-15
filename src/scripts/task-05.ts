import { Users } from '../../users';
import { User } from '../../users';
import { users } from '../../users';

console.log('task-05');
console.log('');

type GetUserWithEmail = (users: Users, email: string) => User | string;

const getUserWithEmail: GetUserWithEmail = (users, email) => {
  return users.find(user => user.email === email) || 'Not found';
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
console.log(getUserWithEmail(users, 'wasd@omatom.com')); // "not found"

export {};
