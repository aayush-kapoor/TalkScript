// LanguageDropdown.js

import React from "react";
import PropTypes from 'prop-types';
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/LanguageOptions";

const onSelectChange = (sl) => {
  setLanguage(sl);
};

const setLanguage = () => {};

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
}

LanguagesDropdown.propTypes = {
  language: PropTypes.string,
  onLanguageChange: PropTypes.func.isRequired
};

export default LanguagesDropdown;

// comment