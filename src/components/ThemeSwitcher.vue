<script setup lang="ts">
import { useUiSettingsStore } from '@/stores/ui-settings'

const uiSettingsStore = useUiSettingsStore()
</script>

<template>
  <div class="nd-theme-switcher"
    :class="uiSettingsStore.useDarkTheme ? 'nd-theme-switcher--dark' : 'nd-theme-switcher--light'"
    @click="uiSettingsStore.useDarkTheme = !uiSettingsStore.useDarkTheme">
    <div class="nd-theme-switcher-inner"></div>
  </div>
</template>

<style scoped lang="scss">
$transition: 0.2s ease-out;

.nd-theme-switcher {
  cursor: pointer;
  margin-left: auto;
  width: 30px;
  padding: 5px;
  border-radius: 20px;
  transition: background-color $transition;

  .nd-theme-switcher-inner {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: auto;
    transition: transform $transition, background-color $transition;
  }

  &--dark {
    background-color: #29004a;

    .nd-theme-switcher-inner {
      background-color: #fff8b4;
      transform: translateX(50%);
    }
  }

  &--light {
    background-color: #45d4ff;

    .nd-theme-switcher-inner {
      background-color: #ffeb35;
      transform: translateX(-50%);
    }
  }
}
</style>@/stores/ui-settings