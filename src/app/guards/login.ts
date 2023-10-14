export const login = () => {
    if(sessionStorage.getItem('token')){
        return true;
    }else {
        return false;
    }
}