
class IsTimeForEvent {
    constructor() {
    }

    eventListForDays() {
        let listElement = document.querySelectorAll('.eventList');
        let dateStor = {};
        listElement.forEach((element) => {
            let day = element.querySelector('.eventList_date').innerHTML;
            day = day.split('.');
            day = day.reverse();
            day = day.join(',');
            day = new Date(day).getTime();


            let eventRow = element.querySelectorAll('.eventRow');
            let oneDateStor = {};
            eventRow.forEach((line) => {


                // !
                let nameEvent = line.querySelector('.eventRow_name').innerHTML;
                let startEvent = line.querySelector('.eventRow_start').innerHTML;
                startEvent = startEvent.split(':');
                startEvent = startEvent[0] * 60 + Number(startEvent[1]);
                startEvent = startEvent + day;

                let finishEvent = line.querySelector('.eventRow_finish').innerHTML;
                finishEvent = finishEvent.split(':');
                finishEvent = finishEvent[0] * 60 + +finishEvent[1];
                finishEvent = finishEvent + day;

                oneDateStor[startEvent] = finishEvent;
                // storageEvents.set(startEvent, finishEvent);


            });
            if (day in dateStor) {

                let temp = dateStor[day];
                console.log(dateStor);
                // console.log(oneDateStor);

                dateStor[day] = { ...temp, ...oneDateStor };
                // oneDateStor = Object.assign(obj1, obj2);
            }
            else {
                dateStor[day] = oneDateStor;
            }
        });
        return dateStor;
    }

    // not use new
    getAllEventList() {
        let listElement = document.querySelectorAll('.eventList');
        let commonDateStor = new Map();
        listElement.forEach(function () {
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


    checkBookedTime(curentStart, curentFinish, dateDay) {
        curentStart = Number(curentStart);
        curentFinish = Number(curentFinish);
        dateDay = Number(dateDay);


        let eventListAll = this.eventListForDays();
        if (dateDay in eventListAll) {
            let start, finish;

            for (let entry in eventListAll[dateDay]) {
                start = Number(entry);
                finish = Number(eventListAll[dateDay][entry]);

                if (curentStart < finish && curentFinish > start) {
                    return false;
                }
            }
        }
        else return true;

        // a.start < b.end AND a.end > b.start
    }
}


export let isTimeForEvent = new IsTimeForEvent();
export let daysEventList = isTimeForEvent.eventListForDays();
export let checkTimeBooked = isTimeForEvent.checkBookedTime();