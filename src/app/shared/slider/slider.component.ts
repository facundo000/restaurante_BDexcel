import { AfterViewInit, Component } from '@angular/core';
// import { KeenSliderInstance } from 'keen-slider';
import { ElementRef, ViewChild } from '@angular/core';
// import  KeenSlider  from 'keen-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  // @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  
  // slider!: KeenSliderInstance;

  ngAfterViewInit() {
    // this.slider = new KeenSlider(this.sliderRef.nativeElement, {
    //   loop: true
    // });
  }

  // ngOnDestroy() {
  //   if (this.slider) this.slider.destroy()
  // }
}
