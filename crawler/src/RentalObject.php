<?php


namespace Dwg;


class RentalObject implements \JsonSerializable
{

    /** @var string */
    private $url;

    /** @var string */
    private $source;

    /** @var int */
    private $size;

    /** @var int */
    private $rooms;

    /** @var int */
    private $deposit;

    /** @var int */
    private $rent;

    /** @var string */
    private $address;

    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     */
    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    /**
     * @return string
     */
    public function getSource(): string
    {
        return $this->source;
    }

    /**
     * @param string $source
     */
    public function setSource(string $source): void
    {
        $this->source = $source;
    }

    /**
     * @return int
     */
    public function getSize(): int
    {
        return $this->size;
    }

    /**
     * @param int $size
     */
    public function setSize(int $size): void
    {
        $this->size = $size;
    }

    /**
     * @return int
     */
    public function getRooms(): int
    {
        return $this->rooms;
    }

    /**
     * @param int $rooms
     */
    public function setRooms(int $rooms): void
    {
        $this->rooms = $rooms;
    }

    /**
     * @return string
     */
    public function getDeposit(): string
    {
        return $this->deposit;
    }

    /**
     * @param string $deposit
     */
    public function setDeposit(string $deposit): void
    {
        $this->deposit = $deposit;
    }

    /**
     * @return string
     */
    public function getAddress(): string
    {
        return $this->address;
    }

    /**
     * @param string $address
     */
    public function setAddress(string $address): void
    {
        $this->address = $address;
    }

    /**
     * @return string
     */
    public function getRent(): string
    {
        return $this->rent;
    }

    /**
     * @param string $rent
     */
    public function setRent(string $rent): void
    {
        $this->rent = $rent;
    }

    public function jsonSerialize()
    {
        return [
            "source" => $this->getSource(),
            "url" => $this->getUrl(),
            "size" => $this->getSize(),
            "rooms" => $this->getRooms(),
            "rent" => $this->getRent(),
            "deposit" => $this->getDeposit(),
            "address" => $this->getAddress(),
        ];
    }
}