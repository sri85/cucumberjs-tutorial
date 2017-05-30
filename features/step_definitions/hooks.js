let mkdirp = require('mkdirp');
let fs = require('fs');
module.exports = function() {
    this.Before(function(features, callback) {
        if (!fs.existsSync('reports/')) {
            mkdirp('reports/', function (err) {
                if (err) console.error("Error whille creating reports directory"+err);
                else console.log("Report directory created succesfully!")
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
            console.log("Report generated successfully")
        }).catch(function(err){
            console.log("Error while generating reports",err)
        });
        callback();
    });
};
