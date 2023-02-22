import React from 'react';
import css from './Title.module.scss';

class Title extends React.Component{

state={label:this.props.text}

render(){
  // console.log('css', css);
  const {variant}=this.props;
  const {label}=this.state;
  switch (variant) {
    case 'h1':
      return <h1 className={css.main}>{label}</h1>;
    case 'h2':
      return <h2 className={css.medium}>{label}</h2>;
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
          {label}
        </h3>
      );
    default:
      return <h4 className={css.title}>{label}</h4>;
  }
}
};

export default Title;
