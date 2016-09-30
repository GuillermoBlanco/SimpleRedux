import React, { PropTypes } from 'react';
import styles from './FellowList.scss';

const FellowList = () => (
  <div className={styles.root}>
    Fellow List!
  </div>
);

FellowList.propTypes = {
  fellowList: PropTypes.array,
  fellowSelected: PropTypes.object,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
  getFellows: PropTypes.func,
  selectFellow: PropTypes.func,
};

FellowList.defaultProps = {
  fellowList: [],
};

export default FellowList;
