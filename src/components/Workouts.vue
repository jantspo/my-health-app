<template>
    <h2>Workouts</h2>
    <button @click="toggleWorkoutForm" v-if="!showingForm" id="workoutFormToggle" >Add Workout</button>
    <NewWorkoutForm v-if="showingForm" :cancel="toggleWorkoutForm" :saveWorkout="saveWorkout"/>  
    <div v-if="workouts.length > 0">
        <div v-for="workout in workouts" :key="workout.uuid">
            <Workout :workout="workout" /> 
        </div>
    </div>
    <div v-if="workouts.length === 0">
        <h3>No previous workouts</h3>
    </div>
</template>

<script>
import Workout from './Workout.vue';
import NewWorkoutForm from './NewWorkoutForm.vue';
import WorkoutsData from '../../WorkoutsData.json';

export default {
    name: 'Workouts',
    components: {
        Workout,
        NewWorkoutForm
    },
    props: {
         userId: Number
    },
    data(){
        return {
            workouts: [],
            showingForm: false
        }
    },
    mounted() {
        this.getWorkouts();
    },
    methods: {
        getWorkouts() {
            setTimeout(() => {
                this.workouts = WorkoutsData.filter(workout => workout.userId === this.userId);
            }, 250);
        },

        toggleWorkoutForm(){
            this.showingForm = !this.showingForm
        },

        saveWorkout(data) {
            this.workouts = [{userId: this.userId, exercises: data, date: new Date(), uuid: this.workouts.length}, ...this.workouts];
        }
    }
}
</script>
