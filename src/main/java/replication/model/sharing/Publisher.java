package replication.model.sharing;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "publisher")
@Getter
@ToString
@NoArgsConstructor
public class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "p_id")
    private Long id;

    @Column(name = "p_name", unique = true)
    private String name;

    @Column(name = "p_address", unique = true)
    private String address;

    @Column(name = "p_phone", unique = true)
    private String phone;

    @Column(name = "p_mail", unique = true)
    private String mail;

    public Publisher(String name, String address) {
        this.name = name;
        this.address = address;
    }
}
