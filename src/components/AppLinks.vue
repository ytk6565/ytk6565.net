<template>
  <ul :class="$style.root">
    <li
      v-for="({ url, src, alt, width, height }, key) in links"
      :key="key"
      :class="$style.item"
    >
      <a :href="url" :class="$style.link">
        <img
          :src="src"
          :alt="alt"
          :width="width"
          :height="height"
          :class="$style.icon"
        />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

type Link = {
  url: string
  src: string
  alt: string
  width: number
  height: number
}

type Data = {}
type Methods = {}
type Computed = {
  links: { [k: string]: Link }
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    links() {
      return {
        twitter: {
          url: 'https://twitter.com/ytk6565',
          src: require('~/assets/image/logo-twitter.png'),
          alt: 'Twitter',
          width: 300,
          height: 300,
        },
        gitHub: {
          url: 'https://github.com/ytk6565',
          src: require('~/assets/image/logo-github.png'),
          alt: 'GitHub',
          width: 300,
          height: 300,
        },
        zenn: {
          url: 'https://zenn.dev/ytk6565',
          src: require('~/assets/image/logo-zenn.png'),
          alt: 'Zenn',
          width: 300,
          height: 300,
        },
        qiita: {
          url: 'https://qiita.com/ytk6565',
          src: require('~/assets/image/logo-qiita.png'),
          alt: 'Qiita',
          width: 300,
          height: 300,
        },
      }
    },
  },
})
</script>

<style module>
.root {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.item + .item {
  margin-left: 1rem;
}

.link {
  display: block;
  width: 3rem;
  height: 3rem;
}

.icon {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
