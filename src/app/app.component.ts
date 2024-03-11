import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-angular';

 

  fibonacci(valorlimite : number, valorfibo : number = 0, valorviejo : number = 0){
    
    if(valorfibo<=valorlimite){
      console.log('Culminado')
      return true
    }else{
      if(valorfibo<=1){
        valorviejo=valorfibo;
        valorfibo = valorfibo+1;
        console.log("Valor: ",valorfibo)
        this.fibonacci(valorlimite, valorfibo, valorviejo);
      }
      if(valorfibo>1){
        valorfibo=valorviejo+valorfibo;
        console.log("Valor: ",valorfibo)
        this.fibonacci(valorlimite, valorfibo, valorviejo);
      }
      return false
    }

    




  }

}



