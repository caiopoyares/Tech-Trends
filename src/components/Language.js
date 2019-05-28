import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ language, onUpdateLanguage, selected }) => {
  return (
    <li style={selected === language ? { color: 'crimson' } : null}>
      <button onClick={onUpdateLanguage.bind(this, language)}>{language}</button>
    </li>
  )
}

Language.propTypes = {
  language: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default Language;