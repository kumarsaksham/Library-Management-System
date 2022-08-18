package assignment.library_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import assignment.library_management.model.User;
import assignment.library_management.service.LogInService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("")
public class LogInController {
	@Autowired
	LogInService logInService;
	
	@PostMapping("/login")
	public User logIn(@RequestBody User user) {
		return logInService.logIn(user);
	}
}
