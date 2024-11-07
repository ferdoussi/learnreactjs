import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="footer-container">
        <div class="footer-about">
            <h3>À propos de nous</h3>
            <p>Votre entreprise fournit des solutions de qualité pour satisfaire les besoins de vos clients.</p>
        </div>
        <div class="footer-links">
            <h3>Liens utiles</h3>
            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Politique de confidentialité</a></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h3>Contactez-nous</h3>
            <p>Email : contact@votreentreprise.com</p>
            <p>Tél : +212 5 XX XX XX XX</p>
            <p>Adresse : Casablanca, Maroc</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 VotreEntreprise. Tous droits réservés.</p>
    </div>
</footer>
  );
}
export default Footer;
