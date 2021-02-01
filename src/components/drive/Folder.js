import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {faFolder} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap'

export default function Folder({folder}) {
    return (
        <Button to={`/folder/${folder.id}`} variant="outline-dark" className = "w-100 text-truncate" as={Link} >
            <FontAwesomeIcon icon={faFolder} className="mr-2">
                {folder.name}
            </FontAwesomeIcon>
        </Button>
    )
}
