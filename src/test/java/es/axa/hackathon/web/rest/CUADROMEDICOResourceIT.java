package es.axa.hackathon.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import es.axa.hackathon.IntegrationTest;
import es.axa.hackathon.domain.CUADROMEDICO;
import es.axa.hackathon.repository.CUADROMEDICORepository;
import es.axa.hackathon.service.dto.CUADROMEDICODTO;
import es.axa.hackathon.service.mapper.CUADROMEDICOMapper;
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
 * Integration tests for the {@link CUADROMEDICOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class CUADROMEDICOResourceIT {

    private static final Integer DEFAULT_ID_CLIENTE = 1;
    private static final Integer UPDATED_ID_CLIENTE = 2;

    private static final String DEFAULT_SUSCRIPCION = "AAAAAAAAAA";
    private static final String UPDATED_SUSCRIPCION = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/cuadromedicos";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private CUADROMEDICORepository cUADROMEDICORepository;

    @Autowired
    private CUADROMEDICOMapper cUADROMEDICOMapper;

    @Autowired
    private MockMvc restCUADROMEDICOMockMvc;

    private CUADROMEDICO cUADROMEDICO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CUADROMEDICO createEntity() {
        CUADROMEDICO cUADROMEDICO = new CUADROMEDICO().id_cliente(DEFAULT_ID_CLIENTE).suscripcion(DEFAULT_SUSCRIPCION);
        return cUADROMEDICO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static CUADROMEDICO createUpdatedEntity() {
        CUADROMEDICO cUADROMEDICO = new CUADROMEDICO().id_cliente(UPDATED_ID_CLIENTE).suscripcion(UPDATED_SUSCRIPCION);
        return cUADROMEDICO;
    }

    @BeforeEach
    public void initTest() {
        cUADROMEDICORepository.deleteAll();
        cUADROMEDICO = createEntity();
    }

    @Test
    void createCUADROMEDICO() throws Exception {
        int databaseSizeBeforeCreate = cUADROMEDICORepository.findAll().size();
        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);
        restCUADROMEDICOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isCreated());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeCreate + 1);
        CUADROMEDICO testCUADROMEDICO = cUADROMEDICOList.get(cUADROMEDICOList.size() - 1);
        assertThat(testCUADROMEDICO.getId_cliente()).isEqualTo(DEFAULT_ID_CLIENTE);
        assertThat(testCUADROMEDICO.getSuscripcion()).isEqualTo(DEFAULT_SUSCRIPCION);
    }

    @Test
    void createCUADROMEDICOWithExistingId() throws Exception {
        // Create the CUADROMEDICO with an existing ID
        cUADROMEDICO.setId("existing_id");
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        int databaseSizeBeforeCreate = cUADROMEDICORepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restCUADROMEDICOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllCUADROMEDICOS() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        // Get all the cUADROMEDICOList
        restCUADROMEDICOMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(cUADROMEDICO.getId())))
            .andExpect(jsonPath("$.[*].id_cliente").value(hasItem(DEFAULT_ID_CLIENTE)))
            .andExpect(jsonPath("$.[*].suscripcion").value(hasItem(DEFAULT_SUSCRIPCION)));
    }

    @Test
    void getCUADROMEDICO() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        // Get the cUADROMEDICO
        restCUADROMEDICOMockMvc
            .perform(get(ENTITY_API_URL_ID, cUADROMEDICO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(cUADROMEDICO.getId()))
            .andExpect(jsonPath("$.id_cliente").value(DEFAULT_ID_CLIENTE))
            .andExpect(jsonPath("$.suscripcion").value(DEFAULT_SUSCRIPCION));
    }

    @Test
    void getNonExistingCUADROMEDICO() throws Exception {
        // Get the cUADROMEDICO
        restCUADROMEDICOMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewCUADROMEDICO() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();

        // Update the cUADROMEDICO
        CUADROMEDICO updatedCUADROMEDICO = cUADROMEDICORepository.findById(cUADROMEDICO.getId()).get();
        updatedCUADROMEDICO.id_cliente(UPDATED_ID_CLIENTE).suscripcion(UPDATED_SUSCRIPCION);
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(updatedCUADROMEDICO);

        restCUADROMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, cUADROMEDICODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isOk());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
        CUADROMEDICO testCUADROMEDICO = cUADROMEDICOList.get(cUADROMEDICOList.size() - 1);
        assertThat(testCUADROMEDICO.getId_cliente()).isEqualTo(UPDATED_ID_CLIENTE);
        assertThat(testCUADROMEDICO.getSuscripcion()).isEqualTo(UPDATED_SUSCRIPCION);
    }

    @Test
    void putNonExistingCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, cUADROMEDICODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateCUADROMEDICOWithPatch() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();

        // Update the cUADROMEDICO using partial update
        CUADROMEDICO partialUpdatedCUADROMEDICO = new CUADROMEDICO();
        partialUpdatedCUADROMEDICO.setId(cUADROMEDICO.getId());

        partialUpdatedCUADROMEDICO.id_cliente(UPDATED_ID_CLIENTE);

        restCUADROMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCUADROMEDICO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCUADROMEDICO))
            )
            .andExpect(status().isOk());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
        CUADROMEDICO testCUADROMEDICO = cUADROMEDICOList.get(cUADROMEDICOList.size() - 1);
        assertThat(testCUADROMEDICO.getId_cliente()).isEqualTo(UPDATED_ID_CLIENTE);
        assertThat(testCUADROMEDICO.getSuscripcion()).isEqualTo(DEFAULT_SUSCRIPCION);
    }

    @Test
    void fullUpdateCUADROMEDICOWithPatch() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();

        // Update the cUADROMEDICO using partial update
        CUADROMEDICO partialUpdatedCUADROMEDICO = new CUADROMEDICO();
        partialUpdatedCUADROMEDICO.setId(cUADROMEDICO.getId());

        partialUpdatedCUADROMEDICO.id_cliente(UPDATED_ID_CLIENTE).suscripcion(UPDATED_SUSCRIPCION);

        restCUADROMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCUADROMEDICO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCUADROMEDICO))
            )
            .andExpect(status().isOk());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
        CUADROMEDICO testCUADROMEDICO = cUADROMEDICOList.get(cUADROMEDICOList.size() - 1);
        assertThat(testCUADROMEDICO.getId_cliente()).isEqualTo(UPDATED_ID_CLIENTE);
        assertThat(testCUADROMEDICO.getSuscripcion()).isEqualTo(UPDATED_SUSCRIPCION);
    }

    @Test
    void patchNonExistingCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, cUADROMEDICODTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamCUADROMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = cUADROMEDICORepository.findAll().size();
        cUADROMEDICO.setId(UUID.randomUUID().toString());

        // Create the CUADROMEDICO
        CUADROMEDICODTO cUADROMEDICODTO = cUADROMEDICOMapper.toDto(cUADROMEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCUADROMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(cUADROMEDICODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the CUADROMEDICO in the database
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteCUADROMEDICO() throws Exception {
        // Initialize the database
        cUADROMEDICORepository.save(cUADROMEDICO);

        int databaseSizeBeforeDelete = cUADROMEDICORepository.findAll().size();

        // Delete the cUADROMEDICO
        restCUADROMEDICOMockMvc
            .perform(delete(ENTITY_API_URL_ID, cUADROMEDICO.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<CUADROMEDICO> cUADROMEDICOList = cUADROMEDICORepository.findAll();
        assertThat(cUADROMEDICOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
