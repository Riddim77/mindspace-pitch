<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Server Entity
 *
 * @ApiResource
 * @ORM\Entity
 */
class Server
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
     * @var string Server name
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $name = '';

    /**
     * @var string Server IP
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $ip = '';

    /**
     * @var string Server description
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $description = '';

    /**
     * @var Website[] Websites on the server.
     *
     * @ORM\OneToMany(targetEntity="Website", mappedBy="server", cascade={"persist", "remove"})
     */
    public $websites;

    public function __construct()
    {
        $this->websites = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }
}
