import { connect } from 'react-redux';
import CurrentWeather from '../components/CurrentWeather';

const mapStateToProps = (state) => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
};

const mapDispatchToProps = ({
  // return an object of methods you'd like
  // to dispatch as redux actions
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);