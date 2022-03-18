import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zed-checkbox',
  styleUrl: 'zed-checkbox.scss',
  shadow: true,
})
export class ZedCheckbox {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
