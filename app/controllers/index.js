var navigation = Alloy.createController("navigation");
Alloy.Globals.navigation = navigation;
var conf = {};

/* -- Bootstrap your application below this line -- */

conf = {
	index: "welcome",
	defaultViewMode: 'nav',
	indexOptions: {
		topLevel: true,
		viewMode: 'nav',
		transition: 'none',
		title: 'Welcome',
	},
	menu: 'menu',
	nav: 'navControls',
	bindMenu: true,
	confirmOnExit: true,
};

/* -- Bootstrap your application above this line -- */

navigation.init(conf);