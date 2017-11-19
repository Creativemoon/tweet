
function characterCounter(userString) {
  return userString.length
}

 function addHashtag(phrase) {
   return phrase + " #yolo"
 }

function tweetShortener(tweet) {
  if (tweet.length <= 140){
    return tweet
  } else {
      return tweet.substring(0, 140)
  }
}