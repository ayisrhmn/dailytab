(() => {
  const App = {
    // render clock to page
    renderLiveClock() {
      const doRenderLiveClock = () => {
        const hour = moment().format('HH');
        const minute = moment().format('mm');

        $('.clock .hour').text(hour);
        $('.clock .minute').text(minute);
      };

      doRenderLiveClock();
      setInterval(doRenderLiveClock, 1000);
    },
    // init function
    init() {
      this.renderLiveClock.call(this);
    },
  };

  window.onload = function () {
    App.init();
  };
})();
