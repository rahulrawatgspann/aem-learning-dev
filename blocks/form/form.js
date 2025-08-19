export default function decorate(block) {
  // Create form element
  const form = document.createElement('form');
  form.setAttribute('method', 'POST'); // or GET, depending on usage
  form.setAttribute('action', '#'); // Replace with your endpoint

  // Form fields - simple Name, Email, Message
  const fields = [
    { label: 'Name', type: 'text', name: 'name', required: true },
    { label: 'Email', type: 'email', name: 'email', required: true },
    { label: 'Message', type: 'textarea', name: 'message', required: true },
  ];

  fields.forEach((field) => {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.className = 'form-field';

    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    label.textContent = field.label;

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
    } else {
      input = document.createElement('input');
      input.setAttribute('type', field.type);
    }

    input.setAttribute('name', field.name);
    input.setAttribute('id', field.name);
    if (field.required) input.setAttribute('required', 'required');

    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
    form.appendChild(fieldWrapper);
  });

  // Submit button
  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';
  form.appendChild(submit);

  // Replace block content with form
  block.innerHTML = '';
  block.appendChild(form);
}
