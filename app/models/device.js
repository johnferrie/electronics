import DS from 'ember-data';

var Device = DS.Model.extend({
    name: DS.attr('string'),
    dashboard: DS.belongsTo('electronic')
});

Device.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Macbook Pro - Personal',
            dashboard_id: 1
        },
        {
            id: 2,
            name: 'Macbook Pro - Work',
            dashboard_id: 2
        },
        {
            id: 3,
            name: 'Windows 8',
            dashboard_id: 3
        },
        {
            id: 4,
            name: 'iPhone 6',
            dashboard_id: 4
        },
        {
            id: 5,
            name: 'iPad 3',
            dashboard_id: 5
        },
        {
            id: 6,
            name: 'iTouch',
            dashboard_id: 6
        },
        {
            id: 7,
            name: 'Playstation 4',
            dashboard_id: 7
        },
        {
            id: 8,
            name: 'Xbox One',
            dashboard_id: 8
        },
        {
            id: 9,
            name: 'Apple Tv',
            dashboard_id: 9
        }
    ]
});

export default Device;
