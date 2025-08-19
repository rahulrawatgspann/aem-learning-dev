export default function decorate(block) {
  const form = block.querySelector('.form-block');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const getValue = (selector) => {
      const el = form.querySelector(selector);
      return el ? el.value.trim() : '';
    };

    const getChecked = (selector) => {
      const el = form.querySelector(selector);
      return el ? el.checked : false;
    };

    const data = {
      firstName: getValue("[name='firstName']"),
      lastName: getValue("[name='lastName']"),
      message: getValue("[name='message']"),
      subscribe: getChecked("[name='subscribe']")
    };

    console.log("Form submitted:", data);
    alert("Thanks for submitting!");
  });
}
