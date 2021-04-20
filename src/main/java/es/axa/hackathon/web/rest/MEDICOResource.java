package es.axa.hackathon.web.rest;

import es.axa.hackathon.repository.MEDICORepository;
import es.axa.hackathon.service.MEDICOService;
import es.axa.hackathon.service.dto.MEDICODTO;
import es.axa.hackathon.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link es.axa.hackathon.domain.MEDICO}.
 */
@RestController
@RequestMapping("/api")
public class MEDICOResource {

    private final Logger log = LoggerFactory.getLogger(MEDICOResource.class);

    private static final String ENTITY_NAME = "mEDICO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MEDICOService mEDICOService;

    private final MEDICORepository mEDICORepository;

    public MEDICOResource(MEDICOService mEDICOService, MEDICORepository mEDICORepository) {
        this.mEDICOService = mEDICOService;
        this.mEDICORepository = mEDICORepository;
    }

    /**
     * {@code POST  /medicos} : Create a new mEDICO.
     *
     * @param mEDICODTO the mEDICODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new mEDICODTO, or with status {@code 400 (Bad Request)} if the mEDICO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/medicos")
    public ResponseEntity<MEDICODTO> createMEDICO(@RequestBody MEDICODTO mEDICODTO) throws URISyntaxException {
        log.debug("REST request to save MEDICO : {}", mEDICODTO);
        if (mEDICODTO.getId() != null) {
            throw new BadRequestAlertException("A new mEDICO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MEDICODTO result = mEDICOService.save(mEDICODTO);
        return ResponseEntity
            .created(new URI("/api/medicos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /medicos/:id} : Updates an existing mEDICO.
     *
     * @param id the id of the mEDICODTO to save.
     * @param mEDICODTO the mEDICODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mEDICODTO,
     * or with status {@code 400 (Bad Request)} if the mEDICODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the mEDICODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/medicos/{id}")
    public ResponseEntity<MEDICODTO> updateMEDICO(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody MEDICODTO mEDICODTO
    ) throws URISyntaxException {
        log.debug("REST request to update MEDICO : {}, {}", id, mEDICODTO);
        if (mEDICODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, mEDICODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!mEDICORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        MEDICODTO result = mEDICOService.save(mEDICODTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, mEDICODTO.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /medicos/:id} : Partial updates given fields of an existing mEDICO, field will ignore if it is null
     *
     * @param id the id of the mEDICODTO to save.
     * @param mEDICODTO the mEDICODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated mEDICODTO,
     * or with status {@code 400 (Bad Request)} if the mEDICODTO is not valid,
     * or with status {@code 404 (Not Found)} if the mEDICODTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the mEDICODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/medicos/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<MEDICODTO> partialUpdateMEDICO(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody MEDICODTO mEDICODTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update MEDICO partially : {}, {}", id, mEDICODTO);
        if (mEDICODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, mEDICODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!mEDICORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<MEDICODTO> result = mEDICOService.partialUpdate(mEDICODTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, mEDICODTO.getId())
        );
    }

    /**
     * {@code GET  /medicos} : get all the mEDICOS.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of mEDICOS in body.
     */
    @GetMapping("/medicos")
    public ResponseEntity<List<MEDICODTO>> getAllMEDICOS(Pageable pageable) {
        log.debug("REST request to get a page of MEDICOS");
        Page<MEDICODTO> page = mEDICOService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /medicos/:id} : get the "id" mEDICO.
     *
     * @param id the id of the mEDICODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the mEDICODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/medicos/{id}")
    public ResponseEntity<MEDICODTO> getMEDICO(@PathVariable String id) {
        log.debug("REST request to get MEDICO : {}", id);
        Optional<MEDICODTO> mEDICODTO = mEDICOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(mEDICODTO);
    }

    /**
     * {@code DELETE  /medicos/:id} : delete the "id" mEDICO.
     *
     * @param id the id of the mEDICODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/medicos/{id}")
    public ResponseEntity<Void> deleteMEDICO(@PathVariable String id) {
        log.debug("REST request to delete MEDICO : {}", id);
        mEDICOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
