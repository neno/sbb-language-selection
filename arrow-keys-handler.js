class ArrowKeysHandler {
  constructor(items) {
    if (items && Array.isArray(items) && items.length > 0) {
      this.items = items;
      this.focusIndex;
      this.handleKeyup = this.handleKeyup.bind(this);

      this.bindEvents();
    }
  }

  handleKeyup(e) {
    if (e.key === 'ArrowDown') {
      this.handleArrowDown(e);
    }

    if (e.key === 'ArrowUp') {
      this.handleArrowUp(e);
    }
  }

  handleArrowUp(e) {
    const idx = this.items.indexOf(e.target) - 1;
    // focus prev or last item
    if (idx > -1) {
      this.focusIndex = idx;
    } else {
      this.focusIndex = this.items.length - 1;
    }

    this.focusItem();
  }

  handleArrowDown(e) {
    const idx = this.items.indexOf(e.target) + 1;
    // focus next or first item
    if (idx > 0 && idx < this.items.length) {
      this.focusIndex = idx;
    } else {
      this.focusIndex = 0;
    }

    this.focusItem();
  }

  focusItem() {
    this.items[this.focusIndex].focus();
  }

  bindEvents() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  unbindEvents() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  destroy() {
    this.unbindEvents();
  }
}

export default ArrowKeysHandler;
