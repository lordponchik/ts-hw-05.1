import { Users } from '../../users';
import { users } from '../../users';

console.log('task-09');
console.log('');

const getNamesSortedByFriendsCount = (users: Users): string[] => {
  return users
    .sort((user_1, user_2) => user_1.friends.length - user_2.friends.length)
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

export {};
