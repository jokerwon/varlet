<script setup>
import { ref } from 'vue'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarLoading from '..'
import VarSpace from '../../space'
import VarButton from '../../button'
import VarCard from '../../card'
import { pack, use } from './locale'
import { watchDarkMode, watchLang } from '@varlet/cli/site/utils'
import dark from '../../themes/dark/index'

const loading = ref(false)

watchLang(use)
watchDarkMode(dark)
</script>

<template>
  <div class="loading-demo">
    <div class="loading-demo__type">
      <app-type>{{ pack.type }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" />
        <var-loading type="cube" />
        <var-loading type="wave" />
        <var-loading type="rect" />
        <var-loading type="disappear" />
      </var-space>
    </div>

    <div class="loading-demo__type">
      <app-type>{{ pack.color }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" color="#2979ff" />
        <var-loading type="cube" color="#2979ff" />
        <var-loading type="wave" color="#2979ff" />
        <var-loading type="rect" color="#2979ff" />
        <var-loading type="disappear" color="#2979ff" />
      </var-space>
    </div>
    <div class="loading-demo__size">
      <app-type>{{ pack.size }}</app-type>
      <var-space align="center" justify="space-between">
        <var-loading type="circle" size="small" />
        <var-loading type="cube" size="small" />
        <var-loading type="wave" size="small" />
        <var-loading type="rect" size="small" />
        <var-loading type="disappear" size="small" />
      </var-space>
    </div>

    <div>
      <app-type>{{ pack.wrap }}</app-type>
      <var-button @click="loading = !loading" style="margin-bottom: 8px">
        {{ loading ? pack.close : pack.open }}
      </var-button>
      <var-loading description="loading...." type="circle" :loading="loading">
        <var-card :title="pack.cardTitle" :description="pack.cardDesc" />
      </var-loading>
    </div>
  </div>
</template>

<style>
.loading-demo .var-space {
  padding: 8px 0;
}
</style>
