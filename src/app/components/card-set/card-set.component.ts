import { Component, Input, Output, EventEmitter, ViewChildren, OnChanges } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Card } from './card/card.structure';

@Component({
    selector: 'card-set',
    templateUrl: '/card-set.component.html',
    styleUrls: ['./card-set.component.css']
})

export class CardSetComponent implements OnChanges {
    public cards: Card[] = [];
    private visibleCard: Card | null = null;

    @Input() cardsCount: number;
    @Input() skirt: number;

    @ViewChildren(CardComponent) cardsComponents: CardComponent[];

    @Output() allCardsGuessed = new EventEmitter();

    ngOnChanges() {
        if (this.cardsCount % 2 !== 0) {
            throw Error('Incorrect number of cards');
        }
        this.generateCards(this.cardsCount, this.skirt);
        this.shuffleCards();
    }

    public shuffleCards(): void {
        this.cards.sort(() => {
            return Math.random() > 0.5 ? -1 : 1;
        });
    }

    private generateCards(cardsCount: number, skirt: number): void {
        for (let i = 0; i < cardsCount; i++) {
            const card: Card = new Card(Math.floor(i / 2), skirt);
            this.cards.push(card);
        }
    }

    public cardClicked(cardId: number): void {
        setTimeout(() => {
            if (this.visibleCard) {
                const currentVisibleCard: Card | undefined = this.cards.find(card => card.getId() === cardId);
                if (currentVisibleCard) {
                    if (currentVisibleCard.getValue() === this.visibleCard.getValue()) {
                        currentVisibleCard.isValueGuessed = true;
                        this.visibleCard.isValueGuessed = true;
                    } else {
                        currentVisibleCard.isValueVisible = false;
                        this.visibleCard.isValueVisible = false;
                    }
                    this.visibleCard = null;

                    if (this.isAllCardsGuessed()) {
                        this.allCardsGuessed.emit();
                    }
                }
            } else {
                const currentVisibleCard: Card | undefined = this.cards.find(card => card.getId() === cardId);
                this.visibleCard = currentVisibleCard ? currentVisibleCard : null;
            }
        }, 1000);
    }

    private isAllCardsGuessed(): boolean {
        return this.cards.every(card => card.isValueGuessed);
    }


}
