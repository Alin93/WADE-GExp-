package demo;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import beans.User;

@RestController
public class MainController {
	
	@RequestMapping("/rapam")
	public Map<String, Object> homes() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}
	
	@RequestMapping("/test")
	public String test(){
		return "sdsad";
	}
	
	
	@RequestMapping("/getUser")
	public User getUser(){
		
		User user = new User();
		user.setPassword("asdasdasd");
		user.setUsername("Adyzds");
		return user;
	}
}

