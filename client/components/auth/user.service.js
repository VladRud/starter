'use strict';

function UserResource($resource) {
  'ngInject';
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    changePassword: {
      method: 'PUT',
      params: {
        controller:'password'
      }
    },
    get: {
      method: 'GET',
      params: {
        id:'me'
      }
    },
    toggleActivation: {
      method: 'PUT',
      params: {
        controller:'toggleActivation'
      }
    },
    update: {
      method:'PUT'
    }
  });
}

export default UserResource;


