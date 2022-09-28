package com.Sergio.manga.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.Sergio.manga.entity.model.Manga;

public interface IMangaDao extends CrudRepository<Manga, Long> {

	
	
}
