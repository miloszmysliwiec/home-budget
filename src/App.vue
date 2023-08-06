<template>
  <main-page-header />
  <main-page-tables />
</template>

<script>

import MainPageTables from './components/ui/mainPage/MainPageTables.vue'
import MainPageHeader from './components/ui/mainPage/MainPageHeader.vue'
export default {
  name: 'App',
  components: {
    MainPageTables,
    MainPageHeader
  },
  data() {
    return {

    }
  }

}
</script>


