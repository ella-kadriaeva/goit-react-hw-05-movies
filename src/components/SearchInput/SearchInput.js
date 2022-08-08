import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchInput.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchInput({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const searchSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Please, enter a keyword in the search bar.', {
        position: 'top-center',
      });
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={searchSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={searchChange}
        />
      </form>
    </header>
  );
}

SearchInput.propTypes = {
  searchQuery: PropTypes.string,
};
