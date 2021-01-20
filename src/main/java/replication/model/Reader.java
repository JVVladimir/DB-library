package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Reader {
    @Id
    private int id;
    private String name;
    private String pasp;
    private String address;
    private String phone;
    private String mail;
    private Library library;
}
