package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}