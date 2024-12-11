/**
 * These vehicle properties are derived from our Smartcar endpoints.
 * For the complete list of available endpoints, please visit our documentation page:
 * https://smartcar.com/docs/api/#get-all-vehicles
 */
const properties = {
  attributes: {
    name: 'attributes',
    permission: 'read_vehicle_info',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Vehicle',
  },
  amperage: {
    name: 'amperage',
    permission: 'read_charge',
    supportedMakes: ['TESLA'],
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Amperage',
  },
  setAmperage: {
    name: 'setAmperage',
    permission: 'control_charge',
    supportedMakes: ['TESLA'],
    requestType: 'POST',
    componentType: 'SetVehicleProperty',
    targetProperty: 'amperage',
    text: 'Set new amperage',
    htmlAttributes: {
      type: "number",
      min: 0,
      step: 1,
    }
  },
  batteryLevel: {
    name: 'batteryLevel',
    permission: 'read_battery',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Battery level',
  },
  batteryCapacity: {
    name: 'batteryCapacity',
    permission: 'read_battery',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Capacity',
  },
  chargeCompletion: {
    name: 'chargeCompletion',
    permission: 'read_charge',
    supportedMakes: ['CADILLAC', 'CHEVROLET', 'TESLA'],
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Time to completion',
  },
  chargeLimit: {
    name: 'chargeLimit',
    permission: 'read_charge',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Charge limit',
  },
  setChargeLimit: {
    name: 'setChargeLimit',
    permission: 'control_charge',
    requestType: 'POST',
    componentType: 'SetVehicleProperty',
    targetProperty: 'chargeLimit',
    text: 'Set new limit',
    htmlAttributes: {
      type: "number",
      min: 50,
      max: 100,
      step: 1,
    }
  },
  chargeState: {
    name: 'chargeState',
    permission: 'read_charge',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Current state',
  },
  disconnect: {
    name: 'disconnect',
    permission: null,
    requestType: 'DELETE',
    componentType: 'Disconnect',
    text: '',
  },
  engineOil: {
    name: 'engineOil',
    permission: 'read_engine_oil',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Engine oil life',
  },
  evRange: {
    name: 'evRange',
    permission: 'read_battery',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Range',
  },
  fuel: {
    name: 'fuel',
    permission: 'read_fuel',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Fuel',
  },
  iceRange: {
    name: 'iceRange',
    permission: 'read_fuel',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Range',
  },
  isPluggedIn: {
    name: 'isPluggedIn',
    permission: 'read_charge',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Plugged in',
  },
  location: {
    name: 'location',
    permission: 'read_location',
    requestType: 'GET',
    componentType: 'VehiclePropertyList',
    text: 'Location',
  },
  lockUnlock: {
    name: 'lockUnlock',
    permission: 'control_security',
    requestType: 'POST',
    componentType: 'LockUnlock',
    text: 'text',
  },
  odometer: {
    name: 'odometer',
    permission: 'read_odometer',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Odometer',
  },
  startStopCharge: {
    name: 'startStopCharge',
    permission: 'control_charge',
    requestType: 'POST',
    componentType: 'StartStopCharge',
    text: '',
  },
  tirePressure: {
    name: 'tirePressure',
    permission: 'read_tires',
    requestType: 'GET',
    componentType: 'VehiclePropertyList',
    text: 'Tire Pressure',
  },
  vin: {
    name: 'vin',
    permission: 'read_vin',
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'VIN',
  },
  voltage: {
    name: 'voltage',
    permission: 'read_charge',
    supportedMakes: ['CADILLAC', 'CHEVROLET', 'TESLA'],
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Voltage',
  },
  wattage: {
    name: 'wattage',
    permission: 'read_charge',
    supportedMakes: ['TESLA'],
    requestType: 'GET',
    componentType: 'VehicleProperty',
    text: 'Wattage',
  },
};

const autoInsuranceConfig = {
  staticText: {
    appName: 'Sky Insurance',
    loadingMessage: 'Rest insured...your vehicle info is on the way!',
  },
  mode: 'live',
  unitSystem: 'imperial',
  brandSelect: '',
  singleSelect: true,
  requiredVehicleProperties: [
    properties.attributes,
  ],
  vehicleProperties: [
    properties.vin,
    properties.odometer,
    properties.location,
    properties.engineOil,
    properties.tirePressure,
    properties.disconnect,
  ],
};

const energyUtilitiesConfig = {
  staticText: {
    appName: 'ChargeUp',
    loadingMessage: 'Charging up the information superhighway...buckle up!',
  },
  mode: 'live',
  unitSystem: 'imperial',
  brandSelect: 'TESLA',
  singleSelect: false,
  requiredVehicleProperties: [
    properties.attributes,
  ],
  vehicleProperties: [
    properties.startStopCharge,
    properties.vin,
    properties.isPluggedIn,
    properties.chargeState,
    properties.chargeCompletion,
    properties.batteryLevel,
    properties.evRange,
    properties.chargeLimit,
    properties.setChargeLimit,
    properties.batteryCapacity,
    properties.voltage,
    properties.wattage,
    properties.amperage,
    properties.setAmperage,
    properties.disconnect,
  ],
};

const carSharingConfig = {
  staticText: {
    appName: 'CarShare',
    loadingMessage: 'Roaming the streets for your perfect ride...',
  },
  mode: 'live',
  unitSystem: 'imperial',
  brandSelect: '',
  singleSelect: true,
  requiredVehicleProperties: [
    properties.attributes,
  ],
  vehicleProperties: [
    properties.lockUnlock,
    properties.vin,
    properties.location,
    properties.fuel,
    properties.batteryLevel,
    properties.iceRange,
    properties.evRange,
    properties.odometer,
    properties.disconnect,
  ],
};

const roadsideAssistanceConfig = {
  staticText: {
    appName: 'RoadsideAssist',
    loadingMessage: 'Roadside assistance on standby...your vehicle details coming up!'
  },
  mode: 'live',
  unitSystem: 'imperial',
  brandSelect: '',
  singleSelect: true,
  requiredVehicleProperties: [
    properties.attributes,
  ],
  vehicleProperties: [
    properties.vin,
    properties.location,
    properties.odometer,
    properties.tirePressure,
    properties.engineOil,
    properties.disconnect,
  ],
};

const buildYourOwnConfig = {
  staticText: {
    appName: "[Your app's name]",
    loadingMessage: 'Loading...',
  },
  mode: 'live', // one of ['live', 'simulated']
  unitSystem: 'imperial',
  brandSelect: '',
  singleSelect: false,
  requiredVehicleProperties: [
    properties.attributes, // do not change, used to render select dropdown
  ],
  vehicleProperties: [
    properties.vin,
    // properties.someVehicleProperty,
  ],
};

export const config = buildYourOwnConfig;
