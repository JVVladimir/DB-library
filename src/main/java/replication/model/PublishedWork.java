package replication.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class PublishedWork {
    @Id
    private int id;
    private Work work;
    private Book book;
}
