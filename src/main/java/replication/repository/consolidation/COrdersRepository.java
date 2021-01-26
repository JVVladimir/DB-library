package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.consolidation.Orders;

public interface COrdersRepository extends JpaRepository<Orders, Long> {
}