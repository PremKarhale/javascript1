class user {
    constructor(username,age,passoword){
        this.username=username
        this.age=age                //current context create kiya 
        this.passoword=passoword
    }

    EncapPassoword(){
        console.log(`${this.passoword}abc`)
    }
}

const prem = new user('prem',20,'prem@')
prem.EncapPassoword()