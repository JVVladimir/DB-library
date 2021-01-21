package replication.model.sharing;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class AccountingId implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ac_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ac_id_reader", referencedColumnName = "r_id")
    private Reader reader;
}
