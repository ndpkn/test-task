import axios from "axios";

class ServiceMessage {
    _apiBase=  'https://api.green-api.com'
    _token = localStorage.getItem('tokenWA')
    _idWa = localStorage.getItem('idWA')
    _phone = localStorage.getItem('phone')
    
    getMessage = async () => {
        let res = await axios.get
                (`${this._apiBase}/waInstance${this._idWa}/ReceiveNotification/${this._token}`, 
                    {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`, console.error(res));
        } else {
            return res;
        }
    }
    deleteMessage = async (receiptId) => {
        let res = await axios
            .delete(`https://api.green-api.com/waInstance${this._idWa}/DeleteNotification/${this._token}/${receiptId}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`, console.error(res));
        } else {
            return res;
        }
    }

    getHistory = async () => {
        let res = axios
                    .post(
                        `${this._apiBase}/waInstance${this._idWa}/GetChatHistory/${this._token}`,
                        {
                            chatId: `${this._phone}@c.us`,
                            count: 20
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`, console.error(res));
        } else {
            return res;
        }
    }
    submitMessage = async (message) => {
        let res = axios.post(
                    `${this._apiBase}/waInstance${this._idWa}/SendMessage/${this._token}`,
                    {
                        chatId: `${this._phone}@c.us`,
                        message: message 
                    },
                    {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
    }
}

export default ServiceMessage