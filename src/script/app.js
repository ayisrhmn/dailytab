(() => {
  const App = {
    // render date and time
    renderDateTime() {
      const doRenderDateTime = () => {
        const hour = moment().format('HH');
        const minute = moment().format('mm');
        const fullDate = moment().format('dddd, DD MMMM YYYY HH:mm:ss');

        $('.clock .hour').text(hour);
        $('.clock .separator').text(':');
        $('.clock .minute').text(minute);
        $('.fulldate .date').text(fullDate);
      };

      doRenderDateTime();
      // set interval for 1 seconds
      setInterval(doRenderDateTime, Utils.seconds(1));
    },

    // get data background
    async getDataBackground() {
      const url = '/data/background.json';
      const res = await Utils.fetch(url);
      const data = await res.json();

      this.updateBackground.call(this, data);
    },

    // update background
    async updateBackground(data) {
      const dataBg = data.background;
      const getRandomBg = Utils.getRandomItemFromArray(dataBg);

      // get initial background
      $('.main')
        .css('opacity', '0')
        .css('background-image', `url(${getRandomBg.url})`);

      // get initial author
      $('.info-bottom').css('opacity', '0');
      $('.info-bottom .author-img').attr('href', getRandomBg.source);
      $('.info-bottom .author-img .author').text(
        `Image from ${getRandomBg.author.name}`,
      );

      // animate transition background
      $('.main').animate({opacity: 1}, 'slow');
      $('.info-bottom').animate({opacity: 1}, 'slow');

      setTimeout(() => {
        this.updateBackground.call(this, data);
      }, Utils.seconds(40));
    },

    // get quotes content
    async getQuotesContent() {
      const url = '/data/content-en.json';
      const res = await Utils.fetch(url);
      const data = await res.json();

      this.updateQuotesContent.call(this, data);
    },

    // update quotes content
    async updateQuotesContent(data) {
      const dataQuotes = data.content;
      const getRandomQuotes = Utils.getRandomItemFromArray(dataQuotes);

      // get initial quotes
      $('.quotes').css('opacity', '0');
      $('.quotes .text').text(`"${getRandomQuotes.text}"`);
      $('.quotes .text-by').text(`-${getRandomQuotes.text_by}`);

      // animate transition quotes
      $('.quotes').animate({opacity: 1}, 'slow');

      setTimeout(() => {
        this.updateQuotesContent.call(this, data);
      }, Utils.seconds(60));
    },

    // init function
    init() {
      this.renderDateTime.call(this);
      this.getDataBackground.call(this);
      this.getQuotesContent.call(this);
    },
  };

  window.onload = function () {
    App.init();
  };
})();
