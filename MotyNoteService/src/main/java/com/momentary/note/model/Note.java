package com.momentary.note.model;

import java.io.Serializable;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Note implements Serializable{

	private static final long serialVersionUID = 83919985888160500L;
	
	String nid;
	String title;
	String content;
	String createDate;
	String updateDate;
	String uid;
}
