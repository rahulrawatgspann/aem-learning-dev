export default function decorate(block) {
    
    const image = block.querySelector('img');
    
    image.setAttribute('loading', 'lazy');
  
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