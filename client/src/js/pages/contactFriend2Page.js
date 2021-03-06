const TabsBasePage = require('./tabsBasePage');
const friend = require('../../images/man.png');
const cross = require('../../images/cross.png');
const left = require('../../images/arrowleft.png');
const right = require('../../images/arrowright.png');

class contactFriend2Page extends TabsBasePage {
  template = require('../../templates/contactFriend2Page.hbs');

  pageWillLoad() {
    super.pageWillLoad()
    this.friend = friend;
    this.cross = cross;
    this.left = left;
    this.right = right;
  }

  bottomButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('contactpolice');
  }

  leftButtonEvent() {
    this.navigate('contactfriend');
  }

  faceButtonEvent() {
    this.navigate('callfriend2');
  }
}

module.exports = contactFriend2Page;
