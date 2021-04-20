package es.axa.hackathon.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import es.axa.hackathon.IntegrationTest;
import es.axa.hackathon.domain.CENTROSANITARIO;
import es.axa.hackathon.repository.CENTROSANITARIORepository;
import es.axa.hackathon.service.dto.CENTROSANITARIODTO;
import es.axa.hackathon.service.mapper.CENTROSANITARIOMapper;
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
 * Integration tests for the {@link CENTROSANITARIOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class CENTROSANITARIOResourceIT {

    private static final String DEFAULT_DIRECCION = "AAAAAAAAAA";
    private static final String UPDATED_DIRECCION = "BBBBBBBBBB";

    private static final String DEFAULT_PERSONA_DE_CONTACTO = "AAAAAAAAAA";
    private static final String UPDATED_PERSONA_DE_CONTACTO = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_CODIGO_POSTAL = "AAAAAAAAAA";
    private static final String UPDATED_CODIGO_POSTAL = "BBBBBBBBBB";

    private static final String DEFAULT_ESPECIALIDADES = "AAAAAAAAAA";
    private static final String UPDATED_ESPECIALIDADES = "BBBBBBBBBB";

    private static final Double DEFAULT_COORDENADA_X = 1D;
    private static final Double UPDATED_COORDENADA_X = 2D;

    private static final Double DEFAULT_COORDENADA_Y = 1D;
    private static final Double UPDATED_COORDENADA_Y = 2D;

    private static final String DEFAULT_NOMBRE_PAS_ASOCIADO = "AAAAAAAAAA";
    private static final String UPDATED_NOMBRE_PAS_ASOCIADO = "BBBBBBBBBB";

    private static final String DEFAULT_NOMBRE_CENTRO = "AAAAAAAAAA";
    private static final String UPDATED_NOMBRE_CENTRO = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/centrosanitarios";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private CENTROSANITARIORepository cENTROSANITARIORepository;

    @Autowired
    private CENTROSANITARIOMapper cENTROSANITARIOMapper;

    @Autowired
    private MockMvc restCENTROSANITARIOMockMvc;

    private CENTROSANITARIO cENTROSANITARIO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CENTROSANITARIO createEntity() {
        CENTROSANITARIO cENTROSANITARIO = new CENTROSANITARIO()
            .direccion(DEFAULT_DIRECCION)
            .persona_de_contacto(DEFAULT_PERSONA_DE_CONTACTO)
            .email(DEFAULT_EMAIL)
            .codigo_postal(DEFAULT_CODIGO_POSTAL)
            .especialidades(DEFAULT_ESPECIALIDADES)
            .coordenada_x(DEFAULT_COORDENADA_X)
            .coordenada_y(DEFAULT_COORDENADA_Y)
            .nombre_pas_asociado(DEFAULT_NOMBRE_PAS_ASOCIADO)
            .nombre_centro(DEFAULT_NOMBRE_CENTRO);
        return cENTROSANITARIO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CENTROSANITARIO createUpdatedEntity() {
        CENTROSANITARIO cENTROSANITARIO = new CENTROSANITARIO()
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .email(UPDATED_EMAIL)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .especialidades(UPDATED_ESPECIALIDADES)
            .coordenada_x(UPDATED_COORDENADA_X)
            .coordenada_y(UPDATED_COORDENADA_Y)
            .nombre_pas_asociado(UPDATED_NOMBRE_PAS_ASOCIADO)
            .nombre_centro(UPDATED_NOMBRE_CENTRO);
        return cENTROSANITARIO;
    }

    @BeforeEach
    public void initTest() {
        cENTROSANITARIORepository.deleteAll();
        cENTROSANITARIO = createEntity();
    }

    @Test
    void createCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeCreate = cENTROSANITARIORepository.findAll().size();
        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);
        restCENTROSANITARIOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isCreated());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeCreate + 1);
        CENTROSANITARIO testCENTROSANITARIO = cENTROSANITARIOList.get(cENTROSANITARIOList.size() - 1);
        assertThat(testCENTROSANITARIO.getDireccion()).isEqualTo(DEFAULT_DIRECCION);
        assertThat(testCENTROSANITARIO.getPersona_de_contacto()).isEqualTo(DEFAULT_PERSONA_DE_CONTACTO);
        assertThat(testCENTROSANITARIO.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testCENTROSANITARIO.getCodigo_postal()).isEqualTo(DEFAULT_CODIGO_POSTAL);
        assertThat(testCENTROSANITARIO.getEspecialidades()).isEqualTo(DEFAULT_ESPECIALIDADES);
        assertThat(testCENTROSANITARIO.getCoordenada_x()).isEqualTo(DEFAULT_COORDENADA_X);
        assertThat(testCENTROSANITARIO.getCoordenada_y()).isEqualTo(DEFAULT_COORDENADA_Y);
        assertThat(testCENTROSANITARIO.getNombre_pas_asociado()).isEqualTo(DEFAULT_NOMBRE_PAS_ASOCIADO);
        assertThat(testCENTROSANITARIO.getNombre_centro()).isEqualTo(DEFAULT_NOMBRE_CENTRO);
    }

    @Test
    void createCENTROSANITARIOWithExistingId() throws Exception {
        // Create the CENTROSANITARIO with an existing ID
        cENTROSANITARIO.setId("existing_id");
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        int databaseSizeBeforeCreate = cENTROSANITARIORepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restCENTROSANITARIOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllCENTROSANITARIOS() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        // Get all the cENTROSANITARIOList
        restCENTROSANITARIOMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(cENTROSANITARIO.getId())))
            .andExpect(jsonPath("$.[*].direccion").value(hasItem(DEFAULT_DIRECCION)))
            .andExpect(jsonPath("$.[*].persona_de_contacto").value(hasItem(DEFAULT_PERSONA_DE_CONTACTO)))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL)))
            .andExpect(jsonPath("$.[*].codigo_postal").value(hasItem(DEFAULT_CODIGO_POSTAL)))
            .andExpect(jsonPath("$.[*].especialidades").value(hasItem(DEFAULT_ESPECIALIDADES)))
            .andExpect(jsonPath("$.[*].coordenada_x").value(hasItem(DEFAULT_COORDENADA_X.doubleValue())))
            .andExpect(jsonPath("$.[*].coordenada_y").value(hasItem(DEFAULT_COORDENADA_Y.doubleValue())))
            .andExpect(jsonPath("$.[*].nombre_pas_asociado").value(hasItem(DEFAULT_NOMBRE_PAS_ASOCIADO)))
            .andExpect(jsonPath("$.[*].nombre_centro").value(hasItem(DEFAULT_NOMBRE_CENTRO)));
    }

    @Test
    void getCENTROSANITARIO() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        // Get the cENTROSANITARIO
        restCENTROSANITARIOMockMvc
            .perform(get(ENTITY_API_URL_ID, cENTROSANITARIO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(cENTROSANITARIO.getId()))
            .andExpect(jsonPath("$.direccion").value(DEFAULT_DIRECCION))
            .andExpect(jsonPath("$.persona_de_contacto").value(DEFAULT_PERSONA_DE_CONTACTO))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL))
            .andExpect(jsonPath("$.codigo_postal").value(DEFAULT_CODIGO_POSTAL))
            .andExpect(jsonPath("$.especialidades").value(DEFAULT_ESPECIALIDADES))
            .andExpect(jsonPath("$.coordenada_x").value(DEFAULT_COORDENADA_X.doubleValue()))
            .andExpect(jsonPath("$.coordenada_y").value(DEFAULT_COORDENADA_Y.doubleValue()))
            .andExpect(jsonPath("$.nombre_pas_asociado").value(DEFAULT_NOMBRE_PAS_ASOCIADO))
            .andExpect(jsonPath("$.nombre_centro").value(DEFAULT_NOMBRE_CENTRO));
    }

    @Test
    void getNonExistingCENTROSANITARIO() throws Exception {
        // Get the cENTROSANITARIO
        restCENTROSANITARIOMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewCENTROSANITARIO() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();

        // Update the cENTROSANITARIO
        CENTROSANITARIO updatedCENTROSANITARIO = cENTROSANITARIORepository.findById(cENTROSANITARIO.getId()).get();
        updatedCENTROSANITARIO
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .email(UPDATED_EMAIL)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .especialidades(UPDATED_ESPECIALIDADES)
            .coordenada_x(UPDATED_COORDENADA_X)
            .coordenada_y(UPDATED_COORDENADA_Y)
            .nombre_pas_asociado(UPDATED_NOMBRE_PAS_ASOCIADO)
            .nombre_centro(UPDATED_NOMBRE_CENTRO);
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(updatedCENTROSANITARIO);

        restCENTROSANITARIOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, cENTROSANITARIODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isOk());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
        CENTROSANITARIO testCENTROSANITARIO = cENTROSANITARIOList.get(cENTROSANITARIOList.size() - 1);
        assertThat(testCENTROSANITARIO.getDireccion()).isEqualTo(UPDATED_DIRECCION);
        assertThat(testCENTROSANITARIO.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testCENTROSANITARIO.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testCENTROSANITARIO.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testCENTROSANITARIO.getEspecialidades()).isEqualTo(UPDATED_ESPECIALIDADES);
        assertThat(testCENTROSANITARIO.getCoordenada_x()).isEqualTo(UPDATED_COORDENADA_X);
        assertThat(testCENTROSANITARIO.getCoordenada_y()).isEqualTo(UPDATED_COORDENADA_Y);
        assertThat(testCENTROSANITARIO.getNombre_pas_asociado()).isEqualTo(UPDATED_NOMBRE_PAS_ASOCIADO);
        assertThat(testCENTROSANITARIO.getNombre_centro()).isEqualTo(UPDATED_NOMBRE_CENTRO);
    }

    @Test
    void putNonExistingCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, cENTROSANITARIODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                put(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateCENTROSANITARIOWithPatch() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();

        // Update the cENTROSANITARIO using partial update
        CENTROSANITARIO partialUpdatedCENTROSANITARIO = new CENTROSANITARIO();
        partialUpdatedCENTROSANITARIO.setId(cENTROSANITARIO.getId());

        partialUpdatedCENTROSANITARIO
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .email(UPDATED_EMAIL)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .coordenada_y(UPDATED_COORDENADA_Y)
            .nombre_pas_asociado(UPDATED_NOMBRE_PAS_ASOCIADO)
            .nombre_centro(UPDATED_NOMBRE_CENTRO);

        restCENTROSANITARIOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCENTROSANITARIO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCENTROSANITARIO))
            )
            .andExpect(status().isOk());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
        CENTROSANITARIO testCENTROSANITARIO = cENTROSANITARIOList.get(cENTROSANITARIOList.size() - 1);
        assertThat(testCENTROSANITARIO.getDireccion()).isEqualTo(UPDATED_DIRECCION);
        assertThat(testCENTROSANITARIO.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testCENTROSANITARIO.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testCENTROSANITARIO.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testCENTROSANITARIO.getEspecialidades()).isEqualTo(DEFAULT_ESPECIALIDADES);
        assertThat(testCENTROSANITARIO.getCoordenada_x()).isEqualTo(DEFAULT_COORDENADA_X);
        assertThat(testCENTROSANITARIO.getCoordenada_y()).isEqualTo(UPDATED_COORDENADA_Y);
        assertThat(testCENTROSANITARIO.getNombre_pas_asociado()).isEqualTo(UPDATED_NOMBRE_PAS_ASOCIADO);
        assertThat(testCENTROSANITARIO.getNombre_centro()).isEqualTo(UPDATED_NOMBRE_CENTRO);
    }

    @Test
    void fullUpdateCENTROSANITARIOWithPatch() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();

        // Update the cENTROSANITARIO using partial update
        CENTROSANITARIO partialUpdatedCENTROSANITARIO = new CENTROSANITARIO();
        partialUpdatedCENTROSANITARIO.setId(cENTROSANITARIO.getId());

        partialUpdatedCENTROSANITARIO
            .direccion(UPDATED_DIRECCION)
            .persona_de_contacto(UPDATED_PERSONA_DE_CONTACTO)
            .email(UPDATED_EMAIL)
            .codigo_postal(UPDATED_CODIGO_POSTAL)
            .especialidades(UPDATED_ESPECIALIDADES)
            .coordenada_x(UPDATED_COORDENADA_X)
            .coordenada_y(UPDATED_COORDENADA_Y)
            .nombre_pas_asociado(UPDATED_NOMBRE_PAS_ASOCIADO)
            .nombre_centro(UPDATED_NOMBRE_CENTRO);

        restCENTROSANITARIOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCENTROSANITARIO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCENTROSANITARIO))
            )
            .andExpect(status().isOk());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
        CENTROSANITARIO testCENTROSANITARIO = cENTROSANITARIOList.get(cENTROSANITARIOList.size() - 1);
        assertThat(testCENTROSANITARIO.getDireccion()).isEqualTo(UPDATED_DIRECCION);
        assertThat(testCENTROSANITARIO.getPersona_de_contacto()).isEqualTo(UPDATED_PERSONA_DE_CONTACTO);
        assertThat(testCENTROSANITARIO.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testCENTROSANITARIO.getCodigo_postal()).isEqualTo(UPDATED_CODIGO_POSTAL);
        assertThat(testCENTROSANITARIO.getEspecialidades()).isEqualTo(UPDATED_ESPECIALIDADES);
        assertThat(testCENTROSANITARIO.getCoordenada_x()).isEqualTo(UPDATED_COORDENADA_X);
        assertThat(testCENTROSANITARIO.getCoordenada_y()).isEqualTo(UPDATED_COORDENADA_Y);
        assertThat(testCENTROSANITARIO.getNombre_pas_asociado()).isEqualTo(UPDATED_NOMBRE_PAS_ASOCIADO);
        assertThat(testCENTROSANITARIO.getNombre_centro()).isEqualTo(UPDATED_NOMBRE_CENTRO);
    }

    @Test
    void patchNonExistingCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, cENTROSANITARIODTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamCENTROSANITARIO() throws Exception {
        int databaseSizeBeforeUpdate = cENTROSANITARIORepository.findAll().size();
        cENTROSANITARIO.setId(UUID.randomUUID().toString());

        // Create the CENTROSANITARIO
        CENTROSANITARIODTO cENTROSANITARIODTO = cENTROSANITARIOMapper.toDto(cENTROSANITARIO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCENTROSANITARIOMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cENTROSANITARIODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the CENTROSANITARIO in the database
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteCENTROSANITARIO() throws Exception {
        // Initialize the database
        cENTROSANITARIORepository.save(cENTROSANITARIO);

        int databaseSizeBeforeDelete = cENTROSANITARIORepository.findAll().size();

        // Delete the cENTROSANITARIO
        restCENTROSANITARIOMockMvc
            .perform(delete(ENTITY_API_URL_ID, cENTROSANITARIO.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<CENTROSANITARIO> cENTROSANITARIOList = cENTROSANITARIORepository.findAll();
        assertThat(cENTROSANITARIOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
