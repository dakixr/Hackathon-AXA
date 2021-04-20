package es.axa.hackathon.repository;

import es.axa.hackathon.domain.PAS;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the PAS entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PASRepository extends MongoRepository<PAS, String> {}
