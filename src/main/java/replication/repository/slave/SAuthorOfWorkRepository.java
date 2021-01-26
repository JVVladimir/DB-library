package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.AuthorsOfWork;

public interface SAuthorOfWorkRepository extends JpaRepository<AuthorsOfWork, Long> {
}