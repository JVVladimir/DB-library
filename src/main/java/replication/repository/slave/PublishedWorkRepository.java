package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.PublishedWork;

public interface PublishedWorkRepository extends JpaRepository<PublishedWork, Long> {
}