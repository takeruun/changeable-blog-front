import { BiSearchAlt } from 'react-icons/bi';
import commonClass, { CommonProps } from '../utilties/commonClass';
import styles from './styles.module.scss';

export type Props = {
  /**
   * input name
   */
  name?: string;
  /**
   * input value
   */
  value: string;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * input required
   */
  required?: boolean;
  /**
   * disabled
   */
  disabled?: boolean;
  /**
   * input onChange
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & CommonProps;

const SearchField: React.FC<Props> = (props) => {
  const { name, value, placeholder, required, disabled, onChange } = props;

  return (
    <div {...commonClass(props)}>
      <div className={styles.search__field}>
        <input
          type='search'
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={styles.search}
        />
        <BiSearchAlt className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchField;
