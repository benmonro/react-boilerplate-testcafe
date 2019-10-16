/* eslint-disable */
import { getByText } from '@testing-library/testcafe';

fixture('Testing testcafe-testing-library').page('http://localhost:3000');

test('it finds something by text', async (t) => {
  const featuresButton = getByText('Features');

  await t
    .click(featuresButton)
    .expect(getByText("Quick scaffolding").exists).ok()
});
