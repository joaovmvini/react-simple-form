import axios from 'axios';

const searchByCep = async function(cep) {
    if (cep.length === 8) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        if (response.data.erro) {
            return false;
        }

        return response.data;
    }
}

export { searchByCep };