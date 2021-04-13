import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import styles from './styles.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addFilter = (value) => {
    dispatch(filterContacts(value.toLowerCase()));
  };

  return (
    <input
      className={styles.contactFormFilter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => addFilter(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

export default Filter;