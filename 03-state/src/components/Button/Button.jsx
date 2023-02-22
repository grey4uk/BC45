import './Button.styles.scss';

const Button = ({
  title,
  type = 'button',
  addedStyle = {},
  children,
  handleClick,
  name,
  // prev,
}) => {
  return (
    <button
      name={name}
      onClick={handleClick}
      // onClick={() => handleClick(prev + 1)}
      type={type}
      style={addedStyle}
      className='button'>
      {title} {children}
    </button>
  );
};

export default Button;
