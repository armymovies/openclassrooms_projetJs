/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

var contacts = [];

var Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    nomPrenom: function() {
        var description = String("Nom : " + this.nom + ", prénom : " + this.prenom);
        return description;
    }
};

// création des 2 premiers contacts
var contact0 = Object.create(Contact);
contact0.init("Lévisse", "Carole");
var contact1 = Object.create(Contact);
contact1.init("Nelsonne", "Mélodie");
contacts.push(contact0);
contacts.push(contact1);

// fonction permettant d'afficher les contacts
function afficheContact() {
    console.log("Voici la liste de tous vos contacts :");
    contacts.forEach(function(contact) {
        console.log(contact.nomPrenom());
    });
    menu();
};
