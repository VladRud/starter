'use strict';

const FooterDirective = function () {
  return {
    templateUrl: 'components/footer/footer.html',
    restrict: 'E',
    link: function(scope, element) {
      element.addClass('footer');
    }
  };
};

export default FooterDirective;
