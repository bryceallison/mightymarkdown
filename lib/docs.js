// Load modules

var Pkg = require('../package.json');


// Declare internals

var internals = {

};


exports.register = function (server, options, next) {
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: './views',
        relativeTo: __dirname
    });

    server.route({
        method: 'GET',
        path: '/docs/{docId}',
        config: {
            description: 'Edit a doc',
            handler: function (request, reply) {

                return reply.view('doc', {docId: request.params.docId});
            }
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'docs'
};
