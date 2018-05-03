"use strict";

import angular from 'angular';
import {AppComponent} from './app.component';
import {HelloComponent} from './components/hello/hello.component';

angular.module('app', [])
    .component('app', AppComponent)
    .component('hello', HelloComponent);