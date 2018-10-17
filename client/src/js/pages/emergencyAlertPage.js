const BasePage = require('watch-framework').BasePage;
const countdowngif = require('../../images/countdown.gif');
const cross = require('../../images/cross.png');

class EmergencyAlertPage extends BasePage {
  pageWillLoad() {
    console.log('pageWillLoad')
    this.timerEvent = setTimeout(()=>{this.navigate('emergencyMessageSentPage')}, 6000)
    console.log(this.timerEvent)
    this.countdowngif = countdowngif;
    this.cross = cross;
  }
  template = require('../../templates/emergencyAlertPage.hbs');



  bottomButtonEvent() {

    clearTimeout(this.timerEvent);

    this.navigate('/');
  }

}

module.exports = EmergencyAlertPage;