import Vue from 'vue'
import components from '@@/components'

components.forEach(module => {
  Vue.component(module.default.name, module.default);
});
