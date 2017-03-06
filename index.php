<?php
$dir    = 'img';
$source = scandir($dir);
$files = array();

foreach ($source as $value) {
	if (strpos($value, '.jpg')) $files[intval($value)] = $value;
}

ksort($files);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Test Javascript Gallery</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- link rel="shortcut icon" href="favicon.png" / -->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/script.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<?php
				foreach ($files as $key => $value) {
					echo '<div class="col-xs-4 col-md-3 col-lg-2 table-tn"><a class="tn" data-source="img/'.$value.'" data-index="'.$key.'" href="#"><img src="img/tn/'.$key.'_tn.jpg" alt=""></a></div>';
				}
			?>
		</div>
	</div>
	<div id="modal" class="hidden">
        <div id="modal_wrapper"></div>
        <div id="main_image_container"></div>
        <div id="modal_body">        	
        	<a id="control1" class="control_tn" href="#"><img src="img/tn/1_tn.jpg" alt="" width="100" height="100"></a>
        	<a id="control2" class="control_tn" href="#"><img src="img/tn/2_tn.jpg" alt="" width="100" height="100"></a>
        	<a id="control3" class="control_tn" href="#"><img class="selected" src="img/tn/3_tn.jpg" alt="" width="100" height="100"></a>
        	<a id="control4" class="control_tn" href="#"><img src="img/tn/4_tn.jpg" alt="" width="100" height="100"></a>
        	<a id="control5" class="control_tn" href="#"><img src="img/tn/5_tn.jpg" alt="" width="100" height="100"></a>
        </div>
        <div id="right">&#8680;</div>
        <div id="left">&#8678;</div>       
    </div>
</body>