import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { DialogService } from "primeng/dynamicdialog";
import { ToolbarNavigationComponent } from './components/toolbar-navigation/toolbar-navigation.component'

@NgModule({
  declarations: [
    ToolbarNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule,

    //PrimeNg
    ToolbarModule,
    CardModule,
    ButtonModule
  ],
  exports: [ToolbarNavigationComponent],
  providers: [DialogService, CurrencyPipe]
})

export class SharedModule {}
