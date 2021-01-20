package replication.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BooksInLibrary {
    @Id
    private int id;
    private Library library;
    private Book book;
}
