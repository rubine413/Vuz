// 导入组件，组件必须声明 name
import Icon from './icon'
// 为组件提供 install 安装方法，供按需引入
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}
// 导出组件
export default Icon
