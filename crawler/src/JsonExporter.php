<?php


namespace Dwg;


class JsonExporter
{
    /** @var array */
    private $crawlers;

    /**
     * JsonExporter constructor.
     */
    public function __construct(array $crawlers)
    {
        $this->crawlers = $crawlers;
    }

    public function getJson() : string
    {
        $objects = [];

        /** @var \Dwg\Crawler\CrawlerInterface $crawler */
        foreach ($this->crawlers as $crawler) {
            $objects = array_merge($objects, $crawler->getRentalObjects());
        }


        return json_encode($objects, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}