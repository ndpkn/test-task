import axios from "axios";

class checkWa {
    _apiBase=  'https://api.green-api.com'
    _token = localStorage.getItem('tokenWA')
    _idWa = localStorage.getItem('idWA')
    
    checkWa = async (phone) => {
        let res = 
            await axios
                .post(`${this._apiBase}/waInstance${this._idWa}/CheckWhatsapp/${this._token}`, 
                    {phoneNumber: phone},
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                    )
        if (res.status < 200 || res.status >= 300) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`, console.error(res));
        } else {
            localStorage.setItem('phone', phone)
            return res;
        }
    
    }
}
export default checkWa