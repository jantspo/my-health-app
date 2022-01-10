<template>
    <h2>Workouts</h2>
    <button @click="toggleWorkoutForm" v-if="!showingForm" id="workoutFormToggle" class="btn btn-primary">Add Workout</button>
    <NewWorkoutForm v-if="showingForm" :cancel="toggleWorkoutForm" :saveWorkout="saveWorkout"/>  
    <div v-if="workouts.length > 0" class="Workouts-workoutsList">
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
import {get} from '../helpers/axios.helper';

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
        // TODO: replace with external get request when server and db setup
        async getWorkouts() {
            const data = await get('/WorkoutsData.json');
            this.workouts = data;
        },

        toggleWorkoutForm(){
            this.showingForm = !this.showingForm
        },
        // TODO: replace with real post request when server and db store set up
        saveWorkout(data) {
            this.workouts = [{userId: this.userId, exercises: data, date: new Date(), uuid: this.workouts.length}, ...this.workouts];
        }
    }
}
</script>

<style scoped>
.Workouts-workoutsList{
    margin-top: 25px;
}
</style>
