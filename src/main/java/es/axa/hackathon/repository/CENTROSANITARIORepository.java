package es.axa.hackathon.repository;

import es.axa.hackathon.domain.CENTROSANITARIO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the CENTROSANITARIO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CENTROSANITARIORepository extends MongoRepository<CENTROSANITARIO, String> {}
