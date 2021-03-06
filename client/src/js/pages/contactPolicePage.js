const TabsBasePage = require('./tabsBasePage');
const police = require('../../images/police.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class contactPolicePage extends TabsBasePage {
  template = require('../../templates/contactPolicePage.hbs');

  pageWillLoad() {
    super.pageWillLoad();
    this.police = police;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('contacthospital');
  }

  leftButtonEvent() {
    this.navigate('contactfriend2');
  }

  faceButtonEvent() {
    this.navigate('callpolice');
  }
}

module.exports = contactPolicePage;
