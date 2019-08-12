
class IsTimeForEvent {
    constructor() {
    }
    
    getAllEventList() {
        let listElement = document.querySelectorAll('.eventList');
        console.log(listElement);
        let commonDateStor = new Map();
        listElement.forEach(function (element) {
            let day = element.querySelector('.eventList_date').innerHTML;
            day = day.split('.');
            day = day.reverse();
            day = day.join(',');
            day = new Date(day).getTime();

            let eventRow = element.querySelectorAll('.eventRow');
            let storageEvents = new Map();
            eventRow.forEach(function (line) {
                let startEvent = line.querySelector('.eventRow_start').innerHTML;
                startEvent = startEvent.split(':');
                startEvent = startEvent[0] * 60 + +startEvent[1];
                startEvent = startEvent + day;

                let finishEvent = line.querySelector('.eventRow_finish').innerHTML;
                finishEvent = finishEvent.split(':');
                finishEvent = finishEvent[0] * 60 + +finishEvent[1];
                finishEvent = finishEvent + day;
                storageEvents.set(startEvent, finishEvent);
            });
            commonDateStor = new Map([...commonDateStor, ...storageEvents]);
        });

        return commonDateStor
    }






    checkBookedTime() {
        for (let entry of eventList) {
            console.log(entry[0], entry[1]);
            // console.log( entry[0]);
        }
        // a.start < b.end AND a.end > b.start
        return eventList;
    }

}