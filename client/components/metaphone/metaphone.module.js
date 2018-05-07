'use strict';

import metaphone from 'metaphone';
import MetaphoneFactory from "./metaphone.service";
import TranslitFactory from "./translit.service";
import ConstantsModule from './../../app/app.constant';

let metaphoneModule = angular.module('hrDbApp.metaphone', [
    ConstantsModule,
  ])
  .factory('Metaphone', MetaphoneFactory)
  .factory('Translit', TranslitFactory)
  .constant('metaphoneLib', metaphone)
  .name;

export default metaphoneModule;