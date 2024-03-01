import styles from './Wind.module.css';
import PropTypes from 'prop-types';

function Wind( { weather }) {
  console.log(weather)
  return (
    <section className={styles.container}>Wind</section>
  )
}

Wind.propTypes = {
  weather: PropTypes.object,
};
export default Wind