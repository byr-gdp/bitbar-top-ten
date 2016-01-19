#! /usr/local/bin/node

var superagent = require('superagent');
var cheerio    = require('cheerio');
var encoding   = require('encoding');

// GBK -> UTF8
var parser = function(res, done) {
  res.text = '';
  res.setEncoding('binary');
  res.on('data', function(chunk) { res.text += chunk });
  res.on('end', function() {
    res.text = encoding.convert(res.text, 'UTF8', 'GBK').toString();
    done();
  });
};

var url = 'http://bbs.byr.cn/rss/topten';

superagent.get(url).parse(parser).end(function(err, sres) {
  if(err) {
    console.error(err);
  }
  var $ = cheerio.load(sres.text, {
    xmlMode: true
  });
  var items = [];
  $("item").each(function(i, e) {
    var title = $(e).find("title").text().trim();
    var link = $(e).find("link").text().trim();
    items.push({
      title: title,
      link: link
    });
  });

  console.log('论坛十大');
  console.log('---');
  for(var i = 0; i < items.length; i++) {
    console.log(items[i].title + "| href=" + items[i].link);
  }
});

