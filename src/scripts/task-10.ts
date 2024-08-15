import { Users } from '../../users';
import { users } from '../../users';

console.log('task-10');
console.log('');

const getSortedUniqueSkills = (users: Users): string[] => {
  return users
    .flatMap(({ skills }) => skills)
    .filter((skill, index, arr) => arr.indexOf(skill) === index)
    .sort((skill_1, skill_2) => skill_1.localeCompare(skill_2));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

export {};
