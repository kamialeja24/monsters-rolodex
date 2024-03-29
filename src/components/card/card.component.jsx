import { Component } from "react";
import './card.styles.css'

const Card = ({ monster: { name, email, id } }) => (
  <div className='card-container' key={id}>
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`Monster ${name}`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
  )


export default Card;