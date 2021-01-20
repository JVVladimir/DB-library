package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Publisher {
    @Id
    private int id;
    private String name;
    private String address;
    private String phone;
    private String mail;
}
