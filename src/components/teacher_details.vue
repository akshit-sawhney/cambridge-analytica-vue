<template>
	<div class="details">
		<div class="container">
			<div class="row">
				<div class="col-md-12" v-for="(data,index) in teachers.data" :key="index"> 
					<div>
						<h1>{{data.name}}</h1>
                        <h3>Anger: {{data.anger}}</h3>
                        <h3>Fear: {{data.fear}}</h3>
                        <h3>Joy: {{data.joy}}</h3>
                        <h3>Sadness: {{data.sadness}}</h3>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12"> 
					<RadarChart :teachers='teachers'/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import RadarChart from "./radar_chart";
	export default{
		name:'teacher_details',
		components: {
			RadarChart
		},
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"teacher_details",
				teachers: []
			}
		},
        mounted () {
			axios
			.get('http://localhost:1337/api/v1/tone_analyzer/get?teacher_id=' + this.$route.params.Pid)
			.then(response => {
                (this.teachers = response.data)
            })
		},
		
	}
</script>