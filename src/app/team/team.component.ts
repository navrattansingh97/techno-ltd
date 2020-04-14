import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
s:string;
  constructor(private data: DataService) { }
  users: Object;
  ngOnInit(): void {
   this.s=this.data.helloService();

   this.data.getUsers().subscribe(data => {
    this.users = data
    console.log(this.users);
  }
);

  }
  
}
