<!doctype html>
<html>
  <header>
    <link rel="stylesheet" type="text/css" href="stylesheets/main.css" />
</header>
  <body>
    <div id="conteneur">
      <h1>Les équipes de National League</h1>    
      <table border= "1">
      <tr>
        <td>ID</td>
        <td>Club</td>
      </tr>
      <?php
        require('ctrl.php');
        function ajouteCelluleHtml(String contenu, String id){
          echo "<tr>"
        }
        foreach(String contenu, String id){
          ajouteCelluleHtml(contenu, id);
        }
      ?>
      </table>
    </div>
  </body>
</html>