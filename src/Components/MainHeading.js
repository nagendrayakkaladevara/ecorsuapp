import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    fontSize: '15px',
    color: "Red",
    fontFamily: 'Roboto', 
}

const MainText = ({ text, className, ...props }) => {
    return <p className={className} style={styles} {...props}>{text}</p>;
};

MainText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

MainText.defaultProps = {
    className: ''
};

export default MainText;
