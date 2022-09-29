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

 
  router: Router;

  title: string;
  pages: number;
  volume: number;
  genre: string;
  imagen: string;

  constructor(public mangaService : MangaService) { }

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
    //manga = new Manga(this.id, this.title, this.pages, this.volume, this.genre, this.imagen);
    console.log(manga.title + ' - ' + manga.genre);
    this.createManga(manga);
    console.log(manga.title + ' - ' + manga.genre);
    this.router.navigateByUrl("/home");
  }

  

}
