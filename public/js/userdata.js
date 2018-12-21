'use strict'
document.addEventListener( "DOMContentLoaded", function(){


var newscore = localStorage.getItem(newscore);

var app =new Vue ({
    el: '#vue-element2',
    name: 'players',

    data () {
      return {
        UserName: '' + newscore,
        players: [
          'Monkey' + 100 ,
          'MikkiHiiri' + 150,
          'Maikku91' + 300,
        ],
      };
    },

    mounted() {

      if(localStorage.getItem('Players')) {
        try {
          this.players = JSON.parse(localStorage.getUser('Players'));
        } catch(e) {
          localStorage.removeUser('Players');
        }
      }
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
