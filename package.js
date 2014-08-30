Package.describe({
  summary: "JavaScript library for creating an Apple-like one page scroller website. - Packaged for Meteor",
  version: "1.0.0",
  git: "https://github.com/eahefnawy/meteor-onepage-scroll-0.9.git"
});

Package.onUse(function(api) {
  api.use("jquery", "client");

  api.add_files("jquery.onepage-scroll.js", "client");
  api.add_files("onepage-scroll.css", "client");
});
