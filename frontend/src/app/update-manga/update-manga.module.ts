import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMangaPageRoutingModule } from './update-manga-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdateMangaPage } from './update-manga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateMangaPageRoutingModule
  ],
  declarations: [UpdateMangaPage]
})
export class UpdateMangaPageModule {}
