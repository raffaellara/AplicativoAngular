(function() {
	'use strict';

	angular
		.module('app')
		.controller('IndexCtrl', IndexCtrl);

	function IndexCtrl() {

		var vm = this;

		vm.tickets = [
			{
				title: 'Formatar PC',
				desc: 'Lorem ipsum dollor amet',
				created_at: '07/04/2016 11:30:00'
			},
			{
				title: 'Formatar PC 2',
				desc: 'Lorem ipsum dollor amet',
				created_at: '07/04/2016 11:30:00'
			},
			{
				title: 'Formatar PC 3',
				desc: 'Lorem ipsum dollor amet',
				created_at: '07/04/2016 11:30:00'
			},
			{
				title: 'Formatar PC 4',
				desc: 'Lorem ipsum dollor amet',
				created_at: '07/04/2016 11:30:00'
			}
		];

		vm.save = function() {
			vm.tickets.push(vm.ticket);
		};

	};

})();