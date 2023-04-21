import React from 'react'
import { Col, Row, Card, Image, Dropdown, Form, Button, ListGroup, InputGroup, FormControl } from 'react-bootstrap';

import "../styles/textCard.css"

const TextCard = ({title, description, links}) => {
  return (
    <Card className="text-card p-0">
        <Card.Body>
            <h4 className="text-card-title">{title}</h4>
            <Dropdown.Divider style={{color: "grey"}}/>
            {description.map(item => 
              <p key={item.id} className="text-card-text">
                {item.link === "" && 
                  <p>{item.title}</p>
                }               
                {item.title === "" &&
                  <a className="text-card-link" href={item.link}>{item.link}</a>
                }
                {(item.link !== "" && item.title !== "") && 
                  <a className="text-card-link" href={item.link}>{item.title}</a>
                }
              </p>
            )}
        </Card.Body>
    </Card>
  )
}

export default TextCard