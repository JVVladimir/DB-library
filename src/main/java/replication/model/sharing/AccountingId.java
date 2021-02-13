package replication.model.sharing;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class AccountingId implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ac_id")
    private Long id;

    @ManyToOne(targetEntity = Reader.class)
    @JoinColumn(name = "ac_id_reader", referencedColumnName = "r_id")
    private Reader reader;
}
