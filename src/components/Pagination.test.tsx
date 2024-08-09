import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

describe('Test funkcionalnosti za paginaciju', () => {
  it('renderuje se ispravno sa datim sadržajem', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);

    // Provera da li su elementi renderovani
    expect(screen.getByText('prethodna')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('sledeca')).toBeInTheDocument();
  });

  it('onemogućava dugme "prethodna" na 1. stranici i "sledeća" na poslednjoj', () => {
    const { rerender } = render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);

    expect(screen.getByText('prethodna')).toBeDisabled();
    expect(screen.getByText('sledeca')).not.toBeDisabled();

    rerender(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);

    expect(screen.getByText('prethodna')).not.toBeDisabled();
    expect(screen.getByText('sledeca')).toBeDisabled();
  });

  it('označava broj stranice na kojoj smo', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);

    expect(screen.getByText('3')).toHaveClass('active');
    expect(screen.getByText('2')).not.toHaveClass('active');
    expect(screen.getByText('4')).not.toHaveClass('active');
  });
});