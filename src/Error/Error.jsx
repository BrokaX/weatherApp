import styles from './Error.module.css';
import PropTypes from 'prop-types';

function Error({ error, reset }) {
  return (
    <div>
        <div className={styles.errorContainer}>
          <div className={styles.errorBox}>
            <button className={styles.errorBtn} onClick={() => reset('')}>
              X
            </button>
            <p className={styles.error}>{error}</p>
            <p>
              Please check the search term then try again
            </p>
            <button className={styles.reset} onClick={() => reset('')}> 
            OK
            </button>
          </div>
        </div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
  reset: PropTypes.func,
};
export default Error;
