import React from 'react';
import cn from 'classnames';
import './styles.css';

const Button = ({text, type}) => {
  return <button className={cn('btn', type)}>{text}</button>;
};

export default Button;
