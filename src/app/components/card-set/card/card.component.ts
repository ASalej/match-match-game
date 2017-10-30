import { Component, Output, EventEmitter, Input } from '@angular/core';
import { uniqueId } from 'lodash';
import { Card } from './card.structure';

@Component({
    selector: 'card',
    templateUrl: '/card.component.html'
})

export class CardComponent {
    @Input() skirt;
    @Input() value;

    @Output() cardClicked = new EventEmitter();

    private card = new Card(this.value, this.skirt);

    public onCardClicked() {
        this.card.isValueVisible = !this.card.isValueGuessed;
        this.cardClicked.emit(this.card.getId());
    }
}
