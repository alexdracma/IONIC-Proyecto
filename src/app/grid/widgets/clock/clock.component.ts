import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {

  @ViewChild('hrHand', { static: false }) hrHand: ElementRef;
  @ViewChild('minHand', { static: false }) minHand: ElementRef;
  @ViewChild('secHand', { static: false }) secHand: ElementRef;

  @Input() editable: boolean;
  
  @Output() delete = new EventEmitter();

  askDeleteWidget() {
    this.delete.emit()
  }

  ngOnInit() {
    setInterval(() => {
      this.updateClock(new Date());
    }, 1000)
  }

  private updateClock(date: Date) {
    this.secHand.nativeElement.style.transform = 'rotate(' +
      date.getSeconds() * 6 + 'deg)';
    
    this.minHand.nativeElement.style.transform = 'rotate(' +
      date.getMinutes() * 6 + 'deg)';
    
    this.hrHand.nativeElement.style.transform = 'rotate(' +
      (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
  }

}
