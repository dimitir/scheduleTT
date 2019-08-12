import { compareTimes } from './compareStartFinishTime';
import { elementList } from './_getElementNode';


class FormProcessing {
    constructor(valuesTime, listElement) {
        this.compareTimesValues = valuesTime;
        this.elementsDom = listElement;
    }

    formCheck() {
        let searchForm = document.forms["addEvent"];
        let testVal = '2019,12,10';
        var birthday = new Date(testVal).getTime();
        // console.log('birthday', birthday);

        searchForm.addEventListener('submit', () => {
            event.preventDefault();
            let formValues = {};

            let dataTimeStart = this.elementsDom.button.dataset.timestart;
            let dataTimeFinish = this.elementsDom.button.dataset.timefinish;

            let formData = new FormData(searchForm);
            formValues.fname = formData.get('fname');
            let dateEvent = formData.get('dateEvent');
            dateEvent = dateEvent.split('-');
            dateEvent = dateEvent.join(',');
            formValues.dateEvent = new Date(dateEvent).getTime();

            let timeValues = compareTimesValues.getStartFinishTime();
            formValues.timeStart = timeValues.timeStartVal;
            formValues.timeFinish = timeValues.timeFinishVal;

            if (dataTimeFinish === true && dataTimeStart === true) {
                // console.log(formValues);

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

let processingForm = new FormProcessing(compareTimes, elementList)
export let formCheck = processingForm.formCheck();