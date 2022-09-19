function scuberGreetingForFeet(distance){
  if (distance > 2500){
    return 'No can do.'
  }
  else {
    if (distance <= 400){
    return 'This one is on me!'
    }
    if (distance <= 2000){
    return 'That will be twenty bucks.';
    }
    if (distance > 2000){
    return 'I will gladly take your thirty bucks.'
    }
  }
}

function ternaryCheckCity(location){
  if (location === 'NYC'){
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(amount){
  if (amount === 'generous'){
    return 'Thank you so much.'
  }
  else {
    if (amount === 'not as generous'){
      return 'Thank you.'
    }
    else {
      return 'Bye.'
    }
  }
}