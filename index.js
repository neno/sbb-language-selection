import ArrowKeysHandler from './arrow-keys-handler.js';

var elSelector = '[data-module="language-selector"]';

const languageSelector = (el) => {
  const trigger = el.querySelector('button');
  const list = el.querySelector('ul');
  const links = Array.from(list.querySelectorAll('a'));
  const expandedCls = 'is-expanded';
  let arrowKeysHandler;
  let isCollapsed = true;

  function expand() {
    el.classList.add(expandedCls);
    list.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    arrowKeysHandler = new ArrowKeysHandler(links);
  }

  function collapse() {
    el.classList.remove(expandedCls);
    list.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    arrowKeysHandler.destroy();
    arrowKeysHandler = null;
  }

  function toggleCollapsed() {
    if (isCollapsed) {
      expand();
    } else {
      collapse();
    }
    isCollapsed = !isCollapsed;
  }

  function handleClick(event) {
    if (event.target.closest(elSelector)) {
      trigger.focus();
      toggleCollapsed();
    }
  }

  function handleKeyup(e) {
    if (!isCollapsed) {
      if (e.key === 'Escape' || e.key === 'Tab') {
        toggleCollapsed();
      }
      if (e.key === 'Escape') {
        trigger.focus();
      }
    }
  }

  document.addEventListener('click', handleClick);
  document.addEventListener('keyup', handleKeyup);
};

document.querySelectorAll(elSelector).forEach((el) => {
  languageSelector(el);
});
