<?php

require_once __DIR__.'/vendor/autoload.php';


/** @var \Dwg\Crawler\CrawlerInterface $crawlers */
$crawlers = [
    new \Dwg\Crawler\EgwCrawler(),
    new \Dwg\Crawler\EbgWohnenCrawler(),
];

$objects = [];

/** @var \Dwg\Crawler\CrawlerInterface $crawler */
foreach ($crawlers as $crawler) {
    $objects = array_merge($objects, $crawler->getRentalObjects());
}

$exporter = new \Dwg\JsonExporter();

file_put_contents(__DIR__.'/export/data.json', $exporter->getJson($objects));
