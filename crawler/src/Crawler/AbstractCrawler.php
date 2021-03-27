<?php


namespace Dwg\Crawler;


use Symfony\Component\Panther\Client;

/**
 * Class AbstractGeckoCrawler
 *
 * @package Dwg\Crawler
 */
class AbstractCrawler
{
    /**
     * @return Client
     */
    protected function getClient() : Client
    {
        return Client::createChromeClient();
    }

}