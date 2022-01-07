import createReporter from './createReporter';
const reporter = createReporter(process.env.NODE_ENV !== 'development');
import dom from './dom';

export { createReporter, reporter, dom };
