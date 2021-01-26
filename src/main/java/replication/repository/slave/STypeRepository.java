package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Type;

public interface STypeRepository extends JpaRepository<Type, Long> {
}