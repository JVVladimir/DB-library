package replication.model.consolidation;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import replication.model.sharing.Reader;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class AccountingId implements Serializable {

    @Column(name = "ac_id")
    private Long id;

    @Column(name = "ac_id_reader")
    private Long reader;
}
