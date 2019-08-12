import { elementList } from './_getElementNode';

class CompareTimes {
    constructor(elements) {
        this.listElement = elements;
    }

    getStartFinishTime() {
        let timeVal = {};
        let timeStartVal = this.listElement.timeStart.value;
        let timeFinishVal = this.listElement.timeFinish.value;

        timeStartVal = timeStartVal.split(':');
        timeFinishVal = timeFinishVal.split(':');

        if (timeStartVal.length > 0 && timeFinishVal.length > 0) {
            timeVal.timeStartVal = (timeStartVal[0] * 60) + Number(timeStartVal[1]);
            timeVal.timeFinishVal = (timeFinishVal[0] * 60) + Number(timeFinishVal[1]);
        }
        else {
            timeVal.timeStartVal = false;
            timeVal.timeFinishVal = false;
        }
        return timeVal;
    }

    compareStratrFinishTime() {
        let listElement = this.listElement;
        let timeFinish = listElement.timeFinish;
        let timeStart = listElement.timeStart;


        // when left timeFinish input
        timeFinish.addEventListener('blur', () => {
            let timeVal = this.getStartFinishTime();

            if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
                && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
                listElement.warningFinishNode.innerHTML = 'Мероприятие не может закончиться до начала!';
                listElement.warningFinishNode.style.visibility = "visible";
                listElement.button.dataset.timefinish = 'false';
            }
            else if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
                && (timeVal.timeStartVal < timeVal.timeFinishVal)) {
                listElement.warningStartNode.style.visibility = "hidden";
                listElement.warningFinishNode.style.visibility = "hidden";
                listElement.button.dataset.timestart = 'true';
                listElement.button.dataset.timefinish = 'true';
            }
        });

        timeStart.addEventListener('blur', () => {

            let timeVal = this.getStartFinishTime();

            if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
                && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
                listElement.warningStartNode.innerHTML = 'Машину времени вроде не придумали!';
                listElement.warningStartNode.style.visibility = "visible";
                listElement.button.dataset.timestart = 'false';
            }
            else if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
                && (timeVal.timeStartVal < timeVal.timeFinishVal)) {
                listElement.warningStartNode.style.visibility = "hidden";
                listElement.warningFinishNode.style.visibility = "hidden";
                listElement.button.dataset.timefinish = 'true';
                listElement.button.dataset.timestart = 'true';
            }
        });
    }
}

export let compareTimes = new CompareTimes(elementList);
export let startFinishTimesCompare = compareTimes.compareStratrFinishTime();


