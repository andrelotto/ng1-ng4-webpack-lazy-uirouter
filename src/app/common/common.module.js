import { AdminService } from './services/admin.service.js';
import { LoginService } from './services/login.service.js';

export let commonModule = angular
  .module('common', [])
  .factory('LoginService', LoginService);