import React from "react";
import "./Map.css";

export default function () {
    return (
        <a name="map">
            <section className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13784.143683833783!2d-97.74447492180293!3d30.264557708839284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a77f1f9df9%3A0x341f677030bdc458!2zMTk3IEUgNnRoIFN0LCBBdXN0aW4sIFRYIDc4NzAxLCDQodCo0JA!5e0!3m2!1sru!2s!4v1670234005313!5m2!1sru!2s"
                    loading="lazy"></iframe>
            </section>
        </a>
    );
}