package assignment.library_management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import assignment.library_management.model.User;
import assignment.library_management.repository.LogInRepository;

@Service
public class LogInService {
	
	@Autowired
	LogInRepository logInRepository;

	public User logIn(User user) {
		User usr = logInRepository.findByemailId(user.getEmailId());
		if(usr.getPassword().equals(user.getPassword())) {
			return usr;	
		}
		return null;
	}
}
