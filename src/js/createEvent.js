
class AcceptingData {
  constructor() {

  }


  // get value from input timeStart and timeFinish 
  static get getStartFinishTime() {
    let timeVal = {}
    let timeStart = document.getElementById('timeStart');
    let timeFinish = document.getElementById('timeFinish');

    timeVal.button = document.getElementById('buttonAddEvent');
    timeVal.warningStart = timeStart.parentNode.querySelector('.eventAdd_validaty');
    timeVal.warningFinish = timeFinish.parentNode.querySelector('.eventAdd_validaty');

    let timeStartVal = timeStart.value;
    let timeFinishVal = timeFinish.value;

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

  // compare start and finish
  compareStartFinishTime() {
    let timeFinish = document.getElementById('timeFinish');
    let timeStart = document.getElementById('timeStart');
    let timeVal = AcceptingData.getStartFinishTime;

    timeFinish.addEventListener('blur', function () {

      if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
        timeVal.warningFinish.innerHTML = 'Мероприятие не может закончиться до начала!';
        timeVal.warningFinish.style.visibility = "visible";
        timeVal.button.dataset.timefinish = 'false';
      }
      else {
        timeVal.warningFinish.style.visibility = "hidden";
        timeVal.button.dataset.timefinish = 'true';
      }
    });

    timeStart.addEventListener('blur', function () {
      let timeVal = AcceptingData.getStartFinishTime;
      if ((timeVal.timeStartVal !== false && timeVal.timeFinishVal !== false)
        && (timeVal.timeStartVal >= timeVal.timeFinishVal)) {
        timeVal.warningStart.innerHTML = 'Машину времени вроде не придумали!';
        timeVal.warningStart.style.visibility = "visible";
        timeVal.button.dataset.timefinish = 'false';
      }
      else {
        timeVal.warningStart.style.visibility = "hidden";
        timeVal.button.dataset.timefinish = 'true';
      }


    });
  }

  getData() {
    let obj = {};
    document.getElementById('buttonAddEvent').addEventListener('click', function () {
      var searchForm = document.forms["addEvent"];
      console.log(searchForm);
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










let acceptingData = new AcceptingData();
acceptingData.compareStartFinishTime();
acceptingData.getData();



