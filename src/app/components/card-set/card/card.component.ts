import { Component, Output, EventEmitter } from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'card',
  templateUrl: '/card.component.html'
})

export class Card {
    private readonly id: number = parseInt(uniqueId());
    private value: number = 0;
    private skirt: number = 0;
    
    public isValueVisible: boolean = false;
    public isValueGuessed: boolean = false;
    
    constructor(value: number, skirt: number) {
        this.value = value;
        this.skirt = skirt;
    }
    
    @Output() onClickCard = new EventEmitter(); 
    
    public showCardValue(): number {
        this.isValueVisible = true;
        return this.value;
    }
    
    public hideCard(): void {
        this.isValueVisible = false;
    }
    
    public getId(): number {
        return this.id;
    }
    
    public getValue(): number {
        return this.value;
    }
    
    public onCardClicked() {
        this.isValueVisible = !this.isValueGuessed;
        this.onClickCard.emit(this.getId());
    }
}