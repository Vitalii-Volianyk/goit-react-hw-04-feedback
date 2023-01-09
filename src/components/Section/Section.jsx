import css from './Section.module.css';
import { PropTypes } from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
