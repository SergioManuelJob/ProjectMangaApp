package com.Sergio.manga.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Sergio.manga.entity.model.Manga;
import com.Sergio.manga.entity.service.IMangaService;

@RestController
@CrossOrigin(origins = "*")
public class MangaController {
	
	@Autowired
	IMangaService mangaService;
	
	@GetMapping("/manga")
	public List< Manga > getAll() {
		return mangaService.getAll();
	}
	
	@GetMapping("/manga/{id}")
	public Manga getOne(@PathVariable(value = "id")long id) {
		return mangaService.getOne(id);
	}
	
	@PostMapping("/manga")
	public void post(Manga manga) {
		mangaService.post(manga);
	}
	
	@PutMapping("/manga/{id}")
	public void put(Manga manga,@PathVariable(value = "id") long id) {
		mangaService.put(manga, id);
	}
	
	@DeleteMapping("/manga/{id}")
	public void delete(Manga manga, @PathVariable(value = "id") long id) {
		mangaService.delete(id);
	}
	
}
