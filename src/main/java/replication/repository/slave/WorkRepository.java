package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Work;

public interface WorkRepository extends JpaRepository<Work, Long> {
}