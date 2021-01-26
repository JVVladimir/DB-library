package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Library;

public interface LibraryRepository extends JpaRepository<Library, Long> {
}