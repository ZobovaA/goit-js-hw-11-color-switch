const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const btns = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
  };
  
  btns.btnStop.disabled = true;
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const switchColors = {
    intervalId: null,
  
    start() {
      // console.dir('start', btns.btnStart);
  
      btns.btnStart.disabled = true;
      btns.btnStop.disabled = false;
  
      this.intervalId = setInterval(() => {
        const currentIndex = randomIntegerFromInterval(0, colors.length - 1);
        // console.log(currentIndex);
  
        colors.map((el, ind) => {
          if (currentIndex === ind) {
            document.body.style.backgroundColor = el;
            // console.log(el);
          }
        });
      }, 1000);
    },
  
    stop() {
      // console.dir('stop', btns.btnStop);
  
      btns.btnStop.disabled = true;
      btns.btnStart.disabled = false;
  
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  };
  
  btns.btnStart.addEventListener('click', switchColors.start.bind(switchColors));
  btns.btnStop.addEventListener('click', switchColors.stop.bind(switchColors));