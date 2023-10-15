import { HttpHeaders } from "@angular/common/http"
import * as moment from "moment"
export const createHeader = () => {
    return {
      headers: new HttpHeaders({
        'Authorization': ` Bearer ${sessionStorage.getItem('token')!}`
      })
    }
  }

  export const transformDate = (date: string)=> {
    return (moment(date).utc().format('YYYY-MM-DD')); 
  }