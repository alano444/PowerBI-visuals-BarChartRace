import { Visual } from "../../src/visual";
declare var powerbi;
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["wishyoulizationbarchartrace2"] = {
    name: 'wishyoulizationbarchartrace2',
    displayName: 'Animated Bar Chart Race',
    class: 'Visual',
    version: '2.1.0',
    apiVersion: '2.1.0',
    create: (options) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};

export default powerbi;