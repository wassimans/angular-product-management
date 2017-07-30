import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5 ;
  }

  onClick(): void {
    this.ratingClicked.emit('rating clicked!');
  }
}
