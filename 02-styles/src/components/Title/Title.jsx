import css from './Title.module.scss';

const Title = ({ variant, text }) => {
  console.log('css', css);

  switch (variant) {
    case 'h1':
      return <h1 className={css.main}>{text}</h1>;
    case 'h2':
      return <h2 className={css.medium}>{text}</h2>;
    case 'h3':
      return (
        <h3
          className={
            css.small +
            ' ' +
            css.differentColor +
            ' ' +
            'App-link'
          }>
          {text}
        </h3>
      );
    default:
      return <h4 className={css.title}>{text}</h4>;
  }
};

export default Title;
