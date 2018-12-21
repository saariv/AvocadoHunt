//vilma saari, 0454426, harkat 3 ja 4 (www-sovellukset)

'use strict';
document.addEventListener( "DOMContentLoaded", function(){

//tätä komponenttia en saanut jostain syystä toimimaan, niin ohjelma toimii ilman sitä
  Vue.component('todolist', {
  props: ['tasks'],
  template: `
    <div class="todolist">
    <h4 class="flow-text">{{ task }}</h4>
    <a class="waves-effect waves-teal btn-flat teal-text" v-on:click="removeItem(index)" >Done!</a>
    <div v-if="!tasks.length"><h4 class="flow-text">Add something to do! </h4></div>
  `
})

var app =new Vue ({
    el: '#app',
    name: 'vue-instace',

    data () {
      return {
        itemName: '',
        tasks: [
          'do laundry',
          'call mom',
          'buy gift to Ida',
          'cook',
        ],
      };
    },

    mounted() {

      if(localStorage.getItem('tasks')) {
        try {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
        } catch(e) {
          localStorage.removeItem('tasks');
        }
      }
    },

    methods: {
      addItem () {
        if (!this.itemName) return;
        this.tasks.push(this.itemName);
        this.itemName ='';
        this.savetasks();
      },

      removeItem(index) {
        this.tasks.splice(index,1);
        this.savetasks();
      },
//tallennetaan taskit välimuistiin
      savetasks(){
        let parsed = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', parsed);
      },

      checkForm: function (e) {

        this.errors = [];
        if (!this.itemName) {
          this.errors.push("Task required.");
         } else if (!this.validName(this.itemName)) {
         this.errors.push('Valid task required.');
       }
       if(!this.errors.length) return true;
            e.preventDefault();

     },

     validName: function (itemName) {
       var re = /[a-zA-Z0-9,.]/;
        return re.test(itemName);
   }
      },
    },
  )})
