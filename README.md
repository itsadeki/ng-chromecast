# ChromecastApp

Salut Janko, j'espère que tu vas bien 😊
Ceci est une application angular que j'ai fait permettant une connection basique avec une chromecast

Voici quelque information importante:

- J'appelle la librairie de google dans le index.html. Faudra voir si il y a une meilleur solution.
- J'ai installer une librairie de typage, @types/chromecast-caf-sender. Pour ca, il faut d'abord l'installer via npm:
  npm i -D @types/chromecast-caf-sender
  Ensuite il faut l'importer dans le fichier tsconfig.app.json pour qu'il soit pris en compte par angular à la compilation.
- J'ai suivi et trouver beaucoup d'information sur cette page: https://developers.google.com/cast/docs/web_sender/integrate
  On y découvre notament qu'il ont fait le choix de cacher le bouton de cast lorsque la librairie ne détecte aucune chromecast (ce qui est pas génant quand tu le sais et un peu chiant quand tu ne le sais pas...)
- J'ai utiliser l'event load pour être sur que la librairie est charger avant de l'utiliser sinon l'objet cast n'existe pas encore et le code ne fonctionne pas
- J'ai été obliger de rajouter le bouton avec un innerhtml (probablement le fait que angular ajoute des tags chelou à la generation... )

En esperant que cela t'aide 😉
