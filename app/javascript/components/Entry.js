import { html } from 'htm/react';
import DemoComponent from './DemoComponent';
import CounterButton from './CounterButton';

const Entry = () => {

  return html`
  <div>
    <${DemoComponent} />
    <h3>Counters that update separately</h3>
    <div class="py-1">
      <${CounterButton} startingValue=${100}/>
      <${CounterButton} />
    </div>
  </div>
  `;
};

export default Entry;
