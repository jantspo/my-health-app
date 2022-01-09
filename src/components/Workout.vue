<template>
    <h3>{{workout.date}}</h3>
    <h4>{{ getTotalCaloriesBurned(workout.exercises) }} Calories burned!</h4>
    <ul >
        <li v-for="exercise in workout.exercises" :key="exercise.uuid">
            <Exercise :name="exercise.name" :calBurned="exercise.calBurned" :totalTime="exercise.totalTime" />    
        </li>
    </ul>
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
