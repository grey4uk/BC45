import PropTypes from 'prop-types';

import styles from './List.module.css';

const List = ({ items }) => {
  console.log('styles :>> ', styles);
  return (
    <ol className={styles.list}>
      {items.map((item) => {
        const { id, src, alt } = item;
        return (
          <li key={id}>
            <img src={src} alt={alt} width='400' />
          </li>
        );
      })}
    </ol>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      unactive: PropTypes.bool,
    })
  ),
};
