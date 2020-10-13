import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  @Input() points: number;
  @Output() pointsChange: EventEmitter<number> = new EventEmitter<number>();

  public addPoint() {
    this.pointsChange.emit(++this.points);
  }

  constructor() { }
}
