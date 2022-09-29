var xhr = new XMLHttpRequest();
$(() => {
  $("#example").horizontalTimeline({
    desktopDateIntervals: 200,
    tabletDateIntervals: 150,
    mobileDateIntervals: 120,
    minimalFirstDateInterval: true,
    dateIntervals: {
      desktop: 200,
      tablet: 150,
      mobile: 120,
      minimal: true,
    },
    dateDisplay: "year",
    dateOrder: "normal",
    autoplay: false,
    autoplaySpeed: 8,
    autoplayPause_onHover: false,
    useScrollWheel: false,
    useTouchSwipe: true,
    useKeyboardKeys: false,
    addRequiredFile: true,
    useFontAwesomeIcons: true,
    useNavBtns: true,
    useScrollBtns: true,

    iconBaseClass: "fas fa-3x",
    scrollLeft_iconClass: "fa-chevron-circle-left",
    scrollRight_iconClass: "fa-chevron-circle-right",
    prev_iconClass: "fa-arrow-circle-left",
    next_iconClass: "fa-arrow-circle-right",
    pause_iconClass: "fa-pause-circle",
    play_iconClass: "fa-play-circle",

    animation_baseClass: "animationSpeed",
    enter_animationClass: {
      left: "enter-left",
      right: "enter-right",
    },
    exit_animationClass: {
      left: "exit-left",
      right: "exit-right",
    },

    iconClass: {
      base: "fas fa-3x",
      scrollLeft: "fa-chevron-circle-left",
      scrollRight: "fa-chevron-circle-right",
      prev: "fa-arrow-circle-left",
      next: "fa-arrow-circle-right",
      pause: "fa-pause-circle",
      play: "fa-play-circle",
    },
    animationClass: {
      base: "animationSpeed",
      enter: {
        left: "enter-left",
        right: "enter-right",
      },
      exit: {
        left: "exit-left",
        right: "exit-right",
      },
    },
  });
  var x = 1952;

  // promise = $.ajax({
  //     url : 'data/data.json',
  //     cache : false,
  //     timeout : 4000
  // })

  // promise.done(function(res,status,jqxhr){
  //     $(res.root.players).each(function(idx,val){

  //         if(val.year == x)(

  //             $("#1952").append(

  //                 `
  //                 <div>
  //                     <h1>${val.firstname + " " + val.lastname}</h1>
  //                     <h2>${val.year}</h2>
  //                     <p>${val.content}</p>
  //                 </div>
  //                 `
  //             )
  //         )
  //     })
  //   })
});

xhr.addEventListener("readystatechange", xhrHandler);

function xhrHandler(evnt) {
  // console.log(evnt.target.responseText);

  if (evnt.target.readyState === 4) {
    // console.log(JSON.parse(evnt.target.responseText).root.participant.length);

    let par = JSON.parse(evnt.target.responseText).root.players;
    var x = 1952;
    var i = 0;
    var j = 0;
    par.forEach((val, idx) => {
      if (val.year == x) {
        document.getElementsByTagName("li")[i].innerHTML = `
          
          <div>
          
          <h2>${val.firstname + " " + val.lastname}</h2>
          
          <h3>${val.year}</h3>
          
          <h3>${val.content}</h3>
          
          </div>
          
          `;

        x = x + 4 //1976
        i = i + 1; //6

        // j = j - 1;
      } 
      
      else {
        i = i - 1;

        document.getElementsByTagName("li")[i].innerHTML += `
            
          <div>
          
            <h2>${val.firstname + " " + val.lastname}</h2>
            
            <h3>${val.year}</h3>
            
            <h3>${val.content}</h3>
          
          </div>
          
          `;
        i = i + 1;
        //   x = x - 4;
      }
    });
    // for(var i=0;i<par.length;i++){
    //     if(par[i].year == x){
    //         document.getElementsByTagName("li")[i].innerHTML += `

    //         <div>

    //             <h2>${par[i].firstname + " " + par[i].lastname}</h2>

    //             <h3>${par[i].year}</h3>

    //             <h3>${par[i].content}</h3>

    //         </div>

    //         `
    //     }
    //     x = x + 4;
    // }
  }
}

function clickHandler() {
  xhr.open("get", "data/data.json", true);

  xhr.send();
}

// function init(){

//     document.querySelector("button").addEventListener("onload",clickHandler);

// }

document.addEventListener("DOMContentLoaded", clickHandler);
