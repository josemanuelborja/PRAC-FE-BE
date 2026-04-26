import { Component, Input } from '@angular/core';

@Component({
 selector:'app-user-card',
 standalone:true,
 templateUrl:'./user-card.component.html'
})

export class UserCardComponent{

@Input() name = '';
@Input() role = '';
@Input() level = '';

}