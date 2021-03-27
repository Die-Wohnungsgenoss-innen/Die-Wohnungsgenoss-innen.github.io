<?php


namespace Dwg\Crawler;


use Dwg\RentalObject;
use Symfony\Component\Panther\DomCrawler\Crawler;

class EgwCrawler extends AbstractChromeCrawler implements CrawlerInterface
{
    private $url = 'https://www.egw.at/immobilien/bestands-wohnungen';

    public function getRentalObjects() : array
    {
        $client = $this->getClient();
        $client->request('GET', $this->url);


        $crawler = $client->getCrawler();


        $objects = [];

        $crawler->filter('.immobilien-container a')->each(function(Crawler $crawler) use(&$objects) {

            $object = new RentalObject();
            $object->setSource('egw');
            $object->setUrl($this->url);

            $object->setAddress($crawler->filter('.immobilien-adresse')->text());
            $object->setDeposit($crawler->filter('.immobilien-bestand4')->text());
            $object->setRent($crawler->filter('.immobilien-bestand5')->text());

            $object->setRooms((int)$crawler->filter('.immobilien-bestand3')->text());
            $object->setSize((int)$crawler->filter('.immobilien-bestand2')->text());

            $objects[] = $object;
        });


        return $objects;
    }
}