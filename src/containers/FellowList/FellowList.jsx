import { connect } from 'react-redux';
import { FellowList } from 'components';
import { getFellows, selectFellow } from '../../redux/modules/fellows';

const mapStateToProps = (state) => ({
  fellowList: state.fellows.fellowList,
  fellowSelected: state.fellows.fellowSelected,
  isLoading: state.fellows.isLoading,
  isLoaded: state.fellows.isLoaded,
  error: state.fellows.error,
});

export default connect(mapStateToProps, { getFellows, selectFellow })(FellowList);
