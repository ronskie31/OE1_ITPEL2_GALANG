import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = 'BULACAN BOY';

  onChangeText(){
    this.text = 'WELCOME to BULACAN!';
  }

  onOriginalText(){
    this.text = 'SHEESHHHH!';
}
}
