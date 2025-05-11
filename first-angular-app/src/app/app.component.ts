import { Component } from '@angular/core';
import { HeaderComponent } from './module/header/header.component';
import { UserComponent } from "./module/user/user.component";
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './module/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // we will create a property that will help as binder to user, basically tell what to take input of.
  users = DUMMY_USERS;

  // method for output.
  onSelectedClick(id: string){
    console.log("the id is" + id);

  }
}
