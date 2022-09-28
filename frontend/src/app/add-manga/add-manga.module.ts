import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMangaPageRoutingModule } from './add-manga-routing.module';

import { AddMangaPage } from './add-manga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMangaPageRoutingModule
  ],
  declarations: [AddMangaPage]
})
export class AddMangaPageModule {}
