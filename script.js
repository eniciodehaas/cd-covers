let alleCovers = document.querySelectorAll(".image");

const stuiterOmhoog = (e) => {
  e.target.classList.remove('stuiterOmlaag');
  e.target.classList.add('stuiterOmhoog');
}

const stuiterOmlaag = (e) => {
  e.target.classList.remove('stuiterOmhoog');
  e.target.classList.add('stuiterOmlaag');
}

for (var i = 0; i < alleCovers.length; i++) {
  let album = alleCovers[i];
  album.addEventListener("mouseenter" , stuiterOmhoog);
  album.addEventListener("mouseleave" , stuiterOmlaag);
}
