import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import Title from './components/Title/Title';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const greetings = <h1>Hello User</h1>;

// const title = React.createElement('h1', {}, 'Hello React');

// const Title = (abc) => {
//   console.log('props', abc);
//   const { children, subject = 'I love JS' } = abc;

//   // return title;
//   return (
//     <>
//       {children ? (
//         <h1>{children}</h1>
//       ) : (
//         "We haven't text for title"
//       )}
//       <p>Next subject : {subject}</p>
//     </>
//     // <React.Fragment>
//     //   <h1>{children}</h1>
//     //   <p>{subject}</p>
//     // </React.Fragment>
//   );
// };

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <>
  //   <Title subject='Node' />
  //   <Title>We know HTML</Title>
  // </>
  // <Title subject='Node'>Hello Java Script</Title>
  // greetings
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
