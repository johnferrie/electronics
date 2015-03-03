import DS from 'ember-data';
import Ember from 'ember';

var Electronics = DS.Model.extend({
    name: DS.attr('string'),
    devices: DS.hasMany('device', {async: true}),
    panelId: Ember.computed('id', function() {
        return 'item-' + this.get('id');
    }),
    url: Ember.computed('id', function() {
        return '#' + this.get('panelId');
    })
});

Electronics.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'Computers',
            devices: [1, 2, 3]
        },
        {
            id: 2,
            name: 'Devices',
            devices: [4,5,6]
        },
        {
            id: 3,
            name: 'Misc',
            devices: [7,8,9]
        }
    ]
});


export default Electronics;



