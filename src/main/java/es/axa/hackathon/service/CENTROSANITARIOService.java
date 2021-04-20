package es.axa.hackathon.service;

import es.axa.hackathon.domain.CENTROSANITARIO;
import es.axa.hackathon.repository.CENTROSANITARIORepository;
import es.axa.hackathon.service.dto.CENTROSANITARIODTO;
import es.axa.hackathon.service.mapper.CENTROSANITARIOMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link CENTROSANITARIO}.
 */
@Service
public class CENTROSANITARIOService {

    private final Logger log = LoggerFactory.getLogger(CENTROSANITARIOService.class);

    private final CENTROSANITARIORepository cENTROSANITARIORepository;

    private final CENTROSANITARIOMapper cENTROSANITARIOMapper;

    public CENTROSANITARIOService(CENTROSANITARIORepository cENTROSANITARIORepository, CENTROSANITARIOMapper cENTROSANITARIOMapper) {
        this.cENTROSANITARIORepository = cENTROSANITARIORepository;
        this.cENTROSANITARIOMapper = cENTROSANITARIOMapper;
    }

    /**
     * Save a cENTROSANITARIO.
     *
     * @param cENTROSANITARIODTO the entity to save.
     * @return the persisted entity.
     */
    public CENTROSANITARIODTO save(CENTROSANITARIODTO cENTROSANITARIODTO) {
        log.debug("Request to save CENTROSANITARIO : {}", cENTROSANITARIODTO);
        CENTROSANITARIO cENTROSANITARIO = cENTROSANITARIOMapper.toEntity(cENTROSANITARIODTO);
        cENTROSANITARIO = cENTROSANITARIORepository.save(cENTROSANITARIO);
        return cENTROSANITARIOMapper.toDto(cENTROSANITARIO);
    }

    /**
     * Partially update a cENTROSANITARIO.
     *
     * @param cENTROSANITARIODTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<CENTROSANITARIODTO> partialUpdate(CENTROSANITARIODTO cENTROSANITARIODTO) {
        log.debug("Request to partially update CENTROSANITARIO : {}", cENTROSANITARIODTO);

        return cENTROSANITARIORepository
            .findById(cENTROSANITARIODTO.getId())
            .map(
                existingCENTROSANITARIO -> {
                    cENTROSANITARIOMapper.partialUpdate(existingCENTROSANITARIO, cENTROSANITARIODTO);
                    return existingCENTROSANITARIO;
                }
            )
            .map(cENTROSANITARIORepository::save)
            .map(cENTROSANITARIOMapper::toDto);
    }

    /**
     * Get all the cENTROSANITARIOS.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<CENTROSANITARIODTO> findAll(Pageable pageable) {
        log.debug("Request to get all CENTROSANITARIOS");
        return cENTROSANITARIORepository.findAll(pageable).map(cENTROSANITARIOMapper::toDto);
    }

    /**
     * Get one cENTROSANITARIO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<CENTROSANITARIODTO> findOne(String id) {
        log.debug("Request to get CENTROSANITARIO : {}", id);
        return cENTROSANITARIORepository.findById(id).map(cENTROSANITARIOMapper::toDto);
    }

    /**
     * Delete the cENTROSANITARIO by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete CENTROSANITARIO : {}", id);
        cENTROSANITARIORepository.deleteById(id);
    }
}
