package es.axa.hackathon.service;

import es.axa.hackathon.domain.MEDICO;
import es.axa.hackathon.repository.MEDICORepository;
import es.axa.hackathon.service.dto.MEDICODTO;
import es.axa.hackathon.service.mapper.MEDICOMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link MEDICO}.
 */
@Service
public class MEDICOService {

    private final Logger log = LoggerFactory.getLogger(MEDICOService.class);

    private final MEDICORepository mEDICORepository;

    private final MEDICOMapper mEDICOMapper;

    public MEDICOService(MEDICORepository mEDICORepository, MEDICOMapper mEDICOMapper) {
        this.mEDICORepository = mEDICORepository;
        this.mEDICOMapper = mEDICOMapper;
    }

    /**
     * Save a mEDICO.
     *
     * @param mEDICODTO the entity to save.
     * @return the persisted entity.
     */
    public MEDICODTO save(MEDICODTO mEDICODTO) {
        log.debug("Request to save MEDICO : {}", mEDICODTO);
        MEDICO mEDICO = mEDICOMapper.toEntity(mEDICODTO);
        mEDICO = mEDICORepository.save(mEDICO);
        return mEDICOMapper.toDto(mEDICO);
    }

    /**
     * Partially update a mEDICO.
     *
     * @param mEDICODTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<MEDICODTO> partialUpdate(MEDICODTO mEDICODTO) {
        log.debug("Request to partially update MEDICO : {}", mEDICODTO);

        return mEDICORepository
            .findById(mEDICODTO.getId())
            .map(
                existingMEDICO -> {
                    mEDICOMapper.partialUpdate(existingMEDICO, mEDICODTO);
                    return existingMEDICO;
                }
            )
            .map(mEDICORepository::save)
            .map(mEDICOMapper::toDto);
    }

    /**
     * Get all the mEDICOS.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<MEDICODTO> findAll(Pageable pageable) {
        log.debug("Request to get all MEDICOS");
        return mEDICORepository.findAll(pageable).map(mEDICOMapper::toDto);
    }

    /**
     * Get one mEDICO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<MEDICODTO> findOne(String id) {
        log.debug("Request to get MEDICO : {}", id);
        return mEDICORepository.findById(id).map(mEDICOMapper::toDto);
    }

    /**
     * Delete the mEDICO by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete MEDICO : {}", id);
        mEDICORepository.deleteById(id);
    }
}
