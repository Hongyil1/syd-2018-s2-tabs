const BasePage = require('watch-framework').BasePage;
const countdowngif = require('../../images/logo.png');
const cross = require('../../images/cross.png');

class EmergencyAlertPage extends BasePage {
  pageWillLoad() {
    this.countdowngif = countdowngif;
    this.cross = cross;
  }
  template = require('../../templates/emergencyAlertPage.hbs');
}

module.exports = EmergencyAlertPage;
