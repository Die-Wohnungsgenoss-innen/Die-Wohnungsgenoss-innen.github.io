<?php


namespace Dwg\Crawler;


use Dwg\RentalObject;
use Symfony\Component\Panther\DomCrawler\Crawler;

class SozialbauCrawler  extends AbstractCrawler implements CrawlerInterface
{
    private $url = 'https://www.sozialbau.at/angebot/sofort-verfuegbar/';

    public function getRentalObjects() : array
    {
        $client = $this->getClient();
        $client->request('GET', $this->url);


        $crawler = $client->getCrawler();

        $objects = [];

        $crawler->filter('form.mobile-table > table > tbody > tr')->each(function(Crawler $crawler) use(&$objects) {
            try {
                $object = new RentalObject();
                $object->setSource('sozialbau.at');
                $object->setUrl($this->url);

                $object->setAddress($crawler->filter('td:nth-child(1)')->text());

                $object->setRooms((int)$crawler->filter('td:nth-child(2)')->text());
                $object->setSize(0);
                $object->setRent($crawler->filter('td:nth-child(4)')->text());
                $object->setDeposit($crawler->filter('td:nth-child(3)')->text());

                $objects[] = $object;

            } catch (\InvalidArgumentException $e) {
                // continue on errors
                echo "Error\n";
            }
        });


        return $objects;
    }
}
