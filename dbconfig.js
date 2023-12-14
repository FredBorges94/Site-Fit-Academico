//Aonde vamos manter nossas inf de acesso

const config = {

    //server:'DESKTOP-11A568S',
    server: 'localhost',
    authentication:{

        type: 'default',
        options:{

            userName: 'sa',
            password: 'test123',
        }
    },

    options: {

        encrypt: false,
        database: 'fit_center'
    },

    port: 1434

}

module.exports = config;
