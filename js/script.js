Vue.config.devtools = true;
new Vue(
    {
        el: '#app',
        data: {
            mails: [] // array vuoto di mail
        },
        created() {
            // richiamo il methods
            getMails();
        },
        methods: {
            getMails: function () { // creo la funzione per generare le mail
                
                for (let i = 0; i < 10; i++) { // fino a che l'array non ha lunghezza pari a 10

                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail') // get dall'API

                        .then((response) => {  // appena il server ci risponde, si attiva questa funzione

                            this.mails.push(response.data.response); // pusho nell'array il dato generato dall'API
                        });
                }
            }

        }
    });




