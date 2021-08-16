import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../redux/actions';
import { getFilter } from '../redux/selectors';
import styles from './SearchContacts.module.css';

export default function SearchContacts() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.searchContacts}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
}