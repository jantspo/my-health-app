<template>

  <ProfileHeader :firstName="user.firstName" :lastName="user.lastName" v-if="!loading" />
  <div v-if="loading">Loading...</div>
  <Workouts :userId="user.id" v-if="!loading" />
</template>

<script>
import ProfileHeader from './components/ProfileHeader.vue'
import Workouts from './components/Workouts.vue';


export default {
  name: 'App',

  components: {
    ProfileHeader,
    Workouts
  },

  data(){
    return {
      loading: true,
      workouts: [],
      user: null
    }
  },

  created(){
    this.getUser();
  },

  methods: {
    getUser() {
      setTimeout(() => {
        this.user = {
          firstName: 'John',
          lastName: 'Sposato',
          id: 1
        }
        this.loading = false;
      }, 250)
    }
  }
}
</script>

<style>
#app 
    ProfileHeader{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
