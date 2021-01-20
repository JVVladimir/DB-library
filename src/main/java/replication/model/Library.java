package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Library {
    @Id
    private int id;
    private String name;
    private String address;
}
