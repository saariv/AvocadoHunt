'use strict'
document.addEventListener( "DOMContentLoaded", function(){

var score;

var app =new Vue ({
    el: '#vue-element2',
    name: 'players',

    data () {
      return {
        UserName: '',
        players: [
          'Monkey',
          'MikkiHiiri',
          'Maikku91',
        ],
      };
    },

    mounted() {

      // if(localStorage.getUser('Players')) {
      //   try {
      //     this.players = JSON.parse(localStorage.getUser('Players'));
      //   } catch(e) {
      //     localStorage.removeUser('Players');
      //   }
      // }
    },

    methods: {
    //   addUser () {
    //     if (!this.UserName) return;
    //     this.players.push(this.UserName);
    //     this.UserName ='';
    //     this.saveplayers();
    //   },
    //
    // //tallennetaan playerit välimuistiin
    //   saveplayers(){
    //     let parsed = JSON.stringify(this.players);
    //     localStorage.setUser('Players', parsed);
    //   },
      },
    })})

score= localStorage.getItem('score');
