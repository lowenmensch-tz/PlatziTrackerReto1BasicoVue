
new Vue({
    el: '#app',

    data: function() {
        return{
            courses: [],
            title: '', 
            time:0,
            isotipo: "https://platzistaging.s3-us-west-2.amazonaws.com/commons/assets/image/isotipoPlatzi442ccc1186a9806e18c9889cc301ffe1.png",
			logotipo: "https://platzistaging.s3-us-west-2.amazonaws.com/commons/assets/image/logotipo-platzi768799552e5f26369e21a807b8a533f7.png",
        }
    }, 

    computed: {
        totalTime() {
            return  this.courses.reduce((total, course) => total + course.time, 0);
        }
    },

    methods:{
        addCourse(){

            if(this.title.length  && this.time.length ){
            
                this.courses.push({
                    title: this.title,
                    time: parseInt(this.time),
                })

                this.title = "";
                this.time = "";
            } 
        },  
    },
});