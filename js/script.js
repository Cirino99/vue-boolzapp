const app = new Vue({
    el : '#app',
    data : {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        select: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        select: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        select: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        select: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        select: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        select: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        select: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        select: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        select: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/img-utente.jpg',
                visible: true,
                ultimoAccesso: '',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        select: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        select: false
                    }
                ],
            }
        ],
        newMessage : '',
        chatActive : 0,
        contact : '',
        messageMenu : ''
    },
    created : function(){
        for(let i=0; i<this.contacts.length; i++){
            this.setUltimoAccesso(i);
        }
    },
    methods : {
        selectChat(i){
            this.chatActive = i;
            this.contact = '';
            this.ricaricaContact();
        },
        addNewMessage(){
            this.newMessage = this.newMessage.trim();
            if(this.newMessage !== ''){
                const message = {
                    date : dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message : this.newMessage,
                    status : 'sent',
                    select: false
                };
                this.contacts[this.chatActive].messages.push(message);
                this.newMessage = '';
                setTimeout(this.replyMessage,1000);
            }
        },
        replyMessage(){
            const message = {
                date : dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message : 'ok',
                status : 'received',
                select: false
            };
            this.contacts[this.chatActive].messages.push(message);
            this.setUltimoAccesso(this.chatActive);
        },
        searchContact(){
            this.ricaricaContact();
            let contact = this.contact.trim();
            if(contact !== ''){
                for(let i=0; i<this.contacts.length; i++){
                    if(this.contacts[i].name.toLowerCase().search(contact.toLowerCase()) === -1){
                        this.contacts[i].visible = false;
                    }
                }
            }
        },
        ricaricaContact(){
            for(let i=0; i<this.contacts.length; i++){
                this.contacts[i].visible = true;
            }
        },
        selectMessage(i){
            this.messageMenu = i;
            this.contacts[this.chatActive].messages.forEach(element => {
                if(this.contacts[this.chatActive].messages[i] !== element)
                    element.select = false;
            });
            this.contacts[this.chatActive].messages[i].select = !this.contacts[this.chatActive].messages[i].select;
        },
        deleteMessage(e){
            e.preventDefault();
            e.stopPropagation();
            this.contacts[this.chatActive].messages[this.messageMenu].select = false;
            this.contacts[this.chatActive].messages.splice(this.messageMenu,1);
        },
        setUltimoAccesso(index){
            for(let i=this.contacts[index].messages.length - 1; i>=0; i--){
                if(this.contacts[index].messages[i].status === 'received'){
                    //this.contacts[index].ultimoAccesso = dayjs(this.contacts[index].messages[i].date).format('HH:mm');
                    this.contacts[index].ultimoAccesso = this.contacts[index].messages[i].date;
                    return;
                }
            }
        }
    }
});