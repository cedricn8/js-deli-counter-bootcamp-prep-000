function takeANumber(katzDeliLine8, newname) {
  katzDeliLine8.push (newname);
  return ("Welcome, " + newname + ". You are number " + katzDeliLine8.length + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextname  = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + nextname + ".");
  }
  else {
    return ("There is nobody waiting to be served!");
  }
}
