package assignment.library_management.repository;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import assignment.library_management.model.BorrowedBooks;



@Repository
public class BorrowedBooksRepository extends SimpleJpaRepository<BorrowedBooks, Integer>{

	@Autowired
	private EntityManager entityManager;
	
	public BorrowedBooksRepository(EntityManager em) {
		super(BorrowedBooks.class, em);
	}
}
