package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Publisher;

public interface SPublisherRepository extends JpaRepository<Publisher, Long> {
}