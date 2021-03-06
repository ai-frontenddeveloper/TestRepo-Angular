import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { starComponent } from './shared/star.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacePipe, starComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
