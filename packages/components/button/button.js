// import slot from '../../utils/slot.js'
import BtnMixin from './button-mixin'

export default {
  name: 'v-button',
  mixins: [ BtnMixin ],
  render(h) {
    return h('div')
  }
}
