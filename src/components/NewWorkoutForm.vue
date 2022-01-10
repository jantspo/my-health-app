<template>
<!-- TODO: create seperate component for selecting exercises and adding them to the workout. -->
<!-- TODO: flesh out for for adding exercises - datepicker - toggle or dropdown to select time or reps - number input for total sets -->
    <form @submit.prevent="addExercise">
        <div class="row">
            <div class="col-lg-6">
                <div class="form-gorup">
                    <label for="exerciseOptions" class="form-label" >Exercise</label>
                    <select id="exerciseOptions" v-model="exercise" class="form-control">
                        <option disabled value="">Please select one</option>
                        <option v-for="exercise of exerciseOptions" :key="exercise.uuid" :value="exercise">{{exercise.name}}</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-group">
                    <label for="exerciseLength" class="form-label" >Minutes</label>
                    <input type="number" min="1" id="exerciseLength" v-model="length" class="form-control">
                </div>
            </div>
            <div class="col-xs-12 form-actions">
                <button type="submit" 
                    :disabled="disableExerciseSubmit || length === 0 || !exercise" 
                    class="btn btn-primary">
                    Add
                </button>
                <button type="button" @click="cancel" class="btn btn-danger" v-if="exercises.length === 0" >Cancel</button>
            </div>
        </div>
    </form>
    <form @submit.prevent="addWorkout" v-if="exercises.length > 0" class="NewWorkoutForm-formWrapper">
        <div v-for="exercise of exercises" :key="exercise.name" class="NewWorkoutForm-exercises">
            {{exercise.name}}: {{ exercise.calBurned}} calories a minute - {{exercise.totalTime}} total time - {{ exercise.totalTime * exercise.calBurned}} total calories
        </div>
        <div class="form-actions">
            <button type="submit" :disabled="disableWorkoutSubmit || exercises.length === 0" class="btn btn-primary">Save</button>
            <button type="button" @click="cancel" class="btn btn-danger">Cancel</button>
        </div>
    </form>
    <hr/>  
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
    created(){
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

<style scoped>
.NewWorkoutForm-formWrapper{
    margin-top: 15px;
}
.NewWorkoutForm-exercises{
    font-weight: 500;
}
</style>
  