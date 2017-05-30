let mkdirp = require('mkdirp');
let fs = require('fs');
module.exports = function() {
    this.Before(function(features, callback) {
        if (!fs.existsSync('reports/')) {
            mkdirp('reports/', function (err) {
                if (err) console.error("Errorfile"+err);
                else console.log('pow!')
            });
        }

        callback();

    });


    this.After(function(features, callback) {
        const report = require('cucumber-html-report');
        report.create({
            source:       'reports/cucumber-report.json',
            name:         'report.html',
        }).then(function () {
            console.log("Success")
        }).catch(function(err){
            console.log(err)
        });
        callback();
    });
};
