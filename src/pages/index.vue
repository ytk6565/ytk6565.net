<template>
  <div>
    <h1>Yutaka Kaneko</h1>

    <p>I am a Frontend Engineer.</p>

    <AppLinks></AppLinks>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLinks from '~/components/AppLinks.vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLinks,
  },
})
</script>
