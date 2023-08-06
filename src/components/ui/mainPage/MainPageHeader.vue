<template>
    <div class="container text-center mb-5">   
      <h1>Helper</h1>
    <br />
    <h2>{{ month }}</h2>
    <h5>{{ dateNow }}</h5>
    <h3>Budżet obecny {{ actuallBudged }}</h3>
    <h5>Budżet planowany {{ plannedBudget }}</h5>
</div>

</template>

<script>
export default {

  data() {
    return {
        actuallBudged: 1555.89,
        plannedBudget: 3000.99,
        month:"Sierpień",
        dateNow:Date.now()
    }
  },
 
  
}
</script>