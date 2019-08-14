import { compareTimes } from './compareStartFinishTime';
import { elementList } from './_getElementNode';
import { isTimeForEvent } from './_isTimeForEvent';
// import { drowEvent } from './_eventDraw';


class FormProcessing {
    constructor(valuesTime, listElement, isEventTime, eventDraw) {
        this.compareTimesValues = valuesTime;
        this.elementsDom = listElement;
        this.isEventTime = isEventTime;
        this.eventDraw = eventDraw;
    }  

    formCheck() {
        let searchForm = document.forms["addEvent"];
        // let testVal = '2019,12,10';
        // let birthday = new Date(testVal).getTime();
        // console.log('birthday', birthday);

        searchForm.addEventListener('submit', () => {
            event.preventDefault();
            let formValues = {};

            let dataTimeStart = this.elementsDom.button.dataset.timestart;
            let dataTimeFinish = this.elementsDom.button.dataset.timefinish;
            console.log('Dts', dataTimeStart, dataTimeFinish);
            console.log(typeof dataTimeFinish);

            let formData = new FormData(searchForm);
            formValues.fname = formData.get('fname');
            let dateEvent = formData.get('dateEvent');
            dateEvent = dateEvent.split('-');
            dateEvent = dateEvent.join(',');
            formValues.dateEvent = new Date(dateEvent).getTime();
            console.log(formValues.dateEvent);
            let timeValues = this.compareTimesValues.getStartFinishTime();
            formValues.timeStart = (timeValues.timeStartVal) + formValues.dateEvent;
            formValues.timeFinish = (timeValues.timeFinishVal) + formValues.dateEvent;

            if (dataTimeFinish === 'true' && dataTimeStart === 'true') {
                let isFreeTime = this.isEventTime.checkBookedTime(formValues.timeStart, formValues.timeFinish, formValues.dateEvent);
                if (isFreeTime === true) {
                    this.elementsDom.warningBusyTime.style.display = 'none';
                    console.log('добавляем новое событие.');
                    // eventDraw.drawNewEvent(formValues);
                    //  
                }
                else {
                    this.elementsDom.warningBusyTime.style.display = 'block';
                }

                // isTimeForEvent   && (dataTimeStart == true)
                //  run check _similarTime
                // run drow
                // console.log(fname, dateEvent, timeFinish, timeStart);
            }
            else {
                console.log(`что то пошло не так!`);
            }

            // formData.append('username', 'Chris');
            /*  obj.eventName = document.getElementById('eventName').value;
             obj.timeStart = document.getElementById('timeStart').value;
             obj.timeFinish = document.getElementById('timeFinish').value;
             obj.dateEvent = document.getElementById('dateEvent').value;
             // console.log(obj);
             return obj */
        });
    }

}

let processingForm = new FormProcessing(compareTimes, elementList, isTimeForEvent); //, drowEvent
export let formCheck = processingForm.formCheck();