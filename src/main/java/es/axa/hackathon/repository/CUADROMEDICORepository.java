package es.axa.hackathon.repository;

import es.axa.hackathon.domain.CUADROMEDICO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the CUADROMEDICO entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CUADROMEDICORepository extends MongoRepository<CUADROMEDICO, String> {}
