import React from 'react';
import './SynthProg.css';
import JourProg from '../jourprog/Jourprog';


const SynthProg = () => {
    return (
       <>
        <div className="progWrapper">
            <h2>Programmation</h2>
            <div className='progTools'>

            <h3>Filtrer par :</h3>

<label htmlFor="jour">Jour :</label>
<select name="jour" id="jour">

    <option value="Tout">Festival complet</option>
    <option value="Vendredi 30 juillet">Vendredi 30 juillet</option>
    <option value="Samedi 31 juillet">Samedi 31 juillet</option>
    <option value="Dimanche 1er août">Dimanche 1er août</option>   
</select>

<label htmlFor="scene">Scène :</label>
<select name="scene" id="scene">
            <option value="Tout">Toutes les scènes</option>
            <option value="Grande scène">Grande scène</option>
            <option value="Scène 2">Scène 2</option>
            <option value="Scène 3">Scène 3</option>
            <option value="Scène 4">Scène 4</option>
            <option value="Scène 5">Scène 5</option>
</select>


<label htmlFor="horaire">Horaire :</label>
<select name="horaire" id="horaire">
            <option value="Tout">Tous les horaires</option>
            <option value="15">15h</option>
            <option value="16">16h</option>
            <option value="17">17h</option>
            <option value="18">18h</option>
            <option value="19">19h</option>
            <option value="20">20h</option>
            <option value="21">21h</option>
            <option value="22">22h</option>
            <option value="23">23h</option>
            <option value="00">00h</option>
</select>

<label htmlFor="genre">Genre :</label>
<select name="genre" id="genre">
        <option value="Tout">Tous les genres</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Electro">Electro</option>
        <option value="Rap">Rap</option>
        <option value="Reggae">Reggae</option>
        <option value="Jazz">Jazz</option>
        <option value="Metal">Metal</option>
    </select>


            </div>
            <div className='joursWrapper'>
            <JourProg jour="Vendredi 30 juillet" />
            <JourProg jour="Samedi 31 juillet" />
            <JourProg jour="Dimanche 1er août" />




            </div>
            

        </div>
        </>
    );
};

export default SynthProg;