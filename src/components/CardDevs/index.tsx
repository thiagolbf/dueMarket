import { CardDevs } from "./style"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"


interface CardDevsProps {
    img: string
    name: string
    description: string
    linkedin: string
    github: string
}

export const CardDevsComponent = ({img, name, description, linkedin, github}: CardDevsProps) => {
    return <CardDevs>
        <div>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <h3>{name}</h3>
        </div>
        <div>
            <p>{description}</p>
            <div>
                <a target="_blank" href={linkedin}><FaLinkedin/></a>
                <a target="_blank" href={github}><BsGithub/></a>
            </div>
        </div>
    </CardDevs>
}