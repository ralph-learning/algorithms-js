function harmelessRansomNotes(noteText, magazineText) {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const objMagazine = {};

  magazineArr.forEach((word) => {
    if(!objMagazine[word]) objMagazine[word] = 0;
    objMagazine[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach((word) => {
    if(objMagazine[word]) {
      objMagazine[word]--;
      if(objMagazine < 0) noteIsPossible = false;
    } else noteIsPossible = false;

  })

  return noteIsPossible;
}

const noteText = "Hello my friend a how are you";
const magazineText = "Hello my friend how are you";

const result = harmelessRansomNotes(noteText, magazineText);
console.log(result);

