import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {
  recommendations = [
    {
      author: 'Jérôme Bodineau',
      role: 'Lead Tech Développeur dans la même équipe',
      content: `C’est avec plaisir que je vous adresse cette lettre de recommandation en faveur de Camille Cabrol, avec qui j'ai pu travailler pendant une année lorsqu'elle effectuait son alternance au sein de la société Tollsys. Durant cette période, elle a fait preuve de nombreuses qualités, tant sur le plan technique que fonctionnel, qui lui ont permis de contribuer pleinement aux projets.

Camille a démontré de solides capacités d'apprentissage et une grande curiosité intellectuelle. Sa motivation et son désir de progresser lui ont permis de prendre en main rapidement de nouvelles technologies et de s'adapter aux spécificités de l' environnement de développement. Elle a su aborder les problématiques techniques de manière méthodique et autonome, tout en cherchant constamment à améliorer ses compétences.

Outre ses compétences techniques, Camille s’est également distinguée par ses solides compétences fonctionnelles. Elle a su s'impliquer activement dans la gestion de projets, la planification et la rédaction de spécifications fonctionnelles. Sa capacité à organiser les tâches et à anticiper les besoins a été un véritable atout pour la bonne marche du projet. Elle a toujours veillé à ce que les objectifs soient clairs et atteignables.

Par ailleurs, Camille s’est intégrée avec enthousiasme au sein de l'équipe. Très sociable, toujours de bonne humeur et dotée d’une grande capacité à fédérer les autres, elle a contribué à améliorer la cohésion de l'équipe. Elle a régulièrement pris des initiatives pour renforcer l’esprit d’équipe, que ce soit par l’organisation de moments conviviaux ou en veillant à maintenir une communication fluide entre tous les membres du groupe.

Je recommande vivement Camille pour toute opportunité professionnelle qui se présentera à elle. Elle possède une combinaison rare de compétences techniques, fonctionnelles et humaines, qui fait d’elle une collaboratrice de grande valeur. Je suis convaincu qu’elle saura s’adapter à tout environnement et relever de nouveaux défis avec la même motivation et énergie qui l’ont caractérisée durant son alternance.

Je reste à votre disposition pour toute information complémentaire.`
    },
    {
      author: 'Astrid Waeles',
      role: 'Développeuse dans la même équipe',
      content: `Ça a été un réel plaisir d’avoir travaillé avec Camille pendant son alternance chez Tollsys.
        C’est une personne très agréable, souriante, motivée et impliquée dans son travail.
        Elle a su réaliser avec succès les diverses tâches qui lui ont été attribuées, toujours à l’écoute des plus expérimentés, dans une démarche d’amélioration continue.`
    },
    {
      author: 'Cyril Durand',
      role: 'Responsable de la DSI du Cirad',
      content: `J'ai eu l'occasion de superviser le travail de Camille Cabrol lors de son stage au Cirad du 01/02/2021 au 26/03/2021, dans le cadre de son BTS SIO (Services Informatique aux Organisations) au Lycée Jean Mermoz de Montpellier.

        Camille a intégré l'équipe de développement de la plateforme Means co-construite par le Cirad et l'lnrae. Cette plateforme à destination des chercheur.e.s permet de réaliser des évaluations environnementales sur les productions agricoles. Camille a participé activement à son développement en utilisant les technologies Java, Jsp, Javascript, Jquery et Spring. Les travaux réalisés par Camille ont permis d'enrichir significativement le module d'administration de la plateforme :
        - Maintenance corrective et évolutive du module d'administration.
        - Mise en œuvre de tableaux de bord et statistiques permettant le suivi d'activité des utilisateurs.

        Camille s'est parfaitement intégrée à l'équipe malgré le contexte sanitaire actuel et le recours massif au télétravail pendant cette période. Les acteurs de la plateforme Means et son tuteur de stage, Guilhem Rostain, ont très vite reconnu la capacité de Camille à mettre en application les compétences acquises lors de son cursus et son enthousiasme pour contribuer à l'enrichissement de la plateforme.

        Le travail très sérieux de Camille m'a permis de juger de ses qualités : rapidité d'adaptation à son environnement technologique, autonomie, réactivité. En outre, Camille s'est parfaitement adaptée à la méthodologie agile et aux outils collaboratifs tels que Teams et Jira.

        C'est autant pour ses qualités professionnelles que personnelles que je vous recommande Camille aujourd'hui. C'est donc sans réserve que j'appuie Camille Cabrol dans son parcours, je suis persuadé qu'un entretien vous confirmera ses diverses qualités.

        Je reste évidemment à votre disposition pour tout complément d'information que vous jugerez utile.`
    },
    {
      author: 'Régis Wattez',
      role: 'Président du club d\'Agde Basket',
      content: `Camille Cabrol, bénévole depuis le début de la saison 2021, au poste de community manager au sein du Agde Basket satisfait l'entièreté du bureau dirigeant. Son travail consistant à gérer une grande partie de la communication de l'ensemble du club sur nos réseaux sociaux. Elle avait pour objectif de développer et de promouvoir les pages lnstagram et Facebook du club mais également son site internet.

        Son professionnalisme et sa maitrise des outils informatiques (réseaux sociaux, charte graphique, montage photo vidéo) nous permettent de nous concentrer sur d'autre points en lui donnant notre entière confiance. Force de propositions, elle a su rendre attractif, vivant et esthétique nos moyens de communication. Novatrice et curieuse, Camille à crée du contenu percutant.

        Son dynamisme ainsi que son côté humain font de Camille une collègue très agréable avec qui travailler, que ce soit en présentiel ou à distance. Aujourd'hui nous faisons le nécessaire pour pouvoir engager Camille en service civique pour la saison 2022 afin qu'elle puisse continuer et pérenniser le travail qu'elle a commencé cette année.

        Pour toutes ces raisons, je ne peux que vous inciter à intégrer Mme Cabrol dans vos rangs.`
    }
  ];
}
