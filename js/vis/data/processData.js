var $  = require('jquery');
var http = require('http');
var fs = require('fs');
var d3 = require('d3');

fs.readFile("forumContent.json", 'utf8',function(err,data){
    // parse the data
    var rawData = JSON.parse(data);
    processed = []
    rawData.forEach(function(d){
        if (d.courseId == 1){
            processed.push ({
                contributionId: d.contributionId,
                courseId: d.courseId,
                date: d.date,
                forumId: d.forumId,
                forumName: d.forumName,
                grade: d.grade,
                sentiment: d.sentiment,
                threadId: d.threadId,
                time: d.time,
                userId: d.userId,
                votes: d.votes
            });
        }
    })

    fs.writeFile('flow.json', JSON.stringify(processed, null, 4), function (err) {//以二进制格式保存
        if (err) throw err;
        console.log('file saved');
    });

});