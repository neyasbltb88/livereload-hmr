import createReporter from './createReporter';
const reporter = createReporter(process.env.NODE_ENV !== 'development');

export default reporter;
