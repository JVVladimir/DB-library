package replication.model.consolidation;


import lombok.Getter;
import lombok.ToString;
import org.springframework.data.repository.query.Param;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "orders")
@NamedStoredProcedureQuery(name = "updateOrders",
        procedureName = "UPDATE_ORDERS", parameters = {
        @StoredProcedureParameter(name = "status", type = String.class),
        @StoredProcedureParameter(name = "role", type = String.class),
        @StoredProcedureParameter( name = "order_id", type = Long.class),
        @StoredProcedureParameter(name = "book_id", type = Long.class),
        @StoredProcedureParameter(name = "library_id", type= Long.class)
})
@Getter
@ToString
public class Orders {

    @EmbeddedId
    private OrderId id;

    @Column(name = "or_id_reader")
    private Long reader;

    @Column(name = "or_create_date")
    private LocalDate createDate;

    @Column(name = "or_exec_date")
    private LocalDate execDate;

    @Column(name = "or_id_lib")
    private Long library;

    @Column(name = "or_status")
    private String status;
}
