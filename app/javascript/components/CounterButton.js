import { html } from 'htm/react';
import { useState } from 'react';

export default function CounterButton({startingValue=0}) {
  const [count, setCount] = useState(startingValue);

  function handleClick() {
    setCount(count + 1);
  }

  return html`
    <button type="button" onClick=${handleClick} class="mx-2 btn btn-primary">
      Clicked ${count} times
    </button>
  `;
}
