
import { Controller } from "@hotwired/stimulus"
import React from 'react';
import ReactDOM from 'react-dom';
import Entry from 'components/Entry';

export default class extends Controller {
  connect() {
    ReactDOM.render(
      React.createElement(Entry),
      this.element
    );
  }
}