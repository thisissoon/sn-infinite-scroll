"use strict";
/**
 * This module runs e2e test by setting up a module to make our
 * backend assertions e.g. mock the responses from our api before
 * lauching our actual application.
 * @main   sn.infiniteScroll.e2e
 * @module sn.infiniteScroll.e2e
 * @author SOON_
 */
angular.module("sn.infiniteScroll.e2e", ["sn.infiniteScroll.demo", "ngMockE2E"])
    .run([
        "$httpBackend",
        function ($httpBackend) {

            $httpBackend.whenGET(/users.*/).respond(200, { items: [{ name: "Micheal Mariah" },{ name: "Ste Letha" },{ name: "Rachel Lorena" },{ name: "Annabella Abby" }], total: 10, _pagination: { total: 3, current: 1, limit: 4 }});
            $httpBackend.whenGET(/partials\/.*/).passThrough();

        }
    ]);
