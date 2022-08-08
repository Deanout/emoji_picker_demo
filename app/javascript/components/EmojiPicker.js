import { useEffect } from "react";
import { createPopup } from "@picmo/popup-picker";
import { RichText } from "../classes/RichText";

function EmojiPicker(props) {
  let emojiPicker;
  let trixEditor;
  let picker;
  console.log(props);

  useEffect(() => {
    emojiPicker = document.querySelector(".pickerContainer");
    trixEditor = document.querySelector("#post_content");
    const buttonString = emojiButtonString();
    const emojiButton = emojiButtonTemplate(buttonString);

    let richText = new RichText(picker, emojiButton);

    picker = createPopup(
      {
        rootElement: emojiPicker,
      },
      {
        // The element that triggers the popup
        triggerElement: emojiButton,

        // The element to position the picker relative to - often this is also the trigger element,
        referenceElement: emojiButton,

        // specify how to position the popup
        position: "bottom-start",
      }
    );
    picker.addEventListener("emoji:select", (event) => {
      trixEditor.editor.insertString(event.emoji);
    });
    richText.setPicker(picker);
  }, []);

  function emojiButtonTemplate(buttonString) {
    const domParser = new DOMParser();
    const emojiButton = domParser
      .parseFromString(buttonString, "text/html")
      .querySelector("button");
    return emojiButton;
  }
  function emojiButtonString() {
    const buttonString = `<button class="trix-button" id="emoji-picker" data-trix-action="insert-emoji" tabindex="1">😀</button>`;
    return buttonString;
  }
}

export default EmojiPicker;
