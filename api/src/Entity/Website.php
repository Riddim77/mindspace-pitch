<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Website Entity
 *
 * @ApiResource
 * @ORM\Entity
 */
class Website
{
    /**
     * @var int The entity Id
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string Website name
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $name = '';

    /**
     * @var string Website domain
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $domain = '';

    /**
     * @var int The ID in MIRA
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $miraId = '';

    /**
     * @var Server The server this website is hosted on.
     *
     * @ORM\ManyToOne(targetEntity="Server", inversedBy="websites")
     */
    public $server;

    public function getId(): int
    {
        return $this->id;
    }
}
