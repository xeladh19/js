// ## Exercice 1

// Jean, Pierre, Maxime et Henri aimeraient connaître leur IMC (indice de masse corporel) grâce à la formule IMC = masse/(taille au carré en mètre)

// - Stocker les informations nécessaires
// - Calculer les IMC selon les données suivantes :
//     - Jean pèse 80kg et mesure 1.69m
//     - Henri pèse 79kg et mesure 1.81m
//     - Pierre pèse 62kg et mesure 1.68m
//     - Maxime pèse 100kg et mesure 1.72m
// - Afficher le BMI ainsi que la corpulence : Jean a un IMC de **20kg/m2**  et a donc une corpulence **normale**
//     - **en dessous de 18,4 kg/m²**, on considère que la personne est maigre,
//     - **entre 18,5 et 24,9 kg/m²**, on considère que la personne a une corpulence "normale",
//     - **entre 25 et 29,9 kg/m²**, on considère que la personne est en surpoids,
//     - **entre 30 à 34,9 kg/m²**, on considère que la personne est en obésité modérée,
//     - **entre 35 et 39,9 kg/m²**, on considère que la personne est en obésité sévère**,**
//     - **au-dessus de 40 kg/m²**, on considère que la personne est en obésité morbide.
// - Afficher l'IMC le plus haut

//En programmation si on a qu'une sle éxécution il n'y as pas besoin d'accolade pour entourer (Number.isNan..).

const people = [
    {
        name: 'Jean',
        weight: 80,
        height: 169,
    },
    {
        name: 'Pierre',
        weight: 62,
        height: 168,
    },
    {
        name: 'Maxime',
        weight: 100,
        height: 172,
    },
    {
        name: 'Henri',
        weight: 79,
        height: 181,
    },
];

//IMC = masse/(taille au carré en mètre)

const computeIMC = (weight, height) => {
    if (!Number.isInteger(weight) || !Number.isInteger(height)) {
        console.error('There is a problem');
        return null;
    } else if (height <= 0 || weight <= 0) {
        return -1;
    }
    const heightInMeter = height / 100;
    return weight / (heightInMeter * heightInMeter);
};

const displayIMC = imc => {
    if (Number.isNaN(imc)) return null;
    let corpulence = null;
    if (imc <= 18.4) corpulence = 'maigre';
    else if (imc <= 24.9) corpulence = 'normale';
    else if (imc <= 29.9) corpulence = 'surpoids';
    else if (imc <= 34.9) corpulence = 'obésité modérée';
    else if (imc <= 39.9) corpulence = 'obésité sévère';
    else corpulence = 'obésité morbide';

    const response = `La personne a une corpulence ${corpulence}`;
    return response;
};
people.forEach((person, index) => {
    const imc = computeIMC(person.weight, person.height);
    const display = displayIMC(imc);
    console.log(`${person.name} => ${display}`);
});
