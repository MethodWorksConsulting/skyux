/*global describe, it, browser */

describe('contextmenu', function () {
    'use strict';

    describe('context menu', function () {
        it('should match the baseline context menu screenshot when closed', function (done) {
            browser
                .setupTest('/contextmenu/fixtures/test.full.html')
                .compareScreenshot({
                    screenshotName: 'contextmenu_closed',
                    selector: '#screenshot-contextmenu',
                    checkAccessibility: true
                })
                .call(done);
        });

        it('should match the baseline context menu screenshot when open', function (done) {
            browser
                .setupTest('/contextmenu/fixtures/test.full.html')
                .click('#screenshot-contextmenu button.bb-context-menu-btn')
                .compareScreenshot({
                    screenshotName: 'contextmenu_open',
                    selector: '#screenshot-contextmenu',
                    checkAccessibility: true
                })
                .call(done);
        });

    });

    describe('submenu', function () {
        it('should match the baseline screenshot when a collapsed submenu exists', function (done) {
            browser
                .setupTest('/contextmenu/fixtures/test.full.html')
                .click('#screenshot-submenu button.bb-context-menu-btn')
                .compareScreenshot({
                    screenshotName: 'submenumenu_collapsed',
                    selector: '#screenshot-submenu',
                    checkAccessibility: true
                })
                .call(done);
        });

        it('should match the baseline screenshot when an expanded submenu exists', function (done) {
            browser
                .setupTest('/contextmenu/fixtures/test.full.html')
                .click('#screenshot-submenu button.bb-context-menu-btn')
                .click('#screenshot-submenu .bb-submenu .panel-title .accordion-toggle > span > div')
                .compareScreenshot({
                    screenshotName: 'submenumenu_expanded',
                    selector: '#screenshot-submenu',
                    checkAccessibility: true
                })
                .call(done);
        });

    });

});
