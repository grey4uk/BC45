import './Button.styles.scss';

const Button = ({
  title,
  type = 'button',
  addedStyle = {},
  children,
}) => {
  return (
    <button
      type={type}
      style={addedStyle}
      className='button'>
      {title} {children}
    </button>
  );
};

export default Button;
