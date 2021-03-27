<?php


namespace Dwg;


class JsonExporter
{
    public function getJson(array $objects) : string
    {
        return json_encode($objects, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}