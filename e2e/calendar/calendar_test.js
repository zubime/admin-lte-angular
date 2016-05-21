/* global describe, beforeEach, it, browser, expect */
'use strict';

var CalendarPagePo = require('./calendar.po');

describe('Calendar page', function () {
  var calendarPage;

  beforeEach(function () {
    calendarPage = new CalendarPagePo();
    browser.get('/#/calendar');
  });

  it('should say CalendarCtrl', function () {
    expect(calendarPage.heading.getText()).toEqual('calendar');
    expect(calendarPage.text.getText()).toEqual('CalendarCtrl');
  });
});
