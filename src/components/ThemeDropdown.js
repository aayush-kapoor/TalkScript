// ThemeDropdown.js

import React from "react";
import PropTypes from 'prop-types';
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
import { customStyles } from "../constants/customStyles";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      // options={languageOptions}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  );
};

ThemeDropdown.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default ThemeDropdown;