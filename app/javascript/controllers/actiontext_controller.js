import { Controller } from "@hotwired/stimulus"
import ReactDOM from 'react-dom';
import React from 'react';
import EmojiPicker from  "../components/EmojiPicker.js"



// Connects to data-controller="actiontext"
export default class extends Controller {
  connect() {
    /**
     * Shortform for ReactDOM.render(<App />, document.getElementById('root'));
     * 
     * https://reactjs.org/docs/react-without-jsx.html
     */
    const e = React.createElement;

    /**
     * Get a reference to the root element of the application.
     */
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(e(EmojiPicker), root);
    
  }
}