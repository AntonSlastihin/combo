<?php
$xmlDoc = simplexml_load_file("https://nationalbank.kz/rss/get_rates.cfm?fdate={$_GET['date']}&switch=russian");
echo json_encode($xmlDoc);