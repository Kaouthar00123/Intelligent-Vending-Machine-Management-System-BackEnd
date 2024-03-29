const { validateInput, validateEmail, validatePassword, validatePhoneNumber, validateId } = require('./inputValidation');

const validateAgent = (agent) => {
    /**
     * @description validate the agent and return it or null if it is not valid
     * @param {object} agent
     * @returns {object|null}
    */
    const { nom, prenom, email, password, numTel, idClient } = agent;
    const valideNom = validateInput(nom);
    const validePrenom = validateInput(prenom);
    const valideEmail = validateEmail(email);
    const validePassword = validatePassword(password);
    const valideNumTel = validatePhoneNumber(numTel);
    const valideIdClient = validateId(idClient);
    if (!valideNom || !validePrenom || !valideEmail || !validePassword || !valideNumTel || !valideIdClient) {
        return null;
    }
    return {
        nom: valideNom,
        prenom: validePrenom,
        email: valideEmail,
        password: validePassword,
        numTel: valideNumTel,
        idClient: valideIdClient
    };
}

const validateCostumer = (Costumer) => {
    const { nom, prenom, email, password, numTel } = Costumer;
    const valideNom = validateInput(nom);
    const validePrenom = validateInput(prenom);
    const valideEmail = validateEmail(email);
    const validePassword = validatePassword(password);
    const valideNumTel = validatePhoneNumber(numTel);
    if (!valideNom || !validePrenom || !valideEmail || !validePassword || !valideNumTel) {
        return null;
    }
    return {
        nom: valideNom,
        prenom: validePrenom,
        email: valideEmail,
        password: validePassword,
        numTel: valideNumTel
    };
}


const validateClient = (Client)=> {
    const { nom,email,numTel } = Client;
    const valideNom = validateInput(nom);
    const valideEmail = validateEmail(email);
    const valideNumTel = validatePhoneNumber(numTel);
    /*if (!valideNom || !valideEmail || valideNumTel) {
        return null;
    }*/
    return {
        nom: nom,
        email: email,
        numTel: numTel
    };
}


const validateSADM = (SADM) => {
    /**
     * @description validate SADM and return it or null if it is not valid
     * @param {object} SADM
     * @returns {object|null}
    */
    const { nom, prenom, email, password, numTel } = SADM;
    const valideNom = validateInput(nom);
    const validePrenom = validateInput(prenom);
    const valideEmail = validateEmail(email);
    const validePassword = validatePassword(password);
    const valideNumTel = validatePhoneNumber(numTel);
    if (!valideNom || !validePrenom || !valideEmail || !validePassword || !valideNumTel ) {
        return null;
    }
    return {
        nom: valideNom,
        prenom: validePrenom,
        email: valideEmail,
        password: validePassword,
        numTel: valideNumTel,
    };
}

const validateADM = (ADM) => {
    /**
     * @description validate ADM and return it or null if it is not valid
     * @param {object} ADM
     * @returns {object|null}
    */
     const { nom, prenom, email, password, numTel, idClient } = ADM;
     const valideNom = validateInput(nom);
     const validePrenom = validateInput(prenom);
     const valideEmail = validateEmail(email);
     const validePassword = validatePassword(password);
     const valideNumTel = validatePhoneNumber(numTel);
     const valideIdClient = validateId(idClient);
     if (!valideNom || !validePrenom || !valideEmail || !validePassword || !valideNumTel || !valideIdClient) {
         return null;
     }
     return {
         nom: valideNom,
         prenom: validePrenom,
         email: valideEmail,
         password: validePassword,
         numTel: valideNumTel,
         idClient: valideIdClient
     };
}

const validateAM = (AM) => {
    /**
     * @description validate AM and return it or null if it is not valid
     * @param {object} AM
     * @returns {object|null}
    */
     const { nom, prenom, email, password, numTel, idClient } = AM;
     const valideNom = validateInput(nom);
     const validePrenom = validateInput(prenom);
     const valideEmail = validateEmail(email);
     const validePassword = validatePassword(password);
     const valideNumTel = validatePhoneNumber(numTel);
     const valideIdClient = validateId(idClient);
     //const valideDistS = validateDistS(DistS);

     if (!valideNom || !validePrenom || !valideEmail || !validePassword || !valideNumTel || !valideIdClient ) {
         return null;
     }
     return {
         nom: valideNom,
         prenom: validePrenom,
         email: valideEmail,
         password: validePassword,
         numTel: valideNumTel,
         idClient: valideIdClient,
         //distS: valideDistS
     };
}

module.exports = {
    validateAgent,
    validateCostumer,
    validateClient,
    validateSADM,
    validateADM,
    validateAM
}