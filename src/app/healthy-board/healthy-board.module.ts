import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthyBoardComponent } from './pages/healthy-board/healthy-board.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HealthyBoardComponent,
    FruitsListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HealthyBoardComponent
  ]
})
export class HealthyBoardModule { }
