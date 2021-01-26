package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Accounting;

public interface SAccountingRepository extends JpaRepository<Accounting, Long> {
}