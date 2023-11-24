import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts.selectors';
import { addFilter } from 'redux/filter.reducer';
import css from './Form.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form className={css.Form}>
      <label>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event => dispatch(addFilter(event.target.value))}
          disabled={useSelector(selectContacts).length === 0}
        ></input>
      </label>
    </form>
  );
};

export default Filter;
