// import Vue from 'vue'
import slot from '../../utils/slot.js'

export default {
  name: 'vz-icon',

  props: {
    name: String,
    color: String,
    size: String,
    left: Boolean,
    right: Boolean,
  },

  computed: {
    type() {
      let cls
      const icon = this.name

      if (!icon) {
        return {
          cls: void 0,
          content: void 0,
        }
      }

      const defaultCls = 'v-icon' + (this.left ? ' on-left' : '') + (this.right ? ' on-right' : '')

      if (icon.startsWith('img://')) {
        return {
          img: true,
          cls: `${defaultCls} v-icon__img`,
          src: icon.substring(6),
        }
      } else if (icon.startsWith('path://')) {
        return {
          svg: true,
          cls: `${defaultCls} v-icon__svg`,
          path: icon.substring(7),
        }
      }

      let content = ' '

      if (icon.startsWith('fa-') === true) {
        cls = `fa ${icon}`
      } else if (icon.startsWith('bt-') === true) {
        cls = `bt ${icon}`
      } else if (icon.startsWith('eva-') === true) {
        cls = `eva ${icon}`
      } else if (icon.startsWith('ion-') === true) {
        cls = `ionicons ${icon}`
      } else if (icon.startsWith('mdi-') === true) {
        cls = `mdi ${icon}`
      } else if (icon.startsWith('ti-') === true) {
        cls = `themify-icon ${icon}`
      } else if (icon.startsWith('mat:') === true) {
        cls = 'material-icons'
        content = icon.substring(4)
      } else {
        cls = `v-icon ${icon}`
      }

      return {
        cls: cls + ' ' + defaultCls,
        content,
      }
    },

    style() {
      let style = {}
      if (this.size !== void 0) {
        style.fontSize = isNaN(this.size) ? this.size + 'px' : this.size
      }
      if (this.color !== void 0) {
        style.color = this.color
      }
      return style
    },
  },

  render(h) {
    const { cls, img, svg, src, path, content } = this.type
    if (svg === true) {
      return h(
        'i',
        {
          staticClass: cls,
          style: this.style,
          on: this.$listeners,
          attrs: { 'aria-hidden': true },
        },
        [
          h(
            'svg',
            {
              attrs: {
                width: '1em',
                height: '1em',
              },
            },
            [h('path', { attrs: { d: path } })]
          ),
        ]
      )
    } else if (img === true) {
      return h(
        'i',
        {
          staticClass: cls,
          style: this.style,
          on: this.$listeners,
          attrs: { 'aria-hidden': true },
        },
        [h('img', { attrs: { src } })]
      )
    } else {
      return h(
        'i',
        {
          staticClass: cls,
          style: this.style,
          on: this.$listeners,
          attrs: { 'aria-hidden': true },
        },
        [content, slot(this, 'default')]
      )
    }
  },
}
