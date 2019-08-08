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