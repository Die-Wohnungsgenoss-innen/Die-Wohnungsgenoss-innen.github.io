<?php

require_once __DIR__.'/vendor/autoload.php';


$crawler = new \Dwg\Crawler\SozialbauCrawler();

print_r($crawler->getRentalObjects());