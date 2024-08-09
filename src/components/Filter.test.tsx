import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter'; 

describe('Test Filter Komponente', () => {
  it('onFilterChange se poziva sa odgovarajućim argumentima kada se klikne na checkbox', () => {
    //kreiramo mock f-ju za testiranje onFilterChange
    const mockOnFilterChange = vi.fn();

    //renderujemo Filter komponentu sa zadatim kategorijama i mock f-jom 
    render(
      <Filter
        categories={['pas', 'macka']}
        onFilterChange={mockOnFilterChange}
      />
    );

    //kao da smo kliknuli na checkbox
    const checkbox1 = screen.getByLabelText('pas');
    fireEvent.click(checkbox1);

    //da li je onFilterChange pozvan sa odgovarajućim argumentima
    expect(mockOnFilterChange).toHaveBeenCalledWith(['pas']);

    //deselektovanje selektovanog checkboxa
    fireEvent.click(checkbox1);

    //da li je onFilterChange pozvan sa praznim nizom
    expect(mockOnFilterChange).toHaveBeenCalledWith([]);
  });
});
