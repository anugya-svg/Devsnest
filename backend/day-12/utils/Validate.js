const emailValidate=(email)=>{
    const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const passwordValidate= (password)=>{
    var re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
}

module.export={
    emailValidate,
    passwordValidate
}