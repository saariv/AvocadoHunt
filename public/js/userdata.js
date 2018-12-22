
'use strict';
// var mongoose = require('mongoose');
// //define schema
// var Schema = mongoose.Schema;
// var UserSchema = new Schema(
//   {
//     itemName: {type: String, required: true, max: 100},
//
//   }
// );
document.addEventListener( "DOMContentLoaded", function(){



var app =new Vue ({
    el: '#app',
    name: 'vue-instace',

    data () {
      return {
        itemName: '',
        players: [
          'Heppatyttö 645',
          'Apina 180',
          'Inkkari_91 360',
          'Pedro 200',
        ],
      };
    },

    mounted() {

      if(localStorage.getItem('players')) {
        try {
          this.players = JSON.parse(localStorage.getItem('players'));
        } catch(e) {
          localStorage.removeItem('players');
        }
      }
    },

    methods: {
      addItem () {
        if (!this.itemName) return;
        this.players.push(this.itemName);
        this.itemName ='';
        this.saveplayers();
      },
//tallennetaan playerit välimuistiin
      saveplayers(){
        let parsed = JSON.stringify(this.players);
        localStorage.setItem('players', parsed);
        // //compile model from schema
        // var UserModel = mongoose.model('players', UserSchema);
        // //Export model
        // module.exports = mongoose.model('players', UserSchema);
      },

      checkForm: function (e) {

        this.errors = [];
        if (!this.itemName) {
          this.errors.push("player required.");
         } else if (!this.validName(this.itemName)) {
         this.errors.push('Valid player required.');
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
