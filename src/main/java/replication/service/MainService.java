package replication.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import replication.model.consolidation.Accounting;
import replication.model.sharing.Genre;
import replication.model.sharing.Type;
import replication.repository.consolidation.AccountingRepository;
import replication.repository.master.GenreRepository;
import replication.repository.slave.TypeRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MainService {

    private final GenreRepository genreRepository;

    private final TypeRepository typeRepository;

    private final AccountingRepository accountingRepository;

    public Optional<Genre> findGenre(Long id) {
        return genreRepository.findById(id);
    }

    public Optional<Type> findType(Long id) {
        return typeRepository.findById(id);
    }

    public List<Accounting> findAllAccounting() { return accountingRepository.findAll(); }

    public Long saveGenre(Type type) {
        return genreRepository.save(type).getId();
    }
}
