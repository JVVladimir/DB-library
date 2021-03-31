package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import replication.model.sharing.Orders;


import javax.transaction.Transactional;
import java.time.LocalDate;

public interface OrdersRepository extends JpaRepository<Orders, Long> {

    @Procedure(name = "updateOrders")
    void updateOrders(@Param("status") String status, @Param("role") String role, @Param("order_id") Long orderId, @Param("book_id") Long bookId, @Param("library_id") Long libraryId);
}