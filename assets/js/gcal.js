$(document).ready(function () {
    //console.log("hello");
    $('#calendar').fullCalendar({
        // height: 'parent',
        googleCalendarApiKey: 'AIzaSyB8sgFrMNi-gkT09k56drpLSnmv4w-bd0Q',

        events: {
            googleCalendarId: '26bna85bifhfcivhlmmd8v1reo@group.calendar.google.com',
            //className: 'gcal-event' // an option!
            backgroundColor: '#2E609B',
            //color: '#1E508B',   // an option!
            textColor: '#f1f1f1', // an option!
            borderColor: '#fff'
        },
        timeFormat: 'h(:mm)t',

        customButtons: {
            print: {
                text: 'print',
                click: function () {
                    DOMPrinter = PrintElem('#app-container');
                    DOMPrinter.print();
                },
                // icon: 'right-double-arrow'
            }
        },

        header: {
            left: 'title, print',
            center: '',
            right: 'today prev,next month,agendaWeek,agendaDay, listWeek' //basicWeek,basicDay,
        },
        views: {
            listWeek: {
                buttonText: 'weekly agenda'
            }
        }

    });

});
