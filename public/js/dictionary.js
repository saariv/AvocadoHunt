
var dict = {
  "About": {
    fi: "Tietoa"
  },
  "The hunt for the best avocados!": {
     fi: "Parhaiden avokadojen metsästys!",
     en: "The hunt for the best avocados!"
  },
  "You are on your lunch break in a top class electric vehicle factory, and you are the boss!":{
    fi: "Olet lounastaolla sähköautojen tehtaalla, jonka pomo olet!",
    en: "You are on your lunch break in a top class electric vehicle factory, and you are the boss!"
  },
  "The mission is to collect as many avocados you can, before the evil fire catches you!":{
    fi: "Tehtävänäsi on kerätä mahdollisimman monta avokadoa ennen kuin tappava tuli nappaa sinut!":
    en:"The mission is to collect as many avocados you can, before the evil fire catches you!"
  },
  "Avocado is worth 15 points":{
    fi:"Avocadosta saa 15 pistettä",
    en:"Avocado is worth 15 points"
  },

  }
var translator = $('body').translate({lang: "en", t: dict}); //use English
translator.lang("fi"); //change to Finnish
