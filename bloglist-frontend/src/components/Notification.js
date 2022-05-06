import React from 'react';

const error = {
  color: 'red',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
};

const success = {
  color: 'green',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
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
  }
};

export default Notification;
