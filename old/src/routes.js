import React from 'react';
import { Router, Route, IndexRoute, Link} from 'react-router';

import App from './App';
import Poster from './Poster';
import NotFound from './NotFound';

import CSITalks from './csitalks.png';
import CSICode from './csicode.png';

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={ App }>
      <IndexRoute component={ Option } />
      <Route path="/talks" component={ Poster } image={ CSITalks } color="4FB799"/>
      <Route path="/code" component={ Poster } image={ CSICode }/>
    </Route>
    <Route path="*" component={ NotFound } />
  </Router>
)

const Card = (props) => (
    <Link to={`/${props.uri}`}>
      <div style={props.style} >
        <img style={{verticalAlign: 'middle'}} width="200" src={props.image} />
      </div>
    </Link>
)

const styles = {
  background: "#fff",
  display: 'inline-block',
  width: 300,
  height: 65,
  textAlign: 'center',
  lineHeight: '65px',
  margin: '0 5px',
  borderRadius: '5px',
  boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)'
}

const Option = (props) => (
  <div style={{textAlign: 'center'}}>
    <h2>Elige tu opción</h2>
    <Card style={styles} uri="talks" image={CSITalks} />
    <Card style={styles} uri="code" image={CSICode} />
  </div>
)

export default Routes;
