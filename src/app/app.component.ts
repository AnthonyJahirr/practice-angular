import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-angular';

  fizBuzz(input: number){
    if(input>=0 && input <=100){//validar que sea mayor que 0 y menor que 100
      //validar si es multiplo de 3 para fizz
      if((input%3)==0){
        return 'Fizz'
      }
      //validar si es multiplo de 5 para buzz
      if((input%5)==0){
        return 'Buzz'
      } 
      //validar si es multiplo de 3 y 5 para fizzbuzz
      if((input%3 &&  input%5)==0){
        return 'FizzBuzz'
      } 
    }
    return 'Número invalido'
    
    
  }

}



