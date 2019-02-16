const fs = require('fs');
const path = require('path');

const dirName = process.argv.reverse()[0];

const distPath = path.resolve(__dirname, dirName);

function exist (name) {
  try {
    fs.accessSync(name);
  } catch (e) {
    return false;
  }
  return true;
}

function toCamel (str) {
  return str.split('-').map(item => item.replace(/[a-z]/, ($1) => $1.toUpperCase())).join('');
}

function writeToFile (path, data) {
  fs.writeFileSync(path, data, 'utf8');
}

if (exist(distPath)) {
  console.log(`component: ${dirName} is exist!`);
  return;
}

fs.mkdirSync(distPath);

const componentName = toCamel(dirName);

const vueStr = `<template>
  <div class="${dirName}-component">
  
  </div>
</template>
<script>
export default {
  name: '${componentName}',
  data () {
    return {
      
    };
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
  .${dirName}-component{
      
  }    
</style>
`;
writeToFile(path.resolve(distPath, './index.vue'), vueStr);
