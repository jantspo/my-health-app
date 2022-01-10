<template>
    <div class="Workout" >
        <h4>{{workout.date}} - {{ getTotalCaloriesBurned(workout.exercises) }} Calories burned!</h4>
        <h5>Workout Breakdown</h5>
        <Exercise :name="exercise.name" 
                :calBurned="exercise.calBurned" 
                :totalTime="exercise.totalTime" 
                v-for="(exercise, ind) in workout.exercises" 
                :exerciseNumber="ind + 1"
                :key="exercise.uuid"/>
    </div>
</template>

<script>
import Exercise from './Exercise.vue';

export default {
    name: 'Workout',
    components: {   
        Exercise
    },
    props: {
        workout: Object
    },
    methods: {
        getTotalCaloriesBurned: (exercises) => {
            return exercises.reduce((a,b) => {
                return a + (b.calBurned * b.totalTime)
            }, 0)
        }
    }
}
</script>

<style scoped>
.Workout{
    margin-bottom: 25px;
    border-bottom: 1px solid grey;
}    
</style>
