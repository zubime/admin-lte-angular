/* global describe, beforeEach, it, browser, expect */
'use strict';

var TimelinePagePo = require('./timeline.po');

describe('Timeline page', function () {
  var timelinePage;

  beforeEach(function () {
    timelinePage = new TimelinePagePo();
    browser.get('/#/timeline');
  });

  it('should say TimelineCtrl', function () {
    expect(timelinePage.heading.getText()).toEqual('timeline');
    expect(timelinePage.text.getText()).toEqual('TimelineCtrl');
  });
});
