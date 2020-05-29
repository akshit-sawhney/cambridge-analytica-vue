<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row">
      <div class="col-md-4 col-lg4" v-for="(data,index) in teachers.data" :key="index">
         <h3 @click="goTodetail(data.teacher_id)">{{data.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'all_teachers',
  data () {
    		return {
            title: "All teachers",
      			teachers: []
    		}
  		},
		mounted () {
			axios
			.get('http://localhost:1337/api/v1/tone_analyzer/get_all')
			.then(response => (this.teachers = response.data))
		},
        methods:{
            goTodetail(id) {
                this.$router.push({name:'teacher_details',params:{Pid:id}})
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row img{
  max-height: 15em;
  width: 100%;

}
.row h3{
  cursor:pointer;
}
</style>
