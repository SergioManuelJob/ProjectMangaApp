import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from '../interfaces/manga';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.page.html',
  styleUrls: ['./update-manga.page.scss'],
})
export class UpdateMangaPage implements OnInit {

  @Input() id: number;

  title: string;
  pages: number;
  volume: number;
  genre: string;
  imagen: string;

  constructor(private mangaService: MangaService, private activatedRoute: ActivatedRoute, private router: Router) {
    let manga: Manga;
    mangaService.getOneManga(this.id).subscribe(data => {
      manga = data;
    });
    this.title = manga.title;
    this.pages = manga.pages;
    this.volume = manga.volume;
    this.genre = manga.genre;
    this.imagen = manga.imagen;
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
  }

  onSubmit() {
    let manga: Manga = {
      title: this.title,
      pages: this.pages,
      volume: this.volume,
      genre: this.genre,
      imagen: this.imagen
    };
    this.updateManga(manga);
    this.router.navigate(["/home"]);
  }

  updateManga(manga: Manga){
    this.mangaService.updateManga(this.id, manga);
  }





}
