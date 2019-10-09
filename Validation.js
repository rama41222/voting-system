const validationService = (function validationService() {
    let instance;
    function init() {
        const availableCities = [
            'goa', 
            'delhi',
            'mumbai',
            'banglore',
            'colombo',
            'berlin',
            'moscow',
            'budapest'
        ];

        const excludedCommands = ['votes', 'db', 'exit'];

        function validateCities(city) {
            return availableCities.includes(city);
        }
        
        function isInvalidInput(command, values) {
            return !(values || excludedCommands.includes(command));
        }

        function isString(value) {
            return typeof value === 'string';
        }

        function validNumber(value) {
            return parseInt(value);
        }

        return {
            validateCities: validateCities,
            isInvalidInput: isInvalidInput,
            isString: isString,
            validNumber: validNumber
          }
    }

    return {
        getInstance: function () {
          if(!instance) {
            instance = init();
          }
          return instance;
        }
    }
})();

module.exports = Object.freeze(validationService);