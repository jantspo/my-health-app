<template>
    <div>
        Type:{{name}}
        Calories Burned: {{calBurned * totalTime}} ({{calBurned}} per minute)
    </div>
</template>

<script>
export default {
    name: 'Exercise',
    props: {
        name: String,
        calBurned: Number,
        totalTime: Number
    }
}
</script>
  

