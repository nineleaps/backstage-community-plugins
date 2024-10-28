// /*
//  * Copyright 2024 The Backstage Authors
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *     http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */
// import {
//   configApiRef,
//   createApiFactory,
//   createPlugin,
//   createRoutableExtension,
//   discoveryApiRef,
// } from '@backstage/core-plugin-api';

// import { rootRouteRef } from './routes';
// import { JiraApiClient, jiraApiRef } from './api';

// export const jiraPlugin = createPlugin({
//   id: 'jira',
//   apis: [
//     createApiFactory({
//       api: jiraApiRef,
//       deps: {
//         discoveryApi: discoveryApiRef,
//         configApi: configApiRef,
//       },
//       factory: ({ discoveryApi, configApi }) =>
//         new JiraApiClient({ discoveryApi, configApi }),
//     }),
//   ],
//   routes: {
//     root: rootRouteRef,
//   },
// });

// export const JiraPage = jiraPlugin.provide(
//   createRoutableExtension({
//     name: 'JiraPage',
//     component: () =>
//       import('./components/JiraLocalComponent').then(
//         m => m.JiraLocalComponent as (props: any) => JSX.Element | null,
//       ),
//     mountPoint: rootRouteRef,
//   }),
// );

/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law, you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *     This is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */
import {
  configApiRef,
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { JiraApiClient, jiraApiRef } from './api';

export const jiraPlugin = createPlugin({
  id: 'jira',
  apis: [
    createApiFactory({
      api: jiraApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        configApi: configApiRef,
      },
      factory: ({ discoveryApi, configApi }) =>
        new JiraApiClient({ discoveryApi, configApi }), 
    }),
  ],
  routes: {
    root: rootRouteRef,
  },
});

export const JiraPage = jiraPlugin.provide(
  createRoutableExtension({
    name: 'JiraPage',
    component: () =>
      import('./components/JiraLocalComponent').then(
        m => m.JiraLocalComponent as (props: any) => JSX.Element | null,
      ),
    mountPoint: rootRouteRef,
  }),
);

