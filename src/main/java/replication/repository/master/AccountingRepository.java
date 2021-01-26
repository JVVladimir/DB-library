package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Accounting;

public interface AccountingRepository extends JpaRepository<Accounting, Long> {
}