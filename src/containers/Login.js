import { connect } from 'react-redux';

import Home from '../home'
import { handleLogin } from '../store/reducers/login';

const mapStateToProps = (state) => ({
    validate: state.login.validate
});

const mapActionToProps = () => {
    handleLogin
}

export default connect(mapStateToProps, mapActionToProps)(Home)