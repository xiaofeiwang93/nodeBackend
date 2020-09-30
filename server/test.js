var models = require('./server.js').models;

// var toSave = [
//   { name: "Owen", email: "owenwang.me@gmail" },
//   { name: "Owen1", email: "owenwang.me@gmail1" },
//   { name: "Owen2", email: "owenwang.me@gmail2" },
//   { name: "Owen3", email: "owenwang.me@gmail3" },
//   { name: "Owen4", email: "owenwang.me@gmail4" },
//   { name: "Owen5", email: "owenwang.me@gmail5" },
//   { name: "Owen6", email: "owenwang.me@gmail6" },
//   { name: "Owen7", email: "owenwang.me@gmail7" },
//   { name: "Owen8", email: "owenwang.me@gmail8" },
//   { name: "Owen9", email: "owenwang.me@gmail9" },
//   { name: "Owen0", email: "owenwang.me@gmail0" },
// ];

// toSave.map((obj) => {
//   models.Profile.create(obj, (err, created) => {
//     console.log("Create?", created);
//   });
// });

var filter = {
	where: {
		email: { like: 'owen' },
	},
	order: 'id ASC',
	limit: 10,
	skip: 0,
	fields: {
		email: true,
	},
};

models.Profile.destroyById('5f6c15df0f34fc1df189257b', (err, found) => {
	console.log('Found? ', err, found);
});
