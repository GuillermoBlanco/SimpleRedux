import React, { PropTypes } from 'react';
import styles from './FellowDetail.scss';

const FellowDetails = () => (
  <div className={styles.root}>
    Fellow Details!
  </div>
);

FellowDetails.propTypes = {
  fellowSelected: PropTypes.object,
  getFellow: PropTypes.func,
};

export default FellowDetails;
