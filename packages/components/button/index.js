// 导入组件，组件必须声明 name
// 为组件提供 install 安装方法，供按需引入
import Button from './button'
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}
export default Button
