<?php

require_once __DIR__.'/vendor/autoload.php';


$exporter = new \Dwg\JsonExporter([
    new \Dwg\Crawler\EgwCrawler(),
    new \Dwg\Crawler\EbgWohnenCrawler(),
    new \Dwg\Crawler\WienSuedCrawler(),
]);

file_put_contents(__DIR__.'/export/data.json', $exporter->getJson());
