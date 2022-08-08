export class RichText {
  constructor(element, emojiButton) {
    console.log("Constructing");
    this.element = element;
    this.emojiButton = emojiButton;
    this.createEmojiPickerButton();
  }

  createEmojiPickerButton() {
    this.emojiButton.addEventListener(
      "click",
      this.toggleEmojiPicker.bind(this)
    );
    document
      .querySelector("[data-trix-button-group=block-tools]")
      .prepend(this.emojiButton);
  }

  toggleEmojiPicker(event) {
    console.log("Clicked Emoji Toggle");
    event.preventDefault();
    this.picker.toggle();
  }
  setPicker(picker) {
    this.picker = picker;
  }
}
