<?php
$files = glob("images/art_nu/*.{jpg,gif,png}", GLOB_BRACE);
return $files;
// ---
// function listFolderFiles($dir){
//     $ffs = scandir($dir);

//     unset($ffs[array_search('.', $ffs, true)]);
//     unset($ffs[array_search('..', $ffs, true)]);

//     if (count($ffs) < 1)
//         return;

//     echo '<ol>';
//     foreach($ffs as $ff){
        
//         echo '<li>'.$ff;
//         if(is_dir($dir.'/'.$ff)) listFolderFiles($dir.'/'.$ff);
//         echo '</li>';
//     }
//     echo '</ol>';
// }

// listFolderFiles('images');
?>