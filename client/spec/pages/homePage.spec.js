const HomePage = require('../../src/js/pages/homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const EmergencyAlertPage = require('../../src/js/pages/emergencyAlertPage');
describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
    })
  })

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
      expect(page.render()).toContain('clock-time');
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to first contact page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contactpolice');
    });
    /*
    it('audioHub plays a sound', () => {
      spyOn(AudioHub, 'playSound')
      const page = new HomePage();
      page.leftButtonEvent();
      expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
    });
    */
  });

  describe('#rightButtonEvent', () => {
    it('goes to map page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('maps');
    });
  });


  describe('#bottomButtonEvent', () => {
    it('goes to app page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('games');
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page, "getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });

    it('should navigate to morningPage if 7am', () => {

      const props = {
        navigate: jest.fn(),
      };
      const page = new HomePage(props);
      const mockDateTime = { time: page.morningTime };
      jest.spyOn(page, "getDateTime").mockReturnValue(mockDateTime);
      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(1000);
      expect(props.navigate).toBeCalledWith('morning');
    });

    it('should navigate to eveningPage if 5pm', () => {

      const props = {
        navigate: jest.fn(),
      };
      const page = new HomePage(props);
      const mockDateTime = { time: page.eveningTime };
      jest.spyOn(page, "getDateTime").mockReturnValue(mockDateTime);
      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(1000);
      expect(props.navigate).toBeCalledWith('evening');
    });

    it('should navigate to medicinePage if 12pm', () => {

      const props = {
        navigate: jest.fn(),
      };
      const page = new HomePage(props);
      const mockDateTime = { time: page.medicineTime };
      jest.spyOn(page, "getDateTime").mockReturnValue(mockDateTime);
      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(1000);
      expect(props.navigate).toBeCalledWith('takemed');
    });


  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});
