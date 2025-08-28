export default function decorate(block) {
    console.log('block ----->>>', block);

    const img = block.querySelector('img');
    const title = block.querySelector('p');

    block.classList.add('hero-banner');
    title.classList.add('.hero-title');
    // image.setAttribute('loading', 'lazy');
  
    console.log('images.......................................', image);
  
  // const img = pictureTag?.querySelector('img');

  // if (img) {
  //   img.setAttribute('loading', 'eager');
  //   pictureTag.classList.add('hero-image');
  // }

  // block.classList.add('hero-banner');

  // const headingTag = block.querySelector('h1');
  // if (headingTag) {
  //   headingTag.classList.add('hero-title');

  //   const wrapper = document.createElement('div');
  //   wrapper.className = 'hero-text-wrapper';
  //   wrapper.appendChild(headingTag);
  //   block.appendChild(wrapper);
  // }
}