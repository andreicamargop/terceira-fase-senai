import React from "react"
import styles from './Card.module.css'

const Card = ({nome,idade,cidade}) => {
  return (
    <div className={Styles.card}>
        <h3>{nome}</h3>
        <p>Idade: {idade}</p>
        <p>: {cidade}</p>
    </div>
  )
}

export default Card


