Vue.config.devtools = true;


// Chiamare l'api per poter generare un numero randomico (che ci restuisce il backend)
// e mostrare questo numero a schermo.

// => dobbiamo popolare un data (che all'inizio è 0), e mostrarlo a schermo {{ mails }}

new Vue(
    {
        el: '#app',
        data: {
            mails: []
        },
        created() {
            getMails();
        },
        methods: {
            getMails: function () {
                for (let i = 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                            this.mails.push(response.data.response);
                        });
                }
            }

        }
    });




