'use strict';

  const StatsPositionFilterComponent = {
    bindings: {
      selectedPositionsIds: '<',
      availablePositions: '<',
      onPositionsSelectionChange: '&'
    },
    templateUrl: 'app/stats/stats-position-filter/stats-position-filter.html',
    controller: class StatsPositionFilterComponent {

      $onInit() {
        this.availablePositionsIds = this.getPositionsIds(this.availablePositions);
      }

      onChange() {
        this.onPositionsSelectionChange({
          $event: {
            selectedPositionsIds: this.selectedPositionsIds
          }
        });
      }

      getPositionsIds(positions) {
        if (typeof positions === 'object' && positions !== null) {
          return Object.keys(positions);
        } else {
          return [];
        }
      }

    }
  };

export default StatsPositionFilterComponent;
