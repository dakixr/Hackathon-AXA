package es.axa.hackathon.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import es.axa.hackathon.IntegrationTest;
import es.axa.hackathon.domain.PAS;
import es.axa.hackathon.repository.PASRepository;
import es.axa.hackathon.service.dto.PASDTO;
import es.axa.hackathon.service.mapper.PASMapper;
import java.util.List;
import java.util.UUID;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

/**
 * Integration tests for the {@link PASResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class PASResourceIT {

    private static final String DEFAULT_CIF = "L-76197556";
    private static final String UPDATED_CIF = "U-08454296";

    private static final String DEFAULT_NOMBRE = "AAAAAAAAAA";
    private static final String UPDATED_NOMBRE = "BBBBBBBBBB";

    private static final String DEFAULT_CODIGO_POSTAL = "AAAAAAAAAA";
    private static final String UPDATED_CODIGO_POSTAL = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_TIPO_PROVEEDOR = "AAAAAAAAAA";
    private static final String UPDATED_TIPO_PROVEEDOR = "BBBBBBBBBB";

    private static final String DEFAULT_DIRECCION = "AAAAAAAAAA";
    private static final String UPDATED_DIRECCION = "BBBBBBBBBB";

    private static final String DEFAULT_PERSONA_DE_CONTACTO = "AAAAAAAAAA";
    private static final String UPDATED_PERSONA_DE_CONTACTO = "BBBBBBBBBB";

    private static final String DEFAULT_POBLACION = "AAAAAAAAAA";
    private static final String UPDATED_POBLACION = "BBBBBBBBBB";

    private static final String DEFAULT_PROVINCIA = "AAAAAAAAAA";
    private static final String UPDATED_PROVINCIA = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/pas";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private PASRepository pASRepository;

    @Autowired
    private PASMapper pASMapper;

    @Autowired
    private MockMvc restPASMockMvc;

    private PAS pAS;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static PAS createEntity() {
        PAS pAS = new PAS()
            .cif(DEFAULT_CIF)
            .nombre(DEFAULT_NOMBRE)
            .codigo_postal(DEFAULT_CODIGO_POSTAL)
            .email(DEFAULT_EMAIL)
            .tipo_proveedor(DEFAULT_TIPO_PROVEEDOR)
            .direccion(DEFAULT_DIRECCION)
            .persona_de_contacto(DEFAULT_PERSONA_DE_CONTACTO)
            .poblacion(DEFAULT_POBLACION)
            .provincia(DEFAULT_PROVINCIA);
        return pAS;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static PAS createUpdatedEntity() {
        PAS pAS = new PAS()
            .cif(UPDATED_CIF)
            .nombre(UPDATED_NOMBRE)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .email(UPDATED_EMAIL)
            .tipo_proveedor(UPDATED_TIPO_PROVEEDOR)
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .poblacion(UPDATED_POBLACION)
            .provincia(UPDATED_PROVINCIA);
        return pAS;
    }

    @BeforeEach
    public void initTest() {
        pASRepository.deleteAll();
        pAS = createEntity();
    }

    @Test
    void createPAS() throws Exception {
        int databaseSizeBeforeCreate = pASRepository.findAll().size();
        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);
        restPASMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isCreated());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeCreate + 1);
        PAS testPAS = pASList.get(pASList.size() - 1);
        assertThat(testPAS.getCif()).isEqualTo(DEFAULT_CIF);
        assertThat(testPAS.getNombre()).isEqualTo(DEFAULT_NOMBRE);
        assertThat(testPAS.getCodigo_postal()).isEqualTo(DEFAULT_CODIGO_POSTAL);
        assertThat(testPAS.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testPAS.getTipo_proveedor()).isEqualTo(DEFAULT_TIPO_PROVEEDOR);
        assertThat(testPAS.getDireccion()).isEqualTo(DEFAULT_DIRECCION);
        assertThat(testPAS.getPersona_de_contacto()).isEqualTo(DEFAULT_PERSONA_DE_CONTACTO);
        assertThat(testPAS.getPoblacion()).isEqualTo(DEFAULT_POBLACION);
        assertThat(testPAS.getProvincia()).isEqualTo(DEFAULT_PROVINCIA);
    }

    @Test
    void createPASWithExistingId() throws Exception {
        // Create the PAS with an existing ID
        pAS.setId("existing_id");
        PASDTO pASDTO = pASMapper.toDto(pAS);

        int databaseSizeBeforeCreate = pASRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restPASMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllPAS() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        // Get all the pASList
        restPASMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(pAS.getId())))
            .andExpect(jsonPath("$.[*].cif").value(hasItem(DEFAULT_CIF)))
            .andExpect(jsonPath("$.[*].nombre").value(hasItem(DEFAULT_NOMBRE)))
            .andExpect(jsonPath("$.[*].codigo_postal").value(hasItem(DEFAULT_CODIGO_POSTAL)))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL)))
            .andExpect(jsonPath("$.[*].tipo_proveedor").value(hasItem(DEFAULT_TIPO_PROVEEDOR)))
            .andExpect(jsonPath("$.[*].direccion").value(hasItem(DEFAULT_DIRECCION)))
            .andExpect(jsonPath("$.[*].persona_de_contacto").value(hasItem(DEFAULT_PERSONA_DE_CONTACTO)))
            .andExpect(jsonPath("$.[*].poblacion").value(hasItem(DEFAULT_POBLACION)))
            .andExpect(jsonPath("$.[*].provincia").value(hasItem(DEFAULT_PROVINCIA)));
    }

    @Test
    void getPAS() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        // Get the pAS
        restPASMockMvc
            .perform(get(ENTITY_API_URL_ID, pAS.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(pAS.getId()))
            .andExpect(jsonPath("$.cif").value(DEFAULT_CIF))
            .andExpect(jsonPath("$.nombre").value(DEFAULT_NOMBRE))
            .andExpect(jsonPath("$.codigo_postal").value(DEFAULT_CODIGO_POSTAL))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL))
            .andExpect(jsonPath("$.tipo_proveedor").value(DEFAULT_TIPO_PROVEEDOR))
            .andExpect(jsonPath("$.direccion").value(DEFAULT_DIRECCION))
            .andExpect(jsonPath("$.persona_de_contacto").value(DEFAULT_PERSONA_DE_CONTACTO))
            .andExpect(jsonPath("$.poblacion").value(DEFAULT_POBLACION))
            .andExpect(jsonPath("$.provincia").value(DEFAULT_PROVINCIA));
    }

    @Test
    void getNonExistingPAS() throws Exception {
        // Get the pAS
        restPASMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewPAS() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        int databaseSizeBeforeUpdate = pASRepository.findAll().size();

        // Update the pAS
        PAS updatedPAS = pASRepository.findById(pAS.getId()).get();
        updatedPAS
            .cif(UPDATED_CIF)
            .nombre(UPDATED_NOMBRE)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .email(UPDATED_EMAIL)
            .tipo_proveedor(UPDATED_TIPO_PROVEEDOR)
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .poblacion(UPDATED_POBLACION)
            .provincia(UPDATED_PROVINCIA);
        PASDTO pASDTO = pASMapper.toDto(updatedPAS);

        restPASMockMvc
            .perform(
                put(ENTITY_API_URL_ID, pASDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isOk());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
        PAS testPAS = pASList.get(pASList.size() - 1);
        assertThat(testPAS.getCif()).isEqualTo(UPDATED_CIF);
        assertThat(testPAS.getNombre()).isEqualTo(UPDATED_NOMBRE);
        assertThat(testPAS.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testPAS.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testPAS.getTipo_proveedor()).isEqualTo(UPDATED_TIPO_PROVEEDOR);
        assertThat(testPAS.getDireccion()).isEqualTo(UPDATED_DIRECCION);
        assertThat(testPAS.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testPAS.getPoblacion()).isEqualTo(UPDATED_POBLACION);
        assertThat(testPAS.getProvincia()).isEqualTo(UPDATED_PROVINCIA);
    }

    @Test
    void putNonExistingPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                put(ENTITY_API_URL_ID, pASDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdatePASWithPatch() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        int databaseSizeBeforeUpdate = pASRepository.findAll().size();

        // Update the pAS using partial update
        PAS partialUpdatedPAS = new PAS();
        partialUpdatedPAS.setId(pAS.getId());

        partialUpdatedPAS
            .nombre(UPDATED_NOMBRE)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .email(UPDATED_EMAIL)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .provincia(UPDATED_PROVINCIA);

        restPASMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedPAS.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedPAS))
            )
            .andExpect(status().isOk());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
        PAS testPAS = pASList.get(pASList.size() - 1);
        assertThat(testPAS.getCif()).isEqualTo(DEFAULT_CIF);
        assertThat(testPAS.getNombre()).isEqualTo(UPDATED_NOMBRE);
        assertThat(testPAS.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testPAS.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testPAS.getTipo_proveedor()).isEqualTo(DEFAULT_TIPO_PROVEEDOR);
        assertThat(testPAS.getDireccion()).isEqualTo(DEFAULT_DIRECCION);
        assertThat(testPAS.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testPAS.getPoblacion()).isEqualTo(DEFAULT_POBLACION);
        assertThat(testPAS.getProvincia()).isEqualTo(UPDATED_PROVINCIA);
    }

    @Test
    void fullUpdatePASWithPatch() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        int databaseSizeBeforeUpdate = pASRepository.findAll().size();

        // Update the pAS using partial update
        PAS partialUpdatedPAS = new PAS();
        partialUpdatedPAS.setId(pAS.getId());

        partialUpdatedPAS
            .cif(UPDATED_CIF)
            .nombre(UPDATED_NOMBRE)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .email(UPDATED_EMAIL)
            .tipo_proveedor(UPDATED_TIPO_PROVEEDOR)
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .poblacion(UPDATED_POBLACION)
            .provincia(UPDATED_PROVINCIA);

        restPASMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedPAS.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedPAS))
            )
            .andExpect(status().isOk());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
        PAS testPAS = pASList.get(pASList.size() - 1);
        assertThat(testPAS.getCif()).isEqualTo(UPDATED_CIF);
        assertThat(testPAS.getNombre()).isEqualTo(UPDATED_NOMBRE);
        assertThat(testPAS.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testPAS.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testPAS.getTipo_proveedor()).isEqualTo(UPDATED_TIPO_PROVEEDOR);
        assertThat(testPAS.getDireccion()).isEqualTo(UPDATED_DIRECCION);
        assertThat(testPAS.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testPAS.getPoblacion()).isEqualTo(UPDATED_POBLACION);
        assertThat(testPAS.getProvincia()).isEqualTo(UPDATED_PROVINCIA);
    }

    @Test
    void patchNonExistingPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, pASDTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamPAS() throws Exception {
        int databaseSizeBeforeUpdate = pASRepository.findAll().size();
        pAS.setId(UUID.randomUUID().toString());

        // Create the PAS
        PASDTO pASDTO = pASMapper.toDto(pAS);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restPASMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(pASDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the PAS in the database
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deletePAS() throws Exception {
        // Initialize the database
        pASRepository.save(pAS);

        int databaseSizeBeforeDelete = pASRepository.findAll().size();

        // Delete the pAS
        restPASMockMvc
            .perform(delete(ENTITY_API_URL_ID, pAS.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<PAS> pASList = pASRepository.findAll();
        assertThat(pASList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
