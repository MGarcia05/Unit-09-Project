// --Traffic chart-- //

const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, 0.3)',
        borderWidth: 1,
        fill: {
            target: 'origin',
            above: 'rgba(99, 105, 189, 0.4)'
          },
          tension: .4
    }]
};


let hourlyData = {
  labels: [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm'
  ],
  datasets: [{
    data: [30, 25, 13, 26, 35, 39, 21, 23, 16, 32, 23],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let dataDaily = {
  labels: [
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  datasets: [{
    data: [321, 245, 280, 329, 195, 265, 379, 242, 334, 298, 318],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let weeklyData = {
  labels: [
    '16-22 Oct',
    '23-29 Oct',
    '30-5 Nov',
    '6-12 Nov',
    '13-19 Nov',
    '20-26 Nov',
    '27-3 Dec',
    '4-10 Dec',
    '11-17 Dec',
    '18-24 Dec',
    '25-31 Dec'
  ],
  datasets: [{
    data: [2046, 2141, 1755, 1890, 1987, 2019, 2349, 1845, 2167, 1850, 1959],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let monthlyData = {
  labels: [
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov'
  ],
  datasets: [{
    data: [7253, 7878, 7760, 7312, 8251, 7949, 7053, 7309, 7534, 7348, 7673, 7495],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1
  }]
};

const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
          beginAtZero: true
        }
    },
    plugins: {
        legend: {
          display: false
        }
    }
};

const trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};

// select button, add active class, remove class from previous button, generate new chart
const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.className = "active";
    }
    const liTraffic = document.querySelectorAll('.traffic-nav li');
    for (let i = 0; i < liTraffic.length; i++) {
        const liActive = liTraffic[i];
        if (liActive.className === 'active') {
            liActive.className += ' traffic-active';
            let liName = liActive.textContent;
        if (liName === 'Hourly') {
            updateChart(trafficChart, hourlyData);
        }
        else if (liName === 'Daily') {
            updateChart(trafficChart, dataDaily);
        }
        else if (liName === 'Weekly') {
            updateChart(trafficChart, weeklyData);
        }
        else if (liName === 'Monthly') {
            updateChart(trafficChart, monthlyData);
        }
        } else {
            liActive.className = 'traffic-nav-link';
        }
    }

});
