<template>
  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :floating="floating"
    @click="floating = !floating"
    :title="pack.title"
    :subtitle="pack.subtitle"
    src="https://varlet-varletjs.vercel.app/cat.jpg"
  >
    <template #extra>
      <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
      <var-button type="warning">{{ pack.button }}</var-button>
    </template>

    <template #content>
      <p style="padding: 0 14px">
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
        测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
      </p>
    </template>
  </var-card>
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarCard from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'
import { ref } from 'vue'

export default {
  name: 'CardExample',
  components: {
    VarButton,
    VarCard,
    AppType,
  },
  setup() {
    const floating = ref(false)
    watchLang(use)
    watchDarkMode(dark)

    return {
      floating,
      pack,
    }
  },
}
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
