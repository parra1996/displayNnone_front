export const login = () => {
    if(localStorage.getItem('token')){
        return true;
    }else {
        return false;
    }
}