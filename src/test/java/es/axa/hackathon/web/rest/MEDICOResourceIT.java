package es.axa.hackathon.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import es.axa.hackathon.IntegrationTest;
import es.axa.hackathon.domain.MEDICO;
import es.axa.hackathon.repository.MEDICORepository;
import es.axa.hackathon.service.dto.MEDICODTO;
import es.axa.hackathon.service.mapper.MEDICOMapper;
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
 * Integration tests for the {@link MEDICOResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class MEDICOResourceIT {

    private static final String DEFAULT_NOMBRE = "AAAAAAAAAA";
    private static final String UPDATED_NOMBRE = "BBBBBBBBBB";

    private static final String DEFAULT_APELLIDOS = "AAAAAAAAAA";
    private static final String UPDATED_APELLIDOS = "BBBBBBBBBB";

    private static final String DEFAULT_NUMERO_COLEGIADO = "AAAAAAAAAA";
    private static final String UPDATED_NUMERO_COLEGIADO = "BBBBBBBBBB";

    private static final String DEFAULT_TELEFONO_CONTACTO = "AAAAAAAAAA";
    private static final String UPDATED_TELEFONO_CONTACTO = "BBBBBBBBBB";

    private static final String DEFAULT_ESPECIALIDAD = "AAAAAAAAAA";
    private static final String UPDATED_ESPECIALIDAD = "BBBBBBBBBB";

    private static final String DEFAULT_CENTRO_SANITARIO = "AAAAAAAAAA";
    private static final String UPDATED_CENTRO_SANITARIO = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/medicos";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private MEDICORepository mEDICORepository;

    @Autowired
    private MEDICOMapper mEDICOMapper;

    @Autowired
    private MockMvc restMEDICOMockMvc;

    private MEDICO mEDICO;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MEDICO createEntity() {
        MEDICO mEDICO = new MEDICO()
            .nombre(DEFAULT_NOMBRE)
            .apellidos(DEFAULT_APELLIDOS)
            .numero_colegiado(DEFAULT_NUMERO_COLEGIADO)
            .telefono_contacto(DEFAULT_TELEFONO_CONTACTO)
            .especialidad(DEFAULT_ESPECIALIDAD)
            .centro_sanitario(DEFAULT_CENTRO_SANITARIO);
        return mEDICO;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MEDICO createUpdatedEntity() {
        MEDICO mEDICO = new MEDICO()
            .nombre(UPDATED_NOMBRE)
            .apellidos(UPDATED_APELLIDOS)
            .numero_colegiado(UPDATED_NUMERO_COLEGIADO)
            .telefono_contacto(UPDATED_TELEFONO_CONTACTO)
            .especialidad(UPDATED_ESPECIALIDAD)
            .centro_sanitario(UPDATED_CENTRO_SANITARIO);
        return mEDICO;
    }

    @BeforeEach
    public void initTest() {
        mEDICORepository.deleteAll();
        mEDICO = createEntity();
    }

    @Test
    void createMEDICO() throws Exception {
        int databaseSizeBeforeCreate = mEDICORepository.findAll().size();
        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);
        restMEDICOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isCreated());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeCreate + 1);
        MEDICO testMEDICO = mEDICOList.get(mEDICOList.size() - 1);
        assertThat(testMEDICO.getNombre()).isEqualTo(DEFAULT_NOMBRE);
        assertThat(testMEDICO.getApellidos()).isEqualTo(DEFAULT_APELLIDOS);
        assertThat(testMEDICO.getNumero_colegiado()).isEqualTo(DEFAULT_NUMERO_COLEGIADO);
        assertThat(testMEDICO.getTelefono_contacto()).isEqualTo(DEFAULT_TELEFONO_CONTACTO);
        assertThat(testMEDICO.getEspecialidad()).isEqualTo(DEFAULT_ESPECIALIDAD);
        assertThat(testMEDICO.getCentro_sanitario()).isEqualTo(DEFAULT_CENTRO_SANITARIO);
    }

    @Test
    void createMEDICOWithExistingId() throws Exception {
        // Create the MEDICO with an existing ID
        mEDICO.setId("existing_id");
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        int databaseSizeBeforeCreate = mEDICORepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restMEDICOMockMvc
            .perform(
                post(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllMEDICOS() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        // Get all the mEDICOList
        restMEDICOMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(mEDICO.getId())))
            .andExpect(jsonPath("$.[*].nombre").value(hasItem(DEFAULT_NOMBRE)))
            .andExpect(jsonPath("$.[*].apellidos").value(hasItem(DEFAULT_APELLIDOS)))
            .andExpect(jsonPath("$.[*].numero_colegiado").value(hasItem(DEFAULT_NUMERO_COLEGIADO)))
            .andExpect(jsonPath("$.[*].telefono_contacto").value(hasItem(DEFAULT_TELEFONO_CONTACTO)))
            .andExpect(jsonPath("$.[*].especialidad").value(hasItem(DEFAULT_ESPECIALIDAD)))
            .andExpect(jsonPath("$.[*].centro_sanitario").value(hasItem(DEFAULT_CENTRO_SANITARIO)));
    }

    @Test
    void getMEDICO() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        // Get the mEDICO
        restMEDICOMockMvc
            .perform(get(ENTITY_API_URL_ID, mEDICO.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(mEDICO.getId()))
            .andExpect(jsonPath("$.nombre").value(DEFAULT_NOMBRE))
            .andExpect(jsonPath("$.apellidos").value(DEFAULT_APELLIDOS))
            .andExpect(jsonPath("$.numero_colegiado").value(DEFAULT_NUMERO_COLEGIADO))
            .andExpect(jsonPath("$.telefono_contacto").value(DEFAULT_TELEFONO_CONTACTO))
            .andExpect(jsonPath("$.especialidad").value(DEFAULT_ESPECIALIDAD))
            .andExpect(jsonPath("$.centro_sanitario").value(DEFAULT_CENTRO_SANITARIO));
    }

    @Test
    void getNonExistingMEDICO() throws Exception {
        // Get the mEDICO
        restMEDICOMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewMEDICO() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();

        // Update the mEDICO
        MEDICO updatedMEDICO = mEDICORepository.findById(mEDICO.getId()).get();
        updatedMEDICO
            .nombre(UPDATED_NOMBRE)
            .apellidos(UPDATED_APELLIDOS)
            .numero_colegiado(UPDATED_NUMERO_COLEGIADO)
            .telefono_contacto(UPDATED_TELEFONO_CONTACTO)
            .especialidad(UPDATED_ESPECIALIDAD)
            .centro_sanitario(UPDATED_CENTRO_SANITARIO);
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(updatedMEDICO);

        restMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, mEDICODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isOk());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
        MEDICO testMEDICO = mEDICOList.get(mEDICOList.size() - 1);
        assertThat(testMEDICO.getNombre()).isEqualTo(UPDATED_NOMBRE);
        assertThat(testMEDICO.getApellidos()).isEqualTo(UPDATED_APELLIDOS);
        assertThat(testMEDICO.getNumero_colegiado()).isEqualTo(UPDATED_NUMERO_COLEGIADO);
        assertThat(testMEDICO.getTelefono_contacto()).isEqualTo(UPDATED_TELEFONO_CONTACTO);
        assertThat(testMEDICO.getEspecialidad()).isEqualTo(UPDATED_ESPECIALIDAD);
        assertThat(testMEDICO.getCentro_sanitario()).isEqualTo(UPDATED_CENTRO_SANITARIO);
    }

    @Test
    void putNonExistingMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, mEDICODTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                put(ENTITY_API_URL)
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateMEDICOWithPatch() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();

        // Update the mEDICO using partial update
        MEDICO partialUpdatedMEDICO = new MEDICO();
        partialUpdatedMEDICO.setId(mEDICO.getId());

        partialUpdatedMEDICO
            .numero_colegiado(UPDATED_NUMERO_COLEGIADO)
            .especialidad(UPDATED_ESPECIALIDAD)
            .centro_sanitario(UPDATED_CENTRO_SANITARIO);

        restMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedMEDICO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedMEDICO))
            )
            .andExpect(status().isOk());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
        MEDICO testMEDICO = mEDICOList.get(mEDICOList.size() - 1);
        assertThat(testMEDICO.getNombre()).isEqualTo(DEFAULT_NOMBRE);
        assertThat(testMEDICO.getApellidos()).isEqualTo(DEFAULT_APELLIDOS);
        assertThat(testMEDICO.getNumero_colegiado()).isEqualTo(UPDATED_NUMERO_COLEGIADO);
        assertThat(testMEDICO.getTelefono_contacto()).isEqualTo(DEFAULT_TELEFONO_CONTACTO);
        assertThat(testMEDICO.getEspecialidad()).isEqualTo(UPDATED_ESPECIALIDAD);
        assertThat(testMEDICO.getCentro_sanitario()).isEqualTo(UPDATED_CENTRO_SANITARIO);
    }

    @Test
    void fullUpdateMEDICOWithPatch() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();

        // Update the mEDICO using partial update
        MEDICO partialUpdatedMEDICO = new MEDICO();
        partialUpdatedMEDICO.setId(mEDICO.getId());

        partialUpdatedMEDICO
            .nombre(UPDATED_NOMBRE)
            .apellidos(UPDATED_APELLIDOS)
            .numero_colegiado(UPDATED_NUMERO_COLEGIADO)
            .telefono_contacto(UPDATED_TELEFONO_CONTACTO)
            .especialidad(UPDATED_ESPECIALIDAD)
            .centro_sanitario(UPDATED_CENTRO_SANITARIO);

        restMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedMEDICO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedMEDICO))
            )
            .andExpect(status().isOk());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
        MEDICO testMEDICO = mEDICOList.get(mEDICOList.size() - 1);
        assertThat(testMEDICO.getNombre()).isEqualTo(UPDATED_NOMBRE);
        assertThat(testMEDICO.getApellidos()).isEqualTo(UPDATED_APELLIDOS);
        assertThat(testMEDICO.getNumero_colegiado()).isEqualTo(UPDATED_NUMERO_COLEGIADO);
        assertThat(testMEDICO.getTelefono_contacto()).isEqualTo(UPDATED_TELEFONO_CONTACTO);
        assertThat(testMEDICO.getEspecialidad()).isEqualTo(UPDATED_ESPECIALIDAD);
        assertThat(testMEDICO.getCentro_sanitario()).isEqualTo(UPDATED_CENTRO_SANITARIO);
    }

    @Test
    void patchNonExistingMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, mEDICODTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamMEDICO() throws Exception {
        int databaseSizeBeforeUpdate = mEDICORepository.findAll().size();
        mEDICO.setId(UUID.randomUUID().toString());

        // Create the MEDICO
        MEDICODTO mEDICODTO = mEDICOMapper.toDto(mEDICO);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMEDICOMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(mEDICODTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the MEDICO in the database
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteMEDICO() throws Exception {
        // Initialize the database
        mEDICORepository.save(mEDICO);

        int databaseSizeBeforeDelete = mEDICORepository.findAll().size();

        // Delete the mEDICO
        restMEDICOMockMvc
            .perform(delete(ENTITY_API_URL_ID, mEDICO.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MEDICO> mEDICOList = mEDICORepository.findAll();
        assertThat(mEDICOList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
