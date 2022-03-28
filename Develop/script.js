var TodaysDate = $("#currentDay");
var TimeBlock = $('.time');
var PlansBlock = $('.plans');
var ButtonBlock = $('.button');
var CalendarEl = $('.calendar');
var HourTime= 9;
var WholeCalendar = $('.container')
var CurrentDay = moment();
var CurrentHour = moment().hour();

TodaysDate.html(moment().format('[Today is] dddd, MMMM Do'));

function ColorCode(){
    PlansBlock.each(function(){
        $(this).children().attr("id", HourTime++)
        var HourId = parseInt($(this).children().attr('id'))

        if(HourId < CurrentHour){
            $(this).addClass('bg-light')
        } else if (HourId == CurrentHour){
            $(this).addClass('bg-danger text-white')
        } else {
            $(this).addClass('bg-success text-white')
        }
    })  
}

function  SavePlan(){
    var TextEl = $(this).siblings('.plans').children().val()

    console.log(TextEl)

    var time = $(this).siblings('.plans').children().attr('id')
    localStorage.setItem(time, TextEl)   
}

CalendarEl.on("click", 'button', SavePlan)
ColorCode()

for (var i = 9; i < 18; i++){

    var StoredContent = localStorage.getItem(i);
    console.log(StoredContent)
    var textInfo = document.getElementById(`${i}`);
    console.log(textInfo)
    textInfo.textContent= StoredContent
}
