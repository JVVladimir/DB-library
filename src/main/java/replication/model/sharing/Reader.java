package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "reader")
@Getter
@ToString
public class Reader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "r_id")
    private Long id;

    @Column(name = "r_name")
    private String name;

    @Column(name = "r_pasp", unique = true)
    private String pasp;

    @Column(name = "r_address")
    private String address;

    @Column(name = "r_phone")
    private String phone;

    @Column(name = "r_mail")
    private String mail;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(
                    name = "r_id_lib",
                    referencedColumnName = "l_id")
    })
    private Library library;

    @OneToMany
   Set<Accounting> accountings;

    @OneToMany
    Set<Orders> Orders;
}
