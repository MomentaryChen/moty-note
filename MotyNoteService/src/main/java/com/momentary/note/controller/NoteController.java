package com.momentary.note.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.momentary.note.constant.NoteConstant;
import com.momentary.note.model.Note;
import com.momentary.note.model.res.NoteRes;
import com.momentary.note.service.NoteService;

@RestController
@RequestMapping(produces = "application/json")
public class NoteController {
	private static final Logger logger = LogManager.getLogger(NoteController.class);

	@Autowired
	NoteService noteService;

	@GetMapping(value = "note")
	public NoteRes getNote(HttpServletRequest http) {
		logger.info("----Start NoteController.getNote()----");
		NoteRes res = new NoteRes();

		try {

			Note note = noteService.getNote("001", "001");
			res.setCode(NoteConstant.RESULT_TYPE.SUCCESS.getCode());
			res.setMsg(NoteConstant.RESULT_TYPE.SUCCESS.getMsg());
			res.setNote(note);
		} catch (Exception e) {

			res.setCode(NoteConstant.RESULT_TYPE.FAILURE.getCode());
			res.setMsg(NoteConstant.RESULT_TYPE.FAILURE.getMsg());
			res.setNote(null);
		} finally {
			logger.info("----End NoteController.getNote()----");
		}
		return res;
	}

	@GetMapping(value = "notes")
	public NoteRes getNotes(HttpServletRequest http) {
		
		logger.info("----Start NoteController.getNotes()----");
		NoteRes res = new NoteRes();
		
		try {
			List<Note> notes = noteService.getNotes("001");
			res.setCode(NoteConstant.RESULT_TYPE.SUCCESS.getCode());
			res.setMsg(NoteConstant.RESULT_TYPE.SUCCESS.getMsg());
			res.setNotes(notes);
			notes.forEach(System.out::println);
		} catch (Exception e) {

			res.setCode(NoteConstant.RESULT_TYPE.FAILURE.getCode());
			res.setMsg(NoteConstant.RESULT_TYPE.FAILURE.getMsg());
			res.setNotes(null);
		} finally {
			logger.info("----End NoteController.getNotes()----");
		}
		return res;
	}

}
