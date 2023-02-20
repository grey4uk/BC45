import PropTypes from 'prop-types';

const Title = (abc) => {
  console.log('props', abc);
  const { children, subject = 'I love JS' } = abc;

  // return title;
  return (
    <h1>{children ?? subject}</h1>
    //     <>
    //       {children ? (
    //         <h1>{children}</h1>
    //       ) : (
    //         "We haven't text for title"
    //       )}
    //       <p>Next subject : {subject}</p>
    //     </>
    // <React.Fragment>
    //   <h1>{children}</h1>
    //   <p>{subject}</p>
    // </React.Fragment>
  );
};

export default Title;
Title.propTypes = {
  children: PropTypes.node,
  subject: PropTypes.string,
};
