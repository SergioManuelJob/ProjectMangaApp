import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.page.html',
  styleUrls: ['./add-manga.page.scss'],
})
export class AddMangaPage implements OnInit {

  constructor(public mangaService : MangaService) { }

  ngOnInit() {
  }

  

}
