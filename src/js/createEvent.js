
import myShow from './_getElementNode';
console.log(myShow);

class EventRecording {
  constructor() {
  }


  static get _getElement() {
    // what do i do if element absent?
    let objDomElem = {};
    objDomElem.timeStart = document.getElementById('timeStart');
    objDomElem.timeFinish = document.getElementById('timeFinish');
    objDomElem.button = document.getElementById('buttonAddEvent');
    objDomElem.warningStartNode = timeStart.parentNode.querySelector('.eventAdd_validaty');
    objDomElem.warningFinishNode = timeFinish.parentNode.querySelector('.eventAdd_validaty');
    return objDomElem;
  }

  // get value from input timeStart and timeFinish 
  static get _getStartFinishTime() {
    let arrDom = EventRecording._getElement;
    let timeVal = {};

    let timeStartVal = arrDom.timeStart.value;
    let timeFinishVal = arrDom.timeFinish.value;

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

// need will change name function or expand
  static get _getEventList() {
    // get data about check exist
    let getEventList = function () {
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
    let eventList = getEventList();

    for(let entry of eventList){
    console.log(entry[0], entry[1]);
      // console.log( entry[0]);
    }
    // a.start < b.end AND a.end > b.start
    return eventList;




  }

  compareStartFinishTime() {

    let timeFinish = document.getElementById('timeFinish');
    let timeStart = document.getElementById('timeStart');

    // when left timeFinish input
    timeFinish.addEventListener('blur', function () {
      let timeVal = EventRecording._getStartFinishTime;
      let arrDom = EventRecording._getElement;

      if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
        arrDom.warningFinishNode.innerHTML = 'Мероприятие не может закончиться до начала!';
        arrDom.warningFinishNode.style.visibility = "visible";
        arrDom.button.dataset.timefinish = 'false';
      }
      else if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal < timeVal.timeFinishVal)) {
        arrDom.warningStartNode.style.visibility = "hidden";
        arrDom.warningFinishNode.style.visibility = "hidden";
        arrDom.button.dataset.timestart = 'true';
        arrDom.button.dataset.timefinish = 'true';
      }
    });

    timeStart.addEventListener('blur', function () {
      let timeVal = EventRecording._getStartFinishTime;
      let arrDom = EventRecording._getElement;

      if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
        arrDom.warningStartNode.innerHTML = 'Машину времени вроде не придумали!';
        arrDom.warningStartNode.style.visibility = "visible";
        arrDom.button.dataset.timestart = 'false';
      }
      else if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal < timeVal.timeFinishVal)) {
        arrDom.warningStartNode.style.visibility = "hidden";
        arrDom.warningFinishNode.style.visibility = "hidden";
        arrDom.button.dataset.timefinish = 'true';
        arrDom.button.dataset.timestart = 'true';
      }
    });
  }

  formProcessing() {
    let searchForm = document.forms["addEvent"];
    let testVal = '2019,12,10';
    var birthday = new Date(testVal).getTime();
    console.log('birthday', birthday);

    searchForm.addEventListener('submit', function (e) {
      event.preventDefault();
      let formVal = {};
      let timeVal = EventRecording._getStartFinishTime;
      let arrDom = EventRecording._getElement;

      let dataTimeStart = arrDom.button.dataset.timestart;
      let dataTimeFinish = arrDom.button.dataset.timefinish;
      let formData = new FormData(searchForm);
      formVal.fname = formData.get('fname');
      formVal.dateEvent = formData.get('dateEvent').getTime();

      formVal.timeStart = timeVal.timeStartVal;
      formVal.timeFinish = timeVal.timeFinishVal;

      if (dataTimeFinish !== false && dataTimeStart !== false) {
        // console.log(formVal);

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

  checkTime(time) {

  }



}










let eventRecording = new EventRecording();
eventRecording.compareStartFinishTime();
eventRecording.formProcessing();
console.log(EventRecording._getEventList);



