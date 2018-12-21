'use strict';


var app = new Vue({
  el: '#vue-element',
  data: {
    name: 'Vue.js'
  },

    methods: {
      moveGame () {
        location.href='/game'
      },

      moveAbout(){
        location.href='/about'
      },

      moveStats(){
        location.href='/stats'
      },
      moveBack(){
        location.href='/mainmenu'
      },
      moveMenu(){
        location.href='/mainmenu'
      }

    }
  })
