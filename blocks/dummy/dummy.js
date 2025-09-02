export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockdummy = document.createElement('blockquote');
  blockdummy.textContent = quoteWrapper.textContent.trim();
  blockdummy.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2');
  quoteWrapper.replaceChildren(blockdummy);
}
