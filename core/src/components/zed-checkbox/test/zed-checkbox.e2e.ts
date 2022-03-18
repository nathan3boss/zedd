import { newE2EPage } from '@stencil/core/testing';

describe('zed-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<zed-checkbox></zed-checkbox>');

    const element = await page.find('zed-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
