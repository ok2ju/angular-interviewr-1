import angular from 'angular';
import {ROOT_DIR} from '../../../constants';

angular
  .module('app.timepicker', ['ui.bootstrap'])
    .config(['$provide', Decorate]);

function Decorate($provide) {
  $provide.decorator('uibTimepickerDirective', function($delegate) {
    var directive = $delegate[0];

    directive.templateUrl = `${ROOT_DIR}/src/components/layout/timepicker/timepicker.tpl.html`

    return $delegate;
  });
}
