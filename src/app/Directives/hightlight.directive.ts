import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input() appHightlight = 'blue'
  constructor(private el : ElementRef) { 
    el.nativeElement.style.color = this.appHightlight;
    
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHightlight;
  }
}
