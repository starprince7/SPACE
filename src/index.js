window.onload = function () {
  //------ View Global Variables ------//

  var back_menu = document.getElementById("backmenu");
  var loadingJob = document.getElementById("loading_job");
  var invisibleBtn = document.getElementById("invisible_btn");
  var beep = document.getElementById("beep");
  var beep_desc = document.getElementById("beep_desc");
  var music_frame = document.getElementById("bg_music");
  var container_desc = document.getElementById("container_desc");
  var back_to_sub = document.getElementById("back_to_sub");
  var sub_tittles = document.getElementsByClassName("item");
  var sections = document.getElementsByClassName("section");
  var music = document.getElementById("sound_ico");
  var info_desc = [
    "The first full-pressure suits for use at extreme altitudes were designed by individual inventors as early as the 1930s. The first space suit worn by a human in space was the Soviet SK-1 suit worn by Yuri Gagarin in 1961.",
    "The term planet is ancient, with ties to history, astrology, science, mythology, and religion. Five planets in the Solar System are visible to the naked eye. These were regarded by many early cultures as divine, or as emissaries of deities. As scientific knowledge advanced, human perception of the planets changed, incorporating a number of disparate objects.",
    "The first manned spacecraft was Vostok 1, which carried Soviet cosmonaut Yuri Gagarin into space in 1961, and completed a full Earth orbit. ... There were five other manned missions using Mercury spacecraft.",
    "Galaxies are categorized according to their visual morphology as elliptical, spiral, or irregular. Many galaxies are thought to have supermassive black holes at their centers. The Milky Way's central black hole, known as Sagittarius A*, has a mass four million times greater than the Sun. As of March 2016, GN-z11 is the oldest and most distant observed galaxy with a comoving distance of 32 billion light-years from Earth, and observed as it existed just 400 million years after the Big Bang.",
  ];

  //------ Functions ------//

  loadingJob.style.display = "block";
  setTimeout(function () {
    loadingJob.style.opacity = 0;
    loadingJob.style.pointerEvents = "none";
    // invisibleBtn.click();
  }, 1500);

  document.getElementById("entrance").classList.add("courtain");

  setTimeout(function () {
    document.getElementById("start_btn").classList.toggle("hide");
  }, 2500);

  document.getElementById("start_btn").onclick = function () {
    main_menu();
  };

  function playMusic() {
    beep.play();
    music_frame.play();
    music.classList.toggle("do_wave");
    music.style.left = "calc(100% - 20px)";

    if (music.classList.contains("do_wave")) {
      music.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      console.log("Sound Off");
      music.innerHTML = '<i class="fas fa-pause"></i>';
      music_frame.pause();
    }
  }
  //------ Function to turn on/off background music ------//

  music.addEventListener("click", function () {
    playMusic();
  });
  invisibleBtn.addEventListener("click", function () {
    playMusic();
  });

  //------ Function to fade Main-Title and type sub-tittles ------//

  function main_menu() {
    beep.play();
    var main_tittle = document.getElementById("main_tittle");

    (len = sub_tittles !== null ? sub_tittles.length : 0), (i = 0);
    for (i; i < len; i++) {
      sub_tittles[i].className += " addTyping";
    }

    main_tittle.classList.toggle("courtain");
    back_menu.classList.toggle("back");
    back_menu.classList.toggle("front");
  }

  //------ Function for getting into Main Menu ------//

  back_menu.onclick = function () {
    go_back();
  };
  function go_back() {
    beep.play();

    main_tittle.classList.toggle("courtain");
    back_menu.classList.toggle("back");
    back_menu.classList.toggle("front");
    (len = sub_tittles !== null ? sub_tittles.length : 0), (i = 0);
    for (i; i < len; i++) {
      sub_tittles[i].classList.toggle("addTyping");
    }
  }

  for (var i = 0, len = sub_tittles.length; i < len; i++) {
    (function (index) {
      sub_tittles[i].onclick = function () {
        beep.play();
        setTimeout(function () {
          beep_desc.play();
        }, 1000);
        view_desc(index);
      };
    })(i);
  }

  //------ Function to handle zoom item and handle drop-down description. ------//

  back_to_sub.onclick = function () {
    view_desc(-1);
  };

  function view_desc(index) {
    beep.play();

    (len = sections !== null ? sections.length : 0), (i = 0);
    if (index != -1) {
      sub_tittles[index].classList.toggle("fade-out");
      for (i; i < len; i++) {
        if (i != index) {
          sections[i].classList.toggle("shrink");
        } else {
          sections[i].classList.toggle("grow");
        }
      }
    } else {
      for (i; i < len; i++) {
        if (sections[i].classList.contains("shrink")) {
          sections[i].classList.toggle("shrink");
        }

        if (sections[i].classList.contains("grow")) {
          sections[i].classList.toggle("grow");
        }

        if (sub_tittles[i].classList.contains("fade-out")) {
          sub_tittles[i].classList.toggle("fade-out");
        }
      }
    }

    container_desc.classList.toggle("float-in");
    back_menu.classList.toggle("back");
    back_menu.classList.toggle("front");
    document.getElementById("title").innerHTML = sub_tittles[index].innerHTML;
    document.getElementById("info").innerHTML = info_desc[index];
  }
};
