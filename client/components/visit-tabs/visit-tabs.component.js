'use strict';

import template from './visit-tabs.html';

const VisitTabsComponent = {
  bindings: {
    candidate: '<',
    activeTabIndex: '<',
    visits: '<',
    hasOpenVisits: '<',
    onAddClick: '&',
    onRemoveClick: '&',
    onRejectClick: '&',
    onHireClick: '&',
    onReopenClick: '&'
  },
  templateUrl: template,
  controller: class VisitTabsComponent {

    constructor($filter){
      'ngInject';
      this.$filter = $filter;
    }

    addVisit() {
      this.onAddClick({});
    }

    removeVisit(event) {
      this.onRemoveClick({
        $event: {
          msg: event.msg,
          index: event.index
        }
      });
    }

    rejectVisit(event) {
      this.onRejectClick({
        $event: {
          visit: event.visit
        }
      })
    }

    hireVisit(event) {
      this.onHireClick({
        $event: {
          visit: event.visit
        }
      })
    }

    reopenVisit(event) {
      this.onReopenClick({
        $event: {
          visit: event.visit
        }
      })
    }

    getRemoveMsg(visit){
      return 'visit on ' + this.$filter('date')(visit.general.date,'dd.MM.yy');
    }

  }
};

export default VisitTabsComponent;

