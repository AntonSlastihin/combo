<?php
$today = date("d.m.Y");
$xml = simplexml_load_file("https://nationalbank.kz/rss/get_rates.cfm?fdate={$today}&switch=russian");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<style>
		table {
			font-size: 1.675rem;
		}
		table tr:nth-child(odd){
			background: #eee;
		}
	</style>
	<table>
		<?php foreach ($xml->xpath('/rates/item') as $value): ?>
			<tr>
				<td><?= $value->title ?></td>
				<td><?= sprintf('%f', $value->description) ?></td>
			</tr>
		<?php endforeach ?>
	</table>
</body>
</html>