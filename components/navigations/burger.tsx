import { useState } from 'react';
import { Menu, X } from 'react-feather';

export const Burger = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((show) => !show);

  return <div onClick={toggle}>{show ? <X /> : <Menu />}</div>;
};
