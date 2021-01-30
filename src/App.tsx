import './App.less';
import { BrowserRouter as Router } from "react-router-dom";
import routesConfig from './route/config';
import renderRoutes from './route';
import { connect } from 'react-redux';

function App(props:any) {
  return (
    <div className="App">
      <Router>
        {renderRoutes({routes:routesConfig,authed:props.isLogin})}
      </Router>
    </div>
  );
}

const mapStateToProps = (state:{isLogin:boolean})=>({
  isLogin:state.isLogin
})

// export default App;
export default connect(mapStateToProps)(App);
