import { useState } from 'react';

import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';

import initialState from './initialState';

import css from './search-bar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value);
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
  };

  const { searchForm } = state;

  return (
    <header className={css.searchbar}>
      <div className="container">
        <form onSubmit={handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.button__label}>
              <CiSearch />
            </span>
          </button>

          <input
            onChange={handleChange}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchForm"
            value={searchForm}
            required
          />
        </form>
      </div>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
