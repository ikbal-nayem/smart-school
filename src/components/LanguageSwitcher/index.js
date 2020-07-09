import React from 'react';

import LanguageItem from './LanguageItem';
import languageData from './data';

const LanguageSwitcher = ({switchLanguage, handleRequestClose}) => {
  return (
    <div className="messages-list language-list">
      <ul className="list-unstyled">
        {languageData.map((language, index) => <LanguageItem key={index} language={language}
                                                             handleRequestClose={handleRequestClose}
                                                             switchLanguage={switchLanguage}/>)}
      </ul>
    </div>
  )
};

export default LanguageSwitcher;

