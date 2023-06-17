package com.momentary.note.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.momentary.note.dao.NoteDao;
import com.momentary.note.model.Note;
import com.momentary.note.service.NoteService;

@Service
public class NoteServiceImpl implements NoteService{
	
	@Autowired NoteDao noteDao;
	
	@Override
	public Note getNote(String uid, String nid) {
		// TODO Auto-generated method stub
		
		return noteDao.findById(uid, nid);
	}

	@Override
	public List<Note> getNotes(String uid) {
		// TODO Auto-generated method stub
		
		return noteDao.findAll(uid);
	}

}
