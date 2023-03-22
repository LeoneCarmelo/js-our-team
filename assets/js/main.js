/* Utilizzando i dati forniti,
 creare un array di oggetti per rappresentare i membri del team.  
 \Ogni membro è caratterizzato dalle seguenti informazioni:
--nome
--ruolo
--foto 
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/
//Add array
const membersTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },
]

//Milestone 1

for(let i = 0; i < membersTeam.length; i++) {
    const member = membersTeam[i]
    const data = member.name + ' ' + member.role + ' ' + member.photo
    console.log(data)
    printToDom(data)
}

//Milestone 2
/**
 * @param{string}
 *  */
function printToDom(data) {
    // create element where to put the text
    const membersData = document.createElement('span')
    membersData.style.display = 'block'
    //put membersData into the element
    membersData.textContent = data
    //append element to Dom
    document.querySelector('body').append(membersData)
}