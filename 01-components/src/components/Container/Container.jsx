import PropTypes from 'prop-types';
import './Container.styles.css';

const Container = ({ children }) => {
  console.log('children :>> ', children);
  return (
    <div className='container'>
      <h2>React Application</h2>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
