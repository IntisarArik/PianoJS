// Detecting button click
for (let i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    buttonInnerHtml = this.innerHTML;
    buttonClassName = this.className;
    (pianoSound[buttonInnerHtml] || pianoSound["default"])();
    keyAnimation(buttonInnerHtml);
  });
}

// Detecting Keyboard Stroke
document.addEventListener("keydown", (event) => {
  // Hold button bug fix
  if (event.repeat) return;

  buttonClassName = document.querySelector("." + event.key).className;
  pianoSound[event.key.toUpperCase()]();
  keyAnimation(event.key);
  console.log(event.key);
});

// Making Sound Effect
const pianoSound = {
  A: () => {
    const cNote = new Audio("notes/notes_C.mp3");
    cNote.play();
  },

  Q: () => {
    const dbNote = new Audio("notes/notes_Db.mp3");
    dbNote.play();
  },

  S: () => {
    const dNote = new Audio("notes/notes_D.mp3");
    dNote.play();
  },

  W: () => {
    const eNote = new Audio("notes/notes_E.mp3");
    eNote.play();
  },

  D: () => {
    const ebNote = new Audio("notes/notes_Eb.mp3");
    ebNote.play();
  },

  F: () => {
    const fNote = new Audio("notes/notes_F.mp3");
    fNote.play();
  },

  E: () => {
    const gbNote = new Audio("notes/notes_Gb.mp3");
    gbNote.play();
  },

  G: () => {
    const gNote = new Audio("notes/notes_G.mp3");
    gNote.play();
  },

  R: () => {
    const abNote = new Audio("notes/notes_Ab.mp3");
    abNote.play();
  },

  H: () => {
    const aNote = new Audio("notes/notes_A.mp3");
    aNote.play();
  },

  T: () => {
    const bbNote = new Audio("notes/notes_Bb.mp3");
    bbNote.play();
  },

  J: () => {
    const bNote = new Audio("notes/notes_B.mp3");
    bNote.play();
  },

  default: () => console.log(buttonInnerHtml),
};

// Animation Function
const keyAnimation = (currentKey) => {
  if (buttonClassName === "key white " + currentKey.toLowerCase()) {
    let activeKeyWhite = document.querySelector("." + currentKey.toLowerCase());
    activeKeyWhite.classList.add("pressed-white");

    setTimeout(() => {
      activeKeyWhite.classList.remove("pressed-white");
    }, 100);
  }

  if (buttonClassName === "key black " + currentKey.toLowerCase()) {
    let activeKeyBlack = document.querySelector("." + currentKey.toLowerCase());
    activeKeyBlack.classList.add("pressed-black");

    setTimeout(() => {
      activeKeyBlack.classList.remove("pressed-black");
    }, 100);
  }
};
