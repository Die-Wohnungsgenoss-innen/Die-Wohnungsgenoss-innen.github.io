<?php


namespace Dwg\Crawler;


use Dwg\RentalObject;

interface CrawlerInterface
{
    /**
     * @return array|RentalObject[]
     */
    public function getRentalObjects() : array;
}