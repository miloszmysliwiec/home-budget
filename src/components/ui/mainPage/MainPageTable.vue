<template>
  <h5>{{ header }}</h5>
  <base-table :columns="columns">
    <template v-slot:body>
      <template v-if="rows != null">
        <template v-for="row in rows"  :key="row">
          <tr>
          <td>{{ row.operation }}</td>
          <td>{{ row.amount }}</td>
          <td>{{ row.date }}</td>
          </tr>
        </template> 
      </template>
      <template v-else>
        <small>Brak wpisów</small>
      </template>
    </template>
  </base-table>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    rows: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      columns: [
        { name: "Nazwa" },
        { name: "Kwota" },
        { name: "Data" },
      ]
    }
  }
}
</script>