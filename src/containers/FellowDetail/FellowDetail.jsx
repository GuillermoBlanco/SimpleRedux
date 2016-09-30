import { connect } from 'react-redux';
import { FellowDetail } from 'components';
import { getFellow } from '../../redux/modules/fellows';

const mapStateToProps = (state) => ({
  fellowSelected: state.fellows.fellowSelected,
});

export default connect(mapStateToProps, { getFellow })(FellowDetail);
