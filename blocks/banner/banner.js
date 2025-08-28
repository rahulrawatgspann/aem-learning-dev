export default function decorate(block) {
  console.log('Decorating hero banner block:', block);

  // Add base class
  block.classList.add('hero-banner');

  // Handle images
  const images = block.querySelectorAll('img');
  images.forEach((img) => {
    img.classList.add('hero-image');
    img.setAttribute('loading', 'lazy');
  });

  // Handle text (assuming rich text is rendered as <p> or <div>)
  const text = block.querySelector('p, div');
  if (text) {
    const wrapper = document.createElement('div');
    wrapper.className = 'hero-text-wrapper';

    text.classList.add('hero-title');
    wrapper.appendChild(text);
    block.appendChild(wrapper);
  }

  console.log('Hero banner initialized with', images.length, 'images');
}
