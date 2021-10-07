/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  AuthorizeResult,
  DefinitiveAuthorizeResult,
  ResourceFilterDefinition,
  OpaqueAuthorizeRequest,
} from '@backstage/permission-common';
import { BackstageIdentity } from '@backstage/plugin-auth-backend';

export type ConditionalHandlerResult = {
  result: AuthorizeResult.MAYBE;
  filterDefinition: ResourceFilterDefinition;
};

export type HandlerResult =
  | DefinitiveAuthorizeResult
  | ConditionalHandlerResult;

export interface PermissionHandler {
  handle(
    request: OpaqueAuthorizeRequest,
    user?: BackstageIdentity,
  ): Promise<HandlerResult>;
}