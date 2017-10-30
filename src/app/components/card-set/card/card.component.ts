import { Component, EventEmitter, Input, Output } from '@angular/core';
import { uniqueId } from 'lodash';
import { Card } from './card.structure';

@Component({
    selector: 'card',
    templateUrl: '/card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
    @Input() card: Card;

    @Output() cardClicked = new EventEmitter();

    public onCardClicked() {
        this.card.isValueVisible = !this.card.isValueGuessed;
        this.cardClicked.emit(this.card.getId());
    }
}
