

<template>
    <div @click="toggle" v-if="!editing" class="ProfileHeader">
        <h1>{{firstName}} {{lastName}}</h1>
    </div>
    <div v-if="editing">
        <form @submit="update">
            <input type="text" :value="firstName" id="firstName" ref="firstName" />
            <input type="text" :value="lastName" id="lastName" ref="lastName" />
            <button type="submit" class="btn btn-primary" >Save</button>
            <button type="button" @click="toggle" class="btn btn-danger">Cancel</button>
        </form>
 
    </div>
</template>

<script>
export default  {
    name: 'ProfileHeader',
    data() {
        return {
            editing: false,
        }
    },
    props: {
        firstName: String,
        lastName: String,
        updateUser: Function
    },
    methods: {
        toggle() {
            this.editing=!this.editing;
        },
        update(evt) {
            evt.preventDefault()
            this.updateUser({
                firstName:  this.$refs.firstName.value,
                lastName:  this.$refs.lastName.value,
            });
            this.editing = false;
        }  
    }
}
</script>

<style>
.ProfileHeader{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
