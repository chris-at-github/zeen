// ---------------------------------------------------------------------------------------------------------------------
// Konfiguration
Zeen.configuration = require('./configuration');

// ---------------------------------------------------------------------------------------------------------------------
// Factories
import ServiceFactory from './factories/service';

Zeen.factory = {
	service: new ServiceFactory()
};

// ---------------------------------------------------------------------------------------------------------------------
// Managers
import MapService from './services/map';

Zeen.service = {
	map: MapService
};