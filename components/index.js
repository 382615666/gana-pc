const requireComponent = require.context('./', true, /index\.vue$/);
const components = requireComponent.keys().map(filename => requireComponent(filename));

export default components;
