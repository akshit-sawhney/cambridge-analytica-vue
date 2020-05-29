<template>
	<div class="contact">
		<h1>{{title}} {{ teacher_id }}</h1>
		
		 <div class="contact">
		 	<form>
		 		<div class="form-group">
		 			<div class="input-group-prepend">
		 				<input v-model="teacher_id" type="text" class="form-control" name="">
		 			</div>
		 			<div class="input-group-prepend">
		 			
		 				<textarea v-model="message" class="form-control">
		 					
		 				</textarea>
		 			</div>
		 			<button class="btn btn-primary btn-block" @click="submitChatHandler()">Submit</button>
		 		</div>
		 	</form>
		 </div>
	</div>
</template>
<script>
import axios from 'axios';
	export default{
		name:'blog',
		data (){
			return{
				title:'Submit Chat for ',
                teacher_id: null,
				message: null
			}
		},
		methods: {
			submitChatHandler() {
				axios.post('http://localhost:1337/api/v1/tone_analyzer', {
    				text: this.message
  				})
  				.then(function (response) {
    				console.log(response);
  				})
				.catch(err => {
					console.log('fucked up', err);
				})
			}
		}
		
	}
</script>

<style scoped>
.contact form{
	max-width: 40em;
	margin: 2em auto;
}
.contact form .form-control{
	margin-bottom: 1em;
}
.contact form textarea{
	min-height: 20em;
}	
</style>