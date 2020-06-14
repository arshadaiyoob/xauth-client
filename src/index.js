import axios from 'axios';
import ls from 'localStorage';

class xAuth {

    init(api, secret) {
        ls.setItem("apiKey", api);
        ls.setItem("secret", secret);
    }

    async enableXAuth(clientId) {
        let client_id = clientId;
        let api = ls.getItem("apiKey");
        let secret = ls.getItem("secret");
        const options = {
            headers: {
                'x-api-key': api,
                'x-secret-key': secret
            }
        };
        let res = await axios.post("http://localhost:3000/users/me/enable-xauth",{
            Xuser: client_id 
        }, options);

        
        return new Promise((resolve, reject) => {
        if(res.data.data.status === "enabled"){
            resolve(res);
        } else {
            reject();
        }
        })

    }

    async twoFactorRequest(userId) {
        let uid = userId;
        let api = ls.getItem("apiKey");
        let secret = ls.getItem("secret");

        const options = {
            headers: {
                'x-api-key': api,
                'x-secret-key': secret
            }
        };

        let response = await axios.post("http://localhost:3000/users/me/auth-request",{
        userId: uid,
        status: 'Requesting for biometrics'
        }, options);

        return new Promise((resolve, reject) => {
            if(response.data.data.value === 'Success'){
                resolve(response.data.data.value);
            }else {
                reject();
            }
        })
    }
}
export default module.export = xAuth;


