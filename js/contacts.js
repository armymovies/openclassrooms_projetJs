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

// fonction permettant de créer des contacts
function createContact() {
    var promptNom = String(prompt("Saisissez le nom"));
    var promptPrenom = String(prompt("Saisissez le prenom"));
    var newContact = Object.create(Contact);
    newContact.init(promptNom, promptPrenom);
    contacts.push(newContact);
    console.log("Le nouveau contact à été ajouté");
    menu();
};

// fonction d'affichage du menu
function menu() {
    console.log("\n1 : Lister les contacts\n2 : Ajouter un contacts\n0 : Quitter");
    setTimeout(function() {
        actions();
    }, 1000);
}
