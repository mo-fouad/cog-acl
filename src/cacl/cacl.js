// creating ACL General Class

class gACL {
    constructor() {
      //  console.log('gACL Constructor');
        this.role = '';
        this.permission = [];
        this.urls = {};
        this.conditions = [];
    }

}

export default class CACL extends gACL {
    constructor() {
        super();
       // console.log('CACL Constructor');

        this.role = 'MainAdmin';
        this.permission = [];
        this.urls = ["all"];
        this.conditions = [{"when": "nothing"}];
    }

    createRole(passedRol) {
        this.role = passedRol;
        return(this.role);
    }

    updateRole() {
        console.log("Here")
    }


}

// Calling functions
export function a(arg) {
    CACL.role = arg;
    return(this);
}

export function can(arg) {
    //CACL.permission.push(arg);
    console.log(CACL.permission );
    return(CACL.permission);
}

export function to(arg) {
    this.urls.push(arg);
    console.log(arg)
}

export function when(key,value) {
    console.log(key,value);
}


// Exporting Aliases
export {a as an};
export {to as from};

