package com.momentary.note.service;

import java.util.List;

import com.momentary.note.model.Note;

public interface NoteService {
	
	public Note getNote(String uid, String nid);
	public List<Note> getNotes(String uid);
}
