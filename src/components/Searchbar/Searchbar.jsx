import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';

import { Component } from 'react';

import css from './search-bar.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({ ...this.state });
    // this.reset();
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;

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
              name="search"
              value={search}
              required
            />
          </form>
        </div>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
