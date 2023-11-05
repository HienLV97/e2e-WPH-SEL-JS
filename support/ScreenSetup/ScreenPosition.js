const { Builder, By, Key } = require('selenium-webdriver');

//  function SPLeftTop(){
//     const screenNumber = -1;

//     const screenWidth = 1440;
//     const screenHeight = 768;

//     // Xác định vị trí và kích thước của cửa sổ trình duyệt trên màn hình mong muốn
//     const windowX = screenNumber * screenWidth;
//     const windowY = -600; // Vị trí theo chiều cao không thay đổi
//     driver.manage().window().setRect({windowX, windowY});
//     // Dimension windowSize = new Dimension(screenWidth, screenHeight);

//     // // Di chuyển cửa sổ và thiết lập kích thước
//     // driver.manage().window().setPosition(new Point(windowX, windowY));
//     // driver.manage().window().setSize(windowSize);
// }
function LeftTop(driver) {
  let screenNumber = -1;

  let screenWidth = 1440;
  let screenHeight = 768;
  let fix = 138;
  let winxdowX = screenNumber * screenWidth;
  let windowY = -605;
  driver.manage().window().setRect({ width: screenWidth, height: screenHeight + fix, x: winxdowX, y: windowY });
}
function FullScreen2(driver) {
  let screenNumber = 1;

  let screenWidth = 1920;
  let screenHeight = 1080;
  let fix = 138;
  let  winxdowX = 2555
  let windowY = 0;
  driver.manage().window().setRect({ width: screenWidth, height: screenHeight + fix, x: winxdowX, y: windowY });
}
function MidRight(driver) {
  let screenWidth = 1280;
  let screenHeight = 1440;
  let fix = 138;
  let winxdowX = 1281
  let windowY = 0;
  driver.manage().window().setRect({ width: screenWidth, height: screenHeight + fix, x: winxdowX, y: windowY });
}
function MacMidRight(driver) {
  let screenWidth = 1280;
  let screenHeight = 1440;
  let fix = 138;
  let winxdowX = 1440 + 1280;
  let windowY = 0;
  driver.manage().window().setRect({ width: screenWidth, height: screenHeight + fix, x: winxdowX, y: windowY });
}
module.exports = {
  LeftTop,
  FullScreen2,
  MidRight,
  MacMidRight
};
// module.exports = LeftTop;
// module.exports = FullScreen2;
// module.exports = MidRight;
// module.exports = MacMidRight;
