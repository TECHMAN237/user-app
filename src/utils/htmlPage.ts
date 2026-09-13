/** Extract header + main from prototype HTML, stripping nav/scripts. */
export function extractPageContent(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  doc.querySelectorAll('nav, script, style').forEach((el) => el.remove());
  const header = doc.querySelector('header');
  const main = doc.querySelector('main');
  const fab = doc.querySelector('button.fixed.right-6');
  const commentBar = doc.querySelector('.fixed.bottom-20');
  const parts = [header?.outerHTML, main?.outerHTML, fab?.outerHTML, commentBar?.outerHTML].filter(Boolean);
  return parts.join('\n');
}

/** Make prototype buttons keyboard-accessible. */
export function enhanceInteractiveElements(container: HTMLElement) {
  container.querySelectorAll('button, a[href="#"]').forEach((el) => {
    if (el.tagName === 'A') {
      el.setAttribute('role', 'button');
    }
    el.classList.add('cursor-pointer');
  });
}
