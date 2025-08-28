export default function decorate(block) {
  console.log('Decorating hero banner block:', block);

  block.classList.add('hero-banner');

  const img = block.querySelector('img');
  const title = block.querySelector('p');

  if (img) {
    img.classList.add('hero-image');
    img.setAttribute('loading', 'lazy');
  }

  if (title) {
    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';

    title.classList.add('hero-title');
    overlay.appendChild(title);
    block.appendChild(overlay);
  }
}
