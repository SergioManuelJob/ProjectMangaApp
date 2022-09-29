import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manga } from '../interfaces/manga';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.page.html',
  styleUrls: ['./add-manga.page.scss'],
})
export class AddMangaPage implements OnInit {

  title: string;
  pages: number;
  volume: number;
  genre: string;
  imagen: string;

  constructor(public mangaService : MangaService, private router: Router) { }

  ngOnInit() {
  }

  createManga(manga: Manga) {
    this.mangaService.createManga(manga);
  }

  onSubmit(){
    let manga: Manga = {
      title: this.title,
      pages: this.pages,
      volume: this.volume,
      genre: this.genre,
      imagen: this.imagen
    };
    this.createManga(manga);
    this.router.navigate(["/home"]);
  }

  

}
