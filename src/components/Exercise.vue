<template>
    <div class="Exercise">
        <p class="Exercise-name">{{exerciseNumber}}: {{name}}</p>
        <p>Calories Burned: {{calBurned * totalTime}} <span class="Exercise-cpm">({{calBurned}} per minute)</span>  </p>
    </div>
</template>

<script>
export default {
    name: 'Exercise',
    props: {
        name: String,
        calBurned: Number,
        totalTime: Number,
        exerciseNumber: Number
    }
}
</script>

<style scoped>
.Exercise-name{
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: .25rem
}
.Exercise-cpm{
    color: rgb(92, 92, 92)
}
</style>
  

