
// add items to a list with a circle beside it
Vue.component('task-list', {

    template: `
    <div>
        <task v-for='task in tasks'>{{task.item}}</task>
    </div>`,

    data() {

        return {
            tasks: [

                { item: this.message, complete: true},
                { item: " {{message}}", complete: true},
               // { task: task-input, complete: true},
            ]
        }
    }


});



Vue.component('task', {
    

    template: `<li><slot></slot></li>`,

});

Vue.component('task-input',{
    
   template: 
 `
 <input v-model="message"  placeholder='edit me'>`,

    data(){
        return{
            message: "{{message}}",
        }
    }

})

new Vue({
    el: '#doIt',

    data:{

        message: "",
    }

});








        
        



// when circle is clicked add an x to it and cross out the item in the to do list