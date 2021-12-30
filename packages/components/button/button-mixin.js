const sizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24,
}
export default {
  props: {
    type: String,
    label: [Number, String],
    icon: String,
    iconRight: String,
    round: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    block: Boolean,

    size: String,

    color: String,
    textColor: String,
    dense: Boolean,
    stretch: Boolean,
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
        `q-btn--${this.design} q-btn--${this.isRound === true ? 'round' : 'rectangle'}` +
        (colors !== void 0 ? ' ' + colors : '') +
        (this.isDisabled !== true ? ' q-focusable q-hoverable' : ' disabled') +
        (this.fab === true ? ' q-btn--fab' : this.fabMini === true ? ' q-btn--fab-mini' : '') +
        (this.noCaps === true ? ' q-btn--no-uppercase' : '') +
        (this.rounded === true ? ' q-btn--rounded' : '') +
        (this.dense === true ? ' q-btn--dense' : '') +
        (this.stretch === true ? ' no-border-radius self-stretch' : '') +
        (this.glossy === true ? ' glossy' : '')
      )
    },

    innerClasses() {
      return this.alignClass + (this.stack === true ? ' column' : ' row') + (this.noWrap === true ? ' no-wrap text-no-wrap' : '') + (this.loading === true ? ' q-btn__content--hidden' : '')
    },
  },
}
