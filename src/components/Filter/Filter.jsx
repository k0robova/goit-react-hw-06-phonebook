import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterValueChange = evt => {
    dispatch({ type: 'filter', payload: evt.target.value });
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="contact_name"
        // value={onFilterValueChange()}
        placeholder="Search..."
        onChange={onFilterValueChange}
        className={css.input_find}
      />
    </div>
  );
};
