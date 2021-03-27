<?php


namespace Dwg\Crawler;


use Dwg\RentalObject;
use Symfony\Component\Panther\DomCrawler\Crawler;

class EbgWohnenCrawler extends AbstractCrawler implements CrawlerInterface
{
    private $url = 'https://www.ebg-wohnen.at/Suche.aspx?typ=1&zmin=1&zmax=5&art=$1$3&rg=$1&wa=$0$1';

    public function getRentalObjects() : array
    {
        $client = $this->getClient();
        $client->request('GET', $this->url);


        $crawler = $client->getCrawler();

        $objects = [];

        $crawler->filter('.teaser_wrapper')->each(function(Crawler $crawler) use(&$objects) {
        try {
                $object = new RentalObject();
                $object->setSource('www.ebg-wohnen.at');
                $object->setUrl($this->url);

                $object->setAddress($crawler->filter('.teasercenterdiv .address')->text());

                $object->setRooms((int)$crawler->filter('div[id$="_rooms"] .number')->text());
                $object->setSize((int)$crawler->filter('div[id$="_area"] .number')->text());

                $rentRaw = $crawler->filter('div[id$="_financesRental"] > div:nth-child(1)')->text();
                $depositRaw = $crawler->filter('div[id$="_financesRental"]  > div:nth-child(2)')->text();

                $object->setRent(str_replace(',- / Monat', '', $rentRaw));
                $object->setDeposit(str_replace(',- / EM', '', $depositRaw));

                $objects[] = $object;

            } catch (\InvalidArgumentException $e) {
                // continue on errors
                echo "Error\n";
            }
        });


        return $objects;
    }
}