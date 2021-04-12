import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";
import Home from './Home';

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);  

export default HomeContainer;