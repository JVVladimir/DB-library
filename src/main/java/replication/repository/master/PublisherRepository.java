package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Publisher;

public interface PublisherRepository extends JpaRepository<Publisher, Long> {
}