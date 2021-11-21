function howMuchILoveYou(nbPetals) {
  let Petals = ["not at all", "I love you", "a little", "a lot", "passionately", "madly"]
  return Petals[nbPetals % 6];
}