package es.axa.hackathon.web.rest;

import es.axa.hackathon.repository.CUADROMEDICORepository;
import es.axa.hackathon.service.CUADROMEDICOService;
import es.axa.hackathon.service.dto.CUADROMEDICODTO;
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
 * REST controller for managing {@link es.axa.hackathon.domain.CUADROMEDICO}.
 */
@RestController
@RequestMapping("/api")
public class CUADROMEDICOResource {

    private final Logger log = LoggerFactory.getLogger(CUADROMEDICOResource.class);

    private static final String ENTITY_NAME = "cUADROMEDICO";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CUADROMEDICOService cUADROMEDICOService;

    private final CUADROMEDICORepository cUADROMEDICORepository;

    public CUADROMEDICOResource(CUADROMEDICOService cUADROMEDICOService, CUADROMEDICORepository cUADROMEDICORepository) {
        this.cUADROMEDICOService = cUADROMEDICOService;
        this.cUADROMEDICORepository = cUADROMEDICORepository;
    }

    /**
     * {@code POST  /cuadromedicos} : Create a new cUADROMEDICO.
     *
     * @param cUADROMEDICODTO the cUADROMEDICODTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new cUADROMEDICODTO, or with status {@code 400 (Bad Request)} if the cUADROMEDICO has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/cuadromedicos")
    public ResponseEntity<CUADROMEDICODTO> createCUADROMEDICO(@Valid @RequestBody CUADROMEDICODTO cUADROMEDICODTO)
        throws URISyntaxException {
        log.debug("REST request to save CUADROMEDICO : {}", cUADROMEDICODTO);
        if (cUADROMEDICODTO.getId() != null) {
            throw new BadRequestAlertException("A new cUADROMEDICO cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CUADROMEDICODTO result = cUADROMEDICOService.save(cUADROMEDICODTO);
        return ResponseEntity
            .created(new URI("/api/cuadromedicos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /cuadromedicos/:id} : Updates an existing cUADROMEDICO.
     *
     * @param id the id of the cUADROMEDICODTO to save.
     * @param cUADROMEDICODTO the cUADROMEDICODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated cUADROMEDICODTO,
     * or with status {@code 400 (Bad Request)} if the cUADROMEDICODTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the cUADROMEDICODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/cuadromedicos/{id}")
    public ResponseEntity<CUADROMEDICODTO> updateCUADROMEDICO(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody CUADROMEDICODTO cUADROMEDICODTO
    ) throws URISyntaxException {
        log.debug("REST request to update CUADROMEDICO : {}, {}", id, cUADROMEDICODTO);
        if (cUADROMEDICODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, cUADROMEDICODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!cUADROMEDICORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        CUADROMEDICODTO result = cUADROMEDICOService.save(cUADROMEDICODTO);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, cUADROMEDICODTO.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /cuadromedicos/:id} : Partial updates given fields of an existing cUADROMEDICO, field will ignore if it is null
     *
     * @param id the id of the cUADROMEDICODTO to save.
     * @param cUADROMEDICODTO the cUADROMEDICODTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated cUADROMEDICODTO,
     * or with status {@code 400 (Bad Request)} if the cUADROMEDICODTO is not valid,
     * or with status {@code 404 (Not Found)} if the cUADROMEDICODTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the cUADROMEDICODTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/cuadromedicos/{id}", consumes = "application/merge-patch+json")
    public ResponseEntity<CUADROMEDICODTO> partialUpdateCUADROMEDICO(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody CUADROMEDICODTO cUADROMEDICODTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update CUADROMEDICO partially : {}, {}", id, cUADROMEDICODTO);
        if (cUADROMEDICODTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, cUADROMEDICODTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!cUADROMEDICORepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<CUADROMEDICODTO> result = cUADROMEDICOService.partialUpdate(cUADROMEDICODTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, cUADROMEDICODTO.getId())
        );
    }

    /**
     * {@code GET  /cuadromedicos} : get all the cUADROMEDICOS.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of cUADROMEDICOS in body.
     */
    @GetMapping("/cuadromedicos")
    public ResponseEntity<List<CUADROMEDICODTO>> getAllCUADROMEDICOS(Pageable pageable) {
        log.debug("REST request to get a page of CUADROMEDICOS");
        Page<CUADROMEDICODTO> page = cUADROMEDICOService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /cuadromedicos/:id} : get the "id" cUADROMEDICO.
     *
     * @param id the id of the cUADROMEDICODTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the cUADROMEDICODTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/cuadromedicos/{id}")
    public ResponseEntity<CUADROMEDICODTO> getCUADROMEDICO(@PathVariable String id) {
        log.debug("REST request to get CUADROMEDICO : {}", id);
        Optional<CUADROMEDICODTO> cUADROMEDICODTO = cUADROMEDICOService.findOne(id);
        return ResponseUtil.wrapOrNotFound(cUADROMEDICODTO);
    }

    /**
     * {@code DELETE  /cuadromedicos/:id} : delete the "id" cUADROMEDICO.
     *
     * @param id the id of the cUADROMEDICODTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/cuadromedicos/{id}")
    public ResponseEntity<Void> deleteCUADROMEDICO(@PathVariable String id) {
        log.debug("REST request to delete CUADROMEDICO : {}", id);
        cUADROMEDICOService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
