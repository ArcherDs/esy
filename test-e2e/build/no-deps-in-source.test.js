const path = require('path');

const {initFixture, esyCommands} = require('../test/helpers');

it('Build - no deps in source', async done => {
  expect.assertions(1);
  const TEST_PATH = await initFixture('./build/fixtures/no-deps-in-source');
  const PROJECT_PATH = path.resolve(TEST_PATH, 'project');

  await esyCommands.build(PROJECT_PATH, TEST_PATH);

  const {stdout} = await esyCommands.x(PROJECT_PATH, 'no-deps-in-source');

  expect(stdout).toEqual(expect.stringMatching('no-deps-in-source'));

  done();
});
