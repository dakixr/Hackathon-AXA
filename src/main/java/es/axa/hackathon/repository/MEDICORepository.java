package es.axa.hackathon.repository;

import es.axa.hackathon.domain.MEDICO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the MEDICO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MEDICORepository extends MongoRepository<MEDICO, String> {}
