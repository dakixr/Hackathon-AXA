package es.axa.hackathon.web.rest;

import es.axa.hackathon.repository.PASRepository;
import es.axa.hackathon.service.PASService;
import es.axa.hackathon.service.dto.PASDTO;
import es.axa.hackathon.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
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
 * REST controller for managing {@link es.axa.hackathon.domain.PAS}.
 */
@RestController
@RequestMapping("/api")
public class PASResource {

    private final Logger log = LoggerFactory.getLogger(PASResource.class);

    private static final String ENTITY_NAME = "pAS";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PASService pASService;

    private final PASRepository pASRepository;

    public PASResource(PASService pASService, PASRepository pASRepository) {
        this.pASService = pASService;
        this.pASRepository = pASRepository;
    }

    /**
     * {@code POST  /pas} : Create a new pAS.
     *
     * @param pASDTO the pASDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new pASDTO, or with status {@code 400 (Bad Request)} if the pAS has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/pas")
    public ResponseEntity<PASDTO> createPAS(@Valid @RequestBody PASDTO pASDTO) throws URISyntaxException {
        log.debug("REST request to save PAS : {}", pASDTO);
        if (pASDTO.getId() != null) {
            throw new BadRequestAlertException("A new pAS cannot already have an ID", ENTITY_NAME, "idexists");
        }
        PASDTO result = pASService.save(pASDTO);
        return ResponseEntity
            .created(new URI("/api/pas/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /pas/:id} : Updates an existing pAS.
     *
     * @param id the id of the pASDTO to save.
     * @param pASDTO the pASDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated pASDTO,
     * or with status {@code 400 (Bad Request)} if the pASDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the pASDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/pas/{id}")
    public ResponseEntity<PASDTO> updatePAS(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody PASDTO pASDTO
    ) throws URISyntaxException {
        log.debug("REST request to update PAS : {}, {}", id, pASDTO);
        if (pASDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, pASDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!pASRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        PASDTO result = pASService.save(pASDTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, pASDTO.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /pas/:id} : Partial updates given fields of an existing pAS, field will ignore if it is null
     *
     * @param id the id of the pASDTO to save.
     * @param pASDTO the pASDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated pASDTO,
     * or with status {@code 400 (Bad Request)} if the pASDTO is not valid,
     * or with status {@code 404 (Not Found)} if the pASDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the pASDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/pas/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<PASDTO> partialUpdatePAS(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody PASDTO pASDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update PAS partially : {}, {}", id, pASDTO);
        if (pASDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, pASDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!pASRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<PASDTO> result = pASService.partialUpdate(pASDTO);

        return ResponseUtil.wrapOrNotFound(result, HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, pASDTO.getId()));
    }

    /**
     * {@code GET  /pas} : get all the pAS.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of pAS in body.
     */
    @GetMapping("/pas")
    public ResponseEntity<List<PASDTO>> getAllPAS(Pageable pageable) {
        log.debug("REST request to get a page of PAS");
        Page<PASDTO> page = pASService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /pas/:id} : get the "id" pAS.
     *
     * @param id the id of the pASDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the pASDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/pas/{id}")
    public ResponseEntity<PASDTO> getPAS(@PathVariable String id) {
        log.debug("REST request to get PAS : {}", id);
        Optional<PASDTO> pASDTO = pASService.findOne(id);
        return ResponseUtil.wrapOrNotFound(pASDTO);
    }

    /**
     * {@code DELETE  /pas/:id} : delete the "id" pAS.
     *
     * @param id the id of the pASDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/pas/{id}")
    public ResponseEntity<Void> deletePAS(@PathVariable String id) {
        log.debug("REST request to delete PAS : {}", id);
        pASService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
