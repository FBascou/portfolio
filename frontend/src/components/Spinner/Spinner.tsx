import { useContext } from 'react';
import { ThemeContext } from '../../utilities/context/themeContext';
import './Spinner.scss';

const Spinner = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`spinner-parent ${theme ? 'spinner-dark' : 'spinner-light'}`}>
      <div className={`spinner-child ${theme ? 'spinner-dark' : 'spinner-light'}`}></div>
    </div>
  );
};

export default Spinner;
