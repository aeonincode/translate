import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // helper method in consume way in complicated situation
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {({ language }) => this.renderSubmit(language)}
              </LanguageContext.Consumer>
            </button>
        );
    }

    // first way this.context
    // static contextType = LanguageContext;
    // consumer way: we don't need line above static con...

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
        // return <button className="ui button primary">{text}</button>;
        return (
        <ColorContext.Consumer>
          {color => this.renderButton(color)}
        </ColorContext.Consumer>
      );
    }
}
// second way this.context, you can choice only one of them
// Button.contextType = LanguageContext;

// line 21 in non complicated situation in consume way
// {(value) => value === 'english' ? 'Submit' : 'Voorleggen'} 

export default Button;