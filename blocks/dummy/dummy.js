export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockdummy = document.createElement('blockdummy');
  blockdummy.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockdummy);
}
