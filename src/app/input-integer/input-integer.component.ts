import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent{

  @Input() 
   quantity!: number;

   @Input() 
   max!: number; 

   @Output()
   quantityChange: EventEmitter<number> = new EventEmitter<number>();
   
   @Output()
   maxReached: EventEmitter<string> = new EventEmitter<string>();
  
   upQuantity(): void{
    if(this.quantity < this.max){      
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el máximo de unidades");
    }
  }

  downQuantity(): void{
    if(this.quantity>0){      
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
