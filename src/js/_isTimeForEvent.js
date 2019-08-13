
class IsTimeForEvent {
    constructor() {
    }

    getAllEventList() {
        let listElement = document.querySelectorAll('.eventList');
        console.log(listElement);
        let commonDateStor = new Map();
        listElement.forEach(function (element) {
            let day = element.querySelector('.eventList_date').innerHTML;
            console.log('day000', day);

            day = day.split('.');
            day = day.reverse();
            day = day.join(',');
            day = new Date(day).getTime();

            console.log('day!', day);

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


    checkBookedTime(curentStart, curentFinish, dateDay) {
        curentStart = Number(curentStart);
        curentFinish = Number(curentFinish);
        dateDay = Number(dateDay);


        console.log('dateDay', dateDay);
        console.log(typeof curentStart);
        console.log(typeof curentFinish);
        let eventListAll = this.getAllEventList();
        let start, finish;
        console.log(eventListAll);
        for (let entry of eventListAll) {
            start = Number(entry[0]);
            finish = Number(entry[1]);

            if (curentStart < finish && curentFinish > start) {
                return false;
            }
        }
        return true;

        // a.start < b.end AND a.end > b.start
    }

}


export let isTimeForEvent = new IsTimeForEvent();
// export let existEvensTime = isTimeForEvent.getAllEventList();
export let checkTimeBooked = isTimeForEvent.checkBookedTime();