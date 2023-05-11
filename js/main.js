const { createApp } = Vue

createApp({
    data() {
        return {
            newTask:{
                text:"",
                done:false
            },
            taskList: [
                {text :"lavare l'auto", done: false},
                {text :"pagare il bollo", done: true},
                {text :"fare gli esercizi", done: false}
            ],
            inputError : false
        }
    },
    methods: {
        addTask(){
            if (this.newTask.text.length>3) {
                this.inputError = false                
                // this.taskList.unshift({
                //     text : this.newTask.text,
                //     done :false
                // }) se metti un ogetto da un'altra parte restano comunque collegati quindi devi creare una copia e pushare quella.
                let x = {...this.newTask}
                this.taskList.unshift(x)
                this.newTask.text=""
            } else {
                this.inputError = true
            }
        },
        removeTask(i){
            this.taskList.splice(i, 1)
        },
        changeStatus(i){
            this.taskList[i].done = !this.taskList[i].done
        }
    }
}).mount('#app')