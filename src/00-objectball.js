const gameObject = function(){
    const objectBall = {
         'home':{
             "teamName":'Brooklyn Nets',
             "colors":["Black", "White"],
             "players":{
                 "Alan Anderson":{
                     "Number": 30,
                     "Shoe": 14,
                     "Points":12,
                     "Rebounds":12,
                     "Assists":12,
                     "Steals": 12,
                     "Blocks": 12,
                     "Slam Dunks":7
                 },
                 "Reggie Evans":{
                   "Number": 11,
                   "Shoe": 17,
                   "Points":17,
                   "Rebounds":19,
                   "Assists":10,
                   "Steals": 3,
                   "Blocks": 1,
                   "Slam Dunks":15
               },
               "Brook Lopez":{
                   "Number": 11,
                   "Shoe": 17,
                   "Points":17,
                   "Rebounds":19,
                   "Assists":10,
                   "Steals": 3,
                   "Blocks": 1,
                   "Slam Dunks":15
               },
               "Mason Plumlee":{
                   "Number": 1,
                   "Shoe": 19,
                   "Points":26,
                   "Rebounds":12,
                   "Assists":6,
                   "Steals": 3,
                   "Blocks": 8,
                   "Slam Dunks":5
               },
               "Jason Terry":{
                   "Number": 31,
                   "Shoe": 15,
                   "Points":19,
                   "Rebounds":2,
                   "Assists":2,
                   "Steals": 4,
                   "Blocks": 11,
                   "Slam Dunks":1
               }
             }
           },
         
         "away":{
           "teamName":'Charlotte Hornets',
           "colors":[ "Turquoise", "Purple"],
           "players":{
               "Jeff Adrien":{
                   "Number": 4,
                   "Shoe": 18,
                   "Points":10,
                   "Rebounds":1,
                   "Assists":1,
                   "Steals": 2,
                   "Blocks": 7,
                   "Slam Dunks":2
               },
               "Bismak Biyombo":{
                 "Number": 0,
                 "Shoe": 16,
                 "Points":12,
                 "Rebounds":4,
                 "Assists":7,
                 "Steals": 7,
                 "Blocks": 15,
                 "Slam Dunks":10
             },
             "DeSagna Diop":{
                 "Number": 2,
                 "Shoe": 14,
                 "Points":24,
                 "Rebounds":12,
                 "Assists":12,
                 "Steals": 4,
                 "Blocks": 5,
                 "Slam Dunks":5
             },
             "Ben Gordon":{
                 "Number": 8,
                 "Shoe": 15,
                 "Points":3,
                 "Rebounds":33,
                 "Assists":2,
                 "Steals": 1,
                 "Blocks": 1,
                 "Slam Dunks":0
             },
             "Brendan Haywood":{
                 "Number": 33,
                 "Shoe": 15,
                 "Points":6,
                 "Rebounds":12,
                 "Assists":12,
                 "Steals": 22,
                 "Blocks": 5,
                 "Slam Dunks":12
             }
           }
         }
     }
     return objectBall;
   }
   function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName())
  function numPointsScored(){
    return gameObject()['home']['players']["Alan Anderson"].Points
  }
  
  console.log(numPointsScored())
  function shoeSize(){
    return gameObject()['home']['players']["Alan Anderson"].Shoe
  }
  
  console.log(shoeSize())

  function teamColors(){

    return gameObject()['home']['colors']
  }
  console.log(teamColors())

  function teamName(){
    return gameObject()['home']['teamName']
  }
  console.log(teamName())

  function teamName(){
    return gameObject()['home']['players']["Alan Anderson"].Number
  }
  console.log(teamName())

  function playerStats(){
    return gameObject()['home']['players']
  }
  console.log(playerStats())

  function bigShoeRebounds(){
    return gameObject()['away']['players'].Rebounds
}
console.log(bigShoeRebounds())

function mostPointsScored(){
    return gameObject()['points']
}
console.log(mostPointsScored())

function winningTeam(){
    return gameObject()['home']
}
console.log(winningTeam())

function playerWithLongestName(){
    return gameObject()['player']
}
console.log(playerWithLongestName())

  function doesLongNameStealATon(){
      return gameObject()['away']['players'].Steals
  }
  console.log(doesLongNameStealATon())
   
  //console.log(gameObject());

   