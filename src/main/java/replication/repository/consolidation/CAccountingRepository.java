package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.consolidation.Accounting;


public interface CAccountingRepository extends JpaRepository<Accounting, Long> {
}