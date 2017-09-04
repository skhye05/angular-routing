import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Jonathan',
    username: 'Eljo_Mayunga',
    avatar: 'https://pbs.twimg.com/profile_images/641980136666079232/q7qAbUv3_400x400.jpg'
  },
  {
    id: 1,
    name: 'Marie',
    username: 'MarieInnov',
    avatar: 'https://pbs.twimg.com/profile_images/575723536406343681/rZ2h4kJ6_400x400.jpeg'
  },
  {
    id: 1,
    name: 'Hervinho',
    username: 'herve_243_',
    avatar: 'https://pbs.twimg.com/profile_images/631034634017615872/ovUz2IEX_400x400.jpg'
  },
]);

@Injectable()
export class UserService {

  constructor() { }

  // get all users
  getUsers() {
    return usersPromise;
  }
  // find a user
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));
  }

}
