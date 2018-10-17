import { Component, ViewChild, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExpanded = false
  @ViewChild("cc") CardContent: any

  constructor(public renderer: Renderer) {
  }

  ngOnInit(){
    this.renderer.setElementStyle(this.CardContent.nativeElement, "webkitTransition","max-height 500ms, padding 500px")
  }

  toggleAccordion(){
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "0px")
    }
    else{
      this.renderer.setElementStyle(this.CardContent.nativeElement, "max-height", "500px")
    }

    this.accordionExpanded = !this.accordionExpanded
  }
}
