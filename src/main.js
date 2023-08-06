import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import BaseTable from './components/ui/base/BaseTable.vue'

const app = createApp(App);

app.component('base-table',BaseTable )
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"