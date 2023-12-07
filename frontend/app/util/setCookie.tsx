const  setCookie = (cName: string, cValue: string, expDays: any) => {

    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    
  }
  
  export default setCookie;
  