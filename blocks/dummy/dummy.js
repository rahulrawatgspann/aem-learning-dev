export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockdummy = document.createElement('blockquote');
  blockdummy.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockdummy);
}
