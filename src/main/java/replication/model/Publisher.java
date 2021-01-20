package replication.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "publisher")
@Getter
@ToString
public class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "p_id", unique = true)
    private Long id;

    @Column(name = "p_name", unique = true)
    private String name;

    @Column(name = "p_address", unique = true)
    private String address;

    @Column(name = "p_phone", unique = true)
    private String phone;

    @Column(name = "p_mail", unique = true)
    private String mail;
}
