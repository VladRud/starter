"use strict";

import angular from 'angular';
import {AppComponent} from './app.component';
import TestComponent from './test/test.component';

export const AppModule = angular.module('app', [])
    .component('app', AppComponent)
    .component('test', TestComponent)
    .name;