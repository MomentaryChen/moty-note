package com.momentary.note.model.res;

import java.util.List;

import com.momentary.note.model.Note;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoteRes {
	private String code;
	private String msg;
	private Note note;
	private List<Note> notes;
}
