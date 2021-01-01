import React, { useState } from 'react';

export { default as Item } from './item';

export { default as IconPlay } from 'public/images/icon-play.svg';
export { default as IconLock } from 'public/images/icon-lock.svg';

export default function Accordion({ children }) {
  const [active, setActive] = useState(() => null);

  function toggle(id) {
    setActive((pref) => (prev === id ? null : id));
  }

  return <div className="accordion">{children(active, toggle)}</div>;
}
