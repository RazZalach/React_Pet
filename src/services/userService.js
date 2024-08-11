import axios from 'axios';

const ServiceUrl = process.env.REACT_APP_NODEJS_SERVER_URL + 'users';



// register user:
export const registerUser = async (userData)=>{
    try{
        const response = await axios.post(`${ServiceUrl}/register`,userData);
        return response.data;
    }catch(error){
        console.error(`Error registration user`, error);
        throw error.response ? error.response.data : 'Network Error';
    }
};


//login user: 
export const loginUser = async (loginData)=>{
    try{

        
        const response = await axios.post(`${ServiceUrl}/login`,loginData);
        return response.data;
    }catch(error){
        console.error(`Error Logging in`, error);
        const errorMessage = error.response && error.response.data.massage  ? error.response.data.massage : 'Network Error'
        throw new Error(errorMessage);
    }
};

// get Pets User

export const getPetsUser = async(userId) =>{
    try{
        const accessToken = sessionStorage.getItem('accessToken');
        const response = await axios.get(`${ServiceUrl}/pets/${userId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.data;
    }catch(error){
        console.error(`Error fetch pets user`, error);
        throw error.response ? error.response.data : 'Network Error';
    }
};

// reset password request - פה אנחנו מבקשים איפוס סיסמא
export const resetPassword = async(email) =>{
    try{
        const response = await axios.post(`${ServiceUrl}/reset-password`,{email});
        return response.data;
    }catch(error){
        console.error(`Error request reset password`, error);
        throw error.response ? error.response.data : 'Network Error';
    }
};


// get User by pet id: 
export const GetUserByPetId= async(petId) =>{
    try{
        const response = await axios.get(`${ServiceUrl}/get_user/${petId}`);
        return response.data;
    }catch(error){
        console.error(`Error get user py pet id`, error);
        throw error.response ? error.response.data : 'Network Error';
    }
};


// get all users  
export const  GetAllUsers = async() =>{
    try{
        const response = await axios.get(`${ServiceUrl}/all_users`);
        return response.data;
    }catch(error){
        console.error(`Error get all users`, error);
        throw error.response ? error.response.data : 'Network Error';
    }
};