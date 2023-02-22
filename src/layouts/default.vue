<script setup lang="ts"></script>

<template>
    <div class="app">
        <div class="app__slot">
            <slot />
        </div>
    </div>
</template>

<style lang="postcss">
.app {
    /* &__header {
  } */
    &__slot {
        @apply font-Poppins;
    }
    &__footer {
        @apply mt-20;
    }
}
</style>
