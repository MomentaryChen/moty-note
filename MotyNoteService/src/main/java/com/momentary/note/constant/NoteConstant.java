package com.momentary.note.constant;

import javax.management.loading.PrivateClassLoader;

public class NoteConstant {
	
	public static final String API_HEADER = "MOTY-AUTH";
	
	public enum RESULT_TYPE {
		SUCCESS("0", "成功"),
		FAILURE("9", "失敗");
		
		private RESULT_TYPE(String code, String msg) {
			this.code = code;
			this.msg = msg;
		}
		
		private final String code;
		private final String msg;
		public String getCode() {
			return code;
		}
		public String getMsg() {
			return msg;
		}
		
	
	}

}
