import { useEffect } from 'react';
import { createPopup } from '@picmo/popup-picker';

function EmojiPicker(props) {
  let emojiPicker;
  let trixEditor;
  let triggerButton;
  let picker;
  console.log(props)

  useEffect(() => {
    emojiPicker = document.querySelector('.pickerContainer');
    trixEditor = document.querySelector("#post_content")

    if (emojiPicker === null || trixEditor === null) {
        return;
    }
    let richText = new RichText(props.target, picker);
    
    picker = createPopup({ 
        rootElement: emojiPicker,
    });
    picker.addEventListener('emoji:select', event => {
      trixEditor.editor.insertString(event.emoji)
    });
    
    
    triggerButton = document.querySelector('#emoji-button');
    richText.setPicker(picker);
    richText.setTriggerButton(triggerButton);
  }, []);
}

class RichText {
  constructor(element) {
    console.log("Constructing")
    this.element = element
    this.createEmojiPickerButton()
  }

  createEmojiPickerButton() {
    const buttonString = this.emojiButtonString();
    const button = this.emojiButtonTemplate(buttonString);
    button.addEventListener('click', this.toggleEmojiPicker.bind(this))
    document.querySelector("[data-trix-button-group=block-tools]").prepend(button)
    this.emojiButton = button;
  }

  toggleEmojiPicker() {
    console.log("Clicked Emoji Toggle")
    const emojiPicker = document.querySelector('.pickerContainer');
    if (emojiPicker === null) {
      return;
    }
    this.toggleVisibility();
  }
  emojiButtonTemplate(buttonString) {
    const domParser = new DOMParser();
    const emojiButton = domParser.parseFromString(buttonString, "text/html").querySelector("button");
    return emojiButton;
  }
    emojiButtonString() {
    const buttonString = `<button class="trix-button trix-button--icon" id="emoji-picker" data-trix-action="insert-emoji" tabindex="1" value="😀"></button>`;
    return buttonString
  }
  toggleVisibility() {
    this.picker.open();
  }
  setPicker(picker) {
    this.picker = picker;
  }
  setTriggerButton(triggerButton) {
    this.triggerButton = triggerButton;
  }
}


export default EmojiPicker
