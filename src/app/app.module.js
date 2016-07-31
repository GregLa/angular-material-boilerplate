(function () {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ui.router'
        ])
        .constant('TEMPLATE_URL', '/app/');

})();