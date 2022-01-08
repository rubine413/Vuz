const sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
}
export default {
  props: {
    // 按钮类型：[a|button|reset|submit],
    type: String,
    label: [Number, String],
    // 按钮图标
    icon: String,
    // 右侧按钮图标
    iconRight: String,
    // 圆形图标
    round: Boolean,
    // 带边框
    outline: Boolean,
    // 扁平化
    flat: Boolean,
    // 更明显的圆角
    rounded: Boolean,
    // 适配父容器宽度
    block: Boolean,
    // 大小：[xs|sm|md|lg|xl]
    size: String,
    // 背景颜色
    color: String,
    // 文本颜色
    textColor: String,
    // 紧凑模式
    dense: Boolean,
    // 适配父容器高度
    stretch: Boolean,
    // 加载中
    loading: {
      type: Boolean,
      default: null,
    },
    disabled: Boolean,
  },

  computed: {
    style() {
      const { size } = this
      if (size) {
        return {
          fontSize: size in sizes ? `${sizes[size]}px` : size,
        }
      }
    },

    isRound() {
      return this.round === true
    },

    isDisabled() {
      return this.disabled === true || this.loading === true
    },

    computedTabIndex() {
      return this.isDisabled === true ? -1 : this.tabindex || 0
    },

    isLink() {
      return this.type === 'a'
    },

    design() {
      if (this.flat === true) return 'flat'
      if (this.outline === true) return 'outline'
      return 'standard'
    },

    attrs() {
      const att = { tabindex: this.computedTabIndex }
      if (this.type !== 'a') {
        att.type = this.type || 'button'
      }
      if (this.isDisabled === true) {
        att.disabled = true
      }
      return att
    },

    classes() {
      let colors
      // const { size, color, round, rounded, dense } = this
      if (this.color !== void 0) {
        if (this.flat === true || this.outline === true) {
          colors = `text-${this.textColor || this.color}`
        } else {
          colors = `bg-${this.color} text-${this.textColor || 'white'}`
        }
      } else if (this.textColor) {
        colors = `text-${this.textColor}`
      }

      return (
        `v-btn--${this.design} v-btn--${this.isRound === true ? 'round' : 'rectangle'}` +
        (colors !== void 0 ? ' ' + colors : '') +
        (this.isDisabled !== true ? ' q-focusable q-hoverable' : ' disabled') +
        (this.fab === true ? ' v-btn--fab' : this.fabMini === true ? ' v-btn--fab-mini' : '') +
        (this.noCaps === true ? ' v-btn--no-uppercase' : '') +
        (this.rounded === true ? ' v-btn--rounded' : '') +
        (this.dense === true ? ' v-btn--dense' : '') +
        (this.stretch === true ? ' no-border-radius self-stretch' : '')
      )
    },

    innerClasses() {
      return this.alignClass + (this.stack === true ? ' column' : ' row') + (this.noWrap === true ? ' no-wrap text-no-wrap' : '') + (this.loading === true ? ' v-btn__content--hidden' : '')
    },
  },
}
