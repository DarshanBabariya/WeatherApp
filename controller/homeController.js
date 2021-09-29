const requests = require('requests');

const homeController = (req, res) => {
    requests('https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=03a1beb8e7f17578f700b7574b2d3ff4')
        .on('data', function (chunk) {
            const data = JSON.parse(chunk)
            if (data) {
                res.locals.data = data;

                const temp = {
                    maintemp: Math.round((data.main.temp - 273.15) * 10) / 10,
                    tempmin: Math.round((data.main.temp_min - 273.15) * 10) / 10,
                    tempmax: Math.round((data.main.temp_max - 273.15) * 10) / 10,
                };
                res.locals.temp = temp;
                res.render('home');
            } else {
                res.render('error');
            }

        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
        });
}

module.exports = homeController;