package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.AuthorsOfWork;

public interface AuthorOfWorkRepository extends JpaRepository<AuthorsOfWork, Long> {
}