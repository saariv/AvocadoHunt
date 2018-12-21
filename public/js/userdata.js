'use strict'
document.addEventListener( "DOMContentLoaded", function(){
//var score = require('/js/game')

var app =new Vue ({
    el: '#vue-element2',
    name: 'vue-instace',

    data () {
      return {
        UserName: '',
        Players: [
          'Monkey',
          'Miki',
          'Maikku91'
        ],
      };
    },

    mounted() {

      if(localStorage.getUser('Players')) {
        try {
          this.players = JSON.parse(localStorage.getUser('Players'));
        } catch(e) {
          localStorage.removeUser('Players');
        }
      }
    },

    methods: {
      addUser () {
        if (!this.UserName) return;
        this.players.push(this.UserName);
        this.UserName ='';
        this.saveplayers();
      },

    //tallennetaan playerit välimuistiin
      saveplayers(){
        let parsed = JSON.stringify(this.players);
        localStorage.setUser('Players', parsed);
      },

      checkForm: function (e) {

        this.errors = [];
        if (!this.UserName) {
          this.errors.push("Player required.");
         } else if (!this.validName(this.UserName)) {
         this.errors.push('Valid Player required.');
       }
       if(!this.errors.length) return true;
            e.preventDefault();

     },

     validName: function (UserName) {
       var re = /[a-zA-Z0-9,.]/;
        return re.test(UserName);
    }
      },
    })})
