/* eslint-disable */
import { getByText } from '@testing-library/testcafe';

fixture('Testing testcafe-testing-library').page('/');

test('it finds something by text', async () => {
  getByText('');
});
