import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  return (
    <div >
      <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='Add '/>
        
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
