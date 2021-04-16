import React from "react"
import { IApartment } from '../../Interfaces'
import { formatDate, formatCurrency } from "../../utils"

export const Apartment =  ({address, image_url, url, created_at, deposit, size, rent, rooms}: IApartment) => {
    
    
    return (
    <div className="apartment">
        <div className="image-container">
            <img src={image_url} alt={address} />
        </div>
        <div className="main-content">
            <a href={url} target="_blank" rel="noreferrer">{address}</a>
            <ul>
                <li><span>Hinzugefügt am:</span> <span>{formatDate(created_at)}</span></li>
                <li><span>Eigenmittel: </span> <span>{formatCurrency(deposit)}</span></li>
            </ul>
        </div>
        <div className="size-content">
            <ul>
                <li>Fläche</li>
                <li>{size}m²</li>
            </ul>
            <ul>
                <li>Miete</li>
                <li>€ {rent}</li>
            </ul>
            <ul>
                <li>Zimmer</li>
                <li>{rooms}</li>
            </ul>
        </div>
    </div>)
}