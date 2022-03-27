var TodaysDate = $("#currentDay");
var TimeBlock = $('.time')
var PlansBlock = $('.plans')
var ButtonBlock = $('.button')

var CurrentDay = moment();
var CurrentHour = moment().hour();



TodaysDate.html(moment().format('[Today is] dddd, MMMM Do'));


function ColorCode(){
    PlansBlock.each(function(){
        var HourId = parseInt($(this).attr('id'))

        if(HourId < CurrentHour){
            $(this).addClass('bg-light')
        } else if (HourId == CurrentHour){
            $(this).addClass('bg-danger')
        } else {
            $(this).addClass('bg-success')
        }
    })
   
}
ColorCode()
