import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../Styles/Styles.css';
import { ThemeContext } from './ThemeContext';

const LandingPageText = ({ text, className, ...props }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const styles = {
        fontSize: '12px',
        color: (theme === 'light') ? ("black") : ("White"),
        textAlign: "justify"
    }
    
    return <p className={`${className} FontFamliy`} style={styles} {...props}>{text}</p>;
};

LandingPageText.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

LandingPageText.defaultProps = {
    className: 'FontFamliy'
};

export default LandingPageText;
