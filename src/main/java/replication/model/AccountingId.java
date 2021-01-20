package replication.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class AccountingId implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "ac_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ac_id_reader", referencedColumnName = "r_id")
    private Reader reader;
}
