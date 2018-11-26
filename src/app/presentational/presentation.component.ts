import { Component, ChangeDetectionStrategy,Input } from '@angular/core';



@Component({
  selector:'app-pres',
  templateUrl:'./presentation.component.html',
  styleUrls:[],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class PresentationComponent{

  @Input() post;





}
