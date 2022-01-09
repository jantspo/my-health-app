<template>
    <form @submit.prevent="addExercise">
        <label for="exerciseOptions">Exercise</label>
        <select id="exerciseOptions" v-model="exercise">
            <option disabled value="">Please select one</option>
            <option v-for="exercise of exerciseOptions" :key="exercise.uuid" :value="exercise">{{exercise.name}}</option>
        </select>
        <label for="exerciseLength">Minutes</label>
        <input type="number" min="1" id="exerciseLength" v-model="length">
        <button type="submit" :disabled="disableExerciseSubmit || length === 0 || !exercise">Add</button>
    </form>

    <form @submit.prevent="addWorkout">
        <div v-for="exercise of exercises" :key="exercise.name">
            {{exercise.name}}: {{ exercise.calBurned}} calories a minute - {{exercise.totalTime}} total time - {{ exercise.totalTime * exercise.calBurned}} total calories
        </div>
        <div>
            <button type="submit" :disabled="disableWorkoutSubmit || exercises.length === 0">Save</button>
            <button type="button" @click="cancel">Cancel</button>
        </div>
    </form>
</template>

<script>
import Exercises from '../../Exercises.json';
export default {
    name: "NewWorkoutForm",
    props: {
        cancel: Function,
        saveWorkout: Function
    },
    data(){
        return {
            exercises: [],
            exerciseOptions: [],
            exercise: null,
            length: 0,
            disableExerciseSubmit: false,
            disableWorkoutSubmit: false,
        }
    },
    mounted(){
        this.setExerciseOptions();
    },
    methods: {
        addWorkout(){
            this.disableWorkoutSubmit = true;
            this.saveWorkout(this.exercises);
            this.disableWorkoutSubmit = false;
        },
        setExerciseOptions(){
            this.exerciseOptions = Exercises;
        },
        addExercise(evt){
            this.disableExerciseSubmit = true;    
            evt.preventDefault();      
            this.exercises.push({...this.exercise, totalTime: this.length});
            this.resetExerciseForm();
        },
        resetExerciseForm() {
            this.exercise = null;
            this.length = 0;
            this.disableExerciseSubmit = false;   
        }
    }
}
</script>
  