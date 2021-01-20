package replication.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Order {
    @Id
    private int id;
    private Book book;
    private Reader reader;
    private LocalDate createDate;
    private LocalDate execDate;
    private Library library;
    private String status;
}
