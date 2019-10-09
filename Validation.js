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

        function validNumbers(start, end) {
            return parseInt(start) && parseInt(end);
        }

        return {
            validateCities: validateCities,
            isInvalidInput: isInvalidInput,
            isString: isString,
            validNumbers: validNumbers
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