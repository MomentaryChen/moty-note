package com.momentary.note.dao;

import com.momentary.note.model.Note;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoteDao {
	
	public Note findById(String uid, String nid);
	public List<Note> findAll(String uid);

}
