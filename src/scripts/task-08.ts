import { Users } from '../../users';
import { users } from '../../users';

console.log('task-08');
console.log('');

type GetUsersWithFriend = (users: Users, friendName: string) => string[];

const getUsersWithFriend: GetUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

export {};
