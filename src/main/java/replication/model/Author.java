package replication.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Author {
    @Id
    private int id;
    private String name;
    private LocalDate born;
    private LocalDate died;
}
//
//accounting
//ac_id
//ac_id_reader



//boos_in libraries
//id id_library

//order
//id id_book





