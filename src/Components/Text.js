import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Styles.css';
import { ThemeContext } from './ThemeContext';

const Text = ({ text, className, ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        fontSize: '15px',
        color: (theme === 'light') ? ("black") : ("White"),
    }
    
    return <p className={`${className} FontFamliy`} style={styles} {...props}>{text}</p>;
};

Text.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

Text.defaultProps = {
    className: 'FontFamliy'
};

export default Text;
