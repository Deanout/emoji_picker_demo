import { useEffect } from 'react';
import { createPicker  } from 'picmo';

function EmojiPicker() {
  let emojiPicker;
  let trixEditor;

  useEffect(() => {
    emojiPicker = document.querySelector('.pickerContainer');
    trixEditor = document.getElementById("post_content")
    if (emojiPicker === null || trixEditor === null) {
        return;
    }
    const picker = createPicker({ rootElement: emojiPicker })
    picker.addEventListener('emoji:select', event => {
      trixEditor.editor.insertString(event.emoji)
    });
  }, []);
}
export default EmojiPicker