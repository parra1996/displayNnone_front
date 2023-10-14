import { HttpHeaders } from "@angular/common/http"

export const createHeader = () => {
    return {
      headers: new HttpHeaders({
        'Authorization': ` Bearer ${sessionStorage.getItem('token')!}`
      })
    }
  }