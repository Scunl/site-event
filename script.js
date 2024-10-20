// Liste des monstres
const monstres = [
    {
        nom: "Flamme Nocturne",
        description: "Ce spectre embrase son environnement, provoquant une chaleur insupportable et des incendies soudains. Ses cris déchirants résonnent dans l'obscurité, effrayant quiconque l'entend.",
        caracteristiques: [
            "Températures élevées",
            "Hurlements terrifiants",
            "Incendies spontanés",
            "Écriture fantomatique"
        ],
        faiblesse: "Vulnérable à l'eau bénite. Et n'aime pas les regroupements d'invidividus"
    },
    {
        nom: "Spectre Gélifié",
        description: "Contrairement à ses homologues ardents, ce spectre est associé au froid extrême, provoquant une baisse drastique des températures. Il apparaît subitement et sème la confusion par des messages radio cryptiques.",
        caracteristiques: [
            "Températures extrêmement basses",
            "Apparitions soudaines",
            "Parle dans la radio"
        ],
        faiblesse: "Vulnérable au feu sacré."
    },
    {
        nom: "Pyrocallis",
        description: "Un esprit qui adore jouer avec le feu. Il déclenche des incendies tout en envoyant des signaux perturbants dans les radios, et chaque fois qu'il est proche, les appareils EMF réagissent violemment.",
        caracteristiques: [
            "Incendies spontanés",
            "EMF Niveau 5",
            "Parle dans la radio"
        ],
        faiblesse: "Peut être exorcisé avec du soufre."
    },
    {
        nom: "L'Embrasé",
        description: "Cet esprit est une véritable bombe incendiaire, capable de déclencher des incendies là où il passe. Il aime terroriser ses victimes en chuchotant des menaces via la radio, avant de libérer des hurlements terrifiants qui glacent le sang.",
        caracteristiques: [
            "Incendies spontanés",
            "Parle dans la radio",
            "Hurlements terrifiants"
        ],
        faiblesse: "Affaibli par le froid extrême."
    },
    {
        nom: "Craniomancer",
        description: "Ce spectre est obsédé par les os. Il se manifeste avec des bruits dérangeants de craquement d'os et peut apparaître soudainement, créant un pic dans les relevés EMF. Il laisse des ossements derrière lui lorsqu'il se déplace.",
        caracteristiques: [
            "Bruits d'os craquant",
            "EMF Niveau 5",
            "Apparitions soudaines"
        ],
        faiblesse: "Vulnérable aux objets en métal pur."
    },
    {
        nom: "Ignimortis",
        description: "Un esprit lié à la chaleur intense, qui provoque des flammes spontanées autour de lui et fait grimper la température de manière anormale. Il émet des cris stridents lorsqu'il est en colère, rendant toute interaction terrifiante.",
        caracteristiques: [
            "Températures élevées",
            "Incendies spontanés",
            "Hurlements terrifiants"
        ],
        faiblesse: "Se calme avec des rituels de purification."
    },
    {
        nom: "Glacéris",
        description: "Un esprit ancien qui enveloppe tout ce qu'il touche dans une couche de glace. Il abaisse drastiquement la température, créant des tempêtes de glace locales dans son sillage.",
        caracteristiques: [
            "Températures extrêmement basses",
            "Apparitions soudaines",
            "Hurlements terrifiants"
        ],
        faiblesse: "Vulnérable à la chaleur intense."
    },
    {
        nom: "Cryomancien",
        description: "Cet esprit manipulateur du froid est capable de geler instantanément l'air autour de lui. Il communique via des fréquences radios et fait chuter les températures à des niveaux insupportables.",
        caracteristiques: [
            "Températures extrêmement basses",
            "Parle dans la radio",
            "EMF Niveau 5"
        ],
        faiblesse: "Peut être exorcisé avec des flammes."
    },
    {
        nom: "Solarius",
        description: "Un esprit incandescent, entouré d'une chaleur si intense qu'il fait fondre les objets à proximité. Il brûle tout ce qui croise son chemin, augmentant rapidement la température autour de lui.",
        caracteristiques: [
            "Températures élevées",
            "Incendies spontanés",
            "EMF Niveau 5"
        ],
        faiblesse: "Affaibli par l'obscurité totale."
    },
    {
        nom: "Infernos",
        description: "Une entité malveillante qui déclenche des vagues de chaleur dévastatrices. Il sème la terreur avec sa présence ardente et envoie des flammes infernales qui ravagent tout sur son passage.",
        caracteristiques: [
            "Températures élevées",
            "Hurlements terrifiants",
            "Parle dans la radio"
        ],
        faiblesse: "Vulnérable aux artefacts glacés."
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
