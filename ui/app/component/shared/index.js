/*
 *
 * Copyright 2018. Gatekeeper Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import md from 'angular-material';
import table from 'angular-material-data-table';
import Directive from './generic/BaseDirective';
import ADDataService from './ADDataService';
import AWSDataService from './AWSDataService';
import RDSDataService from './RDSDataService';
import RdsRevokeUsersDataService from './RdsRevokeUsersDataService';
import RdsUsersDataService from './RdsUsersDataService';
import AccountDataService from './AccountDataService';
import GrantDataService from './GrantDataService';
import RdsGrantDataService from './RdsGrantDataService';
import RoleDataService from './RoleDataService';
import RequestDataService from './RequestDataService';
import SchemaDataService from './SchemaDataService';
import Ec2ConfigService from "./Ec2ConfigService";
import RdsConfigService from "./RdsConfigService";
import GkNavBar from './GkNavBar';
import DisallowSpaces from './DisallowSpaces';
import util from './generic/DirectiveUtils';

import gkSSCtrl from './selfservice/GatekeeperSelfServiceController';

var gkUtil = angular.module('gatekeeper-util', [md, table])
    .service('gkRoleService', ['$http','$state', RoleDataService])
    .service('gkADService', ['$http','$state',ADDataService])
    .service('gkAWSService', ['$http','$state',AWSDataService])
    .service('gkRDSService', ['$http','$state',RDSDataService])
    .service('gkRdsUsersService', ['$http','$state',RdsUsersDataService])
    .service('gkRdsRevokeUsersService', ['$http','$state',RdsRevokeUsersDataService])
    .service('gkGrantService', ['$http','$state',GrantDataService])
    .service('gkRdsGrantService', ['$http','$state',RdsGrantDataService])
    .service('gkAccountService', ['$http','$state',AccountDataService])
    .service('gkRequestService', ['$http','$state',RequestDataService])
    .service('gkSchemaService', ['$http','$state',SchemaDataService])
    .service('gkEc2ConfigService', ['$http','$state',Ec2ConfigService])
    .service('gkRdsConfigService', ['$http','$state',RdsConfigService])
    .controller('gkSelfServiceController', ['$mdDialog', '$mdToast', 'gkADService', '$scope','$state','$rootScope', 'gkEc2ConfigService', gkSSCtrl])
    .directive('disallowSpaces', util.newDirective(new DisallowSpaces()))
    .directive('gatekeeperUserComponent',  util.newDirective(new Directive(require('./selfservice/template/gatekeeperADComponent.tpl.html'))))
    .directive('gkNavBar', util.newDirective(new GkNavBar(require('./template/gkNavBar.tpl.html'))));


export default gkUtil.name;



