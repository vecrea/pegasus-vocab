/* ============================================================================
   PEGASUS NOVUS — données de vocabulaire
   ----------------------------------------------------------------------------
   Champs (un objet = un mot) :
     n      : numéro du mot dans le manuel                 -> tri / référence
     caput  : chapitre (6, 7, 8…)
     sectie : pensum (ex. "8.4")                           -> filtre
     la     : mot latin (entrée, avec macrons)
     gen    : 2e forme du manuel (génitif / 1re pers. / formes adj.) + genre
     type   : subst · ww (verbe) · adj · adv · voorz · vnw · vw · telw · uitdr
     nl     : traduction NÉERLANDAISE du manuel (= la réponse à retenir)
     fr     : sens en FRANÇAIS (pont mnémotechnique)
     pont   : cognat(s) français qui aident à mémoriser ("" si pas de bon cognat)

   Source : photos du manuel (Caput 6–8). Le néerlandais fait foi : vérifie d'un
   coup d'œil dans l'onglet « Liste & tri ». Plage chargée : n° 514 → 688.
   ========================================================================== */

window.VOCAB = [

  /* ================= CAPUT 6 ================= */
  // 6.5
  { n:514, caput:6, sectie:"6.5", la:"asinus",        gen:"asinī",          type:"subst", nl:"de ezel",                      fr:"l'âne",                            pont:"âne (← asne); asinien" },
  { n:515, caput:6, sectie:"6.5", la:"aurum",         gen:"aurī",           type:"subst", nl:"het goud",                     fr:"l'or",                             pont:"or, aurifère, auréole, doré" },
  { n:516, caput:6, sectie:"6.5", la:"collis",        gen:"coll-is, m.",    type:"subst", nl:"de heuvel",                    fr:"la colline",                       pont:"colline (Lat. collis)" },
  { n:517, caput:6, sectie:"6.5", la:"hostis",        gen:"host-is, m.",    type:"subst", nl:"de vijand",                    fr:"l'ennemi",                         pont:"hostile, hostilité (≠ hospes 'hôte')" },
  { n:518, caput:6, sectie:"6.5", la:"lībertās",      gen:"lībertāt-is, v.",type:"subst", nl:"de vrijheid",                  fr:"la liberté",                       pont:"liberté, libérer (Fr. la liberté)" },
  { n:519, caput:6, sectie:"6.5", la:"vestis",        gen:"vest-is, v.",    type:"subst", nl:"de kleding",                   fr:"le vêtement, l'habit",             pont:"vêtement, vestiaire, investir" },
  { n:520, caput:6, sectie:"6.5", la:"animal",        gen:"animāl-is, o.",  type:"subst", nl:"het levend wezen; het dier",   fr:"l'animal; l'être vivant",          pont:"animal (Fr. l'animal)" },
  { n:521, caput:6, sectie:"6.5", la:"dubitāre",      gen:"dubitō",         type:"ww",    nl:"twijfelen; aarzelen",          fr:"douter; hésiter",                  pont:"douter, dubitatif, indubitable" },
  { n:522, caput:6, sectie:"6.5", la:"impōnere",      gen:"impōnō",         type:"ww",    nl:"plaatsen op; opleggen",        fr:"placer sur; imposer",              pont:"imposer, imposant (in + pōnere)" },
  { n:523, caput:6, sectie:"6.5", la:"ferre",         gen:"ferō",           type:"ww",    nl:"dragen; brengen",              fr:"porter; apporter",                 pont:"offrir, transférer; -fère (mammifère)" },
  { n:524, caput:6, sectie:"6.5", la:"afferre",       gen:"afferō",         type:"ww",    nl:"brengen",                      fr:"apporter",                         pont:"afférent (ad + ferre 'porter vers')" },
  { n:525, caput:6, sectie:"6.5", la:"auferre",       gen:"auferō",         type:"ww",    nl:"wegnemen; wegbrengen",         fr:"emporter, enlever",                pont:"(ab + ferre 'porter au loin')" },
  { n:526, caput:6, sectie:"6.5", la:"offerre",       gen:"offerō",         type:"ww",    nl:"aanbieden",                    fr:"offrir, présenter",                pont:"offrir, offrande, offre (Ndl. het offer)" },
  { n:527, caput:6, sectie:"6.5", la:"referre",       gen:"referō",         type:"ww",    nl:"terugbrengen; rapporteren",    fr:"rapporter; référer",               pont:"référer, référence, référendum" },
  { n:528, caput:6, sectie:"6.5", la:"trānsferre",    gen:"trānsferō",      type:"ww",    nl:"overbrengen",                  fr:"transférer, transporter",          pont:"transférer, transfert (trans + ferre)" },
  { n:529, caput:6, sectie:"6.5", la:"velle",         gen:"volō",           type:"ww",    nl:"willen",                       fr:"vouloir",                          pont:"vouloir, volonté, volontaire, velléité" },
  { n:530, caput:6, sectie:"6.5", la:"mālle",         gen:"mālō",           type:"ww",    nl:"liever willen",                fr:"préférer, aimer mieux",            pont:"(magis 'plus' + velle 'vouloir')" },
  { n:531, caput:6, sectie:"6.5", la:"nōlle",         gen:"nōlō",           type:"ww",    nl:"niet willen",                  fr:"ne pas vouloir",                   pont:"(nōn 'ne pas' + velle 'vouloir')" },
  { n:532, caput:6, sectie:"6.5", la:"mox",           gen:"(bijwoord)",     type:"adv",   nl:"weldra",                       fr:"bientôt",                          pont:"" },
  // 6.6
  { n:533, caput:6, sectie:"6.6", la:"dolus",         gen:"dolī",           type:"subst", nl:"de list",                      fr:"la ruse, la tromperie",            pont:"dol (fraude, en droit), dolosif" },
  { n:534, caput:6, sectie:"6.6", la:"calor",         gen:"calōr-is, m.",   type:"subst", nl:"de warmte",                    fr:"la chaleur",                       pont:"chaleur, calorie, calorifère" },
  { n:535, caput:6, sectie:"6.6", la:"avis",          gen:"av-is, v.",      type:"subst", nl:"de vogel",                     fr:"l'oiseau",                         pont:"aviation, avion, aviaire (≠ avus 'aïeul')" },
  { n:536, caput:6, sectie:"6.6", la:"carmen",        gen:"carmin-is, o.",  type:"subst", nl:"het lied; het gedicht",        fr:"le chant; le poème",               pont:"charme (← carmen 'chant magique')" },
  { n:537, caput:6, sectie:"6.6", la:"frīgus",        gen:"frīgor-is, o.",  type:"subst", nl:"de koude",                     fr:"le froid",                         pont:"frigo, frigidaire, réfrigérer, frileux" },
  { n:538, caput:6, sectie:"6.6", la:"mare",          gen:"mar-is, o.",     type:"subst", nl:"de zee",                       fr:"la mer",                           pont:"mer, marin, maritime, marée (Fr. la mer)" },
  { n:539, caput:6, sectie:"6.6", la:"moenia",        gen:"moen-ium, o. mv.",type:"subst",nl:"de stadsmuren",                fr:"les remparts, les murailles",      pont:"cf. munir, munitions (fortifications)" },
  { n:540, caput:6, sectie:"6.6", la:"aeternus",      gen:"~a, ~um",        type:"adj",   nl:"eeuwig",                       fr:"éternel",                          pont:"éternel, éternité" },
  { n:541, caput:6, sectie:"6.6", la:"expugnāre",     gen:"expugnō",        type:"ww",    nl:"veroveren",                    fr:"prendre d'assaut, conquérir",      pont:"inexpugnable (ex + pugnāre 'combattre')" },
  { n:542, caput:6, sectie:"6.6", la:"aliter",        gen:"(bijwoord)",     type:"adv",   nl:"anders",                       fr:"autrement",                        pont:"cf. alias, alibi, autre (Lat. alius)" },
  { n:543, caput:6, sectie:"6.6", la:"facile",        gen:"(bijwoord)",     type:"adv",   nl:"gemakkelijk",                  fr:"facilement",                       pont:"facile, facilement" },
  { n:544, caput:6, sectie:"6.6", la:"multum / multō",gen:"(bijwoord)",     type:"adv",   nl:"veel",                         fr:"beaucoup",                         pont:"multi-, multitude, multiple" },
  { n:545, caput:6, sectie:"6.6", la:"ac / atque",    gen:"(voegwoord)",    type:"vw",    nl:"en",                           fr:"et",                               pont:"" },
  // 6.10
  { n:546, caput:6, sectie:"6.10",la:"āla",           gen:"ālae",           type:"subst", nl:"de vleugel",                   fr:"l'aile",                           pont:"aile (← āla), aileron" },
  { n:547, caput:6, sectie:"6.10",la:"cōpiae",        gen:"cōpiārum",       type:"subst", nl:"de troepen",                   fr:"les troupes",                      pont:"cf. copieux (abondance) ; au pl. : troupes" },
  { n:548, caput:6, sectie:"6.10",la:"custōs",        gen:"custōd-is, m.",  type:"subst", nl:"de bewaker",                   fr:"le gardien",                       pont:"custode; cf. custōdīre (garder)" },
  { n:549, caput:6, sectie:"6.10",la:"arx",           gen:"arc-is, v.",     type:"subst", nl:"de burcht",                    fr:"la citadelle, le fort",            pont:"" },
  { n:550, caput:6, sectie:"6.10",la:"ēgregius",      gen:"~a, ~um",        type:"adj",   nl:"buitengewoon",                 fr:"remarquable, exceptionnel",        pont:"« hors du troupeau » (ex grege) → sort du lot" },
  { n:551, caput:6, sectie:"6.10",la:"secundus",      gen:"~a, ~um",        type:"adj",   nl:"tweede; gunstig",              fr:"deuxième; favorable",              pont:"second, seconde (Ndl. de seconde)" },
  { n:552, caput:6, sectie:"6.10",la:"tacitus",       gen:"~a, ~um",        type:"adj",   nl:"zwijgend",                     fr:"silencieux, tacite",               pont:"tacite, taciturne (cf. Tacite)" },
  { n:553, caput:6, sectie:"6.10",la:"cēdere",        gen:"cēdō",           type:"ww",    nl:"gaan; wijken",                 fr:"aller; céder, reculer",            pont:"céder, cession; -céder (succéder)" },
  { n:554, caput:6, sectie:"6.10",la:"discēdere",     gen:"discēdō",        type:"ww",    nl:"uiteengaan; weggaan",          fr:"se séparer, s'en aller",           pont:"(dis- 'à part' + cēdere) cf. décéder" },
  { n:555, caput:6, sectie:"6.10",la:"colere",        gen:"colō",           type:"ww",    nl:"bewerken; bewonen; vereren",   fr:"cultiver; habiter; honorer",       pont:"cultiver, culture, colon, culte" },
  { n:556, caput:6, sectie:"6.10",la:"custōdīre",     gen:"custōdiō",       type:"ww",    nl:"bewaken",                      fr:"garder, surveiller",               pont:"custode; cf. custōs (gardien)" },
  { n:557, caput:6, sectie:"6.10",la:"interim",       gen:"(bijwoord)",     type:"adv",   nl:"intussen",                     fr:"entre-temps, pendant ce temps",    pont:"intérim, intérimaire (Lat. interim)" },

  /* ================= CAPUT 7 ================= */
  // 7.2
  { n:558, caput:7, sectie:"7.2", la:"animus",        gen:"animī",          type:"subst", nl:"de geest; het gemoed; de moed",fr:"l'esprit; le cœur; le courage",    pont:"animé, unanime, magnanime (Lat. animus)" },
  { n:559, caput:7, sectie:"7.2", la:"medicus",       gen:"medicī",         type:"subst", nl:"de arts",                      fr:"le médecin",                       pont:"médecin, médical, médicament" },
  { n:560, caput:7, sectie:"7.2", la:"fera",          gen:"ferae",          type:"subst", nl:"het wilde dier",               fr:"la bête sauvage, le fauve",        pont:"féroce, fauve (Lat. fera)" },
  { n:561, caput:7, sectie:"7.2", la:"fuga",          gen:"fugae",          type:"subst", nl:"de vlucht",                    fr:"la fuite",                         pont:"fugue, fugitif, refuge, fuir" },
  { n:562, caput:7, sectie:"7.2", la:"lingua",        gen:"linguae",        type:"subst", nl:"de tong; de taal",             fr:"la langue",                        pont:"langue, linguistique, bilingue (Fr. la langue)" },
  { n:563, caput:7, sectie:"7.2", la:"vulnus",        gen:"vulner-is, o.",  type:"subst", nl:"de wonde",                     fr:"la blessure, la plaie",            pont:"vulnérable, vulnérer (≠ vultus 'visage')" },
  { n:564, caput:7, sectie:"7.2", la:"cūnctī",        gen:"~ae, ~a",        type:"adj",   nl:"alle",                         fr:"tous (ensemble)",                  pont:"" },
  { n:565, caput:7, sectie:"7.2", la:"lentus",        gen:"~a, ~um",        type:"adj",   nl:"traag",                        fr:"lent, mou; souple",                pont:"lent, lentement, ralentir (Fr. lent)" },
  { n:566, caput:7, sectie:"7.2", la:"quiētus",       gen:"~a, ~um",        type:"adj",   nl:"rustig",                       fr:"calme, tranquille",                pont:"quiet, quiétude, inquiet, quitte" },
  { n:567, caput:7, sectie:"7.2", la:"saevus",        gen:"~a, ~um",        type:"adj",   nl:"woest; wreed",                 fr:"farouche, cruel, féroce",          pont:"cf. sévices, sévir (cruauté)" },
  { n:568, caput:7, sectie:"7.2", la:"movēre",        gen:"moveō",          type:"ww",    nl:"bewegen; beïnvloeden",         fr:"mouvoir, déplacer; émouvoir",      pont:"mouvoir, mouvement, mobile (Eng. movie)" },
  { n:569, caput:7, sectie:"7.2", la:"accēdere",      gen:"accēdō",         type:"ww",    nl:"naderen",                      fr:"s'approcher, accéder",             pont:"accéder, accès (ad + cēdere)" },
  { n:570, caput:7, sectie:"7.2", la:"comprehendere", gen:"comprehendō",    type:"ww",    nl:"grijpen",                      fr:"saisir, attraper; comprendre",     pont:"comprendre, appréhender (Fr. comprendre)" },
  { n:571, caput:7, sectie:"7.2", la:"dēdūcere",      gen:"dēdūcō",         type:"ww",    nl:"naar beneden brengen; wegbrengen",fr:"faire descendre; déduire",      pont:"déduire, déduction (dē + dūcere 'conduire')" },
  { n:572, caput:7, sectie:"7.2", la:"dīmittere",     gen:"dīmittō",        type:"ww",    nl:"wegzenden; laten gaan",        fr:"renvoyer, congédier; laisser partir",pont:"(dis- + mittere 'envoyer') cf. démettre" },
  { n:573, caput:7, sectie:"7.2", la:"ipse",          gen:"ipsa, ipsum; ipsīus",type:"vnw",nl:"zelf; precies",               fr:"lui-même; précisément",            pont:"cf. ipso facto, solipsisme" },
  { n:574, caput:7, sectie:"7.2", la:"is, ea, id",    gen:"(aanwijz. vnw.)",type:"vnw",   nl:"die, dat",                     fr:"celui-ci/là; ce",                  pont:"cf. id (ça), idem" },
  { n:575, caput:7, sectie:"7.2", la:"procul",        gen:"(bijwoord)",     type:"adv",   nl:"ver; van ver",                 fr:"loin; au loin",                    pont:"" },
  { n:576, caput:7, sectie:"7.2", la:"ā / ab (+ abl.)",gen:"(voorzetsel)",  type:"voorz", nl:"van; door",                    fr:"de, depuis; par",                  pont:"préfixe a-/ab- (absent, abstraire)" },
  // 7.4
  { n:577, caput:7, sectie:"7.4", la:"ventus",        gen:"ventī",          type:"subst", nl:"de wind",                      fr:"le vent",                          pont:"vent, ventilateur, éventail (Fr. le vent)" },
  { n:578, caput:7, sectie:"7.4", la:"exemplum",      gen:"exemplī",        type:"subst", nl:"het voorbeeld",                fr:"l'exemple, le modèle",             pont:"exemple, exemplaire (Fr. l'exemple)" },
  { n:579, caput:7, sectie:"7.4", la:"tempestās",     gen:"tempestāt-is, v.",type:"subst",nl:"de tijd; de storm",            fr:"le temps (qu'il fait); la tempête",pont:"tempête, intempéries (Fr. la tempête)" },
  { n:580, caput:7, sectie:"7.4", la:"lītus",         gen:"lītor-is, o.",   type:"subst", nl:"de kust",                      fr:"le rivage, la côte",               pont:"littoral (Lat. litus)" },
  { n:581, caput:7, sectie:"7.4", la:"cōgere",        gen:"cōgō",           type:"ww",    nl:"bijeenbrengen; dwingen",       fr:"rassembler; forcer, contraindre",  pont:"(co- + agere 'pousser ensemble') ≠ cōgitāre" },
  { n:582, caput:7, sectie:"7.4", la:"frangere",      gen:"frangō",         type:"ww",    nl:"breken",                       fr:"briser, casser, rompre",           pont:"fraction, fragile, fracture, enfreindre" },
  { n:583, caput:7, sectie:"7.4", la:"reddere",       gen:"reddō",          type:"ww",    nl:"teruggeven; maken (tot)",      fr:"rendre, restituer",                pont:"rendre, reddition (Lat. reddere)" },
  { n:584, caput:7, sectie:"7.4", la:"excipere",      gen:"excipiō",        type:"ww",    nl:"uitnemen; opvangen",           fr:"retirer; recueillir; excepter",    pont:"excepter, exception (ex + capere 'prendre')" },
  { n:585, caput:7, sectie:"7.4", la:"nec / neque",   gen:"(voegwoord)",    type:"vw",    nl:"en niet; ook niet",            fr:"et ne… pas; ni",                   pont:"" },
  { n:586, caput:7, sectie:"7.4", la:"nec … nec / neque … neque",gen:"(voegwoord)",type:"vw",nl:"noch … noch",               fr:"ni … ni",                          pont:"" },
  // 7.5
  { n:587, caput:7, sectie:"7.5", la:"digitus",       gen:"digitī",         type:"subst", nl:"de vinger",                    fr:"le doigt",                         pont:"doigt, digital, digitale (Lat. digitus)" },
  { n:588, caput:7, sectie:"7.5", la:"dextra",        gen:"dextrae",        type:"subst", nl:"de rechterhand",               fr:"la main droite",                   pont:"dextre, dextérité (≠ dexter adj.)" },
  { n:589, caput:7, sectie:"7.5", la:"scūtum",        gen:"scūtī",          type:"subst", nl:"het schild",                   fr:"le bouclier",                      pont:"écu (← scūtum), écusson, écuyer" },
  { n:590, caput:7, sectie:"7.5", la:"pellis",        gen:"pell-is, v.",    type:"subst", nl:"de huid",                      fr:"la peau",                          pont:"peau, pelisse, pellicule (Ndl. de pels)" },
  { n:591, caput:7, sectie:"7.5", la:"regiō",         gen:"regiōn-is, v.",  type:"subst", nl:"de streek",                    fr:"la région, la contrée",            pont:"région, régional (Fr. la région; ≠ rēgius)" },
  { n:592, caput:7, sectie:"7.5", la:"pecus",         gen:"pecor-is, o.",   type:"subst", nl:"het vee",                      fr:"le bétail, le troupeau",           pont:"cf. pécuniaire (≠ pectus 'poitrine')" },
  { n:593, caput:7, sectie:"7.5", la:"vulnerāre",     gen:"vulnerō",        type:"ww",    nl:"verwonden",                    fr:"blesser",                          pont:"vulnérer, invulnérable (Lat. vulnus)" },
  { n:594, caput:7, sectie:"7.5", la:"gerere",        gen:"gerō",           type:"ww",    nl:"dragen; voeren",               fr:"porter; faire, mener (la guerre)", pont:"gérer, gestion, geste (Lat. gerere)" },
  { n:595, caput:7, sectie:"7.5", la:"induere",       gen:"induō",          type:"ww",    nl:"aantrekken; bekleden met",     fr:"revêtir, mettre (un vêtement)",    pont:"(≠ induire = in + dūcere)" },
  { n:596, caput:7, sectie:"7.5", la:"trahere",       gen:"trahō",          type:"ww",    nl:"trekken; rekken",              fr:"tirer, traîner",                   pont:"traction, tracteur, abstrait (Ndl. de tractor)" },
  { n:597, caput:7, sectie:"7.5", la:"fīnīre",        gen:"fīniō",          type:"ww",    nl:"beëindigen; begrenzen",        fr:"finir, terminer; limiter",         pont:"finir, final, finition (Lat. finis)" },
  { n:598, caput:7, sectie:"7.5", la:"vidērī",        gen:"videor",         type:"ww",    nl:"schijnen",                     fr:"sembler, paraître; être vu",       pont:"passif de vidēre 'voir' → être vu / sembler" },
  { n:599, caput:7, sectie:"7.5", la:"quia",          gen:"(voegwoord)",    type:"vw",    nl:"omdat",                        fr:"parce que",                        pont:"" },
  { n:600, caput:7, sectie:"7.5", la:"ut",            gen:"(voegwoord)",    type:"vw",    nl:"zoals",                        fr:"comme, tel que",                   pont:"" },

  // 7.6
  { n:601, caput:7, sectie:"7.6", la:"īnferus",       gen:"~a, ~um",        type:"adj",   nl:"laaggelegen",                  fr:"bas, situé en bas",                pont:"inférieur, infernal" },
  { n:602, caput:7, sectie:"7.6", la:"appropinquāre", gen:"appropinquō",    type:"ww",    nl:"naderen",                      fr:"s'approcher",                      pont:"approcher, proche, proximité" },
  { n:603, caput:7, sectie:"7.6", la:"spērāre",       gen:"spērō",          type:"ww",    nl:"hopen op",                     fr:"espérer",                          pont:"espérer, espoir" },
  { n:604, caput:7, sectie:"7.6", la:"dēspērāre",     gen:"dēspērō",        type:"ww",    nl:"wanhopen",                     fr:"désespérer",                       pont:"désespérer, désespoir" },
  { n:605, caput:7, sectie:"7.6", la:"obsidēre",      gen:"obsideō",        type:"ww",    nl:"belegeren; bezet houden",      fr:"assiéger; occuper",                pont:"obséder, obsession ; cf. siège" },
  { n:606, caput:7, sectie:"7.6", la:"prōmittere",    gen:"prōmittō",       type:"ww",    nl:"beloven",                      fr:"promettre",                        pont:"promettre, promesse (Fr. promettre)" },
  { n:607, caput:7, sectie:"7.6", la:"scrībere",      gen:"scrībō",         type:"ww",    nl:"schrijven",                    fr:"écrire",                           pont:"écrire, scribe, inscription, script" },
  { n:608, caput:7, sectie:"7.6", la:"ōlim",          gen:"(bijwoord)",     type:"adv",   nl:"eens",                         fr:"autrefois, jadis; un jour",        pont:"" },
  // 7.9
  { n:609, caput:7, sectie:"7.9", la:"victor",        gen:"victōr-is, m.",  type:"subst", nl:"de overwinnaar",               fr:"le vainqueur",                     pont:"victoire, victorieux, vainqueur" },
  { n:610, caput:7, sectie:"7.9", la:"alter",         gen:"altera, alterum",type:"vnw",   nl:"de andere",                    fr:"l'autre (de deux)",                pont:"alternative, alterner, alter ego" },
  { n:611, caput:7, sectie:"7.9", la:"alter … alter", gen:"",               type:"uitdr", nl:"de ene … de andere",           fr:"l'un … l'autre",                   pont:"alterner" },
  { n:612, caput:7, sectie:"7.9", la:"plūrimī",       gen:"~ae, ~a",        type:"adj",   nl:"zeer veel",                    fr:"très nombreux, la plupart",        pont:"pluriel, pluralité, la plupart" },
  { n:613, caput:7, sectie:"7.9", la:"tantus",        gen:"~a, ~um",        type:"adj",   nl:"zo groot",                     fr:"si grand, aussi grand",            pont:"tant, autant" },
  { n:614, caput:7, sectie:"7.9", la:"vexāre",        gen:"vexō",           type:"ww",    nl:"kwellen",                      fr:"tourmenter, harceler",             pont:"vexer, vexation" },
  { n:615, caput:7, sectie:"7.9", la:"exercēre",      gen:"exerceō",        type:"ww",    nl:"oefenen",                      fr:"exercer, entraîner",               pont:"exercer, exercice (Fr. l'exercice)" },
  // 7.10
  { n:616, caput:7, sectie:"7.10",la:"initium",       gen:"initiī",         type:"subst", nl:"het begin",                    fr:"le début, le commencement",        pont:"initial, initier, initiative" },
  { n:617, caput:7, sectie:"7.10",la:"iūdicium",      gen:"iūdiciī",        type:"subst", nl:"het oordeel; het proces",      fr:"le jugement; le procès",           pont:"judiciaire, juge, jugement" },

  /* ================= CAPUT 8 ================= */
  // 8.2
  { n:618, caput:8, sectie:"8.2", la:"rēgnum",        gen:"rēgnī",          type:"subst", nl:"het koninkrijk; de heerschappij", fr:"le royaume; le pouvoir royal",  pont:"règne, régner" },
  { n:619, caput:8, sectie:"8.2", la:"signum",        gen:"signī",          type:"subst", nl:"het teken",                    fr:"le signe; l'étendard",             pont:"signe, signal, insigne" },
  { n:620, caput:8, sectie:"8.2", la:"gēns",          gen:"gentis, v.",     type:"subst", nl:"het geslacht; de volksstam",   fr:"le clan, la famille; le peuple",   pont:"gent, gens, gentilé" },
  { n:621, caput:8, sectie:"8.2", la:"sēdēs",         gen:"sēd-is, v.",     type:"subst", nl:"de zitplaats; de verblijfplaats", fr:"le siège; la demeure",          pont:"siège, sédentaire, résidence" },
  { n:622, caput:8, sectie:"8.2", la:"certāmen",      gen:"certāmin-is, o.",type:"subst", nl:"de wedstrijd",                 fr:"le combat; le concours",           pont:"cf. certāre (lutter); concurrence" },
  { n:623, caput:8, sectie:"8.2", la:"pectus",        gen:"pector-is, o.",  type:"subst", nl:"de borst; het hart; het verstand", fr:"la poitrine; le cœur; l'esprit", pont:"pectoral, pectoraux (≠ pecus 'bétail')" },
  { n:629, caput:8, sectie:"8.2", la:"singulī",       gen:"~ae, ~a",        type:"telw",  nl:"elk één; afzonderlijk",        fr:"chacun un; un par un",             pont:"singulier, single (Fr. singulier)" },
  { n:630, caput:8, sectie:"8.2", la:"dulcis",        gen:"~, dulce; dulc-is",type:"adj", nl:"zoet; lief",                   fr:"doux; agréable",                   pont:"doux/douce, édulcorer, Dulcinée" },
  { n:631, caput:8, sectie:"8.2", la:"tot",           gen:"(onverbuigb. adj.)",type:"adj",nl:"zoveel",                       fr:"tant de, autant de",               pont:"" },
  { n:632, caput:8, sectie:"8.2", la:"certāre",       gen:"certō",          type:"ww",    nl:"strijden",                     fr:"lutter, rivaliser, combattre",     pont:"cf. concurrence, concertation" },
  { n:633, caput:8, sectie:"8.2", la:"pervenīre",     gen:"perveniō",       type:"ww",    nl:"aankomen",                     fr:"parvenir, arriver",                pont:"parvenir (per + venīre), avènement" },
  { n:634, caput:8, sectie:"8.2", la:"simul",         gen:"(bijwoord)",     type:"adv",   nl:"tegelijk",                     fr:"en même temps, ensemble",          pont:"simultané, simultanément" },
  { n:635, caput:8, sectie:"8.2", la:"quamquam",      gen:"(voegwoord)",    type:"vw",    nl:"hoewel",                       fr:"quoique, bien que",                pont:"" },
  // 8.3
  { n:650, caput:8, sectie:"8.3", la:"aliēnus",       gen:"~a, ~um",        type:"adj",   nl:"van een ander; vreemd",        fr:"d'autrui; étranger",               pont:"aliéné, aliéner (Eng. alien)" },
  { n:651, caput:8, sectie:"8.3", la:"dexter",        gen:"dextra, dextrum",type:"adj",   nl:"rechts",                       fr:"(à) droite; habile",               pont:"dextre, dextérité, ambidextre" },
  { n:652, caput:8, sectie:"8.3", la:"rēgius",        gen:"~a, ~um",        type:"adj",   nl:"koninklijk",                   fr:"royal",                            pont:"royal, régalien (Lat. rēx; ≠ regiō)" },
  { n:653, caput:8, sectie:"8.3", la:"familiāris",    gen:"~, familiāre; familiār-is",type:"adj",nl:"van het gezin; goede bekende", fr:"de la famille; familier, intime", pont:"familial, familier, famille" },
  { n:654, caput:8, sectie:"8.3", la:"turpis",        gen:"~, turpe; turp-is",type:"adj", nl:"lelijk; schandelijk",          fr:"laid; honteux, infâme",            pont:"turpitude" },
  { n:655, caput:8, sectie:"8.3", la:"alere",         gen:"alō",            type:"ww",    nl:"voeden",                       fr:"nourrir",                          pont:"aliment, alimenter (Lat. alere)" },
  { n:656, caput:8, sectie:"8.3", la:"committere",    gen:"committō",       type:"ww",    nl:"begaan; toevertrouwen; beginnen", fr:"commettre; confier; engager",   pont:"commettre, commission, comité" },
  { n:657, caput:8, sectie:"8.3", la:"fallere",       gen:"fallō",          type:"ww",    nl:"misleiden; ontgaan",           fr:"tromper; échapper à",              pont:"faillir, faux, fallacieux (Ndl. vals)" },
  { n:658, caput:8, sectie:"8.3", la:"pellere",       gen:"pellō",          type:"ww",    nl:"verdrijven",                   fr:"chasser, repousser",               pont:"expulser, propulser, répulsion" },
  { n:659, caput:8, sectie:"8.3", la:"statuere",      gen:"statuō",         type:"ww",    nl:"plaatsen; vaststellen; beslissen", fr:"placer; établir; décider",     pont:"statuer, statut, statue (≠ stāre)" },
  { n:660, caput:8, sectie:"8.3", la:"trādere",       gen:"trādō",          type:"ww",    nl:"overhandigen; toevertrouwen",  fr:"remettre; livrer; transmettre",    pont:"tradition, trahir, traître (Ndl. traditie)" },
  // 8.4
  { n:661, caput:8, sectie:"8.4", la:"īnferī",        gen:"īnferōrum (mv.)",type:"subst", nl:"de onderwereld",               fr:"les Enfers; les morts",            pont:"inférieur, infernal (les Enfers)" },
  { n:662, caput:8, sectie:"8.4", la:"marītus",       gen:"marītī, m.",     type:"subst", nl:"de echtgenoot",                fr:"le mari, l'époux",                 pont:"mari, marital (Fr. le mari)" },
  { n:663, caput:8, sectie:"8.4", la:"morbus",        gen:"morbī, m.",      type:"subst", nl:"de ziekte",                    fr:"la maladie",                       pont:"morbide, morbidité" },
  { n:664, caput:8, sectie:"8.4", la:"mēnsis",        gen:"mēns-is, m.",    type:"subst", nl:"de maand",                     fr:"le mois",                          pont:"mensuel, bimensuel, semestre" },
  { n:665, caput:8, sectie:"8.4", la:"aetās",         gen:"aetāt-is, v.",   type:"subst", nl:"de leeftijd; de periode",      fr:"l'âge; l'époque",                  pont:"âge, âgé (≠ aestās 'été')" },
  { n:666, caput:8, sectie:"8.4", la:"suādēre",       gen:"suādeō",         type:"ww",    nl:"aanraden",                     fr:"conseiller, recommander",          pont:"persuader (per + suādēre), suave" },
  { n:667, caput:8, sectie:"8.4", la:"carpere",       gen:"carpō",          type:"ww",    nl:"plukken",                      fr:"cueillir; saisir",                 pont:"carpe diem ('cueille le jour')" },
  { n:668, caput:8, sectie:"8.4", la:"claudere",      gen:"claudō",         type:"ww",    nl:"sluiten",                      fr:"fermer; clore",                    pont:"clore, clôture, clause, exclure (Ndl. claustrofobie)" },
  { n:669, caput:8, sectie:"8.4", la:"crēscere",      gen:"crēscō",         type:"ww",    nl:"groeien",                      fr:"croître, grandir",                 pont:"croître, croissance, crescendo" },
  { n:670, caput:8, sectie:"8.4", la:"occīdere",      gen:"occīdō",         type:"ww",    nl:"doden",                        fr:"tuer",                             pont:"occire ; -cide (homicide, suicide)" },
  { n:671, caput:8, sectie:"8.4", la:"prōcēdere",     gen:"prōcēdō",        type:"ww",    nl:"vooruitgaan",                  fr:"avancer, progresser",              pont:"procéder, procession, processus" },
  { n:672, caput:8, sectie:"8.4", la:"tangere",       gen:"tangō",          type:"ww",    nl:"aanraken; bereiken; treffen",  fr:"toucher; atteindre",               pont:"tangible, tangente, contact" },
  { n:673, caput:8, sectie:"8.4", la:"prōdesse",      gen:"prōsum",         type:"ww",    nl:"nuttig zijn",                  fr:"être utile, profiter",             pont:"prōd- (pro 'pour') + esse 'être'" },
  { n:674, caput:8, sectie:"8.4", la:"perīre",        gen:"pereō",          type:"ww",    nl:"ten onder gaan",               fr:"périr, disparaître",               pont:"périr, périssable (per + īre 'aller')" },
  { n:675, caput:8, sectie:"8.4", la:"quandō?",       gen:"(bijwoord)",     type:"adv",   nl:"wanneer?",                     fr:"quand ?",                          pont:"quand (Fr. quand ?)" },
  { n:676, caput:8, sectie:"8.4", la:"rūrsus",        gen:"(bijwoord)",     type:"adv",   nl:"opnieuw",                      fr:"de nouveau, encore",               pont:"" },
  // 8.7
  { n:677, caput:8, sectie:"8.7", la:"somnium",       gen:"somniī",         type:"subst", nl:"de droom",                     fr:"le rêve, le songe",                pont:"somnambule, insomnie, somnoler" },
  { n:678, caput:8, sectie:"8.7", la:"imber",         gen:"imbr-is, m.",    type:"subst", nl:"de regenbui",                  fr:"l'averse, la pluie battante",      pont:"" },
  { n:679, caput:8, sectie:"8.7", la:"tālis",         gen:"~, tāle; tāl-is",type:"adj",   nl:"zodanig",                      fr:"tel, de telle sorte",              pont:"tel, telle (Lat. tālis)" },
  { n:680, caput:8, sectie:"8.7", la:"īdem",          gen:"eadem, idem; eiusdem",type:"vnw",nl:"dezelfde, hetzelfde",         fr:"le même",                          pont:"identique, identité, idem" },
  { n:681, caput:8, sectie:"8.7", la:"haud",          gen:"(bijwoord)",     type:"adv",   nl:"helemaal niet",                fr:"pas du tout, nullement",           pont:"" },
  { n:682, caput:8, sectie:"8.7", la:"inde",          gen:"(bijwoord)",     type:"adv",   nl:"vandaar; daarna; daarom",      fr:"de là; ensuite; c'est pourquoi",   pont:"" },
  { n:683, caput:8, sectie:"8.7", la:"plērumque",     gen:"(bijwoord)",     type:"adv",   nl:"meestal",                      fr:"le plus souvent, généralement",    pont:"cf. plūrimī (le plus souvent)" },
  // 8.8
  { n:684, caput:8, sectie:"8.8", la:"hic",           gen:"haec, hoc; huius",type:"vnw",  nl:"deze, dit",                    fr:"celui-ci, ce; ceci",               pont:"-ci (celui-ci, ici)" },
  { n:685, caput:8, sectie:"8.8", la:"iste",          gen:"ista, istud; istīus",type:"vnw",nl:"die, dat",                    fr:"celui-là, ce; cela",               pont:"" },
  { n:686, caput:8, sectie:"8.8", la:"ille",          gen:"illa, illud; illīus",type:"vnw",nl:"die, dat; hij, zij",          fr:"celui-là; il, elle",               pont:"il, elle, le, la (Fr. ← ille/illa)" },
  { n:687, caput:8, sectie:"8.8", la:"epistula",      gen:"epistulae, v.",  type:"subst", nl:"de brief",                     fr:"la lettre, l'épître",              pont:"épître, épistolaire" },
  { n:688, caput:8, sectie:"8.8", la:"praetereā",     gen:"(bijwoord)",     type:"adv",   nl:"bovendien",                    fr:"en outre, de plus",                pont:"praeter 'au-delà de' + eā" },

];
