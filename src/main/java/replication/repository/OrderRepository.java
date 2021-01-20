package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.*;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    Optional<Order> findById(Long id);

    <S extends Order> S save(S order);
}