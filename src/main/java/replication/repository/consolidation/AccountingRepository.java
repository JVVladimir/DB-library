package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import replication.model.consolidation.Accounting;

import java.util.List;

public interface AccountingRepository extends JpaRepository<Accounting, Long> {

    @Query("select a FROM Accounting a")
    List<Accounting> findAll();
}