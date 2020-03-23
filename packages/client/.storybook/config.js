import {configure} from '@storybook/react';

const req = require.context('../packages', true, /.story.ts$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
