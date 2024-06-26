import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Styles.css';

const styles = {
    fontSize: '15px',
    color: "Red",
    fontFamily: 'Roboto',
    margin: '0px'
}

const MainText = ({ text, className, ...props }) => {
    return <p className={`${className} FontFamliy`} style={styles} {...props}>{text}</p>;
};

MainText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

MainText.defaultProps = {
    className: 'FontFamliy'
};

export default MainText;
