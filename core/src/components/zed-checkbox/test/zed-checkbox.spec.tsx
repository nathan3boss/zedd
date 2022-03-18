import { newSpecPage } from '@stencil/core/testing';
import { ZedCheckbox } from '../zed-checkbox';

describe('zed-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZedCheckbox],
      html: `<zed-checkbox></zed-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <zed-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zed-checkbox>
    `);
  });
});
