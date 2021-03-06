var rhythm = 300, //ms, of knee shacking
    timeKneeShake=10,
      //for constant animation of Abbas
      fastSpeedK = 75, //msec
      normSpeedK = 150, //msec
      nfast = 1500 / fastSpeedK,
      nNorm = 1500 / normSpeedK,
      cycle = nNorm+ nfast + nNorm;

      var brand = [], dashi = [], secondhands = [], secondEyes = []
         ,clickFlag = false
         ,drinkOrYawn = true //flag - to show  drink coffe or Yawn
         ,pulseShow=false
         ,timeKnee = 0
         ,timeTyping = 0
         ,steamGradient
         ,path4throwing
         ,kneeR, pants, mug, leftHand, righthand, GhaziFace, GhaziSmile, GhaziMoustache, fingersOnMug0, mugSteam, GhaziSviter, GhaziElbow, GhaziSpich, GhaziFaceSet, SecondFaceSet, myMatrix, myMatrix2, Secondsmile, SecondSpeech, biN, secondsweater, throwedPaper, Bin;

var  strawCup, mapaId, HQGroup, satellitesGroup, regionalsGroup, map4events;

function initAnimation (obj) {
    animSvg = Snap(obj.blck); 
    rhythm = obj.rhythm * 1000;

    animSvg.add(Snap.parse(floor));//add underwindow and floor
    animSvg.add(Snap.parse(windw));//add underwindow and floor
  

carpet = animSvg.path(carpetD).attr({fill:'#A2C3BE'});/*carpet*/
 brand[0] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#8FB4B4'});/*brandName*/
 brand[1] = animSvg.path(brandNameD).transform("t0,-5").attr({fill:'#ABC9C5'}).animate({ transform: 't0,0' }, rhythm*3, mina.easeInOutQuad);/*brandName*/

animSvg.add(Snap.parse(chears));//add chears
path4throwing = animSvg.path("M1626 692c-7,-17 -11,-34 -20,-49 -4,-7 -10,-13 -18,-15 -8,-1 -19,0 -24,7 -10,13 -14,31 -16,47 -4,51 0,120 0,170").attr({ fill: "none", stroke: "red", opacity: "0" });

GhaziElbow = animSvg.circle(595, 625, 21).attr({opacity:1, id : 'elbow'}).addClass('fil1');

      for (var j in Ghazi[0]) 
        { animSvg.add(Snap.parse(Ghazi[0][j]));//Add stady Ghazy
        }
 
     for (var j in second) 
        { animSvg.add(Snap.parse(second[j]));//Add stady Second personag
        }

kneeR = animSvg.select('#kneeR');
pants = animSvg.select('#pants');

// GhaziFace = Snap.selectAll('.Ghaziface').forEach(function(element, index) {
//     element.attr({cursor : "pointer"}).hover(GhaziMouseOn, GhaziMouseOff); 
// });
GhaziFaceSet = animSvg.paper.g();
SecondFaceSet = animSvg.paper.g();

var faceGroup = Snap.selectAll('.Ghaziface').forEach(function(element, index) {GhaziFaceSet.add(element);  });
var faceGroup2 = Snap.selectAll('.secondface').forEach(function(element, index) {SecondFaceSet.add(element);  });

myMatrix = new Snap.Matrix();
myMatrix.scale(0.01, 0.01,  773, 415);
var orMatrix = new Snap.Matrix();
orMatrix.scale(1, 1,  773, 415);
myMatrix2 = new Snap.Matrix();
myMatrix2.scale(0.01, 0.01,  1150, 415);
var orMatrix2 = new Snap.Matrix();
orMatrix2.scale(1, 1,  1200, 415);



GhaziSviter = Snap.select('#ghazisviter');
righthand = Snap.select('#handr');

GhaziFace = animSvg.ellipse(715, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity : 0, cursor : "pointer"})
                   .hover(GhaziMouseOn, GhaziMouseOff)
                   .click(function() {GhaziSpich.animate({transform : orMatrix}, 1000,  mina.bounce).attr({visibility : 'visible'});  document.body.addEventListener('click', fnClose, true);});
GhaziMoustache = Snap.select('#moustache');
leftHand = animSvg.path(lHand).addClass('fil2');
GhaziSmile = animSvg.path('M723 473c1,0 2,1 1,2 -5,2 -12,2 -17,0 -1,-1 0,-2 1,-2 5,2 10,2 15,0z').addClass('fil2').transform('s0').attr({opacity:0});
GhaziFaceSet.add(GhaziSmile); 

steamGradient = animSvg.gradient("l(0, 0, 1, 1)#efefef-#fff-#efefef");
mugSteam = animSvg.path(steam[0]+steam[1]+steam[2]+steam[3]).attr({opacity : 1, fill : steamGradient});

mug = animSvg.path(mugD)
              .attr({stroke:'#1FB1E9', 'stroke-width':1, fill : '#1FB1E9', 'fill-rule' : "evenodd"});

mugInsude = animSvg.ellipse(907, 593, 19, 2).attr({'stroke-width' : 0, fill:"#4B89B6"});
fingersOnMug0 = animSvg.path(GhaziFingers[0]).addClass('fil2').attr({'opacity':0});
// typingAnimation();

Secondsmile = Snap.select('#secondsmile');

SecondFace = animSvg.ellipse(1215, 438, 46, 70) //ellipse for face hover effect
                   .attr({opacity : 0, cursor : "pointer"})
                   .hover(SecondMouseOn, SecondMouseOff)
                   .click(function() { SecondSpeech.animate({transform : orMatrix2}, 1000,  mina.bounce).attr({visibility : 'visible'});  document.body.addEventListener('click', fnClose, true);});

secondhands[0] = Snap.select('#lefthand');
secondhands[1] = Snap.select('#righthand');
secondEyes[0] = Snap.select('.eye0');
secondEyes[1] = Snap.select('.eye1');
 // constantAnimation();

throwHandGroup = animSvg.paper.g().transform('r120,1090,624').attr({'id' : 'raisedThrowHand'});

        for (var i in dashing)
          { 
            dashi[i] = new Drawing( dashing[i].teg, '', dashing[i].time, dashing[i].fill);
          };
          dashi[0].initDraw(); 
          dashi[0].callOnFinished = function() {dashi[1].initDraw(); }; 

          // dashi[1].callOnFinished = function() { dashi[2].initDraw();};
//draw chear           dashi[1].callOnFinished = function() {};



animSvg.add(Snap.parse(throwPaper));
animSvg.add(Snap.parse(bin));
Bin = Snap.select('#bin')
          .attr({cursor : 'pointer'})
          .click(binClick);
animSvg.add(Snap.parse(SecondCup));
strawCup = Snap.select('#strawcup');
secondFingers = animSvg.path(AbassFingers[0]).addClass('fil2').attr({'opacity':0});
drawObjects(); 

animSvg.add(Snap.parse(mapa));//add MAP
animSvg.add(Snap.parse(marks)) ;//add marks
circlesssss = animSvg.add(Snap.parse(circles)) ;//add circles around pins of marks

var spich1 = animSvg.path(Ghazi[3].speechOut).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
var spich2 = animSvg.path(Ghazi[3].speechIn).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
var spich3 = animSvg.path(secondSpeech.outer).attr({stroke:'#ccc', fill : '#ccc', 'stroke-width':1});
var spich4 = animSvg.path(secondSpeech.inner).attr({stroke:'#ccc', fill : '#fff', 'stroke-width':1});
var spichCross1 = animSvg.path(Ghazi[3].speechCross)
                        .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                        .attr({cursor : 'pointer'})
                        .click(function() { GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin);})
                        ;
var spichCross2 = animSvg.path(secondSpeech.cross)
                        .attr({stroke :'#ccc', fill : '#fff', 'stroke-width' : 3})
                        .attr({cursor : 'pointer'})
                        .click(function() { SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin);})
                        ; 

GhaziSpich = animSvg.paper.g(spich1, spich2, spichCross1).transform(myMatrix).attr({'id' : 'speech1'}).attr({'visibility' : 'hidden'});
SecondSpeech = animSvg.paper.g(spich3, spich4, spichCross2).transform(myMatrix2).attr({'id' : 'speech2'}).attr({'visibility' : 'hidden'});



secondsweater = Snap.select('#secondsweater'); 
// SecondConstAnimation();
throwedPaper = Snap.select('#throwpaper').attr({opacity:0});


HQGroup = animSvg.paper.g().attr({'opacity' : 0}).transform( 't-500,125s0.01');
satellitesGroup = animSvg.paper.g().attr({'opacity' : 0}).transform('t-40,245s0,01' );
regionalsGroup = animSvg.paper.g().attr({'opacity' : 0}).animate({transform : 't60,210s0,01'}, 800,  mina.bounce);

var HQ = Snap.selectAll('.hq').forEach(function(element, index) {HQGroup.add(element);});
var satellites = Snap.selectAll('.satellite').forEach(function(element, index) {satellitesGroup.add(element);});
var regionals = Snap.selectAll('.regional').forEach(function(element, index) {regionalsGroup.add(element);});

map4events = Snap.select('#mapa')
                  .attr({cursor : 'pointer'})
                  .click(mapClick)
                  ;

Snap.select('#hqpost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('hq')});
Snap.select('#regionalpost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('regionalpost')});
Snap.select('#satellitepost').attr({cursor : 'pointer'}).click(function(){ showOfficesName('satellitepost')});
Snap.select('#annotation').attr({cursor : 'pointer', 'opacity' : 0});
Snap.select('#closer').attr({cursor : 'default', 'opacity' : 0});

};//end of init function

var circlesssss;

function showOfficesName(par){
pulseShow = false; 
Snap.selectAll('.circles').forEach(function(element, index) {element.stop().attr({r : 1, 'stroke' : 'none'});});//stop ALL cirkle animations

HQGroup.attr({'opacity' : 0}).transform( 't-500,125s0.01');
satellitesGroup.attr({'opacity' : 0}).transform('t-40,245s0,01' );
regionalsGroup.attr({'opacity' : 0}).transform('t60,210s0,01');

 switch (par) {
   case 'hq' : { pulseShow = true;
                  HQGroup.attr({'opacity' : 1}).animate({transform : 't-500,125s4.65'}, 400,  mina.bounce);
                  Snap.selectAll('.californiacircle').forEach(function(element, index) {element.attr({'stroke' : 'red'});  circlePulse(element);});
               }
   break

   case ('regionalpost'):
   case ('officespost' ): { pulseShow = true; 
                            regionalsGroup.animate({'opacity' : 1}, 1000).animate({transform : 't60,210s4.65'}, 400,  mina.bounce);
                            Snap.selectAll('.regionalcircle').forEach(function(element, index) { element.attr({'stroke' : 'red'});  circlePulse(element);});
                          }
   break

   case ('satellitepost') :
   case ('locationspost') : { 
                                pulseShow = true; 
                                satellitesGroup.animate({'opacity' : 1}, 1000).animate({transform : 't-112,245s4.65'}, 400,  mina.bounce);
                                Snap.selectAll('.satellitepostcircle').forEach(function(element, index) { element.attr({'stroke' : 'red'});  circlePulse(element);});
                              } 
   break

 }
}

function circlePulse(el)
{ 
    // console.log(pulseShow,el.attr('class'));
    if (!pulseShow) return
    setTimeout(function(){el.attr({r : 1, opacity : 1, 'stroke-width' : 1}).animate({r : 25, opacity : 0, 'stroke-width' : 5}, 900, mina.easeinout, function(){el.attr({'stroke' : 'red'}); el.attr({'stroke' : 'red'});circlePulse(el)});}, 200);
}

function drawRect( el ) {
  el.drawAtPath( path4throwing, 750, {callback: function(){el.animate({opacity:0},5000,function(){el.remove()})}} );
};

// function throwingFrame(tag, arr, N) 
//     {
//       // if (N > arr.length-1) {tag.animate({opacity:0},102); return};
//       if (N > arr.length-1) { console.log(N); return};
//       console.log(arr[N]);
//       tag.animate({transform : arr[N]}, 120, mina.linear, function() {throwingFrame(tag, arr, N+1) })
//       // debugger;
//     }

function binClick(){
// movepathSteps = ['t-20,-50s0.95', 't-30,-90s0.9', 't-40,-110s0.85', 't-50,-90s0.7', 't-70,50s0.5', 't-80,190s0.3'],
// movepath =  movepathSteps.reduce(function(sum, current) {
  // return sum + current;
// }, '');
var newEl = throwedPaper.clone().attr({ opacity: 1 });
drawRect( newEl ); //Animate along a path
}

function gradientAnim () {
    steamGradient.attr({ x1: 0, y1: 1, x2: 0, y2: 2 });
    steamGradient.animate({ x1: 100, y1: 0, x2: 100, y2: 0 }, 5000, mina.linear, function(){ steamGradient.attr({ x1: 0, y1: 1, x2: 0, y2: 2 }); steamGradient.animate({ x1: 100, y1: 0, x2: 100, y2: 0 }, 5000, mina.linear)});
};

function throwHandDrawing(){
  throwHandGroup.clear();
  // throwHandGroup = animSvg.paper.g().transform('r120,1090,624').attr({'id' : 'raisedThrowHand'});
      console.log(throwHandGroup);
    for (var i in throwHand) {
      throwHandGroup.add(Snap.parse(throwHand[i])).addClass('throwHandGroup');//.attr({stroke:'black','stroke-width':5});
    }

    throwPaper = Snap.select("#throwpaper");
    // console.log(throwHandGroup);
  }


var Nframe;
function frameChanging(part, arr, timings) {
  if (Nframe > arr.length-1) { return }
    else  
     {  Nframe++;
        part.animate({d : arr[Nframe-1]}, timings[Nframe-1], mina.linear, function(){(frameChanging(part, arr, timings)) })   
    }

}

function  strawDrinking(){
  var stoptime = 300,
  kRithm = 1,
  strokeRise = [ handD[1], handD[2], handD[3], handD[4] ],
  timingRise = [100 * kRithm,200* kRithm,180* kRithm,300* kRithm ],//msec
  strokeBack = [ handD[3], handD[2], handD[1] ],
  timingBack = [630* kRithm, 180* kRithm, 220* kRithm],//msec

  stroke = timingRise.reduce(function(sum, current) {// calculating whole time of animation  
  return sum + current;
}, 0);


secondhands[1].animate({d : handD[1]}, rhythm * 0.5, mina.linear,// character take cup
  function()
   {  Nframe=0;
      frameChanging(secondhands[1], strokeRise, timingRise);
      secondFingers.animate({ d : AbassFingers[1]}, 1000, mina.easeinout).attr({'opacity':1});
      secondsweater.animate({ d : secondSweater[1]}, 1000);
      strawCup.animate({transform : 't178,-68'}, 1000, mina.easeinout, function()
          {
            setTimeout(function(){
              //return stroke
              Nframe=0; frameChanging(secondhands[1], strokeBack, timingBack);
              strawCup.animate({transform : 't0,0'},1200, mina.easeinout);
              secondsweater.animate({ d : secondSweater[0]}, 1000*2, mina.easeinout);
              secondFingers.animate({ d : AbassFingers[0]},1200, mina.easeinout, function(){ secondFingers.attr({'opacity':0}); secondhands[1].animate({d  : handD[0]}, rhythm*0.5, mina.linear, function(){console.log('again'); SecondConstAnimation()}) });
             }, stoptime) 
          });
     } 
          );    
 Nframe=0;
}

function constantAnimation()
  { 
    if (timeKnee !== 0) 
      {
        kneeR.animate({ d : Ghazi[1].kneeR }, rhythm, mina.easeInOutQuad);
        pants.animate({ d : Ghazi[1].pants }, rhythm, mina.easeInOutQuad, kneeAnimationStart);
      }
      else 
      { if (drinkOrYawn) {handToMouth(); drinkOrYawn = false; gradientAnim ()} else {mugClick(); drinkOrYawn = true}; 
        setTimeout(function(){timeKnee = timeKneeShake; constantAnimation()}, rhythm*5)
      }
    }

function SecondConstAnimation()
{ var time = normSpeedK;
  if ((timeTyping > nNorm) && (timeTyping < (nNorm + nfast))){time = fastSpeedK; console.log(timeTyping,'fast typing');};
  if (timeTyping == nNorm) {console.log(timeTyping,'FaceDown');secondFaceDown(rhythm, 3000)};
  if (timeTyping == cycle) 
      {
        console.log(timeTyping,nfast,nNorm,'agian');
        timeTyping = (-1)*nNorm;
        strawDrinking();
        return
      };
  secondhands[0].animate({transform : 'r0.5,1200,625'}, time, mina.backin, function(){secondhands[0].animate({transform : 'r-0.5,1200,625'}, time, mina.backout)});
  secondhands[1].animate({transform : 'r0.5,850,625 '}, time, mina.bounce, function(){secondhands[1].animate({transform : 'r-0.5,850,625 '}, time, mina.bounce, function(){timeTyping++; SecondConstAnimation()})});
}

function mugClick(){
   var time = 800;
   leftHand.stop().attr({d:lHand});//Stop animation
   GhaziFaceSet.stop().transform('t0,0');//Stop animation
   
    animSvg.selectAll('path circle').forEach(function(element, index) {element.stop()  });//Stop all animation
    leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1}); setTimeout(function(){ mugDrink(time, function(){mugMouseOff()}) }, time*0.33)});
}

function mugDrink(time, callback){
  clickFlag = true;
  var stopTime = time*0.375;
  var frames = [Ghazi[1].lHand
  ,'M846 601c-17,17 -2,2 -19,19 -7,7 -18,7 -24,0l0 0c-7,-7 -7,-18 0,-25 17,-17 1,-2 18,-19 7,-7 18,-7 25,0l0 0c7,7 7,18 0,25z'
  ,'M818 552c0,25 0,19 0,44 0,9 -8,17 -18,17l0 0c-9,0 -17,-8 -17,-17 0,-25 0,-19 0,-44 0,-9 8,-17 17,-17l0 0c10,0 18,8 18,17z'
  ,'M750 500c14,20 43,58 57,77 6,8 4,19 -4,25l0 0c-8,5 -19,3 -25,-4 -13,-20 -43,-58 -56,-78 -6,-8 -4,-19 4,-24l0 0c8,-6 19,-4 24,4z'
  ],
  mugd = 'M729 527c0,1 -7,2 -16,2 -9,0 -16,-1 -16,-2l-2 -13c0,-7 -1,-16 -3,-28 0,-1 0,-8 0,-8 0,-1 9,-2 21,-2 12,0 21,1 21,2 0,0 -5,49 -5,49zm-36 -37l2 20c-1,-6 -1,-10 -2,-20z';
  mugInsude.attr({'opacity':0});
  leftHand.stop().animate({d:frames[1]}, time*0.235, mina.linear, 
    function(){ leftHand.stop().animate({d:frames[2]},time*0.15,mina.linear 
      , function(){ leftHand.stop().animate({d:frames[3]}, time*0.65, mina.easeOutQuad  
         ,function(){setTimeout(
        //back stroke
                       function(){ leftHand.stop().animate({d:frames[2]}, time*0.35, mina.easeInQuad
                        , function(){ leftHand.stop().animate({d:frames[1]}, time*0.2, mina.linear
                           , function(){ leftHand.stop().animate({d:frames[0]}, time*0.48, mina.easeOutQuad, callback);})})
                    }, stopTime)
        })
      })
     }
    );

  mug.animate({d:mugd},time,mina.easeOutQuad, 
    function(){
      setTimeout(function()
                  { mug.animate({d:mugD},time,mina.linear, 
                        function(){mugInsude.attr({'opacity':1});}
                        )
                  }, stopTime
                )
              }
              );
  GhaziSviter.stop().animate({d:Ghazi[3].sviter},time,mina.easeOutQuad);
  fingersOnMug0.animate({d:GhaziFingers[1]},time,mina.easeOutQuad,
        function(){
          setTimeout( 
              function(){fingersOnMug0.animate({d:GhaziFingers[0]}, time, mina.linear); GhaziSviter.stop().animate({d:Ghazi[2].sviter}, time, mina.easeout)}
                    , stopTime
                    )
                  }
                )
}



function handToMouth(){
  if (clickFlag) console.log(clickFlag);
    var stopTime = 3000, moveTime = rhythm*3;
    fingersOnMug0.attr({opacity:0}); 
    leftHand.animate({d : Ghazi[1].handToMouth}, moveTime, mina.backout, function(){setTimeout(function(){leftHand.animate({d : lHand}, moveTime, mina.easeInOutQuad)}, stopTime)}); 
    GhaziFaceSet.animate({transform : 't0,14'}, moveTime, mina.backout, function(){setTimeout(function(){GhaziFaceSet.animate({transform : 't0,0'}, moveTime*0.75, mina.easeInOutQuad)}, stopTime)}); 
}

function kneeAnimationStart() //4 constant animation
    {
        kneeR.animate({ d: 'M628 699l63 175c2,3 3,6 3,10 0,13 -11,23 -24,23 -10,0 -19,-7 -22,-15l-63 -176c-2,-3 -3,-6 -3,-10 0,-12 11,-23 24,-23 10,0 19,7 22,16z' }, rhythm, mina.easeInOutQuad);
        pants.animate({ d: 'M603 729l226 0 0 0c14,0 25,-11 25,-25 0,-13 -11,-25 -25,-25l0 0 -226 0c-14,0 -25,12 -25,25 0,14 11,25 25,25z' }, rhythm, mina.easeInOutQuad, function(){constantAnimation();});
        timeKnee--;
    }

function secondFaceDown(timing, stopTime) {
  // console.log(stopTime);
  SecondFaceSet.animate({transform : 't0,14'}, timing, mina.backout, function(){setTimeout(function(){SecondFaceSet.animate({transform : 't0,0'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
  secondEyes[0].animate({transform : 't2,0s1.5'}, timing, mina.backout, function(){setTimeout(function(){secondEyes[0].animate({transform : 't0,0s1'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
  secondEyes[1].animate({transform : 't-2,0s1.5'}, timing, mina.backout, function(){setTimeout(function(){secondEyes[1].animate({transform : 't0,0s1'}, timing*0.75, mina.easeInOutQuad)}, stopTime)}); 
}


function mugMouseOn()
{
  if (clickFlag) return 
  else 
  leftHand.stop().animate({d : Ghazi[1].lHand},200,mina.easeinout, function(){fingersOnMug0.attr({opacity:1})});
}

function mugMouseOff()
{  clickFlag = false; 
  GhaziFaceSet.stop().transform('t0,0');//Stop animation
    {
        fingersOnMug0.attr({opacity:0});
        leftHand.stop().animate({d : lHand}, 100, mina.linear);
    }
}

function GhaziMouseOn()
{   GhaziSmile.attr({opacity:1});
    GhaziSmile.animate({transform : 't0,-1s1'}, 300, mina.easeinout);
    GhaziMoustache.animate({d:'M691 470l0 4c6,0 9,0 14,-3 2,-2 9,-6 8,-10 -2,-1 -3,-3 -3,-6l0 0c-8,1 -18,6 -19,15zM741 469l0 4c-6,1 -9,0 -14,-2 -3,-2 -9,-6 -9,-10 3,-1 4,-3 4,-6l0 0c7,1 18,5 19,14z'},200,mina.easeinout);
}
function GhaziMouseOff()
{   
    GhaziSmile.animate({transform : 's0'}, 200, mina.linear, function(){GhaziSmile.attr({opacity:0})});
    GhaziMoustache.animate({d:Ghazi[0].moustache}, 200, mina.easeinout);
}

function SecondMouseOn()  {  Secondsmile.animate({d : 'M1224 474c1,-1 2,1 1,2 -7,5 -17,5 -24,0 -1,-1 0,-2 1,-2 7,5 16,5 22,0z'}, 300, mina.backout); }
function SecondMouseOff() {  Secondsmile.animate({d : 'M1207 477l13 0c0,0 1,1 1,2 0,0 -1,1 -1,1l-13 0c-1,0 -2,-1 -2,-1 0,-1 1,-2 2,-2z'}, 300, mina.backin);}

//close cpeech bubble when a user clicks outside of them
function fnClose () {
  // console.log('Click - close bubble');
  GhaziSpich.animate({transform : myMatrix}, 750,  mina.backin, function(){ GhaziSpich.attr({visibility : 'hidden'}); }); 
  SecondSpeech.animate({transform : myMatrix2}, 750,  mina.backin, function(){ SecondSpeech.attr({visibility : 'hidden'}); }); 

}

function mapClose () {
  map4events.animate({transform : 't0,-1s1'}, 750,  mina.backin).attr({cursor : 'pointer'}); 
  Snap.select('#closer').animate({transform : 't0,0s1'}, 800,  mina.backin).attr({cursor : 'pointer'});  
  document.body.removeEventListener('click', fnClose, true); 
  HQGroup.attr({'opacity' : 0}).transform( 't-500,125s0.01');
satellitesGroup.attr({'opacity' : 0}).transform('t-40,245s0,01' );
regionalsGroup.attr({'opacity' : 0}).transform('t60,210s0,01');
Snap.select('#annotation').attr({'opacity' : 0});
Snap.select('#closer').attr({cursor : 'default', 'opacity' : 0});
pulseShow = false; 
Snap.selectAll('.circles').forEach(function(element, index) {element.stop().attr({r : 1, 'stroke' : 'none'});});//stop ALL cirkle animations

}

function mapClick(){
  console.log('Click on map');
  document.body.addEventListener('click', mapClose, true);
  map4events.animate({transform : 't0,320s4.65'}, 750,  mina.bounce).attr({cursor : 'default'}); 
  Snap.select('#closer').animate({transform : 't-20,-75s4.65'}, 800,  mina.bounce).attr({cursor : 'pointer'});  
  Snap.select('#annotation').attr({'opacity' : 1});
  Snap.select('#closer').attr({cursor : 'pointer', 'opacity' : 1});
}

function drawObjects()
    {
      for (var j in objects)
        { 
          animSvg.add(Snap.parse(objects[j]))
        }
       }

