const {createApp}=Vue;

createApp({
    data(){
        return{

            database: '' ,

        }
    },
    methods:{
        
    },
    created(){
        axios.get("http://localhost/php-dischi-json/api.php")
        .then((res)=>{

            console.log(res.data)
            
            this.database = res.data
            
            console.log(this.database)
        })
    }

}).mount("#app")