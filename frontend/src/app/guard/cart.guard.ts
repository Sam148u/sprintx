import { inject } from "@angular/core";

import { Router } from "@angular/router";

export const CartGuard = () => {
    const router = inject(Router)
 if(localStorage.getItem("user_token")){

    return true;

 }else{
    router.navigate(["/login"])
    return false;
 }
}