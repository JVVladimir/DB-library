package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Library;

public interface SLibraryRepository extends JpaRepository<Library, Long> {
}