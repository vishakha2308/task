import axios from 'axios';
export const data=async()=>{
    try{
        const res=await axios.get('https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=64820577b949b65f7518f2bfa7612aa8');
        console.log('resp',res);
        if(res&&res.status===200){
            return {
                status:'success',
                data:res.data
            }
        }
    }
    catch(err){
        console.log('error in statsres...',err);
        return{
            status:'error',
            error:err
        }
    }
}