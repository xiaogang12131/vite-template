export default function virtualModule() {
  const virtualModuleId = 'virtual-module';

  return {
    name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
    buildStart() {
      console.log('buildstart');
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        // 命中第三方插件，执行load等方法
        return virtualModuleId;
      }
      return null; // 返回null表明是其他id要继续处理
    },
    load(id) {
      if (id === virtualModuleId) {
        return `export const msg = "from virtual module"`;
      }
      return null;
    },
    transform(data) {
      console.log(data);
    },
  };
}
