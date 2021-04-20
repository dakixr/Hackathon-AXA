package es.axa.hackathon.service;

import es.axa.hackathon.domain.CUADROMEDICO;
import es.axa.hackathon.repository.CUADROMEDICORepository;
import es.axa.hackathon.service.dto.CUADROMEDICODTO;
import es.axa.hackathon.service.mapper.CUADROMEDICOMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link CUADROMEDICO}.
 */
@Service
public class CUADROMEDICOService {

    private final Logger log = LoggerFactory.getLogger(CUADROMEDICOService.class);

    private final CUADROMEDICORepository cUADROMEDICORepository;

    private final CUADROMEDICOMapper cUADROMEDICOMapper;

    public CUADROMEDICOService(CUADROMEDICORepository cUADROMEDICORepository, CUADROMEDICOMapper cUADROMEDICOMapper) {
        this.cUADROMEDICORepository = cUADROMEDICORepository;
        this.cUADROMEDICOMapper = cUADROMEDICOMapper;
    }

    /**
     * Save a cUADROMEDICO.
     *
     * @param cUADROMEDICODTO the entity to save.
     * @return the persisted entity.
     */
    public CUADROMEDICODTO save(CUADROMEDICODTO cUADROMEDICODTO) {
        log.debug("Request to save CUADROMEDICO : {}", cUADROMEDICODTO);
        CUADROMEDICO cUADROMEDICO = cUADROMEDICOMapper.toEntity(cUADROMEDICODTO);
        cUADROMEDICO = cUADROMEDICORepository.save(cUADROMEDICO);
        return cUADROMEDICOMapper.toDto(cUADROMEDICO);
    }

    /**
     * Partially update a cUADROMEDICO.
     *
     * @param cUADROMEDICODTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<CUADROMEDICODTO> partialUpdate(CUADROMEDICODTO cUADROMEDICODTO) {
        log.debug("Request to partially update CUADROMEDICO : {}", cUADROMEDICODTO);

        return cUADROMEDICORepository
            .findById(cUADROMEDICODTO.getId())
            .map(
                existingCUADROMEDICO -> {
                    cUADROMEDICOMapper.partialUpdate(existingCUADROMEDICO, cUADROMEDICODTO);
                    return existingCUADROMEDICO;
                }
            )
            .map(cUADROMEDICORepository::save)
            .map(cUADROMEDICOMapper::toDto);
    }

    /**
     * Get all the cUADROMEDICOS.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    public Page<CUADROMEDICODTO> findAll(Pageable pageable) {
        log.debug("Request to get all CUADROMEDICOS");
        return cUADROMEDICORepository.findAll(pageable).map(cUADROMEDICOMapper::toDto);
    }

    /**
     * Get one cUADROMEDICO by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Optional<CUADROMEDICODTO> findOne(String id) {
        log.debug("Request to get CUADROMEDICO : {}", id);
        return cUADROMEDICORepository.findById(id).map(cUADROMEDICOMapper::toDto);
    }

    /**
     * Delete the cUADROMEDICO by id.
     *
     * @param id the id of the entity.
     */
    public void delete(String id) {
        log.debug("Request to delete CUADROMEDICO : {}", id);
        cUADROMEDICORepository.deleteById(id);
    }
}
