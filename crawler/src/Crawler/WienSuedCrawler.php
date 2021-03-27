<?php


namespace Dwg\Crawler;


use Dwg\RentalObject;
use Symfony\Component\Panther\DomCrawler\Crawler;

class WienSuedCrawler extends AbstractCrawler implements CrawlerInterface
{
    private $url = 'https://www.wiensued.at/wohnen/?dev=&city=Wien&search=&space-from=&space-to=&room-from=&room-to=&rent=1#search-results';

    public function getRentalObjects() : array
    {
        $client = $this->getClient();
        $client->request('GET', $this->url);


        $crawler = $client->getCrawler();

        $objects = [];

        $crawler->filter('.object-box')->each(function(Crawler $crawler) use(&$objects) {
        try {
                $object = new RentalObject();
                $object->setSource('www.wiensued.at');
                $object->setUrl($this->url);

                $object->setAddress($crawler->filter('.row > .col-md-12 > .address-and-link > .address')->text());

                $object->setRooms((int)$crawler->filter('.image-and-text .text > div:nth-child(4) > .txt')->text());
                $object->setSize((int)$crawler->filter('.image-and-text .text > div:nth-child(3) > .txt')->text());

                $object->setRent('N/A');
                $object->setDeposit('N/A');

                $objects[] = $object;

            } catch (\InvalidArgumentException $e) {
                // continue on errors
                echo "Error\n";
            }
        });


        return $objects;
    }
}