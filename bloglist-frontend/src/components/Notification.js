import React from 'react';

const error = {
  color: 'red',
  border: '4px solid red',
  background: 'lightgrey',
  fontSize: 20,
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const success = {
  color: 'green',
  border: '4px solid green',
  background: 'lightgrey',
  fontSize: 20,
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
};

const Notification = ({ res, text }) => {
  if (res === null) {
    return null;
  } else if (res === true) {
    return (
      <div id="success" style={success}>
        {text}
      </div>
    );
  } else {
    console.log('Oho, something wrong happens !');
    return (
      <div id="error" style={error}>
        {text}
      </div>
    );
  }
};

export default Notification;
