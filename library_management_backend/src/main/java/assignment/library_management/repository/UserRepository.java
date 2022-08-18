package assignment.library_management.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import assignment.library_management.model.Book;
import assignment.library_management.model.User;

@Repository
public class UserRepository extends SimpleJpaRepository<User, Integer> {
	@Autowired
	private EntityManager entityManager;
	
	public UserRepository(EntityManager em) {
		super(User.class, em);
	}
	
	public List<User> getAllUsers() {
		Query q = entityManager.createNativeQuery("SELECT * FROM USER WHERE ACTIVE=TRUE", User.class);
		List<User> users = q.getResultList();
		return users;
	}	
}
