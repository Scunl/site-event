// Liste des monstres
const monstres = [
    {
        nom: "Ignispectre",
        description: "Un esprit vengeur entouré de flammes éternelles, qui provoque des incendies spontanés.",
        lieu: "Villa en feu dans Vinewood Hills.",
        caracteristiques: [
            "Températures élevées",
            "Incendies spontanés",
            "EMF Niveau 5"
        ],
        faiblesse: "Vulnérable à l'eau."
    },
    {
        nom: "Osferatu",
        description: "Un fantôme squelettique qui hante une vieille demeure abandonnée. Il laisse des empreintes d'os et manipule des objets.",
        lieu: "Manoir abandonné à Paleto Bay.",
        caracteristiques: [
            "Apparitions soudaines",
            "Empreintes osseuses",
            "Bruits d'os craquant",
            "Hurlements terrifiants"
        ],
        faiblesse: "Effrayé par les objets religieux."
    },
    {
        nom: "Lycanghast",
        description: "Un loup-garou spectral qui hante les montagnes de Blaine County. Il est rapide et chasse silencieusement ses proies.",
        lieu: "Villa en ruines dans les montagnes.",
        caracteristiques: [
            "Hurlements terrifiants",
            "Vitesse accrue en chasse",
            "Traces de griffes"
        ],
        faiblesse: "Vulnérable aux armes en argent."
    }
];

// Sélectionner la liste et le détail du monstre
const monstreList = document.getElementById('monstre-list');
const detailsDiv = document.getElementById('details');
const applyFiltersButton = document.getElementById('apply-filters');
const filterForm = document.getElementById('filter-form');

// Fonction pour afficher la liste des monstres
function afficherMonstres(monstresFiltrés) {
    monstreList.innerHTML = '';  // On efface la liste précédente

    if (monstresFiltrés.length === 0) {
        monstreList.innerHTML = '<li>Aucun monstre ne correspond à ces critères.</li>';
        return;
    }

    monstresFiltrés.forEach((monstre, index) => {
        const li = document.createElement('li');
        li.textContent = monstre.nom;
        li.addEventListener('click', () => afficherDetails(index, monstresFiltrés));
        monstreList.appendChild(li);
    });
}

// Fonction pour afficher les détails d'un monstre
function afficherDetails(index, monstresFiltrés) {
    const monstre = monstresFiltrés[index];
    detailsDiv.innerHTML = `
        <h2>${monstre.nom}</h2>
        <p><strong>Description :</strong> ${monstre.description}</p>
        <p><strong>Lieu :</strong> ${monstre.lieu}</p>
        <p><strong>Caractéristiques :</strong></p>
        <ul>
            ${monstre.caracteristiques.map(carac => `<li>${carac}</li>`).join('')}
        </ul>
        <p><strong>Faiblesse :</strong> ${monstre.faiblesse}</p>
    `;
}

// Fonction pour appliquer les filtres
function appliquerFiltres() {
    const checkboxes = Array.from(filterForm.querySelectorAll('input[type="checkbox"]:checked'));
    const caracteristiquesCochées = checkboxes.map(checkbox => checkbox.value);

    // Filtrer les monstres selon les caractéristiques cochées
    const monstresFiltrés = monstres.filter(monstre => {
        return caracteristiquesCochées.every(carac => monstre.caracteristiques.includes(carac));
    });

    afficherMonstres(monstresFiltrés);
}

// Fonction pour appliquer les filtres
function appliquerFiltres() {
    const checkboxes = Array.from(filterForm.querySelectorAll('input[type="checkbox"]:checked'));
    const caracteristiquesCochées = checkboxes.map(checkbox => checkbox.value);

    // Filtrer les monstres selon les caractéristiques cochées
    const monstresFiltrés = monstres.filter(monstre => {
        return caracteristiquesCochées.every(carac => monstre.caracteristiques.includes(carac));
    });

    afficherMonstres(monstresFiltrés);

    // Faire défiler la page vers le haut pour voir les résultats
    // On laisse un petit décalage pour bien voir le bas de page (ajuste la valeur si nécessaire)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Afficher la liste des monstres dès que la page est chargée
afficherMonstres(monstres);

// Ajouter l'événement sur le bouton d'application des filtres
applyFiltersButton.addEventListener('click', appliquerFiltres);

// Afficher la liste des monstres dès que la page est chargée
afficherMonstres(monstres);

// Ajouter l'événement sur le bouton d'application des filtres
applyFiltersButton.addEventListener('click', appliquerFiltres);
