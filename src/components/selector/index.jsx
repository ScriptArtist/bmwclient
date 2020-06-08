import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Selector = ({ name, items, value: initialValue, onChanged, initOptionLabel }) => {
  const [value, setValue] = useState(initialValue);

  const onChangeSelector = event => {
    const newValue = event.target.value;
    setValue(newValue);
    onChanged(name, newValue);
  };

  return (
    <select className="ui dropdown" onChange={onChangeSelector} value={value}>
      <option value="">{initOptionLabel}</option>
      {items.map(item => (
        <option key={item.id} value={item.slug}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

Selector.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  onChanged: PropTypes.func.isRequired,
  initOptionLabel: PropTypes.string.isRequired
};

Selector.defaultProps = {
  items: [],
  value: undefined
};

export default Selector;
