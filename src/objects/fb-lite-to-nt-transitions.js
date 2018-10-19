/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * FBLiteToNTTransitions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FBLiteToNTTransitions extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      transition: 'transition',
      id: 'id'
    });
  }

  get (fields, params): FBLiteToNTTransitions {
    return this.read(
      fields,
      params
    );
  }
}