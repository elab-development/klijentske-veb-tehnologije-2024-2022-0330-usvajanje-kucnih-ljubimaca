import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import GalleryCard from './GalleryCard'; 

describe('Test komponente GalleryCard', () => {
  it('renderuje se sa odgovarajucim dogImage prop-om', () => {
    const testImageUrl = 'https://primer.com/dog.jpg';

    //renderuj komponentu GalleryCard sa datim url-om
    render(<GalleryCard dogImage={testImageUrl} />);

    //nadji odgovarajuću sliku
    const imageElement = screen.getByRole('img');

    //osiguraj da slika ima src sa datim url-om
    expect(imageElement).toHaveAttribute('src', testImageUrl);
    
    // proveri da slika ima odgovarajuću klasu
    expect(imageElement).toHaveClass('dogImage');
  });
});