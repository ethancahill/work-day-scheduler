var TodaysDate = $("#currentDay");
var TimeBlock = $('.time')
var PlansBlock = $('.plans')
var ButtonBlock = $('.button')

var CurrentDay = moment();
var CurrentHour = moment().hour();
var HourId = parseInt(PlansBlock.attr('id'));


TodaysDate.html(moment().format('[Today is] dddd, MMMM Do'));

console.log(PlansBlock.attr('id'))

function ColorCode(){

   
}

