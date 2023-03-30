
import { Controller } from "@hotwired/stimulus"
import React from 'react';
import ReactDOM from 'react-dom';
import DemoComponent from 'components/DemoComponent';

export default class extends Controller {
  connect() {
    ReactDOM.render(
      React.createElement(DemoComponent),
      this.element
    );
  }
}