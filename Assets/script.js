var present0 = document.querySelector('.appt0');
var present1 = document.querySelector('.appt1');
var present2 = document.querySelector('.appt2');
var present3 = document.querySelector('.appt3');
var present4 = document.querySelector('.appt4');
var present5 = document.querySelector('.appt5');
var present6 = document.querySelector('.appt6');
var present7 = document.querySelector('.appt7');
var present8 = document.querySelector('.appt8');
var present9 = document.querySelector('.appt9');
var present10 = document.querySelector('.appt10');
var present11 = document.querySelector('.appt11');
var present12 = document.querySelector('.appt12');
var present13 = document.querySelector('.appt13');
var present14 = document.querySelector('.appt14');
var present15 = document.querySelector('.appt15');
var present16 = document.querySelector('.appt16');
var present17 = document.querySelector('.appt17');
var present18 = document.querySelector('.appt18');
var present19 = document.querySelector('.appt19');
var present20 = document.querySelector('.appt20');
var present21 = document.querySelector('.appt21');
var present22 = document.querySelector('.appt22');
var present23 = document.querySelector('.appt23');

var schedule0 = $('.hour0');
var schedule1 = $('.hour1');
var schedule2 = $('.hour2');
var schedule3 = $('.hour3');
var schedule4 = $('.hour4');
var schedule5 = $('.hour5');
var schedule6 = $('.hour6');
var schedule7 = $('.hour7');
var schedule8 = $('.hour8');
var schedule9 = $('.hour9');
var schedule10 = $('.hour10');
var schedule11 = $('.hour11');
var schedule12 = $('.hour12');
var schedule13 = $('.hour13');
var schedule14 = $('.hour14');
var schedule15 = $('.hour15');
var schedule16 = $('.hour16');
var schedule17 = $('.hour17');
var schedule18 = $('.hour18');
var schedule19 = $('.hour19');
var schedule20 = $('.hour20');
var schedule21 = $('.hour21');
var schedule22 = $('.hour22');
var schedule23 = $('.hour23');

function renderschedule(){
var stored0 = localStorage.getItem('hour0');
var stored1 = localStorage.getItem('hour1');
var stored2 = localStorage.getItem('hour2');
var stored3 = localStorage.getItem('hour3');
var stored4 = localStorage.getItem('hour4');
var stored5 = localStorage.getItem('hour5');
var stored6 = localStorage.getItem('hour6');
var stored7 = localStorage.getItem('hour7');
var stored8 = localStorage.getItem('hour8');
var stored9 = localStorage.getItem('hour9');
var stored10 = localStorage.getItem('hour10');
var stored11 = localStorage.getItem('hour11');
var stored12 = localStorage.getItem('hour12');
var stored13 = localStorage.getItem('hour13');
var stored14 = localStorage.getItem('hour14');
var stored15 = localStorage.getItem('hour15');
var stored16 = localStorage.getItem('hour16');
var stored17 = localStorage.getItem('hour17');
var stored18 = localStorage.getItem('hour18');
var stored19 = localStorage.getItem('hour19');
var stored20 = localStorage.getItem('hour20');
var stored21 = localStorage.getItem('hour21');
var stored22 = localStorage.getItem('hour22');
var stored23 = localStorage.getItem('hour23');



schedule0.text(stored0);
schedule1.text(stored1);
schedule2.text(stored2);
schedule3.text(stored3);
schedule4.text(stored4);
schedule5.text(stored5);
schedule6.text(stored6);
schedule7.text(stored7);
schedule8.text(stored8);
schedule9.text(stored9);
schedule10.text(stored10);
schedule11.text(stored11);
schedule12.text(stored12);
schedule13.text(stored13);
schedule14.text(stored14);
schedule15.text(stored15);
schedule16.text(stored16);
schedule17.text(stored17);
schedule18.text(stored18);
schedule19.text(stored19);
schedule20.text(stored20);
schedule21.text(stored21);
schedule22.text(stored22);
schedule23.text(stored23);



}

var presentTime = moment().format('HH');
console.log(presentTime);

renderschedule();

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// var time = moment();
// $('#currentTime').text(time.format('h:mm:ss a'));

// var time = function() {
//     var time = moment();
//     $('#currentTime').text(time.format('HH'));
//     document.getElementById("currentTime")
//     .innerHTML = moment().format('HH');

// }

// setInterval(time, 1000);




saveButton0 = $('#saveBtn0');
saveButton1 = $('#saveBtn1');
saveButton2 = $('#saveBtn2');
saveButton3 = $('#saveBtn3');
saveButton4 = $('#saveBtn4');
saveButton5 = $('#saveBtn5');
saveButton6 = $('#saveBtn6');
saveButton7 = $('#saveBtn7');
saveButton8 = $('#saveBtn8');
saveButton9 = $('#saveBtn9');
saveButton10 = $('#saveBtn10');
saveButton11 = $('#saveBtn11');
saveButton12 = $('#saveBtn12');
saveButton13 = $('#saveBtn13');
saveButton14 = $('#saveBtn14');
saveButton15 = $('#saveBtn15');
saveButton16 = $('#saveBtn16');
saveButton17 = $('#saveBtn17');
saveButton18 = $('#saveBtn18');
saveButton19 = $('#saveBtn19');
saveButton20 = $('#saveBtn20');
saveButton21 = $('#saveBtn21');
saveButton22 = $('#saveBtn22');
saveButton23 = $('#saveBtn23');



saveButton0.click(function() {
    saveButton0.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour0',$('.hour0').val());
})
saveButton1.click(function() {
    saveButton1.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour1',$('.hour1').val());
})
saveButton2.click(function() {
    saveButton2.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour2',$('.hour2').val());
})
saveButton3.click(function() {
    saveButton3.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour3',$('.hour3').val());
})
saveButton4.click(function() {
    saveButton4.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour4',$('.hour4').val());
})
saveButton5.click(function() {
    saveButton5.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour5',$('.hour5').val());
})
saveButton6.click(function() {
    saveButton6.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour6',$('.hour6').val());
})
saveButton7.click(function() {
    saveButton7.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour7',$('.hour7').val());
})
saveButton8.click(function() {
    saveButton8.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour8',$('.hour8').val());
})
saveButton9.click(function() {
    saveButton9.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour9',$('.hour9').val());
})
saveButton10.click(function() {
    saveButton10.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour10',$('.hour10').val());
})
saveButton11.click(function() {
    saveButton11.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour11',$('.hour11').val());
})
saveButton12.click(function() {
    saveButton12.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour12',$('.hour12').val());
})
saveButton13.click(function() {
    saveButton13.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour13',$('.hour13').val());
})
saveButton14.click(function() {
    saveButton14.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour14',$('.hour14').val());
})
saveButton15.click(function() {
    saveButton15.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour15',$('.hour15').val());
})
saveButton16.click(function() {
    saveButton16.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour16',$('.hour16').val());
})
saveButton17.click(function() {
    saveButton17.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour17',$('.hour17').val());
})
saveButton18.click(function() {
    saveButton18.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour18',$('.hour18').val());
})
saveButton19.click(function() {
    saveButton19.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour19',$('.hour19').val());
})
saveButton20.click(function() {
    saveButton20.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour20',$('.hour20').val());
})
saveButton21.click(function() {
    saveButton21.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour21',$('.hour21').val());
})
saveButton22.click(function() {
    saveButton22.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour22',$('.hour22').val());
})
saveButton23.click(function() {
    saveButton23.fadeOut('slow').fadeIn(10);
    localStorage.setItem('hour23',$('.hour23').val());
})

if (presentTime == 0){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 present');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt9 hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt10 hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt11 hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt12 hour12 col-lg-10 past');
}   
if (presentTime == 1){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 present');
}   
if (presentTime == 2){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 present');
}   
if (presentTime == 3){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 present');
}   
if (presentTime == 4){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 present');
}   
if (presentTime == 5){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 present');
}   
if (presentTime == 6){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 present');
}   
if (presentTime == 7){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 present');
}   
if (presentTime == 8){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 present');
}   
if (presentTime == 9){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 present');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt9 hour9 col-lg-10 present');
}   
if (presentTime == 10){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt9 hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt10 hour10 col-lg-10 present');
}   if (presentTime == 11){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt9 hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt10 hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt11 hour11 col-lg-10 present');
}   
if (presentTime == 12){
    present0.setAttribute('class', 'appt0 hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt1 hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt2 hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt3 hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt4 hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt5 hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt6 hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt7 hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt8 hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt9 hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt10 hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt11 hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt12 hour12 col-lg-10 present');

} if (presentTime == 13) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 present');

}   
if (presentTime == 14) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 present');

}   
if (presentTime == 15) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 present');

}   
if (presentTime == 16) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 present');

}   
if (presentTime == 17) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 present');

}   
if (presentTime == 18) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 present');

}   
if (presentTime == 19) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 past');
    present19.setAttribute('class', 'appt hour19 col-lg-10 present');

}   
if (presentTime == 20) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 past');
    present19.setAttribute('class', 'appt hour19 col-lg-10 past');
    present20.setAttribute('class', 'appt hour20 col-lg-10 present');

}   
if (presentTime == 21) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 past');
    present19.setAttribute('class', 'appt hour19 col-lg-10 past');
    present20.setAttribute('class', 'appt hour20 col-lg-10 past');
    present21.setAttribute('class', 'appt hour21 col-lg-10 present');

}   
if (presentTime == 22) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 past');
    present19.setAttribute('class', 'appt hour19 col-lg-10 past');
    present20.setAttribute('class', 'appt hour20 col-lg-10 past');
    present21.setAttribute('class', 'appt hour21 col-lg-10 past');
    present22.setAttribute('class', 'appt hour22 col-lg-10 present');

}   
if (presentTime == 23) {
    present0.setAttribute('class', 'appt hour0 col-lg-10 past');
    present1.setAttribute('class', 'appt hour1 col-lg-10 past');
    present2.setAttribute('class', 'appt hour2 col-lg-10 past');
    present3.setAttribute('class', 'appt hour3 col-lg-10 past');
    present4.setAttribute('class', 'appt hour4 col-lg-10 past');
    present5.setAttribute('class', 'appt hour5 col-lg-10 past');
    present6.setAttribute('class', 'appt hour6 col-lg-10 past');
    present7.setAttribute('class', 'appt hour7 col-lg-10 past');
    present8.setAttribute('class', 'appt hour8 col-lg-10 past');
    present9.setAttribute('class', 'appt hour9 col-lg-10 past');
    present10.setAttribute('class', 'appt hour10 col-lg-10 past');
    present11.setAttribute('class', 'appt hour11 col-lg-10 past');
    present12.setAttribute('class', 'appt hour12 col-lg-10 past');
    present13.setAttribute('class', 'appt hour13 col-lg-10 past');
    present14.setAttribute('class', 'appt hour14 col-lg-10 past');
    present15.setAttribute('class', 'appt hour15 col-lg-10 past');
    present16.setAttribute('class', 'appt hour16 col-lg-10 past');
    present17.setAttribute('class', 'appt hour17 col-lg-10 past');
    present18.setAttribute('class', 'appt hour18 col-lg-10 past');
    present19.setAttribute('class', 'appt hour19 col-lg-10 past');
    present20.setAttribute('class', 'appt hour20 col-lg-10 past');
    present21.setAttribute('class', 'appt hour21 col-lg-10 past');
    present22.setAttribute('class', 'appt hour22 col-lg-10 past');
    present23.setAttribute('class', 'appt hour23 col-lg-10 present');
}   
