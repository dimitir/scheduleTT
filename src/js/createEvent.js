
class AcceptingData {
  constructor() {
  }

  compareStartStopTime(){
  document.getElementById('timeFinish').addEventListener('blur', function () {
    console.log('obj');
  
  });
}

  getData() {
    let obj = {};
    document.getElementById('buttonAddEvent').addEventListener('click', function () {
      obj.eventName = document.getElementById('eventName').value;
      obj.timeStart = document.getElementById('timeStart').value;
      obj.timeFinish = document.getElementById('timeFinish').value;
      obj.dateEvent = document.getElementById('dateEvent').value;
      console.log(obj);
      return obj
    });
  }

  checkTime(time) {

  }

   

}



 






let acceptingData = new AcceptingData();
acceptingData.compareStartStopTime();  
acceptingData.getData();  



