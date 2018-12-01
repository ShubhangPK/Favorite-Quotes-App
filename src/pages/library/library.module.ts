import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { LibraryPage } from './library';

@NgModule({
  declarations: [
    LibraryPage,
  ],
  imports: [
    IonicPageModule.forChild(LibraryPage),
  ],
})
export class LibraryPageModule {}
