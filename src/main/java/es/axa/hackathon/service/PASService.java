package es.axa.hackathon.service;

import es.axa.hackathon.domain.PAS;
import es.axa.hackathon.repository.PASRepository;
import es.axa.hackathon.service.dto.PASDTO;
import es.axa.hackathon.service.mapper.PASMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link PAS}.
 */
@Service
public class PASService {

    private final Logger log = LoggerFactory.getLogger(PASService.class);

    private final PASRepository pASRepository;

    private final PASMapper pASMapper;

    public PASService(PASRepository pASRepository, PASMapper pASMapper) {
        this.pASRepository = pASRepository;
        this.pASMapper = pASMapper;
    }

    /**
     * Save a pAS.
     *
     * @param pASDTO the entity to save.
     * @return the persisted entity.
     */
    public PASDTO save(PASDTO pASDTO) {
        log.debug("Request to save PAS : {}", pASDTO);
        PAS pAS = pASMapper.toEntity(pASDTO);
        pAS = pASRepository.save(pAS);
        return pASMapper.toDto(pAS);
    }

    /**
     * Partially update a pAS.
     *
     * @param pASDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<PASDTO> partialUpdate(PASDTO pASDTO) {
        log.debug("Request to partially update PAS : {}", pASDTO);

        return pASRepository
            .findById(pASDTO.getId())
            .map(
                existingPAS -> {
                    pASMapper.partialUpdate(existingPAS, pASDTO);
                    return existingPAS;
                }
            )
            .map(pASRepository::save)
            .map(pASMapper::toDto);
    }

    /**
     * Get all the pAS.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<PASDTO> findAll(Pageable pageable) {
        log.debug("Request to get all PAS");
        return pASRepository.findAll(pageable).map(pASMapper::toDto);
    }

    /**
     * Get one pAS by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<PASDTO> findOne(String id) {
        log.debug("Request to get PAS : {}", id);
        return pASRepository.findById(id).map(pASMapper::toDto);
    }

    /**
     * Delete the pAS by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete PAS : {}", id);
        pASRepository.deleteById(id);
    }
}
