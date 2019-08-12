
class GetElementNode {
  constructor() {
    this.timeStart = document.getElementById('timeStart');
    this.timeFinish = document.getElementById('timeFinish');
    this.button = document.getElementById('buttonAddEvent');
    this.warningStartNode = timeStart.parentNode.querySelector('.eventAdd_validaty');
    this.warningFinishNode = timeFinish.parentNode.querySelector('.eventAdd_validaty');

  }

  // what do i do if element absent?
  getElements() {
    let objDomElem = {};
    objDomElem.timeStart = this.timeStart;
    objDomElem.timeFinish = this.timeFinish;
    objDomElem.button = this.button;
    objDomElem.warningStartNode = this.warningStartNode;
    objDomElem.warningFinishNode = this.warningFinishNode;
    return objDomElem;
  }



}

let getElementListNode = new GetElementNode();
export let elementList = getElementListNode.getElements();
