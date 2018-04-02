<template>
  <div class="ccc">
    hello {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'v-hello',
  props: {
    msg: String
  }
};
</script>
