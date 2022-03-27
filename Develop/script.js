var TodaysDate = $("#currentDay");
var TimeBlock = $('.time')
var PlansBlock = $('.plans')
var ButtonBlock = $('.button')
var CalendarEl = $('.calendar')
var HourTime= 9

var CurrentDay = moment();
// var CurrentHour = moment().hour();

var CurrentHour = 12



TodaysDate.html(moment().format('[Today is] dddd, MMMM Do'));


function ColorCode(){
    PlansBlock.each(function(){
        $(this).attr("id", HourTime++)
        var HourId = parseInt($(this).attr('id'))

        if(HourId < CurrentHour){
            $(this).addClass('bg-light')
        } else if (HourId == CurrentHour){
            $(this).addClass('bg-danger text-white')
        } else {
            $(this).addClass('bg-success text-white')
        }
    })
   
}
function AddText(){
    var text = $(this).text();

    var textInput = $('<textarea>')
    .addClass('col-8 border plans')
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger('focus');
    
    ColorCode()

}



function  SavePlan(){
    var TextEl = $(this).siblings('.plans')
    var text= TextEl
    .val();

    var CalendarText = $('<div>')
    .addClass('plans col-8 border')
    .text(text);

    TextEl.replaceWith(CalendarText)
    ColorCode()
}

$('.plans').on("click", AddText)
CalendarEl.on("click", 'button', SavePlan)
ColorCode()
