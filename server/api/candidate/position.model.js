'use strict';

import mongoose from 'mongoose';
import EntitySchema from '../entity/entity.schema';

module.exports = mongoose.model('Position', EntitySchema);
