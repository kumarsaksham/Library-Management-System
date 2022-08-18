package assignment.library_management.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BorrowedBooks {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int transactionId;
	private int bookId;
	private int userId;
	@Basic
	private java.sql.Date issuedDate;
	@Basic
	private java.sql.Date returnDate;
	private boolean returned;
	
	
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public java.sql.Date getIssuedDate() {
		return issuedDate;
	}
	public void setIssuedDate(java.sql.Date issuedDate) {
		this.issuedDate = issuedDate;
	}
	public java.sql.Date getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(java.sql.Date returnDate) {
		this.returnDate = returnDate;
	}
	public boolean isReturned() {
		return returned;
	}
	public void setReturned(boolean returned) {
		this.returned = returned;
	}
	
}
