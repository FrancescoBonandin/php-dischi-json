const {createApp}=Vue;

createApp({
    data(){
        return{

            database: '' ,
            showModalFlag: false,
            modalObj:'',

        }
    },
    methods:{

        showModal(index){

            this.showModalFlag=true

            axios.get("http://localhost/php-dischi-json/api.php")
            .then((res)=>{
    
                console.log(res.data)
                
                this.modalObj = res.data.discs[index]
                
            })

        }

        
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