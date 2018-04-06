<template>
  <button class="ki-button"
    @click="handClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      'ki-button--' + type,
      'ki-button--' + size,
      {
        'is-circle': circle,
        'is-loading': loading,
        'is-disabled': disabled,
      }
      ]"
  >
    <i class="ki-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'KiButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    icon: String,
    disabled: Boolean
  },

  methods: {
    handClick (event) {
      this.$emit('click', event);
    }
  }
};
</script>
