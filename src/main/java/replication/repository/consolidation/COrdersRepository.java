package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import replication.model.consolidation.Orders;

public interface COrdersRepository extends JpaRepository<Orders, Long> {


    @Procedure(name = "updateOrders")
    void updateOrder(@Param("status") String status, @Param("role") String role, @Param("order_id") Long orderId, @Param("book_id") Long bookId,  @Param("library_id") Long libraryId);
}