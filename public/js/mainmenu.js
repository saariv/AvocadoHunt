'use strict';
//mainmenu js- file for buttons to other pages and back
//operated with vue, instance #vue-element 
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


  }})
