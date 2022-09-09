<template>
  <NavList />
  <router-view/>
</template>

<script>
import NavList from "@/components/NavList/NavList";

export default {
  name: 'App',
  components: {
    NavList,
  }
}
</script>

<style lang="scss">
</style>
