import { Users } from '../../users';
import { users } from '../../users';

console.log('task-07');
console.log('');

const calculateTotalBalance = (users: Users): number => {
  return users.reduce((sum, { balance }) => {
    return (sum += balance);
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

export {};
