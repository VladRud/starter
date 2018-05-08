'use strict';

import template from './stats-month.html';
import './stats-month.css';

const StatsMonthComponent = {
  bindings: {
    monthlyChart: '<'
  },
  templateUrl: template,
  controller: class StatsMonthComponent {
    constructor() {
      this.isDataAvailable = this.checkIfDataAvailable();
    }

    $onChanges() {
      this.isDataAvailable = this.checkIfDataAvailable();
    }

    checkIfDataAvailable() {
      return (this.monthlyChart
        && this.monthlyChart.data
        && this.monthlyChart.data.length);
    }
  }
};

export default StatsMonthComponent;
