import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // simply we are creating a input prop to bind this with user in html.
  @Input({required:true}) id!: string;
  @Input({required:true}) name!: string;

  // now we want the response from here to be sent to app-component.
  // <string/> can be skipped but it is a good practice to use specific data u are expecting.
  @Output() selected = new EventEmitter<string>();

  // creating a method for eventListener
  // also to change the state of this property.
  onSelectClick() {
    this.selected.emit(this.id);
  }

}
