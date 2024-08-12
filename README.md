# Aplikacija za usvajanje kućnih ljubimaca

Dobrodošli u aplikaciju udomiMe! Osnovna namena ove aplikacije je omogućavanje korisnicima da usvoje životinje koje nemaju dom.

## Sadržaj
- [Funkcionalnosti](#funkcionalnosti)
- [Instalacija](#instalacija)
- [Korišćenje](#korišćenje)
- [Tehničke informacije](#tehničke-informacije)
- [Kontakt](#kontakt)

## **Funkcionalnosti**
- **Navigacioni Meni:** Omogućava korisnicima jednostavnu navigaciju kroz različite delove aplikacije
- **Spisak Ljubimaca:** Pregled ljubimaca dostupnih za usvajanje
- **Filtriranje Ljubimaca:** Filtriranje dostupnih ljubimaca po tipu (pas,macka ili zec)
- **Informacije o ljubimcu:** Prikaz detaljnih informacija o odabranom ljubimcu
- **Sekcija za Zanimljivosti:** Generisanje zanimljivosti o psima
- **Galerija Usvojenih Ljubimaca:** Prikaz slika usvojenih ljubimaca
- **Upit za Ljubimca:** Forma koja omogućava korisnicima da pošalju upit za ljubimca za kog su se odlučili
- **Popup Prozor za Upit:** Prikazuje pregled poslatog popunjenog upita za odabranog ljubimca
- **Paginacija:** Omogućava pregled dostupnih ljubimaca kroz više stranica i olakšava korisnicima navigaciju kroz podatke

## **Instalacija**

Da biste započeli instalaciju ove aplikacije, pratite sledeće korake:

1. **Klonirajte repozitorijum:**

   ```bash
   git clone https://github.com/elab-development/klijentske-veb-tehnologije-2024-2022-0330-usvajanje-kucnih-ljubimaca.git
   ```
2. **Instalirajte zavisnosti:**
  Prvo pređite u direktorijum u koji ste klonirali aplikaciju 
   ```bash
  cd klijentske-veb-tehnologije-2024-2022-0330-usvajanje-kucnih-ljubimaca
   ```
  
  Sada instalirajte zavisnosti
  ```bash
  npm install
  ```
3. **Pokrenite aplikaciju:**
  Nakon što su sve zavisnosti instalirane aplikaciju pokrećete lokalno kucanjem komande
  ```bash
  npm run dev
  ```
4. **Pristupite aplikaciji:**

  Otvorite web browser i idite na [http://localhost:3000](http://localhost:3000) za lokalni pristup aplikaciji

## **Korišćenje**

1. **Pretraživanje ljubimaca:**

    - Možeze koristiti filtere za pretragu ljubimaca
    - Kliknite na profile ljubimaca za više informacija

2. **Prijava za usvajanje:**

    - Kliknite na opciju za usvajanje na stranici profila ljubimca i popunite formu za usvajanje
    - Pregledajte popunjenu formu za ljubimca koga ste odabrali

## **Tehničke informacije**
- **Tehnologije:** React, TypeScript
- **API:** 
  - **Spoljni API**: 
        - Koristimo [DogAPI](https://dog.ceo/dog-api/) za prikaz slika u Galeriji usvojenih ljubimaca
        - Koristimo [DogAPI by kinduff](https://dogapi.dog/) za prikaz zanimljivosti o psima u sekciji Zanimljivosti
- **Zavisnosti:** Lista zavisnosti je navedena u `package.json` datoteci

## **Kontakt**

Za sva pitanja, sugestije ili prijave problema, kontaktirajte nas putem:

- **GitHub:** [udomiMe GitHub](https://github.com/elab-development/klijentske-veb-tehnologije-2024-2022-0330-usvajanje-kucnih-ljubimaca.git)

Hvala što koristite udomiMe!


