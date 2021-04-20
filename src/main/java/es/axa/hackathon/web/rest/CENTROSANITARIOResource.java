package es.axa.hackathon.web.rest;

import es.axa.hackathon.repository.CENTROSANITARIORepository;
import es.axa.hackathon.service.CENTROSANITARIOService;
import es.axa.hackathon.service.dto.CENTROSANITARIODTO;
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
 * REST controller for managing {@link es.axa.hackathon.domain.CENTROSANITARIO}.
 */
@RestController
@RequestMapping("/api")
public class CENTROSANITARIOResource {

    private final Logger log = LoggerFactory.getLogger(CENTROSANITARIOResource.class);

    private static final String ENTITY_NAME = "cENTROSANITARIO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CENTROSANITARIOService cENTROSANITARIOService;

    private final CENTROSANITARIORepository cENTROSANITARIORepository;

    public CENTROSANITARIOResource(CENTROSANITARIOService cENTROSANITARIOService, CENTROSANITARIORepository cENTROSANITARIORepository) {
        this.cENTROSANITARIOService = cENTROSANITARIOService;
        this.cENTROSANITARIORepository = cENTROSANITARIORepository;
    }

    /**
     * {@code POST  /centrosanitarios} : Create a new cENTROSANITARIO.
     *
     * @param cENTROSANITARIODTO the cENTROSANITARIODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new cENTROSANITARIODTO, or with status {@code 400 (Bad Request)} if the cENTROSANITARIO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/centrosanitarios")
    public ResponseEntity<CENTROSANITARIODTO> createCENTROSANITARIO(@RequestBody CENTROSANITARIODTO cENTROSANITARIODTO)
        throws URISyntaxException {
        log.debug("REST request to save CENTROSANITARIO : {}", cENTROSANITARIODTO);
        if (cENTROSANITARIODTO.getId() != null) {
            throw new BadRequestAlertException("A new cENTROSANITARIO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CENTROSANITARIODTO result = cENTROSANITARIOService.save(cENTROSANITARIODTO);
        return ResponseEntity
            .created(new URI("/api/centrosanitarios/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /centrosanitarios/:id} : Updates an existing cENTROSANITARIO.
     *
     * @param id the id of the cENTROSANITARIODTO to save.
     * @param cENTROSANITARIODTO the cENTROSANITARIODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated cENTROSANITARIODTO,
     * or with status {@code 400 (Bad Request)} if the cENTROSANITARIODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the cENTROSANITARIODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/centrosanitarios/{id}")
    public ResponseEntity<CENTROSANITARIODTO> updateCENTROSANITARIO(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody CENTROSANITARIODTO cENTROSANITARIODTO
    ) throws URISyntaxException {
        log.debug("REST request to update CENTROSANITARIO : {}, {}", id, cENTROSANITARIODTO);
        if (cENTROSANITARIODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, cENTROSANITARIODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!cENTROSANITARIORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        CENTROSANITARIODTO result = cENTROSANITARIOService.save(cENTROSANITARIODTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, cENTROSANITARIODTO.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /centrosanitarios/:id} : Partial updates given fields of an existing cENTROSANITARIO, field will ignore if it is null
     *
     * @param id the id of the cENTROSANITARIODTO to save.
     * @param cENTROSANITARIODTO the cENTROSANITARIODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated cENTROSANITARIODTO,
     * or with status {@code 400 (Bad Request)} if the cENTROSANITARIODTO is not valid,
     * or with status {@code 404 (Not Found)} if the cENTROSANITARIODTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the cENTROSANITARIODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/centrosanitarios/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<CENTROSANITARIODTO> partialUpdateCENTROSANITARIO(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody CENTROSANITARIODTO cENTROSANITARIODTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update CENTROSANITARIO partially : {}, {}", id, cENTROSANITARIODTO);
        if (cENTROSANITARIODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, cENTROSANITARIODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!cENTROSANITARIORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<CENTROSANITARIODTO> result = cENTROSANITARIOService.partialUpdate(cENTROSANITARIODTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, cENTROSANITARIODTO.getId())
        );
    }

    /**
     * {@code GET  /centrosanitarios} : get all the cENTROSANITARIOS.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of cENTROSANITARIOS in body.
     */
    @GetMapping("/centrosanitarios")
    public ResponseEntity<List<CENTROSANITARIODTO>> getAllCENTROSANITARIOS(Pageable pageable) {
        log.debug("REST request to get a page of CENTROSANITARIOS");
        Page<CENTROSANITARIODTO> page = cENTROSANITARIOService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /centrosanitarios/:id} : get the "id" cENTROSANITARIO.
     *
     * @param id the id of the cENTROSANITARIODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the cENTROSANITARIODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/centrosanitarios/{id}")
    public ResponseEntity<CENTROSANITARIODTO> getCENTROSANITARIO(@PathVariable String id) {
        log.debug("REST request to get CENTROSANITARIO : {}", id);
        Optional<CENTROSANITARIODTO> cENTROSANITARIODTO = cENTROSANITARIOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(cENTROSANITARIODTO);
    }

    /**
     * {@code DELETE  /centrosanitarios/:id} : delete the "id" cENTROSANITARIO.
     *
     * @param id the id of the cENTROSANITARIODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/centrosanitarios/{id}")
    public ResponseEntity<Void> deleteCENTROSANITARIO(@PathVariable String id) {
        log.debug("REST request to delete CENTROSANITARIO : {}", id);
        cENTROSANITARIOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
