import { Component, OnInit } from '@angular/core';

export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
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
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: User[] = users;

  constructor() { }

  ngOnInit() {
  }

}
