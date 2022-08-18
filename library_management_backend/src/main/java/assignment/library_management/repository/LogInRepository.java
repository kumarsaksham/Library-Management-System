package assignment.library_management.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import assignment.library_management.model.User;

@Repository
public interface LogInRepository extends CrudRepository<User, Integer>{
	public User findByemailId(String emailId);
}
