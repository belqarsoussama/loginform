import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';



@NgModule({
  imports: [
   [ FlexLayoutModule ],
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule


  ],
  declarations: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
