<template>
    <table class="table table-success table-striped">
        <thead>
            <tr>
              <template v-for="column in columns" :key="column">
                <th >{{ column.name }}</th>
                </template>

            </tr>
        </thead>
        <tbody>
           <slot name="body"></slot>
        </tbody>
    </table>
</template>


<script>


export default {
  props:{
    columns: {
        type: Object,
        default:null
    },
   
  },
}
</script>