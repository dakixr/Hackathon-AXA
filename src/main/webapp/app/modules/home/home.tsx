import './home.scss';

import React, { useEffect } from 'react';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
  <><Button variant="contained" color="primary">
      Dar de alta PAS
    </Button>

    <Button variant="contained" color="primary">
      Dar de alta Centro Sanitario
    </Button>

    <Button variant="contained" color="primary">
        Dar de alta médico
    </Button>

    <Button variant="contained" color="primary">
        Crear Cuadro Médico
    </Button>

    <Button variant="contained" color="primary">
        Visualizar Cuadros Médicos
    </Button>
    
    <Button variant="contained" color="primary">
       Buscar, modificar y eliminar Cuadro Médico
    </Button>
    
    <Button variant="contained" color="primary">
        Buscar Centro Sanitario
    </Button>
    
   
    </>);
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
