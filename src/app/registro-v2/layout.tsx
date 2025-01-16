import React from 'react';
import { Metadata } from 'next';

export const metadata = {
  title: 'Amar Saber',
  description: 'Os três pilares para você se tornar um veterinário confiante, reconhecido e financeiramente estável'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}